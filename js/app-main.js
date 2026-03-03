
/**********************
 * SEEDED RNG
 **********************/
function mulberry32(seed) {
    return function () {
        let t = seed += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function toSeedInt(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}
function randomSeedString() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let s = "";
    for (let i = 0; i < 8; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
}
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

/**********************
 * STATE
 **********************/
const state = {
    running: false,
    frozen: false,

    seed: null,
    rng: null,

    queue: [],
    wordEngine: null,      // WordEngine instance

    beatIndex: 0,
    nextNoteTime: 0,
    lookaheadMs: 25,
    scheduleAhead: 0.12,
    timerId: null,

    audioCtx: null,
    master: null,
    countInBeatsLeft: 0,

    source: "synth",

    ytApiReady: false,
    ytPlayer: null,
    ytReady: false,
    ytVideoId: null,

    tapTimes: [],
    detectedBpm: null
};

const el = {};
let toast = null;

/**********************
 * SMART WORD ENGINE
 * Keeps words thematically coherent for freestyle training.
 * - Themes have "affinity" to nearby themes (smooth transitions)
 * - Per-theme word queues are shuffled, never repeat until exhausted
 * - A recency buffer blocks recently-used words globally
 * - Theme momentum: stay in theme for 2-5 words, then drift to an adjacent theme
 **********************/
class WordEngine {
    /**
     * @param {Object} bank    – { theme: [word, …], … }
     * @param {Function} rng   – seeded random function
     */
    constructor(bank, rng) {
        this.bank = bank;
        this.rng = rng;
        this.themes = Object.keys(bank);

        // Per-theme shuffled decks (refilled when empty)
        this.decks = {};
        this.themes.forEach(t => this.decks[t] = this._shuffle([...bank[t]]));

        // Theme graph: each theme lists preferred "neighbours"
        // Falls back to any other theme if none defined
        this.affinity = this._buildAffinity();

        this.currentTheme = null;
        this.themeWordsLeft = 0;          // how many more words in current theme streak
        this.recentWords = [];            // global recency buffer
        this.maxRecent = 8;
        this.recentThemes = [];           // last 3 themes used (avoid ping-pong)
    }

    /** Build a simple affinity map from theme names using keyword heuristics */
    _buildAffinity() {
        // Themes are grouped into rough domains; tweak to match your WORDS structure
        const domains = AFFINITY_DOMAINS;

        const aff = {};
        this.themes.forEach(t => (aff[t] = []));

        this.themes.forEach(a => {
            const domA = domains.findIndex(d => d.some(k => a.toLowerCase().includes(k)));
            this.themes.forEach(b => {
                if (a === b) return;
                const domB = domains.findIndex(d => d.some(k => b.toLowerCase().includes(k)));
                if (domA !== -1 && domA === domB) aff[a].push(b);
            });
        });

        return aff;
    }

    _shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(this.rng() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    _pickTheme() {
        const blocked = new Set(this.recentThemes.slice(-2));
        blocked.add(this.currentTheme); // don't stay if momentum expired

        // Prefer affinity neighbours of current theme
        let candidates = (this.currentTheme && this.affinity[this.currentTheme]?.length)
            ? this.affinity[this.currentTheme].filter(t => !blocked.has(t))
            : [];

        // Fallback: any theme not blocked
        if (!candidates.length) {
            candidates = this.themes.filter(t => !blocked.has(t));
        }
        // Last resort
        if (!candidates.length) {
            candidates = this.themes.filter(t => t !== this.currentTheme);
        }
        if (!candidates.length) candidates = this.themes;

        return candidates[Math.floor(this.rng() * candidates.length)];
    }

    /** Draw the next word, respecting theme momentum and recency */
    next() {
        // Decide whether to switch theme
        if (!this.currentTheme || this.themeWordsLeft <= 0) {
            this.currentTheme = this._pickTheme();
            // Stay in theme for 2–5 words
            this.themeWordsLeft = 2 + Math.floor(this.rng() * 4);
            this.recentThemes.push(this.currentTheme);
            if (this.recentThemes.length > 6) this.recentThemes.shift();
        }

        this.themeWordsLeft--;

        // Draw from current theme's shuffled deck
        const word = this._drawFromTheme(this.currentTheme);
        this._trackRecent(word);
        return { word, theme: this.currentTheme };
    }

    _drawFromTheme(theme) {
        const deck = this.decks[theme];
        const bank = this.bank[theme] || [];
        if (!bank.length) return "—";

        // Try up to bank.length times to avoid a recently-used word
        for (let attempt = 0; attempt < bank.length; attempt++) {
            if (!deck.length) {
                // Refill deck (reshuffled)
                this.decks[theme] = this._shuffle([...bank]);
            }
            const word = this.decks[theme].pop();
            if (!this.recentWords.includes(word)) return word;
            // Put it back at the bottom and keep trying
            this.decks[theme].unshift(word);
        }

        // If every word is recent (tiny bank), just take the top one
        if (!deck.length) this.decks[theme] = this._shuffle([...bank]);
        return this.decks[theme].pop() || "—";
    }

    _trackRecent(word) {
        this.recentWords.push(word);
        if (this.recentWords.length > this.maxRecent) this.recentWords.shift();
    }

    /** Rebuild decks when language / difficulty changes */
    rebuild(bank, rng) {
        this.bank = bank;
        this.rng = rng;
        this.themes = Object.keys(bank);
        this.decks = {};
        this.themes.forEach(t => (this.decks[t] = this._shuffle([...bank[t]])));
        this.affinity = this._buildAffinity();
        this.currentTheme = null;
        this.themeWordsLeft = 0;
        this.recentWords = [];
        this.recentThemes = [];
    }
}

/**********************
 * UTILITY
 **********************/
function onSafe(target, ev, fn, opts) {
    if (target) target.addEventListener(ev, fn, opts);
    else console.warn("Missing element for listener:", ev);
}
function showToast(msg, type = "success") {
    if (el.toastMessage) el.toastMessage.textContent = msg;
    const icons = {
        success: "bi-check-circle-fill text-success",
        error:   "bi-x-circle-fill text-danger",
        info:    "bi-info-circle-fill text-info",
        warning: "bi-exclamation-circle-fill text-warning"
    };
    if (el.toastIcon) el.toastIcon.className = `bi ${icons[type] || icons.success}`;
    try { toast?.show(); } catch { /* ignore */ }
}

/**********************
 * SETTINGS ACCESSORS
 **********************/
function getBpm() { return clamp(Math.round(Number(el.bpmInput?.value || el.bpmRange?.value || 92)), 60, 220); }
function setBpm(n, source = null) {
    const v = clamp(Math.round(n), 60, 220);
    if (el.bpmInput)  el.bpmInput.value  = v;
    if (el.bpmRange)  el.bpmRange.value  = clamp(v, 60, 180);
    updateHUD();
    if (source === "auto") {
        state.detectedBpm = v;
        if (el.detectedBpm)  el.detectedBpm.textContent  = v;
        if (el.autoBpmBadge) el.autoBpmBadge.classList.remove("hidden");
        showToast(`BPM rilevato: ${v}`, "success");
    }
}
function getEvery()       { return clamp(Number(el.everySelect?.value   || 4), 1, 32); }
function getCountInBars() { return clamp(Number(el.countInSelect?.value || 1), 0, 8); }
function getLang()        { return el.langSelect?.value || "it"; }
function getDiff()        { return el.diffSelect?.value || "easy"; }
function updateHUD() {
    if (el.bpmDisplay)   el.bpmDisplay.textContent   = getBpm();
    if (el.everyDisplay) el.everyDisplay.textContent = getEvery();
}

/**********************
 * RNG HELPERS
 **********************/
function rand() { return state.rng ? state.rng() : Math.random(); }

/**********************
 * WORD MANAGEMENT
 **********************/
function getWordBank() {
    return (typeof WORDS !== "undefined" && WORDS[getLang()]?.[getDiff()]) || {};
}

function setSeed(seedStr, notify = true) {
    state.seed = seedStr;
    state.rng  = mulberry32(toSeedInt(seedStr));
    if (el.seedDisplay) el.seedDisplay.textContent = seedStr;

    const bank = getWordBank();
    if (state.wordEngine) {
        state.wordEngine.rebuild(bank, state.rng);
    } else {
        state.wordEngine = new WordEngine(bank, state.rng);
    }

    state.queue = [];
    refillQueue();
    renderQueue();
    if (notify) showToast("Seed aggiornata", "success");
}

function refillQueue() {
    while (state.queue.length < 6) {
        state.queue.push(state.wordEngine.next().word);
    }
}

function renderQueue() {
    const active = state.queue[0] || "—";
    if (el.currentWord) {
        el.currentWord.textContent = state.running
            ? active.toUpperCase()
            : (active === "—" ? "PREMI START" : active.toUpperCase());
    }
    if (el.queueDisplay) {
        el.queueDisplay.innerHTML = "";
        state.queue.slice(0, 5).forEach((word, idx) => {
            const pill = document.createElement("div");
            pill.className = `queue-pill ${idx === 0 ? "active" : ""}`;
            pill.innerHTML = `<span class="pill-indicator"></span><span class="pill-text">${word}</span>`;
            el.queueDisplay.appendChild(pill);
        });
    }
}

function nextWord() {
    if (state.frozen) return;
    state.queue.shift();
    refillQueue();
    renderQueue();
}

/**********************
 * AUDIO ENGINE
 **********************/
function ensureAudio() {
    if (!state.audioCtx) {
        state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        state.master = state.audioCtx.createGain();
        state.master.gain.value = 0.8;
        state.master.connect(state.audioCtx.destination);
    }
}
function drumKick(time) {
    const ctx = state.audioCtx;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(150, time);
    o.frequency.exponentialRampToValueAtTime(50, time + 0.08);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(0.6, time + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.15);
    o.connect(g).connect(state.master);
    o.start(time); o.stop(time + 0.18);
}
function hat(time, strong = false) {
    const ctx = state.audioCtx;
    const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = "square";
    o.frequency.setValueAtTime(strong ? 650 : 850, time);
    f.type = "highpass"; f.frequency.setValueAtTime(3500, time);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(strong ? 0.22 : 0.13, time + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
    o.connect(f).connect(g).connect(state.master);
    o.start(time); o.stop(time + 0.07);
}

/**********************
 * BEAT SOURCE CONTROL
 **********************/
function applyVolume() {
    const v    = clamp(Number(el.volumeRange?.value || 80), 0, 100);
    const gain = v / 100;
    if (el.volumeDisplay)             el.volumeDisplay.textContent = v;
    if (state.master)                 state.master.gain.value = gain;
    if (el.fileAudio)                 el.fileAudio.volume = gain;
    if (state.ytPlayer && state.ytReady) {
        try { state.ytPlayer.setVolume(Math.round(v)); } catch { }
    }
}
function stopAllBeats() {
    try { el.fileAudio?.pause(); } catch { }
    if (state.ytPlayer && state.ytReady) {
        try { state.ytPlayer.pauseVideo(); } catch { }
    }
}
function startBeatNow() {
    applyVolume();
    if (state.source === "file") {
        if (el.fileAudio?.src) {
            el.fileAudio.loop = el.loopToggle?.checked;
            el.fileAudio.currentTime = 0;
            el.fileAudio.play().catch(() => { });
        } else {
            showToast("Carica un file audio", "warning");
        }
    }
    if (state.source === "yt") {
        if (state.ytPlayer && state.ytReady) {
            try { state.ytPlayer.seekTo(0, true); state.ytPlayer.playVideo(); } catch { }
        } else {
            showToast("Carica un video YouTube", "warning");
        }
    }
}
function updateSourceBadge() {
    const labels = { synth: "SYNTH", yt: "YOUTUBE", file: "FILE" };
    if (el.sourceTypeBadge) el.sourceTypeBadge.textContent = labels[state.source] || "SYNTH";
}
function applyBeatSource() {
    state.source = el.beatSourceSelect?.value || "synth";
    el.ytControls?.classList.toggle("hidden", state.source !== "yt");
    el.fileControls?.classList.toggle("hidden", state.source !== "file");
    el.mediaPanel?.classList.toggle("hidden", state.source === "synth");
    el.ytPlayerSection?.classList.toggle("hidden", state.source !== "yt");
    el.filePlayerSection?.classList.toggle("hidden", state.source !== "file");
    stopAllBeats();
    if (state.running) startBeatNow();
    updateSourceBadge();
}

/**********************
 * YOUTUBE
 **********************/
function loadYouTubeApiOnce() {
    if (state.ytApiReady) return;
    state.ytApiReady = true;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
}
function parseYouTubeId(input) {
    if (!input) return null;
    try {
        const u = new URL(input.trim());
        if (u.hostname.includes("youtu.be")) return u.pathname.split("/").filter(Boolean)[0] || null;
        const v = u.searchParams.get("v");
        if (v) return v;
        const parts = u.pathname.split("/").filter(Boolean);
        const shorts = parts.indexOf("shorts");
        if (shorts >= 0 && parts[shorts + 1]) return parts[shorts + 1];
        const embed  = parts.indexOf("embed");
        if (embed  >= 0 && parts[embed  + 1]) return parts[embed  + 1];
    } catch {
        if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) return input.trim();
    }
    return null;
}
window.onYouTubeIframeAPIReady = function () { /* ready */ };
function createOrLoadYouTubePlayer(videoId) {
    if (!videoId) return;
    loadYouTubeApiOnce();
    state.ytVideoId = videoId;
    el.mediaPanel?.classList.remove("hidden");
    el.ytPlayerSection?.classList.remove("hidden");
    el.filePlayerSection?.classList.add("hidden");

    const init = () => {
        if (!window.YT?.Player) { setTimeout(init, 100); return; }
        if (state.ytPlayer) {
            try { state.ytPlayer.loadVideoById({ videoId }); } catch { }
            state.ytReady = true;
            showToast("Video YouTube caricato", "success");
            tryDetectYouTubeBPM();
            return;
        }
        const loop = el.loopToggle?.checked ? 1 : 0;
        state.ytReady = false;
        state.ytPlayer = new YT.Player("ytPlayer", {
            videoId,
            playerVars: {
                playsinline: 1,
                enablejsapi: 1,
                rel: 0,
                modestbranding: 1,
                loop,
                playlist: loop ? videoId : undefined,
                origin: window.location.origin
            },
            events: {
                onReady: () => {
                    state.ytReady = true;
                    applyVolume();
                    showToast("Player YouTube pronto", "success");
                    tryDetectYouTubeBPM();
                },
                onError: () =>
                    showToast("Errore: video non disponibile per embed", "error")
            }
        });
    };
    init();
}
function tryDetectYouTubeBPM() {
    if (!state.ytPlayer || !state.ytReady) return;
    try {
        const title = state.ytPlayer.getVideoData?.().title || "";
        const m = title.match(/(\d{2,3})\s*bpm/i);
        if (m) {
            const b = parseInt(m[1]);
            if (b >= 60 && b <= 220) setBpm(b, "auto");
        }
    } catch { }
}

/**********************
 * FILE + BPM DETECTION
 **********************/
async function detectAudioBPM(file, { minBPM = 60, maxBPM = 200, analyzeSeconds = 60, envRate = 200 } = {}) {
    let ac;
    try {
        ac = new (window.AudioContext || window.webkitAudioContext)();
        const buf  = await ac.decodeAudioData(await file.arrayBuffer());
        const sr   = buf.sampleRate;
        const ch   = buf.numberOfChannels;
        const len  = Math.min(buf.length, Math.floor(analyzeSeconds * sr));
        const mono = new Float32Array(len);

        for (let c = 0; c < ch; c++) {
            const data = buf.getChannelData(c);
            for (let i = 0; i < len; i++) mono[i] += data[i];
        }
        for (let i = 0; i < len; i++) mono[i] /= ch;

        const hop    = Math.max(1, Math.floor(sr / envRate));
        const win    = hop * 2;
        const envLen = Math.floor((len - win) / hop);
        if (envLen < envRate * 5) return;

        const energy = new Float32Array(envLen);
        let prevE = 0;
        for (let e = 0, pos = 0; e < envLen; e++, pos += hop) {
            let sum = 0;
            for (let j = 0; j < win; j++) { const v = mono[pos + j]; sum += v * v; }
            const rms  = Math.sqrt(sum / win);
            const diff = rms - prevE; prevE = rms;
            energy[e]  = diff > 0 ? diff : 0;
        }

        let maxVal = 0;
        for (let i = 0; i < energy.length; i++) if (energy[i] > maxVal) maxVal = energy[i];
        if (maxVal < 1e-6) return;
        for (let i = 0; i < energy.length; i++) energy[i] /= maxVal;

        const minLag = Math.floor((envRate * 60) / maxBPM);
        const maxLag = Math.floor((envRate * 60) / minBPM);
        let bestLag = -1, bestScore = -Infinity;
        const N = energy.length;

        for (let lag = minLag; lag <= maxLag; lag++) {
            let sum = 0;
            for (let t = 0; t < N - lag; t++) sum += energy[t] * energy[t + lag];
            const score = sum / (N - lag);
            if (score > bestScore) { bestScore = score; bestLag = lag; }
        }

        if (bestLag <= 0) return;
        let bpm = (60 * envRate) / bestLag;
        while (bpm < minBPM) bpm *= 2;
        while (bpm > maxBPM) bpm /= 2;
        const rounded = Math.round(bpm);
        if (rounded >= minBPM && rounded <= maxBPM) setBpm(rounded, "auto");
    } catch (e) {
        console.error("BPM detection failed:", e);
    } finally {
        try { await ac?.close(); } catch { }
    }
}

/**********************
 * BEAT SCHEDULER
 **********************/
function scheduleBeat(beatNumber, time) {
    const inBar  = beatNumber % 4;
    const barPos = inBar + 1;

    if (state.source === "synth") {
        ensureAudio();
        if (barPos === 1) { drumKick(time); hat(time, true); }
        else              { hat(time, false); }
    }

    const ctx = state.audioCtx;
    const now = ctx ? ctx.currentTime : performance.now() / 1000;
    window.setTimeout(() => {
        (el.dots || []).forEach((d, idx) => d?.classList?.toggle("active", idx === inBar));
        if (el.barDisplay) el.barDisplay.textContent = String(barPos);

        const every = getEvery();
        const local = beatNumber % every;
        if (el.progressBar) el.progressBar.style.width = `${((local + 1) / every) * 100}%`;

        if (state.countInBeatsLeft > 0) { state.countInBeatsLeft--; return; }
        if (!state.frozen && beatNumber > 0 && (beatNumber % every) === 0) nextWord();
    }, Math.max(0, (time - now) * 1000));
}
function nextNote() {
    state.nextNoteTime += 60.0 / getBpm();
    state.beatIndex++;
}
function scheduler() {
    if (!state.running) return;
    ensureAudio();
    while (state.nextNoteTime < state.audioCtx.currentTime + state.scheduleAhead) {
        scheduleBeat(state.beatIndex, state.nextNoteTime);
        nextNote();
    }
    state.timerId = window.setTimeout(scheduler, state.lookaheadMs);
}

/**********************
 * CONTROLS
 **********************/
function start() {
    if (state.running) return;
    ensureAudio();
    if (state.audioCtx.state === "suspended") state.audioCtx.resume();

    state.running          = true;
    state.beatIndex        = 0;
    state.nextNoteTime     = state.audioCtx.currentTime + 0.08;
    state.countInBeatsLeft = getCountInBars() * 4;

    refillQueue();
    renderQueue();

    if (el.btnStart)  el.btnStart.disabled  = true;
    if (el.btnStop)   el.btnStop.disabled   = false;
    if (el.dockStart) el.dockStart.disabled = true;
    if (el.dockStop)  el.dockStop.disabled  = false;

    el.wordStage?.classList.add("playing");
    updateHUD();
    startBeatNow();
    scheduler();
    showToast("Sessione avviata", "success");
}
function stop() {
    state.running = false;
    if (state.timerId) window.clearTimeout(state.timerId);
    state.timerId = null;
    stopAllBeats();

    if (el.btnStart)  el.btnStart.disabled  = false;
    if (el.btnStop)   el.btnStop.disabled   = true;
    if (el.dockStart) el.dockStart.disabled = false;
    if (el.dockStop)  el.dockStop.disabled  = true;

    el.wordStage?.classList.remove("playing");
    if (el.progressBar) el.progressBar.style.width = "0%";
    (el.dots || []).forEach(d => d?.classList?.remove("active"));
    renderQueue();
    showToast("Sessione terminata", "info");
}
function skip()         { nextWord(); showToast("Parola skippata", "info"); }
function toggleFreeze() {
    state.frozen = !state.frozen;
    el.btnFreeze?.classList.toggle("btn-primary-custom",   state.frozen);
    el.btnFreeze?.classList.toggle("btn-secondary-custom", !state.frozen);
    showToast(state.frozen ? "Freeze attivato" : "Freeze disattivato", "info");
}
async function copyLink() {
    const url = new URL(window.location.href);
    url.searchParams.set("seed",    state.seed);
    url.searchParams.set("bpm",     String(getBpm()));
    url.searchParams.set("every",   String(getEvery()));
    url.searchParams.set("lang",    getLang());
    url.searchParams.set("diff",    getDiff());
    url.searchParams.set("beat",    state.source);
    url.searchParams.set("countin", String(getCountInBars()));
    if (state.source === "yt" && state.ytVideoId) url.searchParams.set("yt", state.ytVideoId);
    try {
        await navigator.clipboard.writeText(url.toString());
        showToast("Link copiato negli appunti", "success");
    } catch { showToast("Impossibile copiare il link", "error"); }
}
async function fullscreen() {
    const elem = document.documentElement;
    try {
        if (!document.fullscreenElement) {
            await elem.requestFullscreen?.();
            showToast("Fullscreen attivato", "success");
        } else {
            await document.exitFullscreen?.();
            showToast("Fullscreen disattivato", "info");
        }
    } catch { showToast("Fullscreen non supportato", "error"); }
}
function tapTempo() {
    const t = performance.now();
    state.tapTimes.push(t);
    state.tapTimes = state.tapTimes.slice(-6);
    if (state.tapTimes.length >= 3) {
        const diffs = [];
        for (let i = 1; i < state.tapTimes.length; i++) diffs.push(state.tapTimes[i] - state.tapTimes[i - 1]);
        const avg = diffs.reduce((a, b) => a + b) / diffs.length;
        const bpm = 60000 / avg;
        setBpm(bpm);
        showToast(`Tap BPM: ${Math.round(bpm)}`, "success");
    } else {
        showToast("Continua a battere il tempo…", "info");
    }
}

/**********************
 * URL LOADING
 **********************/
function loadFromURL() {
    const p = new URL(window.location.href).searchParams;

    const bpm     = p.get("bpm");
    const every   = p.get("every");
    const lang    = p.get("lang");
    const diff    = p.get("diff");
    const beat    = p.get("beat");
    const countin = p.get("countin");
    const yt      = p.get("yt");
    const seed    = p.get("seed");

    if (bpm)    setBpm(+bpm); else setBpm(92);
    if (every   && el.everySelect)   el.everySelect.value   = String(clamp(+every, 1, 32));
    if (lang    && ["it","en"].includes(lang) && el.langSelect) el.langSelect.value = lang;
    if (diff    && ["easy","mid","hard"].includes(diff)     && el.diffSelect)  el.diffSelect.value  = diff;
    if (countin && el.countInSelect)  el.countInSelect.value = String(clamp(+countin, 0, 8));

    setSeed(seed || randomSeedString(), false);

    if (beat && ["synth","yt","file"].includes(beat) && el.beatSourceSelect) el.beatSourceSelect.value = beat;
    if (yt   && /^[a-zA-Z0-9_-]{11}$/.test(yt) && el.ytInput) {
        el.ytInput.value = `https://www.youtube.com/watch?v=${yt}`;
        createOrLoadYouTubePlayer(yt);
        if (el.beatSourceSelect) el.beatSourceSelect.value = "yt";
    }

    applyBeatSource();
    updateHUD();
    renderQueue();
    applyVolume();
}

/**********************
 * DOM CACHE + BINDING
 **********************/
function cacheElements() {
    Object.assign(el, {
        seedDisplay:      document.getElementById("seedDisplay"),
        btnNewSeed:       document.getElementById("btnNewSeed"),
        btnCopyLink:      document.getElementById("btnCopyLink"),
        btnFullscreen:    document.getElementById("btnFullscreen"),

        btnStart:         document.getElementById("btnStart"),
        btnStop:          document.getElementById("btnStop"),
        btnSkip:          document.getElementById("btnSkip"),
        btnFreeze:        document.getElementById("btnFreeze"),
        btnTapTempo:      document.getElementById("btnTapTempo"),
        btnTapTempo2:     document.getElementById("btnTapTempo2"),

        dockStart:        document.getElementById("dockStart"),
        dockStop:         document.getElementById("dockStop"),
        dockSkip:         document.getElementById("dockSkip"),

        wordStage:        document.getElementById("wordStage"),
        currentWord:      document.getElementById("currentWord"),
        queueDisplay:     document.getElementById("queueDisplay"),

        progressBar:      document.getElementById("progressBar"),
        bpmDisplay:       document.getElementById("bpmDisplay"),
        barDisplay:       document.getElementById("barDisplay"),
        everyDisplay:     document.getElementById("everyDisplay"),
        dots: [
            document.getElementById("dot1"),
            document.getElementById("dot2"),
            document.getElementById("dot3"),
            document.getElementById("dot4")
        ],

        bpmRange:         document.getElementById("bpmRange"),
        bpmInput:         document.getElementById("bpmInput"),
        everySelect:      document.getElementById("everySelect"),
        countInSelect:    document.getElementById("countInSelect"),
        langSelect:       document.getElementById("langSelect"),
        diffSelect:       document.getElementById("diffSelect"),

        beatSourceSelect: document.getElementById("beatSourceSelect"),
        volumeRange:      document.getElementById("volumeRange"),
        volumeDisplay:    document.getElementById("volumeDisplay"),
        loopToggle:       document.getElementById("loopToggle"),

        ytControls:       document.getElementById("ytControls"),
        fileControls:     document.getElementById("fileControls"),
        ytInput:          document.getElementById("ytInput"),
        btnLoadYt:        document.getElementById("btnLoadYt"),
        fileInput:        document.getElementById("fileInput"),

        mediaPanel:       document.getElementById("mediaPanel"),
        sourceTypeBadge:  document.getElementById("sourceTypeBadge"),
        autoBpmBadge:     document.getElementById("autoBpmBadge"),
        detectedBpm:      document.getElementById("detectedBpm"),

        ytPlayerSection:  document.getElementById("ytPlayerSection"),
        filePlayerSection: document.getElementById("filePlayerSection"),
        fileAudio:        document.getElementById("fileAudio"),
        fileName:         document.getElementById("fileName"),
        fileDuration:     document.getElementById("fileDuration"),

        toast:            document.getElementById("toast"),
        toastIcon:        document.getElementById("toastIcon"),
        toastMessage:     document.getElementById("toastMessage")
    });
}

function bindEvents() {
    try {
        toast = bootstrap.Toast.getOrCreateInstance(el.toast, { delay: 2000 });
    } catch (e) {
        console.warn("Bootstrap Toast error:", e);
    }

    onSafe(el.btnNewSeed,   "click", () => setSeed(randomSeedString()));
    onSafe(el.btnCopyLink,  "click", copyLink);
    onSafe(el.btnFullscreen,"click", fullscreen);

    onSafe(el.btnStart,    "click", start);
    onSafe(el.btnStop,     "click", stop);
    onSafe(el.btnSkip,     "click", skip);
    onSafe(el.btnFreeze,   "click", toggleFreeze);
    onSafe(el.btnTapTempo, "click", tapTempo);
    onSafe(el.btnTapTempo2,"click", tapTempo);

    onSafe(el.dockStart, "click", start);
    onSafe(el.dockStop,  "click", stop);
    onSafe(el.dockSkip,  "click", skip);

    el.bpmRange?.addEventListener("input", () => {
        if (el.bpmInput) el.bpmInput.value = el.bpmRange.value;
        updateHUD();
        el.autoBpmBadge?.classList.add("hidden");
    });
    el.bpmInput?.addEventListener("input", () => {
        if (el.bpmRange) el.bpmRange.value = clamp(+el.bpmInput.value || 92, 60, 180);
        updateHUD();
        el.autoBpmBadge?.classList.add("hidden");
    });

    onSafe(el.everySelect, "change", updateHUD);

    [el.langSelect, el.diffSelect].forEach(x => {
        onSafe(x, "change", () => {
            const bank = getWordBank();
            state.wordEngine?.rebuild(bank, state.rng);
            state.queue = [];
            refillQueue();
            renderQueue();
            showToast("Impostazioni aggiornate", "success");
        });
    });

    onSafe(el.volumeRange,      "input",  applyVolume);
    onSafe(el.beatSourceSelect, "change", applyBeatSource);

    onSafe(el.btnLoadYt, "click", () => {
        const id = parseYouTubeId((el.ytInput?.value || "").trim());
        if (!id) { showToast("URL YouTube non valido", "error"); return; }
        createOrLoadYouTubePlayer(id);
        if (el.beatSourceSelect) el.beatSourceSelect.value = "yt";
        applyBeatSource();
    });

    el.fileInput?.addEventListener("change", async () => {
        const file = el.fileInput.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        if (el.fileAudio) { el.fileAudio.src = url; el.fileAudio.loop = el.loopToggle?.checked; }
        if (el.fileName)  el.fileName.textContent = file.name;
        el.filePlayerSection?.classList.remove("hidden");
        el.mediaPanel?.classList.remove("hidden");
        if (el.beatSourceSelect) el.beatSourceSelect.value = "file";
        applyBeatSource();
        showToast("File caricato", "success");
        detectAudioBPM(file);
        el.fileAudio?.addEventListener("loadedmetadata", () => {
            const d = el.fileAudio.duration;
            if (el.fileDuration)
                el.fileDuration.textContent = `${Math.floor(d / 60)}:${String(Math.floor(d % 60)).padStart(2, "0")}`;
        }, { once: true });
    });

    onSafe(el.loopToggle, "change", () => {
        if (el.fileAudio) el.fileAudio.loop = el.loopToggle?.checked;
        if (state.source === "yt" && state.ytVideoId) createOrLoadYouTubePlayer(state.ytVideoId);
    });

    // Keyboard shortcuts
    window.addEventListener("keydown", e => {
        if (e.code  === "Space") { e.preventDefault(); skip(); }
        if (e.code  === "Enter") { e.preventDefault(); state.running ? stop() : start(); }
        if (e.key.toLowerCase() === "f") toggleFreeze();
        if (e.key.toLowerCase() === "t") tapTempo();
    });

    // iOS double-tap prevention
    let lastTouch = 0;
    document.addEventListener("touchend", e => {
        const now = Date.now();
        if (now - lastTouch <= 250) e.preventDefault();
        lastTouch = now;
    }, { passive: false });
}

/**********************
 * INIT
 * Waits for app.js to finish injecting partials before touching the DOM
 **********************/
function initApp() {
    cacheElements();
    bindEvents();
    updateSourceBadge();
    loadFromURL();
    updateHUD();
    renderQueue();
    applyVolume();
}

// ← THE FIX: wait for the custom event fired by app.js, not DOMContentLoaded

document.addEventListener("partialsReady", initApp, { once: true });
