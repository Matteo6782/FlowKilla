/**
 * words.js — Freestyle Pro Word Bank
 * ~4200+ words across IT + EN, easy / mid / hard.
 *
 * Theme names match AFFINITY_DOMAINS so WordEngine clusters them correctly.
 * Paste AFFINITY_DOMAINS into WordEngine._buildAffinity() (see bottom of file).
 */

const WORDS = {

  /* ═══════════════════════════════════════════════════════════
     ITALIANO
  ═══════════════════════════════════════════════════════════ */
  it: {

    easy: {

      // ── STRADA / NOTTE / QUARTIERE ──────────────────────────
      strada: [
        "notte","strada","fumo","sogno","ombra","ritmo","voce","freddo","spazio",
        "fuoco","vento","silenzio","rumore","vita","morte","rabbia","gioia","paura",
        "fame","sangue","oro","vetro","ferro","asfalto","neon","specchio","scala",
        "chiave","porta","muro","tetto","bar","metro","ponte","finestra","cortile",
        "piazza","stazione","vicolo","sirene","sigaretta","giacca","scarpe","catena",
        "cappuccio","anello","graffi","cicatrici","urla","sorrisi","lacrime","bugie",
        "verità","promesse","karma","fortuna","luna","stelle","alba","tramonto",
        "nuvole","tempesta","nebbia","lampione","semaforo","binario","tunnel",
        "cantiere","saracinesca","catrame","polvere","cenere","ruggine","pugno",
        "carezza","battito","brivido","sudore","passi","corsa","fuga","traccia",
        "sguardo","labbra","nuca","quartiere","rione","periferia","incrocio",
        "marciapiede","panchina","motorino","taxi","bus","casco","locali","club",
        "disco","pub","banco","bottiglia","bicchiere","shot","cappello","felpa",
        "tuta","jeans","stivali","collana","orologio","tatuaggio","scommessa",
        "debito","contanti","fama","rispetto","onore","stile","rischio","colpo",
        "speranza","destino","segno","fantasma","vendetta","perdono","soldi",
        "amore","odio","sempre","occhi","mani","piedi","testa","pelle","sale",
        "carta","inchiostro","edicola","portone","scooter","berretto","sneakers",
        "bracciale","spicci","gloria","trappola","onda","caduta","salita","incubo",
        "scia","rivalità","guerra","pace","corsia","graffiti","murales","tag",
        "writer","crew","bomba","outline","fill","wildstyle","bombing"
      ],

      // ── VITA QUOTIDIANA ──────────────────────────────────────
      quotidiano: [
        "bolletta","affitto","traffico","fila","scontrino","spesa","parcheggio",
        "ritardo","sbadiglio","palestra","divano","pigiama","telefono","batteria",
        "wifi","notifica","emoji","meme","vibes","drama","fuffa","scroll","storia",
        "like","follow","ghost","spam","filtro","selfie","sveglia","caffettiera",
        "colazione","pranzo","cena","frigo","forno","lavatrice","calzini","camicia",
        "maglione","chiavi","portafoglio","spiccioli","autobus","biglietto",
        "abbonamento","tessera","tornello","sciopero","citofono","campanello",
        "pacco","corriere","consegna","pulizie","scopa","sacchetto","immondizia",
        "doccia","shampoo","asciugamano","bollo","multa","rata","bancomat","chat",
        "gruppo","vocale","call","screenshot","dm","sticker","reel","post",
        "commento","ansia","chill","hype","mood","deadline","turno","pausa",
        "pisolino","carrello","lista","appunto","bollettino","sportello","ufficio",
        "riordino","detergente","spugna","secchio","riciclo","phon","rasoio",
        "crema","bollo","assicurazione","iban","pin","aggiornamento","link",
        "modalità aereo","silenzioso","videochiamata","sbattimento","sbrocco"
      ],

      // ── CIBO ────────────────────────────────────────────────
      cibo: [
        "pizza","pasta","sugo","panino","kebab","sushi","gelato","biscotti",
        "nutella","peperoncino","sale","zucchero","limone","mela","banana",
        "fragola","cioccolato","carbonara","amatriciana","cacioepepe","ragù",
        "lasagna","gnocchi","risotto","polenta","focaccia","piadina","arancino",
        "tramezzino","hamburger","patatine","pollo","bistecca","pesce","tonno",
        "salmone","insalata","pomodoro","mozzarella","burrata","parmigiano",
        "gorgonzola","prosciutto","salame","uovo","pane","grissini","torta",
        "croissant","cornetto","tiramisu","panna","crema","caramello","miele",
        "arancia","pesca","pera","uva","kiwi","ananas","mango","spritz","vino",
        "bibita","aranciata","cola","tè","espresso","cappuccino","macchiato",
        "americano","moka","fritto","grigliata","piccante","porzione","scarpetta",
        "digestione","cheatmeal","calorie","cena fuori","antipasto","dolce",
        "macedonia","granita","sorbetto","wafer","frullato","succo","calzone",
        "bruschetta","sformato","gnocchi","polpette","cotoletta","spezzatino",
        "minestrone","zuppa","brodo","risotto al nero","spaghetti alle vongole"
      ],

      // ── OGGETTI ─────────────────────────────────────────────
      oggetti: [
        "zaino","valigia","biglietto","moneta","banconota","orologio","candela",
        "fiammifero","ombrello","cintura","quaderno","penna","radio","speaker",
        "microfono","cuffie","vinile","cd","poster","portafoglio","borsa",
        "trolley","documenti","badge","accendino","torcia","caricatore","cavo",
        "adattatore","taccuino","agenda","evidenziatore","matita","gomma",
        "specchietto","occhiali","custodia","telecomando","tv","monitor","console",
        "tastiera","mouse","mixer","fotocamera","obiettivo","treppiede","ciondolo",
        "guanti","sciarpa","cappello","sedia","tavolo","lampada","tappeto",
        "chiavetta","harddisk","scheda","lente","bussola","cartina","plettro",
        "astuccio","righello","graffette","spilla","magnete","cornice","album",
        "profumo","rossetto","mascara","spazzola","forbici","ago","filo","bottone",
        "cerniera","tessuto","pennello","tela","matita","carboncino","pastello"
      ],

      // ── NATURA / CIELO / MARE ───────────────────────────────
      natura: [
        "cielo","mare","terra","fuoco","acqua","vento","pioggia","neve","sole",
        "luna","stelle","cometa","aurora","tramonto","alba","orizzonte","montagna",
        "collina","foresta","bosco","prato","fiore","erba","radice","tronco",
        "ramo","foglia","seme","frutto","corteccia","lichene","muschio","roccia",
        "scogliera","spiaggia","sabbia","conchiglia","onda","corrente","lago",
        "fiume","torrente","ruscello","cascata","sorgente","pozza","palude",
        "nebbia","bruma","brina","ghiaccio","gelo","calore","vampa","brezza",
        "uragano","temporale","lampo","tuono","arcobaleno","nube","vulcano",
        "terremoto","siccità","falco","aquila","rondine","corvo","lupo","volpe",
        "cervo","serpente","lucertola","farfalla","ape","libellula","cicogna",
        "gufo","profumo selvatico","primitivo","eterno","immensità","vertigine",
        "profondità","abisso","vetta","precipizio","pianura","desereto","tundra"
      ],

      // ── CORPO ───────────────────────────────────────────────
      corpo: [
        "occhi","mani","piedi","testa","pelle","sangue","cuore","polmoni","ossa",
        "muscoli","nervi","vene","arterie","respiro","battito","fiato","voce",
        "lingua","denti","labbra","naso","orecchie","capelli","fronte","sopracciglia",
        "ciglia","guance","mento","collo","spalle","petto","schiena","braccia",
        "gomiti","polsi","dita","palmo","unghie","gamba","ginocchio","caviglia",
        "tallone","pianta","cicatrice","livido","benda","cerotto","sudore","lacrime",
        "saliva","pupilla","iride","retina","membrana","cartilagine","tendine",
        "legamento","midollo","cervello","adrenalina","serotonina","dopamina",
        "cortisolo","riflesso","impulso","stimolo","reazione","gesto","postura",
        "equilibrio","movimento","pressione","calore","tocco","peso","energia",
        "fragilità","resistenza","resilienza","elasticità","rigidità","morbidezza"
      ],

      // ── SENTIMENTI SEMPLICI ──────────────────────────────────
      sentimenti: [
        "amore","odio","paura","gioia","tristezza","rabbia","sorpresa","fiducia",
        "speranza","nostalgia","solitudine","felicità","malinconia","entusiasmo",
        "noia","orgoglio","vergogna","colpa","invidia","gelosia","affetto",
        "tenerezza","passione","desiderio","rimpianto","rimorso","gratitudine",
        "stima","ammirazione","rispetto","disprezzo","panico","ansia","calma",
        "serenità","pace","tensione","agitazione","euforia","depressione","vuoto",
        "pienezza","leggerezza","pesantezza","calore","freddo","dolcezza","amarezza",
        "sorriso","pianto","riso","sospiro","silenzio","grido","sussurro","timore",
        "coraggio","forza","debolezza","stanchezza","energia","vitalità","rinascita",
        "sollievo","confusione","stupore","meraviglia","smarrimento","inquietudine"
      ],

      // ── CITTÀ / URBAN ────────────────────────────────────────
      citta: [
        "centro","periferia","metropolitana","grattacielo","palazzo","duomo",
        "piazza","fontana","statua","monumento","museo","teatro","cinema",
        "biblioteca","parco","giardino","viale","corso","vicolo cieco","sottopasso",
        "galleria","centro commerciale","mercato","bancarella","ristorante",
        "pizzeria","gelateria","caffè","pasticceria","panetteria","farmacia",
        "tabacchi","fioraio","ferramenta","lavasecco","supermercato","minimarket",
        "alimentari","macelleria","pescheria","ospedale","pronto soccorso",
        "polizia","caserma","vigili","tribunale","comune","prefettura","questura",
        "posta","banca","ufficio","graffiti","murales","street art","degrado",
        "riqualificazione","gentrificazione","multiculturale","integrazione",
        "semaforo","strisce","attraversamento","corsia","senso unico","divieto",
        "panchina","edicola","portone","androne","ascensore","gradini","ringhiera",
        "cancello","serratura","citofono","campanello","portone a vetri"
      ]
    },

    /* ──────────────────── MID ────────────────────────────── */
    mid: {

      // ── STRADA MID ───────────────────────────────────────────
      strada: [
        "benzina","periferia","marciapiede","sottopasso","serranda","vetrina",
        "cartellone","palazzina","condominio","balcone","portone","ringhiera",
        "scalinata","cantiere","rotonda","tangenziale","autogrill","binario",
        "capolinea","fermata","corsia","galleria","banchina","passerella","garage",
        "magazzino","sgabuzzino","svincolo","raccordo","cavalcavia","viadotto",
        "sopraelevata","statale","capannone","deposito","officina","androne",
        "atrio","pianerottolo","impalcatura","gru","betoniera","recinzione",
        "transenna","palina","pensilina","biglietteria","tornelli","intersezione",
        "rampa","casello","furgone","ambulanza","volante","sirena","lampeggiante",
        "zona industriale","parcheggio sotterraneo","rimesse","retrobottega",
        "manto stradale","aiuola","parchimetro","telecamere","sorveglianza",
        "kiosk","binario morto","stazione abbandonata","rudere","palazzo occupato",
        "squat","ex fabbrica","recupero","restauro","abbandono","ruggine",
        "vetro rotto","cancello arrugginito","muri scrostati","lampioni spenti",
        "odore di nafta","vapore","condotto","tombino","griglia","asfalto rifatto"
      ],

      // ── EMOZIONI MID ─────────────────────────────────────────
      emozioni: [
        "orgoglio","invidia","gelosia","ansia","panico","nostalgia","rimorso",
        "impulso","tensione","distanza","equilibrio","pressione","ossessione",
        "tentazione","complicità","tradimento","perdono","illusione","miraggio",
        "cicatrice","memoria","ricordo","euforia","apatia","vergogna","sollievo",
        "frustrazione","amarezza","delusione","sconforto","stupore","smarrimento",
        "vuoto","inquietudine","determinazione","coraggio","incertezza","dubbio",
        "sospetto","fede","attaccamento","distacco","tenerezza","rancore","furore",
        "desiderio","brama","impazienza","attesa","serenità","empatia","compassione",
        "indifferenza","lucidità","confusione","burnout","sovraccarico","accettazione",
        "rinuncia","resa","riscatto","ambivalenza","conflitto interiore","scissione",
        "catarsi","liberazione","rinascita","trasformazione","crisi","svolta",
        "punto di rottura","limite","soglia","resistenza","cedimento","collasso",
        "ripresa","guarigione","cicatrizzazione","elaborazione","lutto","perdita",
        "mancanza","nostalgia acuta","rimpianto","pentimento","risentimento",
        "insoddisfazione","aspirazione","tormento","ebbrezza","dissolvenza"
      ],

      // ── MUSICA / FLOW / RIME ─────────────────────────────────
      musica: [
        "battuta","incastro","metrica","flow","accento","ritornello","strofa",
        "bridge","freestyle","rima","assonanza","allitterazione","tempo","swing",
        "pause","respiri","doppietto","cambi","coda","attacco","ritmica","hook",
        "bpm","batteria","cassa","rullante","charleston","808","sub","synth",
        "pad","loop","campione","sample","chop","taglio","stacco","drop","build-up",
        "beat","strumentale","base","arrangiamento","melodia","armonia","accordo",
        "timbro","registro","falsetto","grinta","punchline","barra","sedici",
        "adlib","doppia","tripla","multisillaba","sincopi","controtempo",
        "accentazione","dinamica","crescendo","mix","master","riverbero","delay",
        "compressione","autotune","pitch","scratch","turntable","dj","producer",
        "beatmaker","trap","boom bap","drill","phonk","lofi","afrobeat","reggaeton",
        "dancehall","garage","grime","jungle","breakbeat","sampling","crate digging",
        "vinile","b-side","feature","collab","session","booth","console","cuffia",
        "monitor","interfaccia","daw","midi","vst","plugin","render","bounce",
        "export","stem","take","punch-in","comping","vocoder","talkbox","flanger",
        "chorus","phaser","distortion","saturazione","clip","rimshot","cowbell",
        "tamburello","maracas","shaker","sequencer","arp","glide","portamento"
      ],

      // ── TECH / DIGITALE ──────────────────────────────────────
      tech: [
        "algoritmo","profilo","feed","tendenza","virale","trigger","buffer",
        "cache","cloud","server","password","backup","modalità","privacy",
        "cookie","glitch","lag","pixel","download","upload","streaming",
        "abbonamento","paywall","captcha","bug","database","query","frontend",
        "backend","api","endpoint","token","autenticazione","crittografia",
        "firewall","proxy","vpn","dark web","mining","wallet","blockchain",
        "smart contract","nft","metaverso","avatar","realtà aumentata","ar",
        "realtà virtuale","vr","intelligenza artificiale","machine learning",
        "deep learning","rete neurale","modello","dataset","training","inferenza",
        "bias","output","input","parametro","ottimizzazione","overfitting",
        "deploy","staging","produzione","release","versione","aggiornamento",
        "open source","licenza","fork","pull request","merge","branch","commit",
        "debug","stack trace","log","monitoring","alert","dashboard","kpi",
        "scalabilità","latenza","throughput","microservizi","container","pod",
        "orchestrazione","osservabilità","telemetria","virtualizzazione",
        "compilazione","concorrenza","idempotenza","thread","processo","socket"
      ],

      // ── SOCIETÀ / SISTEMA ────────────────────────────────────
      societa: [
        "colloquio","contratto","scadenza","riunione","presentazione","fattura",
        "preventivo","corriere","garanzia","recensione","rimborso","promo",
        "saldi","spid","burocrazia","ufficio","sportello","prenotazione",
        "protocollo","modulo","firma","timbro","certificato","isee","pec",
        "ticket","tasse","f24","dichiarazione","stipendio","bonus","turni",
        "tirocinio","stage","recruiter","mutuo","finanziamento","rate","interessi",
        "negozio","scontrino","reclamo","assemblea","condominio","scuola","lezione",
        "esame","voto","iscrizione","sciopero","manifestazione","corteo","sistema",
        "struttura","gerarchia","potere","classe sociale","disuguaglianza",
        "privilegio","meritocrazia","mobilità sociale","tetto di vetro",
        "discriminazione","pregiudizio","stereotipo","norma","regola","legge",
        "sanzione","multa","pena","carcere","libertà vigilata","diritto","dovere",
        "cittadinanza","democrazia","voto","propaganda","disinformazione","censura",
        "libertà di stampa","polarizzazione","bolla informativa","echo chamber",
        "tribù","identità collettiva","senso di appartenenza","esclusione sociale"
      ],

      // ── POTERE / SUCCESSO / FAMA ─────────────────────────────
      potere: [
        "trono","corona","scettro","dominio","controllo","influenza","carisma",
        "leadership","autorità","gerarchia","clan","impero","regno","territorio",
        "zona","rispetto guadagnato","reputazione","credibilità","lealtà",
        "tradimento","alleanza","patto","codice","omertà","silenzio","regole non scritte",
        "gioco","mosse","pedine","scacchiera","mano","carta vincente","asso",
        "bluff","poker face","strategia","tattica","obiettivo","missione","visione",
        "ambizione","ego","narcisismo","ossessione","fame di potere","scalata",
        "ascesa","caduta","declino","ritorno","comeback","revanche","rivalsa",
        "rivincita","vendetta fredda","pazienza","calcolo","freddo","distacco",
        "cinismo","pragmatismo","risultati","numeri","dati","prove","evidenza",
        "reputazione costruita","brand","immagine","narrativa","storia","legacy",
        "eredità","segno lasciato","soldi","lusso","ricchezza","abbondanza",
        "spreco","ostentazione","show off","flexing","rispetto temuto","rispetto amato"
      ],

      // ── RELAZIONI / AMORE / CUORE ────────────────────────────
      relazioni: [
        "amore","odio","attrazione","chimica","intesa","desiderio","passione",
        "gelosia","possesso","controllo","libertà","respiro","spazio","confini",
        "rispetto","fiducia","tradimento","bugie","verità","silenzio","parole",
        "comunicazione","incomprensione","distanza","vicinanza","abbraccio",
        "tenerezza","cura","abbandono","solitudine","bisogno","dipendenza",
        "attaccamento","distacco","lasciar andare","perdere","trovare","ricominciare",
        "cicatrice","guarire","ferita","dolore","piacere","connessione","soul mate",
        "incontro","sguardo","primo appuntamento","notte insieme","mattina dopo",
        "abitudine","routine","conforto","noia nella coppia","riscoprire","sorpresa",
        "gesto","dedica","canzone","memoria condivisa","progetto","futuro insieme",
        "paura di perdere","paura di restare","libertà di amare","amore libero",
        "ex","nostalgia","chi è stato","chi sei adesso","crescere insieme",
        "dividersi","riconciliarsi","perdonare se stessi","amarsi","volersi bene"
      ],

      // ── CONFLITTO / LOTTA / RIBELLIONE ──────────────────────
      ribellione: [
        "rivolta","protesta","resistenza","lotta","battaglia","scontro","frontiera",
        "barriera","muro","confine","limite","superamento","rottura","anarchia",
        "caos","ordine","sistema","regime","oppressione","sfruttamento","catene",
        "controllo sociale","manipolazione","propaganda","narrativa dominante",
        "voce fuori dal coro","dissenso","critica","denuncia","testimonianza",
        "verità scomoda","potere che mente","mainstream","indie","underground",
        "controcultura","subcultura","movimento","rivoluzione","utopia","distopia",
        "alternativa","possibilità","cambiamento","futuro","generazione","eredità",
        "responsabilità","coscienza collettiva","unità","divisione","frattura",
        "cicatrice sociale","riconciliazione","giustizia","equità","diritti",
        "dignità","umanità","solidarietà","empatia","azione diretta","sabotaggio",
        "disobbedienza civile","non conformità","rifiuto","rinuncia","trasgressione",
        "sovversione","devianza","stigma","emarginazione","esclusione","ritorno"
      ],

      // ── TEMPO / MEMORIA / FUTURO ─────────────────────────────
      tempo: [
        "ieri","oggi","domani","passato","presente","futuro","memoria","ricordo",
        "nostalgia","dimenticare","ricordare","scordare","rimuovere","elaborare",
        "tempo che passa","ore","minuti","secondi","eternità","istante","attimo",
        "momento","stagione","ciclo","ritorno","ripetizione","cambiamento","evoluzione",
        "involuzione","regressione","progresso","stallo","punto fermo","svolta",
        "prima e dopo","rottura","discontinuità","continuità","filo","trama",
        "storia personale","narrazione","racconto","versione dei fatti","punto di vista",
        "prospettiva","distanza temporale","metabolizzare","archivio","cassetto",
        "scatola dei ricordi","foto","video","voce registrata","oggetto simbolico",
        "profumo","luogo","ritorno nei posti","come eravamo","chi siamo diventati",
        "rimpianto","gratitudine retroattiva","pace con il passato","radici",
        "proiezione","pianificazione","incertezza del futuro","controllo",
        "lasciarsi andare","velocità","lentezza","fretta","calma","inesorabile"
      ],

      // ── CIBO MID ────────────────────────────────────────────
      cibo: [
        "apericena","brunch","happyhour","trattoria","osteria","pasticceria",
        "fornaio","antipasto","primo","secondo","contorno","dolce","amaro",
        "limoncello","grappa","prosecco","negroni","cappuccino","moka","fritto",
        "grigliata","alforno","speziato","piccante","porzione","bis","scarpetta",
        "sazietà","digestione","sgarro","cheatmeal","calorie","proteine","carbo",
        "macro","menu degustazione","tasting menu","chef's table","farm to table",
        "km zero","biologico","vegano","vegetariano","intolleranza","allergia",
        "celiachia","glutine","lattosio","carboidrati","zuccheri semplici",
        "indice glicemico","digiuno intermittente","keto","paleo","clean eating",
        "comfort food","junk food","fast food","street food","food truck",
        "mercato contadino","filiera corta","stagionale","conserve","fermentazione",
        "lievito madre","pasta madre","pane artigianale","craft beer","artigianale"
      ]
    },

    /* ──────────────────── HARD ───────────────────────────── */
    hard: {

      // ── CONCETTI ASTRATTI ────────────────────────────────────
      concetti: [
        "metamorfosi","sinapsi","inevitabile","paradosso","interferenza","simmetria",
        "trascendenza","entropia","ambivalenza","percezione","dissonanza","iridescenza",
        "frammentazione","precarietà","dialettica","sovraccarico","coscienza",
        "astrazione","relatività","causalità","probabilità","invarianza","inerzia",
        "risonanza","frequenza","vibrazione","spettro","fenomeno","sintesi","ipotesi",
        "paradigma","contraddizione","interpretazione","metafora","allegoria","ossimoro",
        "simulazione","epifania","aporia","ontologia","gnoseologia","ermeneutica",
        "semiotica","fenomenologia","determinismo","indeterminazione","emergenza",
        "complessità","caos","attrattore","singolarità","continuum","discontinuità",
        "dualismo","monismo","pluralità","identità","alterità","liminalità","soglia",
        "contingenza","necessità","sostanza","forma","materia","essenza","apparenza",
        "anomalìa","coerenza","correlazione","tensione dialettica","negazione",
        "superamento","trasparenza","opacità","rumore di fondo","segnale",
        "autopoiesi","omeostasi","morfogenesi","struttura dissipativa","biforcazione",
        "non linearità","sensibilità alle condizioni iniziali","effetto farfalla",
        "loop di feedback","rinforzo positivo","rinforzo negativo","equilibrio dinamico",
        "autoorganizzazione","proprietà emergente","riduzionismo","olismo",
        "complessità irriducibile","emergenza debole","emergenza forte","superveniencia"
      ],

      // ── PSICOLOGIA / MENTE ───────────────────────────────────
      psicologia: [
        "dissonanza cognitiva","auto-sabotaggio","iperstimolazione","dipendenza",
        "desensibilizzazione","polarizzazione","identità","narrativa","manipolazione",
        "conformismo","resilienza","disillusione","alienazione","catarsi","anomia",
        "crisi","attaccamento","trauma","trigger emotivo","coping","rimozione",
        "proiezione","sublimazione","bias","euristica","impostor syndrome","burnout",
        "stress cronico","regolazione emotiva","autostima","auto-efficacia",
        "locus di controllo","ruminazione","mindfulness","dissociazione","somatizzazione",
        "senso di colpa","rabbia repressa","aggressività passiva","assertività",
        "confini","dipendenza affettiva","codipendenza","validazione","bisogno",
        "frustrazione","gratificazione","schema","copione","identificazione",
        "idealizzazione","svalutazione","transfert","controtransfert","resistenza",
        "insight","elaborazione","integrazione","frammentazione dell'io","coerenza narrativa",
        "crisi di identità","sé autentico","persona","ombra","proiezione dell'ombra",
        "anima","animus","archetipo","inconscio collettivo","sincronicità",
        "sogno lucido","regressione","stati alterati","flusso di coscienza",
        "defusion cognitiva","acceptance","commitment","valore","azione impegnata",
        "finestra di tolleranza","iperattivazione","ipoattivazione","congelamento",
        "fuga","lotta","risposta di orientamento","sistema nervoso autonomo",
        "nervo vago","polivagale","teoria dell'attaccamento","stile ansioso",
        "stile evitante","stile disorganizzato","base sicura","figura di attaccamento"
      ],

      // ── FILOSOFIA / SPIRITUALITÀ ─────────────────────────────
      filosofia: [
        "essere","nulla","esistenza","essenza","volontà","libertà","necessità",
        "etica","morale","valore","bene","male","giusto","sbagliato","relativo",
        "assoluto","universale","particolare","soggettivo","oggettivo","intersoggettivo",
        "coscienza","autocoscienza","intenzionalità","qualia","esperienza soggettiva",
        "problema difficile","dualismo mente-corpo","fisicalismo","idealismo",
        "pragmatismo","utilitarismo","deontologia","virtù","flourishing","eudaimonia",
        "stoicismo","dicotomia del controllo","amor fati","eterno ritorno","nichilismo",
        "volontà di potenza","superuomo","prospettivismo","genealogia","decostruzione",
        "differenza","traccia","logocentrismo","onto-teologia","essere-nel-mondo",
        "cura","gettatezza","progetto","autenticità","inautenticità","essere-per-la-morte",
        "angoscia","nausea","libertà vertiginosa","responsabilità","alterità radicale",
        "il volto dell'altro","ospitalità","giustizia impossibile","perdono incondizionato",
        "dono","economia del dono","mana","sacro","tabù","limite","trasgressione",
        "sovranità","bataille","potlatch","eccesso","dispendio","misura","dismisura",
        "apollineo","dionisiaco","sublime","bello","terribile","meraviglioso","ineffabile"
      ],

      // ── ARTE / ESTETICA ──────────────────────────────────────
      arte: [
        "chiaroscuro","prospettiva","saturazione","distorsione","sinestesia",
        "minimalismo","barocco","surrealismo","decostruzione","intertestualità",
        "astrattismo","figurativo","realismo","iperrealismo","impressionismo",
        "espressionismo","cubismo","futurismo","dadaismo","pop art","concettuale",
        "installazione","performance","composizione","contrasto","armonia cromatica",
        "palette","texture","grana","linea","contorno","volume","profondità",
        "montaggio","inquadratura","carrellata","zoom","piano sequenza","ritmo visivo",
        "simbolismo","iconografia","allegoria visiva","calligrafia","tipografia",
        "lettering","mimesi","straniamento","sospensione","atmosfera","aurea",
        "sublime","bello","brutto","kitsch","camp","trash aesthetics","vaporwave",
        "lo-fi aesthetics","brutalism","swiss style","neue grafik","postmoderno",
        "citazionismo","mashup","remix","appropriation art","ready-made","objet trouvé",
        "street art come critica","murale politico","censura dell'arte","iconoclastia",
        "mercato dell'arte","speculazione","valore estetico vs valore di mercato",
        "film d'autore","new wave","dogma 95","cinema verité","found footage",
        "videoarte","net art","generative art","glitch art","pixel art","ascii art"
      ],

      // ── LINGUAGGIO / RIME / FLOW TECNICO ────────────────────
      linguaggio: [
        "fonema","morfema","lessema","sintagma","proposizione","periodo","discorso",
        "enunciazione","locutore","allocutore","contesto","cotesto","referente",
        "denotazione","connotazione","significante","significato","segno","icona",
        "indice","simbolo","codice","messaggio","canale","rumore","feedback",
        "ridondanza","informazione","entropia informazionale","compressione semantica",
        "ambiguità","polifonia","intertestualità","citazione","allusione","parodia",
        "pastiche","ironia","sarcasmo","iperbole","litote","metonimia","sineddoche",
        "metafora concettuale","embodied cognition","frame","schema cognitivo",
        "priming","ancoraggio","framing","spin","eufemismo","disfemismo","tabù linguistico",
        "code switching","diglossia","bilinguismo","interferenza linguistica","calco",
        "prestito","neologismo","arcaismo","gergalismo","dialettismo","idioletto",
        "registro","stile","tono","voce narrativa","punto di vista","focalizzazione",
        "stream of consciousness","monologo interiore","discorso indiretto libero",
        "ellissi","parallelismo","anafora","epifora","chiasmo","polisindeto","asindeto",
        "enjambement","rima interna","rima al mezzo","assonanza impura","rima baciata",
        "rima alternata","terzina","sonetto","verso libero","endecasillabo","settenario"
      ],

      // ── POLITICA / SISTEMA / VERITÀ ──────────────────────────
      sistema: [
        "potere","stato","nazione","sovranità","legittimità","autorità","obbedienza",
        "consenso","coercizione","egemonia","controegemonia","gramsci","blocco storico",
        "intellettuale organico","guerra di posizione","guerra di movimento",
        "rivoluzione passiva","trasformismo","gattopardo","tutto cambia affinché nulla cambi",
        "neoliberismo","austerità","privatizzazione","deregolamentazione","globalizzazione",
        "finanziarizzazione","estrattivismo","capitalismo cognitivo","lavoro immateriale",
        "plusvalore","sfruttamento","accumulazione primitiva","enclosures","commons",
        "beni comuni","privatizzazione del pubblico","mercificazione","commodificazione",
        "alienazione","reificazione","feticismo della merce","spettacolo","debord",
        "società dello spettacolo","simulacro","baudrillard","iperrealtà","reality tv",
        "post-verità","fake news","infodemia","overload informativo","attenzione",
        "economia dell'attenzione","sorveglianza","capitalismo della sorveglianza",
        "dataveillance","nudge","architettura delle scelte","libertà paternalistica",
        "biopotere","biopolitica","foucault","disciplina","normalizzazione","esclusione",
        "confine","migrazione","fortezza","othering","capro espiatorio",
        "consenso fabbricato","censura","libertà di stampa","algoritmo","bolla"
      ]
    }
  },

  /* ═══════════════════════════════════════════════════════════
     ENGLISH
  ═══════════════════════════════════════════════════════════ */
  en: {

    easy: {

      street: [
        "night","road","smoke","dream","heart","rain","light","shadow","rhythm",
        "voice","cold","future","choice","space","fire","time","wind","money",
        "love","hate","silence","noise","always","life","death","war","peace",
        "anger","joy","pain","strength","fear","hunger","thirst","sleep","eyes",
        "hands","feet","head","skin","blood","gold","glass","iron","asphalt","neon",
        "mirror","stairs","key","door","wall","roof","house","bar","subway","bridge",
        "window","yard","square","station","alley","sirens","cigarette","jacket",
        "shoes","chain","hood","ring","glasses","scars","screams","smiles","tears",
        "hugs","lies","truth","promises","karma","luck","moon","stars","dawn",
        "sunset","clouds","storm","fog","streetlight","signal","track","tunnel",
        "punch","breath","heartbeat","vein","nerve","spine","shiver","sweat","fever",
        "steps","run","escape","trace","footprint","path","gaze","lips","teeth",
        "tongue","neck","shoulders","chest","bones","reflection","glow","block",
        "corner","crew","rep","code","hustle","grind","struggle","real","raw",
        "loyalty","betrayal","solid","fake","day one","no cap","facts","word","bond",
        "tag","throw-up","wildstyle","bombing","writer","can","fill","outline"
      ],

      everyday: [
        "bill","rent","traffic","queue","receipt","groceries","parking","delay",
        "yawn","gym","couch","phone","battery","wifi","notification","emoji","meme",
        "cringe","vibes","drama","scroll","story","like","follow","ghost","spam",
        "filter","selfie","alarm","breakfast","lunch","dinner","fridge","oven",
        "laundry","keys","wallet","coins","bus","ticket","pass","gate","schedule",
        "delivery","package","tracking","cleaning","trash","shower","shampoo",
        "towel","mirror","razor","cream","fine","insurance","payment","card","pin",
        "chat","group","voice note","call","video call","update","screenshot","link",
        "dm","sticker","reel","post","comment","anxiety","chill","hype","mood",
        "deadline","shift","break","day off","appointment","meeting","presentation",
        "invoice","discount","sale","review","refund","subscription","upgrade",
        "promo code","loyalty card","streaming","password","data","recharge"
      ],

      food: [
        "pizza","pasta","sandwich","burger","sushi","ice cream","cookies","chocolate",
        "chili","salt","sugar","lemon","apple","banana","strawberry","avocado",
        "chicken","steak","fish","salmon","salad","tomato","mozzarella","cheese",
        "bacon","egg","bread","toast","cereal","cake","croissant","tiramisu",
        "cream","caramel","honey","orange","peach","pear","grapes","kiwi","mango",
        "juice","smoothie","coffee","espresso","cappuccino","latte","tea","soda",
        "beer","wine","whiskey","tequila","cocktail","shot","ice","lime","mint",
        "spicy","grilled","fried","baked","raw","fresh","crispy","tender","juicy",
        "leftover","meal prep","takeout","delivery","dine in","brunch","snack",
        "cheat meal","calories","protein","carbs","fast food","street food"
      ],

      objects: [
        "backpack","suitcase","ticket","coin","bill","watch","candle","match",
        "umbrella","belt","notebook","pen","lens","radio","speaker","microphone",
        "headphones","vinyl","cd","poster","wallet","bag","passport","badge",
        "lighter","flashlight","charger","cable","adapter","planner","highlighter",
        "pencil","eraser","ruler","mirror","glasses","case","remote","tv","monitor",
        "console","keyboard","mouse","camera","tripod","necklace","bracelet","ring",
        "pendant","gloves","scarf","hat","chair","table","lamp","rug","usb drive",
        "hard drive","card","guitar","pick","drum","perfume","lipstick","brush",
        "scissors","needle","thread","fabric","paintbrush","canvas","sketch pad"
      ],

      nature: [
        "sky","sea","earth","fire","water","wind","rain","snow","sun","moon",
        "stars","comet","aurora","sunset","dawn","horizon","mountain","hill",
        "forest","woods","meadow","flower","grass","root","trunk","branch","leaf",
        "seed","fruit","rock","cliff","beach","sand","shell","wave","current",
        "lake","river","stream","waterfall","spring","fog","frost","ice","heat",
        "breeze","hurricane","storm","lightning","thunder","rainbow","cloud",
        "volcano","earthquake","drought","hawk","eagle","wolf","fox","deer",
        "snake","butterfly","bee","dragonfly","owl","silence","wild","primal",
        "eternal","immensity","deep","vast","ancient","raw","pure","untouched"
      ],

      feelings: [
        "love","hate","fear","joy","sadness","anger","surprise","disgust","trust",
        "hope","longing","loneliness","happiness","melancholy","enthusiasm","boredom",
        "pride","shame","guilt","envy","jealousy","affection","tenderness","passion",
        "desire","regret","remorse","gratitude","admiration","respect","contempt",
        "panic","anxiety","calm","serenity","peace","tension","agitation","euphoria",
        "emptiness","fullness","lightness","heaviness","warmth","coldness","bitterness",
        "sweetness","smile","crying","laughter","sigh","silence","shout","whisper",
        "courage","strength","weakness","exhaustion","energy","vitality","rebirth",
        "relief","confusion","awe","wonder","bewilderment","unease","restlessness"
      ]
    },

    mid: {

      street: [
        "gasoline","outskirts","sidewalk","underpass","shutter","billboard","apartment block",
        "balcony","doorway","railing","staircase","construction site","roundabout",
        "highway","overpass","viaduct","platform","terminus","lane","tunnel","dock",
        "footbridge","garage","warehouse","basement","junction","flyover",
        "industrial zone","underground parking","scaffolding","crane","fence",
        "barrier","bus shelter","timetable","turnstile","waiting room","ramp",
        "exit","toll","van","ambulance","patrol car","siren","streetlamp","cctv",
        "graffiti","tag","throw-up","wildstyle","bombing","vandal","writer","crew",
        "can","cap","outline","fill","background layer","abandoned building","squat",
        "former factory","reclamation","restoration","broken glass","rusted gate",
        "crumbling walls","burnt-out lights","diesel smell","steam","drain","grate"
      ],

      emotions: [
        "pride","envy","jealousy","anxiety","panic","nostalgia","remorse","impulse",
        "tension","distance","balance","pressure","obsession","temptation","complicity",
        "betrayal","forgiveness","illusion","mirage","scar","memory","euphoria",
        "apathy","shame","relief","frustration","bitterness","disappointment",
        "bewilderment","emptiness","unease","determination","courage","uncertainty",
        "doubt","suspicion","faith","attachment","detachment","tenderness","grudge",
        "fury","desire","craving","impatience","waiting","serenity","empathy",
        "compassion","indifference","clarity","confusion","burnout","overload",
        "acceptance","surrender","redemption","ambivalence","inner conflict","split",
        "catharsis","liberation","rebirth","transformation","crisis","turning point",
        "breaking point","limit","threshold","resistance","collapse","recovery",
        "healing","grief","loss","absence","acute nostalgia","regret","repentance"
      ],

      music: [
        "bar","flow","scheme","rhyme","hook","verse","chorus","bridge","freestyle",
        "assonance","alliteration","tempo","swing","breath","double time","outro",
        "attack","rhythm","intonation","bpm","kick","snare","hi-hat","808","sub bass",
        "synth","pad","loop","sample","chop","cut","break","drop","build-up","beat",
        "instrumental","arrangement","melody","harmony","chord","timbre","register",
        "falsetto","grit","punchline","sixteen bars","ad lib","double entendre",
        "multisyllabic","syncopation","off-beat","accentuation","dynamics","crescendo",
        "mix","master","reverb","delay","compression","autotune","pitch","scratch",
        "turntable","dj","producer","trap","boom bap","drill","phonk","lo-fi",
        "afrobeats","dancehall","garage","grime","jungle","breakbeat","sampling",
        "crate digging","vinyl","b-side","feature","collab","session","booth",
        "console","daw","midi","vst","stem","take","punch-in","comping","vocoder",
        "flanger","phaser","distortion","saturation","clipping","rimshot"
      ],

      tech: [
        "algorithm","profile","feed","trending","viral","trigger","buffer","cache",
        "cloud","server","password","backup","privacy","cookie","glitch","lag",
        "pixel","streaming","paywall","captcha","bug","database","query","frontend",
        "backend","api","token","authentication","encryption","firewall","proxy",
        "vpn","dark web","mining","wallet","blockchain","smart contract","nft",
        "metaverse","avatar","augmented reality","virtual reality","ai","machine learning",
        "deep learning","neural net","model","dataset","training","inference","bias",
        "output","input","parameter","optimization","deploy","staging","release",
        "open source","license","fork","pull request","merge","branch","commit",
        "debug","stack trace","monitoring","dashboard","kpi","scalability","latency",
        "microservices","container","pod","orchestration","observability","telemetry"
      ],

      power: [
        "throne","crown","dominion","control","influence","charisma","leadership",
        "authority","hierarchy","clan","empire","territory","earned respect",
        "reputation","credibility","loyalty","betrayal","alliance","pact","code",
        "silence","unwritten rules","game","moves","pawns","chessboard","winning hand",
        "ace","bluff","poker face","strategy","tactics","objective","mission","vision",
        "ambition","ego","obsession","hunger for power","ascent","fall","decline",
        "comeback","revenge","cold patience","calculation","cynicism","pragmatism",
        "results","numbers","evidence","built reputation","brand","image","narrative",
        "legacy","wealth","luxury","abundance","waste","showing off","flexing"
      ],

      relationships: [
        "attraction","chemistry","understanding","desire","passion","jealousy",
        "possession","freedom","breathing room","boundaries","respect","trust",
        "betrayal","lies","truth","silence","words","communication","miscommunication",
        "distance","closeness","embrace","tenderness","care","abandonment","loneliness",
        "need","dependency","attachment","letting go","losing","finding","starting over",
        "scar","healing","wound","pain","pleasure","connection","soul mate","meeting",
        "first date","night together","morning after","habit","routine","comfort",
        "boredom in love","rediscover","surprise","gesture","dedication","song",
        "shared memory","project","future together","fear of losing","fear of staying",
        "freedom to love","ex","nostalgia for who was","growing together"
      ]
    },

    hard: {

      concepts: [
        "metamorphosis","synapse","inevitable","paradox","interference","symmetry",
        "transcendence","entropy","ambivalence","perception","dissonance","iridescence",
        "fragmentation","precariousness","dialectics","overload","consciousness",
        "abstraction","relativity","causality","probability","invariance","inertia",
        "resonance","frequency","vibration","spectrum","phenomenon","synthesis",
        "hypothesis","paradigm","contradiction","interpretation","metaphor","allegory",
        "oxymoron","simulation","epiphany","aporia","ontology","epistemology",
        "hermeneutics","semiotics","phenomenology","determinism","indeterminacy",
        "emergence","complexity","chaos","attractor","singularity","continuum",
        "discontinuity","dualism","monism","plurality","identity","otherness",
        "liminality","threshold","contingency","necessity","substance","form",
        "matter","essence","appearance","anomaly","coherence","correlation",
        "autopoiesis","homeostasis","morphogenesis","dissipative structure",
        "bifurcation","nonlinearity","butterfly effect","feedback loop",
        "self-organization","emergent property","reductionism","holism"
      ],

      psychology: [
        "cognitive dissonance","self-sabotage","hyperstimulation","addiction",
        "desensitization","polarization","identity","narrative","manipulation",
        "conformism","resilience","disillusion","alienation","catharsis","anomie",
        "crisis","attachment","trauma","emotional trigger","coping","repression",
        "projection","sublimation","bias","heuristic","impostor syndrome","burnout",
        "chronic stress","emotional regulation","self-esteem","self-efficacy",
        "locus of control","rumination","mindfulness","dissociation","somatization",
        "guilt","suppressed anger","passive aggression","assertiveness","boundaries",
        "emotional dependency","codependency","validation","need","frustration",
        "gratification","schema","script","identification","idealization","devaluation",
        "transference","countertransference","resistance","insight","elaboration",
        "integration","narrative coherence","identity crisis","authentic self",
        "persona","shadow","projection of shadow","archetype","collective unconscious",
        "synchronicity","lucid dreaming","regression","altered states","flow state",
        "window of tolerance","hyperactivation","hypoactivation","freeze response",
        "fight or flight","orienting response","autonomic nervous system","vagus nerve",
        "polyvagal theory","attachment theory","anxious style","avoidant style"
      ],

      art: [
        "chiaroscuro","perspective","saturation","distortion","synesthesia",
        "minimalism","baroque","surrealism","deconstruction","intertextuality",
        "abstraction","figurative","realism","hyperrealism","impressionism",
        "expressionism","cubism","futurism","dadaism","pop art","conceptual art",
        "installation","performance art","composition","contrast","color harmony",
        "palette","texture","grain","line","contour","volume","depth","field",
        "montage","framing","tracking shot","zoom","long take","visual rhythm",
        "symbolism","iconography","visual allegory","calligraphy","typography",
        "lettering","mimesis","defamiliarization","suspension","atmosphere",
        "sublime","beauty","ugliness","kitsch","camp","trash aesthetics","vaporwave",
        "lo-fi aesthetics","brutalism","swiss style","postmodern","citation",
        "mashup","remix","appropriation art","ready-made","found object",
        "street art as critique","political mural","censorship of art","iconoclasm",
        "art market","speculation","aesthetic value vs market value",
        "auteur cinema","new wave","cinema verite","found footage","video art",
        "net art","generative art","glitch art","pixel art","ascii art"
      ],

      system: [
        "power","state","nation","sovereignty","legitimacy","authority","obedience",
        "consent","coercion","hegemony","counterhegemony","organic intellectual",
        "war of position","passive revolution","neoliberalism","austerity",
        "privatization","deregulation","globalization","financialization",
        "extractivism","cognitive capitalism","immaterial labor","surplus value",
        "exploitation","primitive accumulation","enclosures","commons","public goods",
        "commodification","alienation","reification","commodity fetishism","spectacle",
        "society of the spectacle","simulacrum","hyperreality","reality tv",
        "post-truth","fake news","infodemia","information overload","attention economy",
        "surveillance","surveillance capitalism","dataveillance","nudge","choice architecture",
        "paternalistic freedom","biopower","biopolitics","discipline","normalization",
        "exclusion","border","migration","fortress","othering","scapegoat",
        "manufactured consensus","propaganda","censorship","press freedom","algorithm",
        "filter bubble","echo chamber","tribalism","identity politics"
      ],

      language: [
        "phoneme","morpheme","lexeme","phrase","clause","period","discourse",
        "utterance","speaker","addressee","context","co-text","referent",
        "denotation","connotation","signifier","signified","sign","icon","index",
        "symbol","code","message","channel","noise","feedback","redundancy",
        "information","semantic entropy","semantic compression","ambiguity",
        "polyphony","intertextuality","quotation","allusion","parody","pastiche",
        "irony","sarcasm","hyperbole","litotes","metonymy","synecdoche",
        "conceptual metaphor","embodied cognition","frame","cognitive schema",
        "priming","anchoring","framing","spin","euphemism","dysphemism",
        "code switching","diglossia","bilingualism","linguistic interference","calque",
        "loanword","neologism","archaism","slang","dialect","idiolect",
        "register","style","tone","narrative voice","point of view","focalization",
        "stream of consciousness","interior monologue","free indirect discourse",
        "ellipsis","parallelism","anaphora","epiphora","chiasmus","polysyndeton",
        "asyndeton","enjambment","internal rhyme","slant rhyme","eye rhyme",
        "perfect rhyme","near rhyme","multisyllabic rhyme","mosaic rhyme"
      ]
    }
  }
};


const AFFINITY_DOMAINS = [
  // Urban / street world
  ["strada","street","citta","city","quartiere","hood","notte","night","ribellione","system"],
  // Emotion / inner life / relationships
  ["sentimenti","feelings","emozioni","emotions","relazioni","relationships","cuore","heart","amore","love","tempo","time"],
  // Power / hustle / fame
  ["potere","power","societa","society","ribellione","sistema","conflict"],
  // Nature / cosmos / body
  ["natura","nature","cielo","sky","mare","sea","corpo","body"],
  // Time / memory / philosophy
  ["tempo","time","memoria","memory","filosofia","philosophy","concetti","concepts"],
  // Music / art / language / flow
  ["musica","music","arte","art","linguaggio","language","flow","rime","ritmo"],
  // Tech / digital / society
  ["tech","societa","society","quotidiano","everyday","sistema","system"],
  // Deep abstract / psychology / system
  ["concetti","concepts","psicologia","psychology","filosofia","philosophy","sistema","system","language","linguaggio"],
  // Food
  ["cibo","food"],
  // Objects
  ["oggetti","objects"]
];