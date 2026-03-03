
/**********************
 * WORD BANKS
 **********************/
const WORDS = {
    it: {
        easy: {
            street: [
                "notte", "strada", "cassa", "fumo", "sogno", "cuore", "pioggia", "luce", "ombra", "ritmo", "voce", "freddo", "futuro",
                "scelta", "spazio", "fuoco", "tempo", "vento", "soldi", "amore", "odio", "silenzio", "rumore", "sempre", "vita", "morte",
                "guerra", "pace", "rabbia", "gioia", "dolore", "forza", "paura", "fame", "sete", "sonno", "occhi", "mani", "piedi", "testa",
                "pelle", "sangue", "sale", "oro", "vetro", "ferro", "legno", "carta", "inchiostro", "asfalto", "neon", "specchio", "scala",
                "chiave", "porta", "muro", "tetto", "casa", "bar", "metro", "ponte", "finestra", "cortile", "piazza", "stazione", "vicolo",
                "sirene", "rum", "birra", "acqua", "caffè", "sigaretta", "giacca", "scarpe", "catena", "cappuccio", "anello", "occhiali",
                "graffi", "cicatrici", "urla", "sorrisi", "lacrime", "abbracci", "bugie", "verità", "promesse", "karma", "fortuna",
                "luna", "stelle", "alba", "tramonto", "nuvole", "tempesta", "nebbia", "lampione", "semaforo", "binario", "vagone", "tunnel",
                "sottoscala", "ascensore", "gradini", "ringhiera", "cancello", "saracinesca", "serratura", "catrame", "pozzanghera", "fango",
                "polvere", "cenere", "scintille", "fulmine", "braci", "brace", "scorie", "ruggine", "ruggito", "taglio", "livido", "benda",
                "cerotto", "pugno", "schiaffo", "carezza", "stretta", "fiato", "respiro", "battito", "vena", "polso", "nervo", "spina",
                "brivido", "sudore", "febbre", "ghiacciaio", "brina", "ghiaccio", "calore", "fiamma", "scalda", "brucia",
                "sussurro", "eco", "rimbombo", "applauso", "fischio", "risata", "pianto", "singhiozzo", "urto", "scontro",
                "passi", "corsa", "fuga", "inseguimento", "traccia", "orma", "sentiero", "rotta",
                "sguardo", "sopracciglio", "palpebra", "labbra", "denti", "lingua", "nuca", "spalle", "petto", "ossa",
                "ombraio", "riflesso", "bagliore", "scintillio", "luccichio", "controluce",
                "quartiere", "rione", "borgo", "centro", "periferia", "incrocio", "rotatoria", "rotonda", "marciapiede",
                "panchina", "edicola", "vetrina", "portone", "androne", "scala", "corridoio",
                "motorino", "scooter", "auto", "taxi", "bus", "tram", "bici", "casco",
                "locali", "club", "disco", "pub", "osteria", "banco", "bancone",
                "bottiglia", "bicchiere", "shot", "ghiaccio", "limetta",
                "cappello", "berretto", "felpa", "tuta", "jeans", "pantaloni", "stivali", "sneakers",
                "collana", "bracciale", "orologio", "piercing", "tatuaggio",
                "scommessa", "azzardo", "debito", "credito", "contanti", "spicci", "fondo",
                "fama", "gloria", "rispetto", "onore", "reputazione", "classe", "stile",
                "trappola", "rischio", "colpo", "botto", "scossa", "onda", "caduta", "salita",
                "speranza", "incubo", "fantasma", "destino", "scia", "segno", "simbolo",
                "promemoria", "ricatto", "patti", "alleanza", "rivalità", "vendetta", "perdono"
            ],
            everyday: [
                "bolletta", "affitto", "traffico", "fila", "scontrino", "spesa", "aperitivo", "parcheggio", "ritardo", "sbadiglio",
                "palestra", "divano", "pigiama", "telefono", "batteria", "wifi", "notifica", "emoji", "meme", "cringe", "vibes", "drama",
                "fuffa", "sbatti", "giga", "stream", "scroll", "storia", "like", "follow", "ghost", "spam", "filtro", "selfie",

                // espansione
                "sveglia", "caffettiera", "colazione", "pranzo", "cena", "merenda", "spuntino", "frigo", "forno", "lavatrice", "stendino",
                "panni", "calzini", "camicia", "maglione", "giubbotto", "chiavi", "portafoglio", "spiccioli",
                "autobus", "biglietto", "abbonamento", "tessera", "tornello", "orario", "sciopero", "deviazione", "percorso",
                "cartello", "citofono", "campanello", "pacco", "spedizione", "corriere", "tracking", "consegna", "ritiro",
                "riordino", "pulizie", "scopa", "mocio", "detergente", "spugna", "secchio", "sacchetto", "immondizia", "riciclo",
                "doccia", "shampoo", "sapone", "asciugamano", "phon", "specchio", "rasoio", "crema",
                "bollo", "multa", "assicurazione", "rata", "pagamento", "iban", "bancomat", "pin",
                "chat", "gruppo", "audio", "vocale", "call", "videochiamata", "silenzioso", "modalitàaereo",
                "aggiornamento", "bugfix", "screenshot", "link", "dm", "sticker", "reel", "post", "commento", "condivisione",
                "ansia", "sbattimento", "sbuzzo", "sbrocco", "chill", "hype", "mood", "goodvibes", "lowkey", "highkey",
                "deadline", "turno", "straordinario", "pausa", "permesso", "malattia"
            ],
            food: [
                "pizza", "pasta", "sugo", "panino", "kebab", "sushi", "gelato", "biscotti", "nutella", "peperoncino", "sale", "zucchero",
                "limone", "mela", "banana", "fragola", "cioccolato",

                // espansione
                "carbonara", "amatriciana", "cacioepepe", "ragù", "lasagna", "gnocchi", "risotto", "polenta", "focaccia", "piadina",
                "arancino", "supplì", "tramezzino", "toast", "hamburger", "patatine", "pollo", "bistecca", "pesce", "tonno", "salmone",
                "insalata", "pomodoro", "mozzarella", "burrata", "parmigiano", "gorgonzola", "prosciutto", "salame",
                "uovo", "pane", "grissini", "cracker", "cereali",
                "torta", "croissant", "cornetto", "tiramisu", "panna", "crema", "caramello", "miele",
                "arancia", "pesca", "pera", "uva", "kiwi", "ananas", "mango",
                "spritz", "vino", "bibita", "aranciata", "cola", "tè", "tisane", "espresso"
            ],
            objects: [
                "zaino", "valigia", "biglietto", "moneta", "banconota", "orologio", "candela", "fiammifero", "ombrello", "cintura",
                "quaderno", "penna", "lente", "radio", "speaker", "microfono", "cuffie", "vinile", "cd", "poster",

                // espansione
                "portafoglio", "borsa", "marsupio", "trolley", "pass", "documenti", "badge",
                "accendino", "torcia", "batterie", "caricatore", "cavo", "adattatore", "presa",
                "taccuino", "agenda", "evidenziatore", "matita", "gomma", "righello", "graffette",
                "specchietto", "occhiali", "lenti", "custodia",
                "telecomando", "tv", "monitor", "console", "tastiera", "mouse",
                "altoparlante", "mixer", "cavoXLR", "asta", "stand", "plettro",
                "fotocamera", "obiettivo", "treppiede",
                "collana", "bracciale", "anello", "ciondolo",
                "guanti", "sciarpa", "cappello",
                "sedia", "tavolo", "lampada", "tappeto",
                "chiavetta", "harddisk", "scheda"
            ]
        },

        mid: {
            street: [
                "benzina", "periferia", "marciapiede", "sottopasso", "serranda", "semaforo", "vetrina", "cartellone", "palazzina",
                "condominio", "balcone", "portone", "ringhiera", "scalinata", "cantiere", "rotonda", "tangenziale", "autogrill", "binario",
                "capolinea", "fermata", "corsia", "galleria", "banchina", "passerella", "garage", "magazzino", "sgabuzzino",

                // espansione
                "svincolo", "raccordo", "circonvallazione", "cavalcavia", "viadotto", "sopraelevata", "statale", "provinciale",
                "inceneritore", "capannone", "deposito", "officina", "cortileinterno", "androne", "atrio", "pianerottolo",
                "cantiereaperto", "impalcatura", "gru", "betoniera", "recinzione", "transenna",
                "palina", "pensilina", "tabellone", "biglietteria", "tornelli", "salaattesa", "sottopassaggio",
                "intersezione", "spartitraffico", "corsiadiservizio", "rampa", "uscita", "ingresso", "casello",
                "areaindustriale", "zonaartigianale", "parcheggiosotterraneo", "rimesse", "retrobottega",
                "furgone", "tir", "ambulanza", "volante", "sirena", "lampeggiante"
            ],
            emotions: [
                "orgoglio", "invidia", "gelosia", "ansia", "panico", "nostalgia", "rimorso", "silenzio", "impulso", "respiro", "tensione",
                "distanza", "equilibrio", "pressione", "ossessione", "tentazione", "complicità", "fiducia", "tradimento", "perdono",
                "speranza", "illusione", "miraggio", "cicatrice", "memoria", "ricordo", "dettaglio",

                // espansione
                "euforia", "apatia", "colpa", "vergogna", "orgasmo", "sollievo", "frustrazione", "amarezza", "delusione", "sconforto",
                "stupore", "meraviglia", "smarrimento", "vuoto", "inquietudine", "irrequietezza",
                "determinazione", "coraggio", "incertezza", "dubbio", "sospetto", "fiducia", "fede",
                "attaccamento", "distacco", "tenerezza", "rancore", "rabbiafredda", "furore",
                "desiderio", "brama", "fameemotiva", "impazienza", "attesa", "calma", "serenità",
                "empatia", "antipatia", "compassione", "indifferenza",
                "lucidità", "confusione", "stanchezza", "burnout", "sovraccarico",
                "accettazione", "rinuncia", "resa", "riscatto"
            ],
            music: [
                "battuta", "incastro", "metrica", "flow", "accento", "ritornello", "strofa", "bridge", "freestyle", "rima", "assonanza",
                "allitterazione", "tempo", "swing", "pause", "respiri", "doppietto", "cambi", "coda", "attacco", "ritmica", "intonazione",

                // espansione
                "hook", "ritornello", "ritornellone", "pre-ritornello", "post-ritornello",
                "bpm", "batteria", "cassa", "rullante", "charleston", "808", "sub", "synth", "pad",
                "loop", "campione", "sample", "chop", "taglio", "stacco", "drop", "build-up",
                "beat", "strumentale", "base", "arrangiamento", "melodia", "armonia", "accordo",
                "intonazione", "timbro", "registro", "falsetto", "grinta",
                "punchline", "barra", "sedici", "ritornellista", "adlib", "doppia", "tripla",
                "incastrosporco", "incastropulito", "multisillaba", "internalrhyme", "enjambement",
                "sincopi", "controtempo", "accentazione", "dinamica", "crescendo",
                "mix", "master", "riverbero", "delay", "compressione", "autotune", "pitch", "tuning"
            ],
            tech: [
                "algoritmo", "profilo", "feed", "tendenza", "virale", "trigger", "buffer", "cache", "cloud", "server", "password", "backup",
                "modalità", "impostazioni", "privacy", "cookie", "glitch", "lag", "pixel", "download", "upload", "streaming", "abbonamento",
                "paywall", "scadenza", "captcha", "bug"
            ],
            society: [
                "colloquio", "contratto", "scadenza", "agenda", "riunione", "presentazione", "fattura", "preventivo", "corriere", "pacchetto",
                "garanzia", "recensione", "callcenter", "assistenza", "rimborso", "promo", "sconto", "saldi", "spid", "cartadidentità",

                // espansione
                "burocrazia", "ufficio", "sportello", "prenotazione", "appuntamento", "protocollo", "modulo", "firma", "timbro",
                "deleghe", "certificato", "isee", "pec", "ticket", "tasse", "f24", "dichiarazione",
                "stipendio", "busta paga", "bonus", "straordinari", "turni", "cartellino",
                "tirocinio", "stage", "recruiter", "selezione", "prova", "periodoprova",
                "mutuo", "finanziamento", "rate", "interessi", "preventivo", "consuntivo",
                "negozio", "cassa", "resoconto", "scontrino", "resi", "cambio", "reclamo",
                "assemblea", "condominio", "amministratore", "spesecondominiali",
                "scuola", "lezione", "esame", "voto", "iscrizione",
                "sciopero", "manifestazione", "corteo", "vigilanza", "controllo"
            ],
            food: [
                "carbonara", "amatriciana", "ragù", "tiramisu", "spritz", "espresso", "digestivo", "spuntino", "dieta", "sugarcrash",

                // espansione
                "apericena", "brunch", "happyhour", "trattoria", "osteria", "pasticceria", "fornaio",
                "antipasto", "primo", "secondo", "contorno", "dolce",
                "amaro", "limoncello", "grappa", "prosecco", "negroni",
                "cappuccino", "macchiato", "americano", "moka",
                "fritto", "grigliata", "alforno", "speziato", "piccante",
                "porzione", "bis", "scarpetta", "sazietà", "digestione",
                "sgarro", "cheatmeal", "calorie", "proteine", "carbo", "macro"
            ]
        },

        hard: {
            concepts: [
                "metamorfosi", "sinapsi", "inevitabile", "paradosso", "interferenza", "simmetria", "trascendenza", "entropia",
                "ambivalenza", "percezione", "dissonanza", "iridescenza", "frammentazione", "precarietà", "dialettica", "sovraccarico",
                "coscienza", "astrazione", "dimensione", "relatività", "causalità", "probabilità", "variabile", "invarianza", "inerzia",
                "risonanza", "frequenza", "ampiezza", "vibrazione", "spettro", "quantità", "qualità", "fenomeno", "sintesi", "ipotesi",
                "paradigma", "contraddizione", "interpretazione", "metafora", "allegoria", "ossimoro", "simulazione",

                // espansione
                "epifania", "aporia", "ontologia", "gnoseologia", "ermeneutica", "semiotica", "fenomenologia",
                "determinismo", "indeterminazione", "emergenza", "complessità", "caos", "ordine", "sistema",
                "equilibrio", "instabilità", "attrattore", "singolarità", "continuum", "discontinuità",
                "dualismo", "monismo", "pluralità", "identità", "alterità", "liminalità", "soglia",
                "tempo lineare", "tempo ciclico", "eterno ritorno", "contingenza", "necessità",
                "sostanza", "forma", "materia", "essenza", "apparenza",
                "anomalìa", "incongruenza", "coerenza", "correlazione", "causa prima",
                "trasparenza", "opacità", "rumore di fondo", "segnale",
                "tensione dialettica", "negazione", "superamento", "sintesi finale"
            ],
            psychology: [
                "dissonanzacognitiva", "auto-sabotaggio", "iperstimolazione", "dipendenza", "desensibilizzazione", "polarizzazione",
                "identità", "narrativa", "propaganda", "manipolazione", "conformismo", "resilienza", "disillusione", "alienazione",
                "catarsi", "empatia", "apatia", "anomia", "crisi",

                // espansione
                "attaccamento", "trauma", "trigger emotivo", "coping", "meccanismididifesa", "rimozione", "proiezione", "sublimazione",
                "bias", "euristica", "conferma", "effettodunningkruger", "impostor syndrome", "burnout", "stress cronico",
                "regolazione emotiva", "autoregolazione", "autostima", "auto-efficacia", "locus di controllo",
                "ruminazione", "mindfulness", "dissociazione", "somatizzazione",
                "senso di colpa", "vergogna", "rabbia repressa", "aggressività passiva",
                "assertività", "confini", "dipendenza affettiva", "codependenza",
                "validazione", "bisogno", "attesa", "frustrazione", "gratificazione",
                "schema", "copione", "identificazione", "idealizzazione", "svalutazione"
            ],
            tech: [
                "crittografia", "autenticazione", "decentralizzazione", "ridondanza", "ottimizzazione", "latenza", "compressione",
                "versionamento", "containerizzazione", "interoperabilità", "telemetria", "scalabilità", "osservabilità", "orchestrazione",
                "virtualizzazione", "compilazione", "concorrenza", "idempotenza"
            ],
            art: [
                "chiaroscuro", "prospettiva", "saturazione", "distorsione", "sinestesia", "minimalismo", "barocco", "surrealismo",
                "decostruzione", "intertestualità",

                // espansione
                "astrattismo", "figurativo", "realismo", "iperrealismo", "impressionismo", "espressionismo", "cubismo", "futurismo",
                "dadaismo", "popart", "concettuale", "installazione", "performance",
                "composizione", "equilibrio visivo", "contrasto", "armonia cromatica", "palette",
                "texture", "grana", "linea", "contorno", "volume", "profondità", "campo", "fuoco",
                "montaggio", "inquadratura", "carrellata", "zoom", "piano sequenza",
                "ritmo visivo", "simbolismo", "iconografia", "allegoria visiva",
                "calligrafia", "tipografia", "lettering",
                "mimesi", "straniamento", "sospensione", "atmosfera"
            ]
        },

        en: {
            easy: {
                street: [
                    "midnight", "street", "bass", "smoke", "dream", "heart", "rain", "light", "shadow", "rhythm", "voice", "cold", "future",
                    "choice", "space", "fire", "time", "wind", "money", "love", "hate", "silence", "noise", "always", "life", "death",
                    "war", "peace", "anger", "joy", "pain", "power", "fear", "hunger", "thirst", "sleep", "eyes", "hands", "feet", "mind",
                    "skin", "blood", "salt", "gold", "glass", "steel", "paper", "ink", "asphalt", "neon", "mirror", "key", "door", "wall",
                    "home", "bar", "train", "bridge", "window", "alley", "sirens", "coffee", "cigarette", "hoodie", "chain", "ring",
                    "smile", "tears", "hug", "lies", "truth", "karma", "luck",

                    // expansion
                    "moon", "stars", "sunrise", "sunset", "storm", "fog", "streetlight", "traffic", "corner", "block", "hood", "downtown",
                    "subway", "platform", "tunnel", "stairwell", "hallway", "backdoor", "rooftop", "basement",
                    "puddle", "dust", "ashes", "sparks", "flame", "heat", "ice", "chill",
                    "whisper", "echo", "laugh", "scream", "cry", "pulse", "breath", "heartbeat",
                    "run", "chase", "escape", "trace", "shadowplay",
                    "glare", "sparkle", "glow", "flash",
                    "bench", "billboard", "storefront", "doorway",
                    "scooter", "car", "taxi", "bus", "tram", "bike",
                    "bottle", "shot", "glass", "lime",
                    "cap", "beanie", "jacket", "sneakers", "jeans",
                    "tattoo", "piercing", "bracelet", "necklace", "watch",
                    "respect", "fame", "pride", "loss", "gain",
                    "risk", "trap", "deal", "betrayal", "revenge", "forgiveness"
                ],
                everyday: [
                    "rent", "traffic", "queue", "receipt", "groceries", "lateness", "couch", "pajamas", "phone", "battery", "wifi", "notification",
                    "emoji", "meme", "cringe", "vibes", "drama", "spam", "filter", "selfie", "scroll", "like", "follow", "ghost",

                    // expansion
                    "alarm", "commute", "bus", "ticket", "schedule", "detour", "parking", "keys", "wallet",
                    "laundry", "dishes", "cleanup", "trash", "recycle", "vacuum", "soap",
                    "shower", "towel", "shampoo", "razor", "mirror",
                    "package", "delivery", "courier", "tracking", "pickup",
                    "payment", "bill", "fee", "fine", "insurance", "rate",
                    "chat", "groupchat", "voice note", "call", "videocall", "screenshot", "link", "dm",
                    "reel", "post", "comment", "share", "mute", "airplane mode",
                    "hype", "mood", "chill", "lowkey", "highkey", "burnout", "overtime"
                ],
                food: [
                    "pizza", "pasta", "burger", "kebab", "sushi", "gelato", "cookies", "chocolate", "lemon", "apple", "banana", "strawberry",

                    // expansion
                    "tiramisu", "lasagna", "risotto", "gnocchi", "sandwich", "wrap", "fries", "steak", "chicken", "salad",
                    "mozzarella", "parmesan", "prosciutto", "salami",
                    "orange", "peach", "pear", "grapes", "kiwi", "pineapple", "mango",
                    "espresso", "cappuccino", "tea", "soda", "spritz"
                ],
                objects: [
                    "backpack", "ticket", "coin", "wallet", "watch", "umbrella", "belt", "notebook", "pen", "radio", "speaker", "mic", "headphones",

                    // expansion
                    "suitcase", "trolley", "passport", "badge",
                    "lighter", "flashlight", "charger", "cable", "adapter",
                    "planner", "highlighter", "pencil", "eraser",
                    "remote", "monitor", "keyboard", "mouse",
                    "camera", "tripod",
                    "hat", "scarf", "gloves",
                    "chair", "lamp", "poster", "vinyl", "cd"
                ]
            },

            mid: {
                street: [
                    "gasoline", "suburbs", "sidewalk", "underpass", "shutter", "trafficlight", "storefront", "billboard", "apartmentblock",
                    "balcony", "doorway", "staircase", "construction", "roundabout", "highway", "reststop", "platform", "terminal", "lane",
                    "tunnel", "garage", "warehouse",

                    // expansion
                    "overpass", "interchange", "exit ramp", "service road", "ring road", "viaduct",
                    "industrial zone", "loading dock", "back alley", "courtyard", "lobby", "stairwell",
                    "scaffolding", "crane", "barrier", "detour",
                    "ticket booth", "turnstile", "waiting room", "underpassway"
                ],
                emotions: [
                    "pride", "envy", "jealousy", "anxiety", "panic", "nostalgia", "regret", "impulse", "breath", "tension", "distance",
                    "balance", "pressure", "obsession", "temptation", "complicity", "trust", "betrayal", "forgiveness",
                    "hope", "illusion", "mirage", "scar", "memory", "detail",

                    // expansion
                    "shame", "guilt", "relief", "frustration", "bitterness", "disappointment",
                    "wonder", "confusion", "emptiness", "restlessness", "unease",
                    "determination", "courage", "doubt", "suspicion",
                    "attachment", "detachment", "tenderness", "resentment",
                    "patience", "calm", "serenity", "overload", "burnout"
                ],
                music: [
                    "bar", "pattern", "cadence", "flow", "hook", "verse", "bridge", "freestyle", "rhyme", "assonance", "alliteration",
                    "timing", "swing", "pause", "breaths", "switch", "outro", "intro", "pocket", "delivery", "intonation",

                    // expansion
                    "bpm", "drums", "kick", "snare", "hihat", "808", "sub", "synth", "loop", "sample",
                    "drop", "build-up", "arrangement", "melody", "harmony", "chord",
                    "punchline", "bars", "sixteen", "adlib", "doubletime", "multisyllable",
                    "mix", "master", "reverb", "delay", "compression", "autotune", "pitch"
                ],
                tech: [
                    "algorithm", "profile", "feed", "trend", "viral", "trigger", "buffer", "cache", "cloud", "server", "password", "backup",
                    "settings", "privacy", "cookie", "glitch", "lag", "pixel", "download", "upload", "streaming", "subscription",
                    "paywall", "deadline", "captcha", "bug"
                ],
                society: [
                    "interview", "contract", "invoice", "meeting", "presentation", "courier", "package", "warranty", "review", "support",
                    "refund", "promo", "discount", "sales",

                    // expansion
                    "bureaucracy", "paperwork", "appointment", "signature", "form", "policy",
                    "paycheck", "overtime", "shift", "leave", "probation",
                    "mortgage", "loan", "rates", "interest",
                    "complaint", "return", "exchange", "receipt", "checkout",
                    "strike", "protest", "permit", "deadline pressure"
                ],
                food: [
                    "espresso", "spritz", "snack", "diet", "sugarcrash",

                    // expansion
                    "brunch", "happy hour", "takeout", "street food", "appetizer", "dessert",
                    "amaro", "prosecco", "negroni",
                    "portion", "seconds", "digestion", "cheat meal", "macros"
                ]
            },

            hard: {
                concepts: [
                    "metamorphosis", "synapse", "inevitable", "paradox", "interference", "symmetry", "transcendence", "entropy",
                    "ambivalence", "perception", "dissonance", "iridescence", "fragmentation", "precariousness", "dialectic", "overload",
                    "consciousness", "abstraction", "dimension", "relativity", "causality", "probability", "variable", "invariance", "inertia",
                    "resonance", "frequency", "amplitude", "vibration", "spectrum", "phenomenon", "synthesis", "hypothesis",
                    "paradigm", "contradiction", "interpretation", "metaphor", "allegory", "oxymoron", "simulation",

                    // expansion
                    "epiphany", "aporia", "ontology", "epistemology", "hermeneutics", "semiotics", "phenomenology",
                    "determinism", "indeterminacy", "emergence", "complexity", "chaos", "order", "system",
                    "stability", "instability", "singularity", "continuum", "discontinuity",
                    "duality", "plurality", "identity", "otherness", "liminality", "threshold",
                    "contingency", "necessity", "essence", "appearance",
                    "signal", "noise", "opacity", "transparency"
                ],
                psychology: [
                    "cognitivedissonance", "selfsabotage", "overstimulation", "addiction", "desensitization", "polarization",
                    "identity", "narrative", "propaganda", "manipulation", "conformity", "resilience", "disillusionment", "alienation",
                    "catharsis", "empathy", "apathy", "anomie", "crisis",

                    // expansion
                    "attachment", "trauma", "coping", "defense mechanisms", "repression", "projection", "sublimation",
                    "bias", "heuristic", "confirmation bias", "impostor syndrome", "burnout", "chronic stress",
                    "emotion regulation", "self-esteem", "self-efficacy", "locus of control",
                    "rumination", "mindfulness", "dissociation", "somatization",
                    "guilt", "shame", "boundaries", "codependency", "validation"
                ],
                tech: [
                    "cryptography", "authentication", "decentralization", "redundancy", "optimization", "latency", "compression",
                    "versioning", "containerization", "interoperability", "telemetry", "scalability", "observability", "orchestration",
                    "virtualization", "compilation", "concurrency", "idempotence"
                ],
                art: [
                    "chiaroscuro", "perspective", "saturation", "distortion", "synesthesia", "minimalism", "baroque", "surrealism",
                    "deconstruction", "intertextuality",

                    // expansion
                    "abstraction", "figuration", "realism", "hyperrealism", "impressionism", "expressionism", "cubism", "futurism",
                    "dada", "pop art", "conceptual art", "installation", "performance",
                    "composition", "contrast", "visual balance", "palette", "texture", "grain", "line", "contour", "volume", "depth",
                    "montage", "framing", "tracking shot", "zoom", "long take",
                    "symbolism", "iconography", "typography", "lettering", "atmosphere"
                ]
            }
        }
    }

};
/**********************
 * SEEDED RNG
 **********************/
function mulberry32(a) {
    return function () {
        let t = a += 0x6D2B79F5;
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
    for (let i = 0; i < 8; i++) {
        s += chars[Math.floor(Math.random() * chars.length)];
    }
    return s;
}
function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}
/**********************
 * STATE MANAGEMENT
 **********************/
const state = {
    running: false,
    frozen: false,

    seed: null,
    rng: null,
    queue: [],
    current_theme: null,

    wordBags: null,
    last_word: null,
    themeStreak: 0,
    lastThemes: [],

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
/**********************
 * DOM ELEMENTS
 **********************/
const el = {
    seedDisplay: document.getElementById("seedDisplay"),
    btnNewSeed: document.getElementById("btnNewSeed"),
    btnCopyLink: document.getElementById("btnCopyLink"),
    btnFullscreen: document.getElementById("btnFullscreen"),

    btnStart: document.getElementById("btnStart"),
    btnStop: document.getElementById("btnStop"),
    btnSkip: document.getElementById("btnSkip"),
    btnFreeze: document.getElementById("btnFreeze"),
    btnTapTempo: document.getElementById("btnTapTempo"),
    btnTapTempo2: document.getElementById("btnTapTempo2"),

    dockStart: document.getElementById("dockStart"),
    dockStop: document.getElementById("dockStop"),
    dockSkip: document.getElementById("dockSkip"),

    wordStage: document.getElementById("wordStage"),
    currentWord: document.getElementById("currentWord"),
    queueDisplay: document.getElementById("queueDisplay"),

    progressBar: document.getElementById("progressBar"),
    bpmDisplay: document.getElementById("bpmDisplay"),
    barDisplay: document.getElementById("barDisplay"),
    everyDisplay: document.getElementById("everyDisplay"),
    dots: [
        document.getElementById("dot1"),
        document.getElementById("dot2"),
        document.getElementById("dot3"),
        document.getElementById("dot4")
    ],

    bpmRange: document.getElementById("bpmRange"),
    bpmInput: document.getElementById("bpmInput"),
    everySelect: document.getElementById("everySelect"),
    countInSelect: document.getElementById("countInSelect"),
    langSelect: document.getElementById("langSelect"),
    diffSelect: document.getElementById("diffSelect"),

    beatSourceSelect: document.getElementById("beatSourceSelect"),
    volumeRange: document.getElementById("volumeRange"),
    volumeDisplay: document.getElementById("volumeDisplay"),
    loopToggle: document.getElementById("loopToggle"),

    ytControls: document.getElementById("ytControls"),
    fileControls: document.getElementById("fileControls"),
    ytInput: document.getElementById("ytInput"),
    btnLoadYt: document.getElementById("btnLoadYt"),
    fileInput: document.getElementById("fileInput"),

    mediaPanel: document.getElementById("mediaPanel"),
    sourceTypeBadge: document.getElementById("sourceTypeBadge"),
    autoBpmBadge: document.getElementById("autoBpmBadge"),
    detectedBpm: document.getElementById("detectedBpm"),

    ytPlayerSection: document.getElementById("ytPlayerSection"),
    filePlayerSection: document.getElementById("filePlayerSection"),
    fileAudio: document.getElementById("fileAudio"),
    fileName: document.getElementById("fileName"),
    fileDuration: document.getElementById("fileDuration"),

    toast: document.getElementById("toast"),
    toastIcon: document.getElementById("toastIcon"),
    toastMessage: document.getElementById("toastMessage")
};
const toast = bootstrap.Toast.getOrCreateInstance(el.toast, { delay: 2000 });
/**********************
 * UTILITY FUNCTIONS
 **********************/
function showToast(msg, type = "success") {
    el.toastMessage.textContent = msg;

    const iconMap = {
        success: "bi-check-circle-fill text-success",
        error: "bi-x-circle-fill text-danger",
        info: "bi-info-circle-fill text-info",
        warning: "bi-exclamation-circle-fill text-warning"
    };

    el.toastIcon.className = `bi ${iconMap[type] || iconMap.success}`;
    toast.show();
}

function getBpm() {
    const n = Number(el.bpmInput.value || el.bpmRange.value || 92);
    return clamp(Math.round(n), 60, 220);
}

function setBpm(n, source = null) {
    const v = clamp(Math.round(n), 60, 220);
    el.bpmInput.value = v;
    el.bpmRange.value = clamp(v, 60, 180);
    updateHUD();

    if (source === "auto") {
        state.detectedBpm = v;
        el.detectedBpm.textContent = v;
        el.autoBpmBadge.classList.remove("hidden");
        showToast(`BPM rilevato automaticamente: ${v}`, "success");
    }
}
function getEvery() {
    return clamp(Number(el.everySelect.value || 4), 1, 32);
}
function getCountInBars() {
    return clamp(Number(el.countInSelect.value || 1), 0, 8);
}
function getLang() {
    return el.langSelect.value;
}
function getDiff() {
    return el.diffSelect.value;
}
function updateHUD() {
    el.bpmDisplay.textContent = getBpm();
    el.everyDisplay.textContent = getEvery();
}

/**********************
 * RNG HELPERS (NEW)
 **********************/
function rand() {
    return state.rng ? state.rng() : Math.random();
}
function shuffleInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
/**********************
 * WORD MANAGEMENT
 **********************/
function setSeed(seedStr, notify = true) {
    state.seed = seedStr;
    state.rng = mulberry32(toSeedInt(seedStr));
    el.seedDisplay.textContent = seedStr;

    state.queue = [];
    state.current_theme = null;

    // ✅ reset varietà
    state.themeStreak = 0;
    state.lastThemes = [];
    state.last_word = null;
    resetWordBags();

    refillQueue();
    renderQueue();
    if (notify) showToast("Seed aggiornata", "success");
}

function resetWordBags() {
    const banks = WORDS[getLang()][getDiff()];
    state.wordBags = {};
    for (const theme of Object.keys(banks)) {
        state.wordBags[theme] = shuffleInPlace([...banks[theme]]);
    }
    state.last_word = null;
}

function pickTheme(themes, force = false) {
    // evita tornare subito agli ultimi 2 temi (anti ping-pong)
    const MAX_LAST = 2;
    const blocked = new Set(state.lastThemes.slice(-MAX_LAST));

    // se non forziamo, a volte restiamo sul tema corrente (ma non troppo)
    // ↑ questo aiuta a non cambiare a caso ogni singola parola
    if (!force && state.current_theme && rand() >= 0.35) {
        return state.current_theme;
    }

    // scegli un tema diverso e non bloccato (se possibile)
    const candidates = themes.filter(t => t !== state.current_theme && !blocked.has(t));
    const pool = candidates.length ? candidates : themes.filter(t => t !== state.current_theme);
    const chosen = pool.length ? pool[Math.floor(rand() * pool.length)] : themes[0];

    state.lastThemes.push(chosen);
    if (state.lastThemes.length > 6) state.lastThemes.shift();

    return chosen;
}

function pickWord() {
    const banks = WORDS[getLang()][getDiff()];
    const themes = Object.keys(banks);

    // 1) random separato per lo switch
    const rSwitch = rand();
    if (!state.current_theme || rSwitch < 0.2) {
        // 2) random separato per scegliere il tema
        if (themes.length > 1 && state.current_theme) {
            let t;
            do {
                t = themes[Math.floor(rand() * themes.length)];
            } while (t === state.current_theme);
            state.current_theme = t;
        } else {
            state.current_theme = themes[Math.floor(rand() * themes.length)];
        }
    }

    const bank = banks[state.current_theme];

    // 3) random separato per la parola + evita doppioni immediati
    let w = bank[Math.floor(rand() * bank.length)];
    if (bank.length > 1) {
        while (w === state.last_word) {
            w = bank[Math.floor(rand() * bank.length)];
        }
    }
    state.last_word = w;

    return w;
}
function refillQueue() {
    while (state.queue.length < 6) {
        state.queue.push(pickWord());
    }
}
function renderQueue() {
    const active = state.queue[0] || "—";
    el.currentWord.textContent = state.running
        ? active.toUpperCase()
        : (active === "—" ? "PREMI START" : active.toUpperCase());

    el.queueDisplay.innerHTML = "";
    state.queue.slice(0, 5).forEach((word, idx) => {
        const pill = document.createElement("div");
        pill.className = `queue-pill ${idx === 0 ? "active" : ""}`;
        pill.innerHTML = `
      <span class="pill-indicator"></span>
      <span class="pill-text">${word}</span>
    `;
        el.queueDisplay.appendChild(pill);
    });
}
function nextWord() {
    if (state.frozen) return;
    state.queue.shift();
    refillQueue();
    renderQueue();
}
/**********************
 * AUDIO ENGINE (SYNTH)
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
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(150, time);
    o.frequency.exponentialRampToValueAtTime(50, time + 0.08);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(0.6, time + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.15);
    o.connect(g).connect(state.master);
    o.start(time);
    o.stop(time + 0.18);
}
function hat(time, strong = false) {
    const ctx = state.audioCtx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const f = ctx.createBiquadFilter();
    o.type = "square";
    o.frequency.setValueAtTime(strong ? 650 : 850, time);
    f.type = "highpass";
    f.frequency.setValueAtTime(3500, time);
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(strong ? 0.22 : 0.13, time + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
    o.connect(f).connect(g).connect(state.master);
    o.start(time);
    o.stop(time + 0.07);
}
/**********************
 * BEAT SOURCE CONTROL
 **********************/
function applyVolume() {
    const v = clamp(Number(el.volumeRange.value || 80), 0, 100);
    const gain = v / 100;

    el.volumeDisplay.textContent = v;

    if (state.master) state.master.gain.value = gain;

    el.fileAudio.volume = gain;

    if (state.ytPlayer && state.ytReady) {
        try { state.ytPlayer.setVolume(Math.round(v)); } catch (e) { }
    }
}
function stopAllBeats() {
    try { el.fileAudio.pause(); } catch (e) { }

    if (state.ytPlayer && state.ytReady) {
        try { state.ytPlayer.pauseVideo(); } catch (e) { }
    }
}
function startBeatNow() {
    applyVolume();

    if (state.source === "file") {
        if (el.fileAudio.src) {
            el.fileAudio.loop = el.loopToggle.checked;
            el.fileAudio.currentTime = 0;
            el.fileAudio.play().catch(() => { });
        } else {
            showToast("Carica un file audio", "warning");
        }
    }

    if (state.source === "yt") {
        if (state.ytPlayer && state.ytReady) {
            try {
                state.ytPlayer.seekTo(0, true);
                state.ytPlayer.playVideo();
            } catch (e) { }
        } else {
            showToast("Carica un video YouTube", "warning");
        }
    }
}
function updateSourceBadge() {
    const badges = { synth: "SYNTH", yt: "YOUTUBE", file: "FILE" };
    el.sourceTypeBadge.textContent = badges[state.source] || "SYNTH";
}
function applyBeatSource() {
    state.source = el.beatSourceSelect.value;

    el.ytControls.classList.toggle("hidden", state.source !== "yt");
    el.fileControls.classList.toggle("hidden", state.source !== "file");

    el.mediaPanel.classList.toggle("hidden", state.source === "synth");
    el.ytPlayerSection.classList.toggle("hidden", state.source !== "yt");
    el.filePlayerSection.classList.toggle("hidden", state.source !== "file");

    stopAllBeats();
    if (state.running) startBeatNow();

    updateSourceBadge();
}
/**********************
 * YOUTUBE API
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
        if (u.hostname.includes("youtu.be")) {
            return u.pathname.replace("/", "").split("/")[0] || null;
        }
        const v = u.searchParams.get("v");
        if (v) return v;
        const parts = u.pathname.split("/").filter(Boolean);
        const idxShorts = parts.indexOf("shorts");
        if (idxShorts >= 0 && parts[idxShorts + 1]) return parts[idxShorts + 1];
        const idxEmbed = parts.indexOf("embed");
        if (idxEmbed >= 0 && parts[idxEmbed + 1]) return parts[idxEmbed + 1];
    } catch (e) {
        if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) return input.trim();
    }
    return null;
}
window.onYouTubeIframeAPIReady = function () {
    // API ready
};
function createOrLoadYouTubePlayer(videoId) {
    if (!videoId) return;

    loadYouTubeApiOnce();
    state.ytVideoId = videoId;

    el.mediaPanel.classList.remove("hidden");
    el.ytPlayerSection.classList.remove("hidden");
    el.filePlayerSection.classList.add("hidden");

    const wait = () => {
        if (window.YT && window.YT.Player) {
            if (state.ytPlayer) {
                try { state.ytPlayer.loadVideoById({ videoId }); } catch (e) { }
                state.ytReady = true;
                showToast("Video YouTube caricato", "success");
                tryDetectYouTubeBPM(videoId);
                return;
            }

            const loop = el.loopToggle.checked ? 1 : 0;

            state.ytReady = false;
            state.ytPlayer = new YT.Player("ytPlayer", {
                videoId,
                playerVars: {
                    playsinline: 1,
                    enablejsapi: 1,
                    rel: 0,
                    modestbranding: 1,
                    loop: loop,
                    playlist: loop ? videoId : undefined
                },
                events: {
                    onReady: () => {
                        state.ytReady = true;
                        applyVolume();
                        showToast("Player YouTube pronto", "success");
                        tryDetectYouTubeBPM(videoId);
                    },
                    onError: () => {
                        showToast("Errore: video non disponibile per embed", "error");
                    }
                }
            });
        } else {
            setTimeout(wait, 100);
        }
    };
    wait();
}
function tryDetectYouTubeBPM(videoId) {
    if (state.ytPlayer && state.ytReady) {
        try {
            const title = state.ytPlayer.getVideoData?.().title || "";
            const bpmMatch = title.match(/(\d{2,3})\s*bpm/i);
            if (bpmMatch) {
                const detectedBpm = parseInt(bpmMatch[1]);
                if (detectedBpm >= 60 && detectedBpm <= 220) setBpm(detectedBpm, "auto");
            }
        } catch (e) { }
    }
}
/**********************
 * FILE UPLOAD & BPM DETECTION
 **********************/
el.fileInput.addEventListener("change", async () => {
    const file = el.fileInput.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    el.fileAudio.src = url;
    el.fileAudio.loop = el.loopToggle.checked;

    el.fileName.textContent = file.name;

    el.filePlayerSection.classList.remove("hidden");
    el.mediaPanel.classList.remove("hidden");

    el.beatSourceSelect.value = "file";
    applyBeatSource();

    showToast("File caricato", "success");

    detectAudioBPM(file);

    el.fileAudio.addEventListener("loadedmetadata", () => {
        const duration = el.fileAudio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        el.fileDuration.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }, { once: true });
});

async function detectAudioBPM(file, {
    minBPM = 60,
    maxBPM = 200,
    analyzeSeconds = 60,
    envRate = 200
} = {}) {
    let audioContext;
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();

        const arrayBuffer = await file.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const sr = audioBuffer.sampleRate;
        const channels = audioBuffer.numberOfChannels;

        const maxSamples = Math.min(audioBuffer.length, Math.floor(analyzeSeconds * sr));
        const mono = new Float32Array(maxSamples);

        for (let ch = 0; ch < channels; ch++) {
            const data = audioBuffer.getChannelData(ch);
            for (let i = 0; i < maxSamples; i++) mono[i] += data[i];
        }
        for (let i = 0; i < maxSamples; i++) mono[i] /= channels;

        const hop = Math.max(1, Math.floor(sr / envRate));
        const win = hop * 2;
        const envLen = Math.floor((maxSamples - win) / hop);
        if (envLen < envRate * 5) return;

        const energy = new Float32Array(envLen);
        let prevE = 0;

        for (let e = 0, pos = 0; e < envLen; e++, pos += hop) {
            let sum = 0;
            for (let j = 0; j < win; j++) {
                const v = mono[pos + j];
                sum += v * v;
            }
            const rms = Math.sqrt(sum / win);
            const diff = rms - prevE;
            prevE = rms;
            energy[e] = diff > 0 ? diff : 0;
        }

        let maxVal = 0;
        for (let i = 0; i < energy.length; i++) if (energy[i] > maxVal) maxVal = energy[i];
        if (maxVal < 1e-6) return;
        for (let i = 0; i < energy.length; i++) energy[i] /= maxVal;

        const minLag = Math.floor((envRate * 60) / maxBPM);
        const maxLag = Math.floor((envRate * 60) / minBPM);

        let bestLag = -1;
        let bestScore = -Infinity;

        const N = energy.length;

        for (let lag = minLag; lag <= maxLag; lag++) {
            let sum = 0;
            for (let t = 0; t < N - lag; t++) {
                sum += energy[t] * energy[t + lag];
            }
            const score = sum / (N - lag);

            if (score > bestScore) {
                bestScore = score;
                bestLag = lag;
            }
        }

        if (bestLag <= 0) return;

        let bpm = (60 * envRate) / bestLag;

        while (bpm < minBPM) bpm *= 2;
        while (bpm > maxBPM) bpm /= 2;

        const bpmRounded = Math.round(bpm);

        if (bpmRounded >= minBPM && bpmRounded <= maxBPM) {
            setBpm(bpmRounded, "auto");
        }
    } catch (e) {
        console.error("BPM detection failed:", e);
    } finally {
        try { await audioContext?.close(); } catch { }
    }
}

/**********************
 * BEAT SCHEDULER
 **********************/
function scheduleBeat(beatNumber, time) {
    const inBar = beatNumber % 4;
    const barPos = inBar + 1;

    if (state.source === "synth") {
        ensureAudio();
        if (barPos === 1) {
            drumKick(time);
            hat(time, true);
        } else {
            hat(time, false);
        }
    }

    const ctx = state.audioCtx;
    const now = ctx ? ctx.currentTime : performance.now() / 1000;
    const delayMs = Math.max(0, (time - now) * 1000);

    window.setTimeout(() => {
        el.dots.forEach((d, idx) => {
            d.classList.toggle("active", idx === inBar);
        });
        el.barDisplay.textContent = String(barPos);

        const every = getEvery();
        const local = beatNumber % every;
        el.progressBar.style.width = `${((local + 1) / every) * 100}%`;

        if (state.countInBeatsLeft > 0) {
            state.countInBeatsLeft--;
            return;
        }

        if (!state.frozen && beatNumber > 0 && (beatNumber % every) === 0) {
            nextWord();
        }
    }, delayMs);
}
function nextNote() {
    const bpm = getBpm();
    const secondsPerBeat = 60.0 / bpm;
    state.nextNoteTime += secondsPerBeat;
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

    state.running = true;
    state.beatIndex = 0;
    state.nextNoteTime = state.audioCtx.currentTime + 0.08;
    state.countInBeatsLeft = getCountInBars() * 4;

    refillQueue();
    renderQueue();

    el.btnStart.disabled = true;
    el.btnStop.disabled = false;
    el.dockStart.disabled = true;
    el.dockStop.disabled = false;

    el.wordStage.classList.add("playing");

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

    el.btnStart.disabled = false;
    el.btnStop.disabled = true;
    el.dockStart.disabled = false;
    el.dockStop.disabled = true;

    el.wordStage.classList.remove("playing");

    el.progressBar.style.width = "0%";
    el.dots.forEach(d => d.classList.remove("active"));
    renderQueue();

    showToast("Sessione terminata", "info");
}
function skip() {
    nextWord();
    showToast("Parola skippata", "info");
}
function toggleFreeze() {
    state.frozen = !state.frozen;
    el.btnFreeze.classList.toggle("btn-primary-custom", state.frozen);
    el.btnFreeze.classList.toggle("btn-secondary-custom", !state.frozen);
    showToast(state.frozen ? "Freeze attivato" : "Freeze disattivato", "info");
}
async function copyLink() {
    const url = new URL(window.location.href);
    url.searchParams.set("seed", state.seed);
    url.searchParams.set("bpm", String(getBpm()));
    url.searchParams.set("every", String(getEvery()));
    url.searchParams.set("lang", getLang());
    url.searchParams.set("diff", getDiff());
    url.searchParams.set("beat", state.source);
    url.searchParams.set("countin", String(getCountInBars()));
    if (state.source === "yt" && state.ytVideoId) {
        url.searchParams.set("yt", state.ytVideoId);
    }

    try {
        await navigator.clipboard.writeText(url.toString());
        showToast("Link copiato negli appunti", "success");
    } catch (e) {
        showToast("Impossibile copiare il link", "error");
    }
}
async function fullscreen() {
    const elem = document.documentElement;
    try {
        if (!document.fullscreenElement) {
            await elem.requestFullscreen?.();
            showToast("Modalità fullscreen attivata", "success");
        } else {
            await document.exitFullscreen?.();
            showToast("Fullscreen disattivato", "info");
        }
    } catch (e) {
        showToast("Fullscreen non supportato", "error");
    }
}
function tapTempo() {
    const t = performance.now();
    state.tapTimes.push(t);
    state.tapTimes = state.tapTimes.slice(-6);

    if (state.tapTimes.length >= 3) {
        const diffs = [];
        for (let i = 1; i < state.tapTimes.length; i++) {
            diffs.push(state.tapTimes[i] - state.tapTimes[i - 1]);
        }
        const avg = diffs.reduce((a, b) => a + b) / diffs.length;
        const bpm = 60000 / avg;
        setBpm(bpm);
        showToast(`Tap BPM: ${Math.round(bpm)}`, "success");
    } else {
        showToast("Continua a battere il tempo...", "info");
    }
}
    /**********************
     * EVENT LISTENERS
     **********************/
document.addEventListener("DOMContentLoaded", () => {

    el.btnNewSeed.addEventListener("click", () => setSeed(randomSeedString()));
    el.btnCopyLink.addEventListener("click", copyLink);
    el.btnFullscreen?.addEventListener("click", fullscreen);

    el.btnStart.addEventListener("click", start);
    el.btnStop.addEventListener("click", stop);
    el.btnSkip.addEventListener("click", skip);
    el.btnFreeze.addEventListener("click", toggleFreeze);
    el.btnTapTempo?.addEventListener("click", tapTempo);
    el.btnTapTempo2?.addEventListener("click", tapTempo);

    el.dockStart?.addEventListener("click", start);
    el.dockStop?.addEventListener("click", stop);
    el.dockSkip?.addEventListener("click", skip);

    el.bpmRange.addEventListener("input", () => {
        el.bpmInput.value = el.bpmRange.value;
        updateHUD();
        el.autoBpmBadge.classList.add("hidden");
    });

    el.bpmInput.addEventListener("input", () => {
        el.bpmRange.value = clamp(+el.bpmInput.value || 92, 60, 180);
        updateHUD();
        el.autoBpmBadge.classList.add("hidden");
    });

    el.everySelect.addEventListener("change", updateHUD);

    // ✅ QUI: reset anche dei bags + anti-streak quando cambi lingua/diff
    [el.langSelect, el.diffSelect].forEach(x => {
        x.addEventListener("change", () => {
            state.current_theme = null;
            state.queue = [];

            state.themeStreak = 0;
            state.lastThemes = [];
            state.last_word = null;
            resetWordBags();

            refillQueue();
            renderQueue();
            showToast("Impostazioni aggiornate", "success");
        });
    });

    el.volumeRange.addEventListener("input", applyVolume);

    el.beatSourceSelect.addEventListener("change", applyBeatSource);

    el.btnLoadYt.addEventListener("click", () => {
        const input = el.ytInput.value.trim();
        const id = parseYouTubeId(input);
        if (!id) {
            showToast("URL YouTube non valido", "error");
            return;
        }
        createOrLoadYouTubePlayer(id);
        el.beatSourceSelect.value = "yt";
        applyBeatSource();
    });

    el.loopToggle.addEventListener("change", () => {
        el.fileAudio.loop = el.loopToggle.checked;
        if (state.source === "yt" && state.ytVideoId) {
            createOrLoadYouTubePlayer(state.ytVideoId);
        }
    });

    // Keyboard shortcuts
    window.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            e.preventDefault();
            skip();
        }
        if (e.code === "Enter") {
            e.preventDefault();
            state.running ? stop() : start();
        }
        if (e.key.toLowerCase() === "f") {
            toggleFreeze();
        }
        if (e.key.toLowerCase() === "t") {
            tapTempo();
        }
    });

    // iOS double-tap prevention
    let lastTouch = 0;
    document.addEventListener("touchend", (e) => {
        const now = Date.now();
        if (now - lastTouch <= 250) e.preventDefault();
        lastTouch = now;
    }, { passive: false });


});

/**********************
 * URL LOADING
 **********************/
function loadFromURL() {
    const url = new URL(window.location.href);
    const seed = url.searchParams.get("seed");
    const bpm = url.searchParams.get("bpm");
    const every = url.searchParams.get("every");
    const lang = url.searchParams.get("lang");
    const diff = url.searchParams.get("diff");
    const beat = url.searchParams.get("beat");
    const countin = url.searchParams.get("countin");
    const yt = url.searchParams.get("yt");

    if (bpm) setBpm(+bpm);
    else setBpm(92);

    if (every) el.everySelect.value = String(clamp(+every, 1, 32));
    if (lang && (lang === "it" || lang === "en")) el.langSelect.value = lang;
    if (diff && ["easy", "mid", "hard"].includes(diff)) el.diffSelect.value = diff;
    if (countin) el.countInSelect.value = String(clamp(+countin, 0, 8));

    setSeed(seed || randomSeedString(), false);

    if (beat && ["synth", "yt", "file"].includes(beat)) {
        el.beatSourceSelect.value = beat;
    }

    if (yt && /^[a-zA-Z0-9_-]{11}$/.test(yt)) {
        el.ytInput.value = `https://www.youtube.com/watch?v=${yt}`;
        createOrLoadYouTubePlayer(yt);
        el.beatSourceSelect.value = "yt";
    }

    applyBeatSource();
    updateHUD();
    renderQueue();
    applyVolume();
}
/**********************
 * INITIALIZATION
 **********************/
updateSourceBadge();
loadFromURL();
