

const ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX"; // <-- TODO: sostituisci con il tuo

function loadAdSenseScript(clientId = ADSENSE_CLIENT) {
  if (!clientId || clientId.includes("XXXXXXXXXXXXXXXX")) {
    console.warn("[AdSense] Publisher ID mancante. Imposta ADSENSE_CLIENT in js/adsense.js");
    return Promise.resolve(false);
  }

  // Se già caricato, non fare nulla
  if (document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(clientId)}`;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}

function pushAllAds() {
  // adsbygoogle globale richiesta da AdSense
  window.adsbygoogle = window.adsbygoogle || [];

  const units = Array.from(document.querySelectorAll("ins.adsbygoogle"));

  // Evita push duplicati sugli stessi nodi
  for (const unit of units) {
    if (unit.dataset.adsPushed === "1") continue;

    try {
      window.adsbygoogle.push({});
      unit.dataset.adsPushed = "1";
    } catch (e) {
      console.warn("[AdSense] push fallito:", e);
    }
  }
}

async function initAdSense() {
  const ok = await loadAdSenseScript();
  if (!ok) {
    console.warn("[AdSense] Script non caricato. Controlla connessione o Publisher ID.");
    return;
  }

  // Aspetta un tick per essere sicuri che AdSense sia pronto
  setTimeout(pushAllAds, 0);

  // Se aggiungi unità dinamicamente, puoi richiamare:
  // pushAllAds();
}

// Init automatico
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAdSense);
} else {
  initAdSense();
}

// Facoltativo: esponi una funzione globale per ripush manuale
window.refreshAdSense = pushAllAds;
