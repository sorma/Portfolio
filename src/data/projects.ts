export type Language = "it" | "en";
export type ProjectGroup = "personal" | "university";
type Localized = Record<Language, string>;

export type Project = {
  slug: string;
  number: string;
  group: ProjectGroup;
  languages: string[];
  title: Localized;
  category: Localized;
  summary: Localized;
  problem: Localized;
  solution: Localized;
  features: Record<Language, string[]>;
  architecture: Localized;
  decisions: Localized;
  status: Localized;
  technologies: string[];
  github: string;
  live?: string;
  image?: string;
  imageAlt?: Localized;
  visual: "web" | "mobile" | "ai" | "data" | "science" | "business";
};

const projectData: Omit<Project, "group" | "languages">[] = [
  {
    slug: "arredamenti-sormani",
    number: "01",
    title: { it: "Arredamenti Sormani", en: "Arredamenti Sormani" },
    category: { it: "Sito web · Prodotto", en: "Website · Product" },
    summary: {
      it: "Sito vetrina per esplorare cucine, armadi, prodotti e realizzazioni attraverso cataloghi organizzati.",
      en: "A showcase website for browsing kitchens, wardrobes, products and completed interiors through structured catalogues.",
    },
    problem: {
      it: "Presentare un catalogo articolato in modo chiaro, mantenendo coerenti navigazione, contenuti e pagine di prodotto.",
      en: "Present a varied catalogue clearly while keeping navigation, content and product pages consistent.",
    },
    solution: {
      it: "Un sito multipagina che raccoglie cataloghi e realizzazioni in sezioni dedicate, con componenti condivisi per le pagine di categoria.",
      en: "A multi-page website that organizes catalogues and completed work into dedicated sections, with shared components for category pages.",
    },
    features: {
      it: [
        "Pagine per cucine, armadi, piani, prodotti e lavori.",
        "Cataloghi e realizzazioni gestiti in file di dati locali.",
        "Menu e caroselli interattivi; contenuti renderizzati sul server.",
      ],
      en: [
        "Dedicated pages for kitchens, wardrobes, worktops, products and completed work.",
        "Catalogues and projects managed in local data files.",
        "Interactive navigation and carousels; server-rendered page content.",
      ],
    },
    architecture: {
      it: "Next.js App Router con React e CSS Modules. I dati e i metadati sono separati dai componenti; CI esegue controlli e test browser.",
      en: "Next.js App Router with React and CSS Modules. Content and metadata are separate from components; CI runs checks and browser tests.",
    },
    decisions: {
      it: "Il rendering server mantiene i contenuti accessibili senza JavaScript; il codice client è riservato alle interazioni di menu e carosello. La configurazione documenta una distribuzione Cloudflare Workers.",
      en: "Server rendering keeps page content available without JavaScript; client code is limited to menu and carousel interactions. The repository documents a Cloudflare Workers deployment setup.",
    },
    status: {
      it: "Repository pubblica; il README documenta una configurazione Cloudflare. La pubblicazione attuale non è stata verificata.",
      en: "Public repository; the README documents a Cloudflare setup. A current deployment has not been verified.",
    },
    technologies: ["Next.js", "React", "CSS Modules", "Playwright"],
    github: "https://github.com/sorma/ArredamentiSormani",
    visual: "web",
  },
  {
    slug: "gestionale-sormani",
    number: "02",
    title: { it: "Gestionale Sormani", en: "Gestionale Sormani" },
    category: {
      it: "Applicazione web · Gestionale",
      en: "Web application · Operations",
    },
    summary: {
      it: "Gestionale web per seguire clienti, preventivi, ordini, fornitori, consegne, incassi e lavori.",
      en: "A web management system for tracking customers, quotes, orders, suppliers, deliveries, payments and jobs.",
    },
    problem: {
      it: "Raccogliere in un unico flusso le attività dalla richiesta del cliente alla consegna, con dati collegati tra loro.",
      en: "Bring the workflow from a customer request through delivery into one system, with connected records.",
    },
    solution: {
      it: "Applicazione monoutente con viste dedicate a clienti, fornitori, ordini, preventivi, consegne, lavori e analisi vendite.",
      en: "A single-user application with dedicated views for customers, suppliers, orders, quotes, deliveries, jobs and sales analysis.",
    },
    features: {
      it: [
        "Preventivi con alternative di fornitura, PDF e conversione in ordine.",
        "Stati e date di arrivo per riga, acconti, saldo e pianificazione delle consegne.",
        "Dashboard e analisi delle vendite per periodo e categoria.",
      ],
      en: [
        "Quotes with supplier alternatives, PDF export and conversion to orders.",
        "Per-item order status and arrival dates, deposits, balances and delivery planning.",
        "Dashboard and sales analysis by period and category.",
      ],
    },
    architecture: {
      it: "Monorepo con frontend React e TypeScript, API Express e TypeScript e PostgreSQL gestito tramite Prisma. Il backend concentra logica di dominio e accesso ai dati.",
      en: "A monorepo with a React and TypeScript frontend, Express and TypeScript API, and PostgreSQL accessed through Prisma. The backend holds domain logic and data access.",
    },
    decisions: {
      it: "Totali e margini sono calcolati lato server; prezzo di vendita e costo di acquisto sono distinti. Il README descrive vincoli sui flussi, migrazioni e script smoke per ordini, preventivi e lavori.",
      en: "Totals and margins are calculated on the server; sale price and purchase cost are kept separate. The README documents workflow constraints, migrations and smoke scripts for orders, quotes and jobs.",
    },
    status: {
      it: "Codice e guida operativa disponibili pubblicamente. L’avvio richiede configurazione locale di PostgreSQL; non è documentata una demo pubblica.",
      en: "Source and a user guide are public. Running it requires local PostgreSQL configuration; no public demo is documented.",
    },
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/sorma/GestionaleSormani",
    visual: "business",
  },
  {
    slug: "costopiatto",
    number: "03",
    title: { it: "CostoPiatto", en: "CostoPiatto" },
    category: {
      it: "Applicazione web · Ristorazione",
      en: "Web application · Food service",
    },
    summary: {
      it: "Applicazione locale per gestire ingredienti e ricette e calcolare il costo delle materie prime per porzione.",
      en: "A local application for managing ingredients and recipes and calculating ingredient cost per serving.",
    },
    problem: {
      it: "Tenere coerenti prezzi d’acquisto, quantità, unità di misura e costi delle ricette.",
      en: "Keep purchase prices, quantities, units and recipe costs consistent.",
    },
    solution: {
      it: "Interfaccia per anagrafica ingredienti e piatti, con anteprima e ricalcolo dei costi a partire dalle quantità registrate.",
      en: "An interface for ingredients and dishes, with cost previews and recalculation based on saved quantities.",
    },
    features: {
      it: [
        "Creazione e modifica di ingredienti e piatti.",
        "Conversioni tra unità compatibili di peso e volume.",
        "API con validazione dei dati e persistenza PostgreSQL.",
      ],
      en: [
        "Create and edit ingredients and dishes.",
        "Convert between compatible weight and volume units.",
        "An API with input validation and PostgreSQL persistence.",
      ],
    },
    architecture: {
      it: "Workspace npm con frontend React, TypeScript, Vite e React Router; backend Express e TypeScript; PostgreSQL e Prisma.",
      en: "An npm workspace with a React, TypeScript, Vite and React Router frontend; an Express and TypeScript backend; PostgreSQL and Prisma.",
    },
    decisions: {
      it: "Il calcolo usa Decimal.js per evitare l’aritmetica monetaria in virgola mobile e valida la compatibilità delle unità prima di calcolare i costi.",
      en: "Cost calculations use Decimal.js to avoid floating-point money arithmetic and validate unit compatibility before calculating.",
    },
    status: {
      it: "Repository pubblica con test per calcoli e validazione. Il README specifica che non è configurata una pubblicazione: l’applicazione è prevista per uso locale.",
      en: "Public repository with calculation and validation tests. The README says no deployment is configured; the application is intended for local use.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/sorma/CostoPiatto",
    visual: "business",
  },
  {
    slug: "cipcalor",
    number: "04",
    title: { it: "CipCalor", en: "CipCalor" },
    category: { it: "Sito web · Azienda", en: "Website · Business" },
    summary: {
      it: "Sito aziendale per presentare prodotti forestali, servizi, mezzi e contatti.",
      en: "A company website presenting forestry products, services, equipment and contact details.",
    },
    problem: {
      it: "Organizzare l’offerta e i recapiti dell’azienda in pagine semplici da consultare anche da telefono.",
      en: "Organize the company’s offering and contact details into pages that are easy to browse on mobile.",
    },
    solution: {
      it: "Sito multipagina con sezioni dedicate ai prodotti, ai servizi, ai mezzi, alle certificazioni e ai contatti.",
      en: "A multi-page site with sections for products, services, equipment, certifications and contacts.",
    },
    features: {
      it: [
        "Navigazione tra pagine aziendali e catalogo.",
        "Immagini e documenti locali associati ai contenuti.",
        "Sito pubblico disponibile su cipcalor.it.",
      ],
      en: [
        "Navigation across company information and catalogue pages.",
        "Local images and documents associated with content.",
        "Public website at cipcalor.it.",
      ],
    },
    architecture: {
      it: "Next.js App Router, React, componenti condivisi e CSS Modules. Il repository documenta una build OpenNext per Cloudflare Workers.",
      en: "Next.js App Router, React, shared components and CSS Modules. The repository documents an OpenNext build for Cloudflare Workers.",
    },
    decisions: {
      it: "I recapiti condivisi sono centralizzati nei dati aziendali; build, controlli e pubblicazione Worker sono passaggi separati.",
      en: "Shared contact details are centralized in company data; Worker build, checks and deployment are separate steps.",
    },
    status: {
      it: "Sito pubblico: cipcalor.it. Repository sorgente pubblica.",
      en: "Live website: cipcalor.it. Public source repository.",
    },
    technologies: ["Next.js", "React", "CSS Modules", "Cloudflare Workers"],
    github: "https://github.com/sorma/CipCalor",
    live: "https://www.cipcalor.it",
    visual: "web",
  },
  {
    slug: "ristorante-app",
    number: "05",
    title: { it: "RistoranteApp", en: "RistoranteApp" },
    category: { it: "Applicazione Android", en: "Android application" },
    summary: {
      it: "App Android per consultare i tavoli e gestire le comande, con archiviazione locale e sincronizzazione.",
      en: "An Android app for viewing tables and managing orders, with local storage and synchronization.",
    },
    problem: {
      it: "Rendere consultabili tavoli e ordini durante il servizio, mantenendo le modifiche in attesa della sincronizzazione.",
      en: "Keep tables and orders accessible during service while preserving changes before synchronization.",
    },
    solution: {
      it: "Applicazione nativa con selezione della sala, griglia dei tavoli e gestione degli ordini.",
      en: "A native application with hall selection, a table grid and order management.",
    },
    features: {
      it: [
        "Creazione, lettura e cancellazione logica degli ordini.",
        "Dati locali in Room e coda di sincronizzazione verso Firestore.",
        "Lavoro in background pianificato con WorkManager.",
      ],
      en: [
        "Create, read and soft-delete orders.",
        "Local Room storage and a synchronization queue for Firestore.",
        "Background work scheduled with WorkManager.",
      ],
    },
    architecture: {
      it: "Kotlin e Jetpack Compose; livelli data, domain e presentation; Room, Hilt, Firestore e WorkManager.",
      en: "Kotlin and Jetpack Compose; data, domain and presentation layers; Room, Hilt, Firestore and WorkManager.",
    },
    decisions: {
      it: "I salvataggi aggiornano prima Room e accodano un’operazione; uno scheduler avvia poi la sincronizzazione.",
      en: "Saves update Room first and enqueue an operation; a scheduler starts synchronization afterward.",
    },
    status: {
      it: "Codice sorgente pubblico. Non è documentata una release e l’app non è stata verificata su un dispositivo durante questo audit.",
      en: "Public source code. No release is documented, and the app was not verified on a device during this audit.",
    },
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Hilt",
      "WorkManager",
      "Firestore",
    ],
    github: "https://github.com/sorma/RistoranteApp",
    visual: "mobile",
  },
  {
    slug: "chalet-time",
    number: "06",
    title: { it: "Chalet-Time", en: "Chalet-Time" },
    category: { it: "Applicazione Android", en: "Android application" },
    summary: {
      it: "App Android per registrare le ore lavorate e consultare le presenze mensili dei dipendenti.",
      en: "An Android app for logging working hours and reviewing employees’ monthly records.",
    },
    problem: {
      it: "Registrare le ore dei dipendenti e permettere agli amministratori di consultare i dati per persona e mese.",
      en: "Record employee hours and let administrators review data by employee and month.",
    },
    solution: {
      it: "Flussi separati per dipendenti e amministratori, con accesso autenticato e dati salvati su Firebase.",
      en: "Separate employee and administrator flows, with authenticated access and data stored in Firebase.",
    },
    features: {
      it: [
        "Registrazione e recupero password via email.",
        "Inserimento ore per data con incrementi di mezz’ora.",
        "Ricerca dei dipendenti e consultazione delle ore per mese.",
      ],
      en: [
        "Email registration and password recovery.",
        "Log hours by date in half-hour increments.",
        "Search employees and review hours by month.",
      ],
    },
    architecture: {
      it: "App nativa Java con layout XML, architettura MVVM, ViewModel e LiveData, livelli repository e data source basati su Firebase Authentication e Cloud Firestore.",
      en: "A native Java app with XML layouts, MVVM, ViewModels and LiveData, repository and data-source layers using Firebase Authentication and Cloud Firestore.",
    },
    decisions: {
      it: "Il documento architetturale descrive la separazione tra UI, stato delle schermate, repository e Firebase; include test dei ViewModel e test Android di navigazione e layout.",
      en: "The architecture document describes separation between UI, screen state, repositories and Firebase; it includes ViewModel tests and Android navigation and layout tests.",
    },
    status: {
      it: "Repository pubblica; l’avvio richiede un progetto Firebase configurato localmente e un dispositivo o emulatore Android.",
      en: "Public repository; running it requires a locally configured Firebase project and an Android device or emulator.",
    },
    technologies: [
      "Java",
      "Android",
      "Firebase Authentication",
      "Cloud Firestore",
      "MVVM",
    ],
    github: "https://github.com/sorma/Chalet-Time",
    visual: "mobile",
  },
  {
    slug: "chalet-gabriele",
    number: "07",
    title: {
      it: "Polentoteca Chalet Gabriele",
      en: "Polentoteca Chalet Gabriele",
    },
    category: { it: "Sito web · Multilingua", en: "Website · Multilingual" },
    summary: {
      it: "Sito per un ristorante con pagine in quattro lingue e menu gestito tramite database.",
      en: "A restaurant website with four language versions and a database-managed menu.",
    },
    problem: {
      it: "Presentare contenuti e menu del ristorante a visitatori in lingue diverse, con una gestione dei dati dedicata.",
      en: "Present restaurant information and menus to visitors in different languages with dedicated data management.",
    },
    solution: {
      it: "Sito Next.js con contenuti localizzati, endpoint di lettura del menu e interfaccia mappa caricata su richiesta.",
      en: "A Next.js site with localized content, a read-only menu endpoint and a map interface loaded on request.",
    },
    features: {
      it: [
        "Italiano, inglese, spagnolo e tedesco.",
        "Menu collegato a Cloudflare D1 e cache lato Worker.",
        "Pagine informative, legali e verifiche di rilascio documentate.",
      ],
      en: [
        "Italian, English, Spanish and German.",
        "Menu connected to Cloudflare D1 with Worker-side caching.",
        "Informational and legal pages with documented release checks.",
      ],
    },
    architecture: {
      it: "Next.js App Router e React; Cloudflare Workers tramite OpenNext; Cloudflare D1 per i dati del menu.",
      en: "Next.js App Router and React; Cloudflare Workers through OpenNext; Cloudflare D1 for menu data.",
    },
    decisions: {
      it: "Il repository include migrazioni e verifiche database, test su SQLite e controlli espliciti prima della pubblicazione; mappe e servizi esterni vengono caricati solo su richiesta.",
      en: "The repository includes migrations and database checks, SQLite tests and explicit release checks; maps and external services load only on request.",
    },
    status: {
      it: "Codice pubblico con configurazione Cloudflare. Il README segnala requisiti aziendali e legali da confermare prima della pubblicazione definitiva.",
      en: "Public source with Cloudflare configuration. The README lists business and legal details to confirm before final release.",
    },
    technologies: ["Next.js", "React", "Cloudflare D1", "Cloudflare Workers"],
    github: "https://github.com/sorma/ChaletGabriele",
    visual: "web",
  },
  {
    slug: "sistema-rag",
    number: "08",
    title: { it: "Sistema RAG", en: "RAG System" },
    category: {
      it: "Ricerca · Intelligenza artificiale",
      en: "Research · Artificial intelligence",
    },
    summary: {
      it: "Pipeline sperimentale per confrontare strategie di retrieval e generazione su basi di conoscenza specifiche.",
      en: "An experimental pipeline comparing retrieval and generation strategies over domain-specific knowledge bases.",
    },
    problem: {
      it: "Esaminare come chunking, trasformazione delle query, retrieval e reranking incidano sulle risposte di un sistema RAG.",
      en: "Explore how chunking, query transformation, retrieval and reranking affect a RAG system’s responses.",
    },
    solution: {
      it: "Esperimenti divisi tra ottimizzazione del recupero dei documenti e generazione, con configurazioni e risultati salvati.",
      en: "Experiments split between retrieval optimization and generation, with saved configurations and results.",
    },
    features: {
      it: [
        "Confronto tra ricerca vettoriale, BM25 e modalità ibrida con reciprocal rank fusion.",
        "Trasformazione delle query e reranking locale o basato su LLM.",
        "Runner, metriche, grafici e valutazione con modello judge.",
      ],
      en: [
        "Compare vector search, BM25 and hybrid retrieval with reciprocal rank fusion.",
        "Query transformation and local or LLM-based reranking.",
        "Experiment runner, metrics, plots and judge-model evaluation.",
      ],
    },
    architecture: {
      it: "Progetto Python con moduli distinti per optimization_phase e generative_phase, configurazioni JSON e dataset di domande per due domini; include LlamaIndex e componenti di reranking.",
      en: "A Python project with separate optimization_phase and generative_phase modules, JSON configurations and question sets for two domains; uses LlamaIndex and reranking components.",
    },
    decisions: {
      it: "Le modalità vector, BM25 e hybrid sono selezionabili nella configurazione; risultati e cache vengono scritti su file per riprendere gli esperimenti.",
      en: "Vector, BM25 and hybrid modes are configurable; results and caches are written to files so experiments can be resumed.",
    },
    status: {
      it: "Repository di ricerca pubblica con risultati salvati. L’esecuzione richiede modelli locali e configurazione di servizi/API.",
      en: "Public research repository with saved results. Running it requires local models and service/API configuration.",
    },
    technologies: ["Python", "LlamaIndex", "BM25", "Cross-Encoder", "Ollama"],
    github: "https://github.com/sorma/progetto-architetture-dati-main",
    visual: "ai",
  },
  {
    slug: "trackwallet",
    number: "09",
    title: { it: "TrackWallet", en: "TrackWallet" },
    category: {
      it: "Applicazione Android · Progetto di gruppo",
      en: "Android application · Group project",
    },
    summary: {
      it: "Applicazione Android per organizzare conti, transazioni, categorie, abbonamenti e riepiloghi personali.",
      en: "An Android application for organizing accounts, transactions, categories, subscriptions and personal summaries.",
    },
    problem: {
      it: "Raccogliere movimenti e conti in un’app con riepiloghi per periodo e categoria.",
      en: "Bring transactions and accounts together in an app with summaries by period and category.",
    },
    solution: {
      it: "Applicazione con schermate per conti, entrate, spese, categorie, abbonamenti e riepiloghi.",
      en: "An app with screens for accounts, income, expenses, categories, subscriptions and summaries.",
    },
    features: {
      it: [
        "Gestione di conti, categorie, transazioni e abbonamenti.",
        "Riepiloghi mensili e per categoria.",
        "Persistenza e autenticazione basate sui servizi Firebase usati nel progetto.",
      ],
      en: [
        "Manage accounts, categories, transactions and subscriptions.",
        "Monthly and category summaries.",
        "Persistence and authentication using the Firebase services in the project.",
      ],
    },
    architecture: {
      it: "App Android in Java con schermate e ViewModel, repository, modelli e gestione Firebase; il repository include documentazione e screenshot dell’interfaccia.",
      en: "A Java Android app with screens and ViewModels, repositories, models and Firebase management; the repository includes documentation and interface screenshots.",
    },
    decisions: {
      it: "Il codice separa modelli, repository e schermate; alcuni servizi di backend sono implementati in Firebase Functions.",
      en: "The code separates models, repositories and screens; some backend services are implemented with Firebase Functions.",
    },
    status: {
      it: "Repository pubblica. Il progetto è indicato come lavoro di gruppo; il contributo individuale non è attribuito nei documenti consultati.",
      en: "Public repository. It is identified as a group project; the reviewed documents do not assign individual contributions.",
    },
    technologies: ["Java", "Android", "Firebase", "Firebase Functions"],
    github: "https://github.com/sorma/TrackWallet-master",
    visual: "mobile",
  },
  {
    slug: "mot-big-data-analysis",
    number: "10",
    title: { it: "Analisi Big Data MOT", en: "MOT Big Data Analysis" },
    category: {
      it: "Analisi dati · Trasporti",
      en: "Data analysis · Transport",
    },
    summary: {
      it: "Pipeline Apache Spark per preparare e analizzare risultati di revisioni veicoli per età e chilometraggio.",
      en: "An Apache Spark pipeline for preparing and analyzing vehicle inspection results by age and mileage.",
    },
    problem: {
      it: "Preparare dati di test MOT e calcolare distribuzioni e tassi di esito su segmenti di veicoli.",
      en: "Prepare MOT test data and calculate outcome distributions and failure rates across vehicle segments.",
    },
    solution: {
      it: "Pipeline che carica CSV, pulisce i record, crea caratteristiche analitiche e produce tabelle aggregate in Parquet e CSV.",
      en: "A pipeline that loads CSV files, cleans records, creates analytical features and writes aggregate tables in Parquet and CSV.",
    },
    features: {
      it: [
        "Distribuzione dell’età dei veicoli.",
        "Analisi degli esiti per età, chilometraggio e combinazione dei due.",
        "Controlli di qualità su valori nulli, conflitti e record.",
      ],
      en: [
        "Vehicle age distribution.",
        "Outcome analysis by age, mileage and their combination.",
        "Data quality checks for nulls, conflicts and records.",
      ],
    },
    architecture: {
      it: "Codice Python organizzato in moduli di ingestion, preprocessing, data quality e analisi; esecuzione locale Spark configurata in un container Docker.",
      en: "Python code organized into ingestion, preprocessing, data quality and analysis modules; local Spark execution configured in a Docker container.",
    },
    decisions: {
      it: "La pipeline filtra classi e tipi di test esplicitamente e distingue tasso di fallimento finale da quello iniziale includendo i casi PRS. La repository non contiene un README descrittivo.",
      en: "The pipeline explicitly filters test classes and types and distinguishes final from initial failure rates by including PRS outcomes. The repository has no descriptive README.",
    },
    status: {
      it: "Repository pubblica con codice, dati campione e risultati derivati. Scopo e funzionamento sono ricostruiti dal codice; non è indicata una demo.",
      en: "Public repository with code, sample data and derived results. Purpose and behavior are inferred from source code; no demo is listed.",
    },
    technologies: ["Python", "Apache Spark", "PySpark", "Docker", "Parquet"],
    github: "https://github.com/sorma/mot-big-data-analysis",
    visual: "data",
  },
  {
    slug: "dct-immagini",
    number: "11",
    title: {
      it: "DCT e compressione immagini",
      en: "DCT and image compression",
    },
    category: {
      it: "Progetto universitario · Calcolo scientifico",
      en: "University project · Scientific computing",
    },
    summary: {
      it: "Confronto tra implementazioni della DCT2 e applicazione della trasformata alla compressione a blocchi.",
      en: "A comparison of DCT2 implementations and an application of the transform to block-based compression.",
    },
    problem: {
      it: "Studiare l’implementazione della trasformata discreta del coseno e il compromesso tra qualità e compressione delle immagini.",
      en: "Study discrete cosine transform implementations and the trade-off between image quality and compression.",
    },
    solution: {
      it: "Due parti: confronto della DCT2 manuale e SciPy, e interfaccia per comprimere immagini in scala di grigi a blocchi.",
      en: "Two parts: compare a manual DCT2 with SciPy, and provide an interface for block-compressing grayscale images.",
    },
    features: {
      it: [
        "Test e grafici dei tempi di esecuzione.",
        "Compressione a blocchi con analisi PSNR e SSIM.",
        "Interfaccia grafica e immagini di prova incluse.",
      ],
      en: [
        "Execution-time tests and plots.",
        "Block compression with PSNR and SSIM analysis.",
        "A graphical interface and bundled test images.",
      ],
    },
    architecture: {
      it: "Progetto Python diviso in parte1 e parte2, con moduli separati per trasformata, test, compressione, I/O immagini e interfaccia.",
      en: "A Python project split into part1 and part2, with separate modules for transforms, tests, compression, image I/O and the interface.",
    },
    decisions: {
      it: "Le relazioni descrivono l’analisi e i risultati; il repository elenca Francesco tra gli autori senza ripartire i contributi.",
      en: "Project reports describe the analysis and results; the repository lists Francesco as an author without dividing individual contributions.",
    },
    status: {
      it: "Progetto universitario pubblico. I documenti indicano Francesco tra gli autori; responsabilità individuali non specificate.",
      en: "Public university project. The documents list Francesco as an author; individual responsibilities are not specified.",
    },
    technologies: ["Python", "NumPy", "SciPy", "scikit-image", "Pillow"],
    github: "https://github.com/sorma/prog2-metodi-main",
    visual: "science",
  },
  {
    slug: "solutori-iterativi",
    number: "12",
    title: {
      it: "Solutori iterativi per matrici sparse",
      en: "Iterative solvers for sparse matrices",
    },
    category: {
      it: "Progetto universitario · Calcolo scientifico",
      en: "University project · Scientific computing",
    },
    summary: {
      it: "Libreria e strumenti di confronto per metodi iterativi applicati a sistemi lineari sparsi.",
      en: "A library and comparison tools for iterative methods applied to sparse linear systems.",
    },
    problem: {
      it: "Confrontare metodi iterativi al variare delle matrici e della tolleranza di convergenza.",
      en: "Compare iterative methods across matrices and convergence tolerances.",
    },
    solution: {
      it: "Implementazione di più solutori con strumenti per misurare iterazioni, errore relativo e tempi.",
      en: "Implement several solvers with tools to measure iterations, relative error and runtime.",
    },
    features: {
      it: [
        "Metodi di Jacobi, Gauss-Seidel, gradiente e gradiente coniugato.",
        "Supporto a matrici sparse in formato Matrix Market.",
        "Confronti e grafici per più tolleranze.",
      ],
      en: [
        "Jacobi, Gauss-Seidel, steepest descent and conjugate gradient methods.",
        "Support for sparse matrices in Matrix Market format.",
        "Comparisons and plots across multiple tolerances.",
      ],
    },
    architecture: {
      it: "Progetto Python con una libreria locale linear_iterative_solvers_lib e moduli di parsing, matrici, utilità e grafici.",
      en: "A Python project with a local linear_iterative_solvers_lib package and modules for parsing, matrices, utilities and plots.",
    },
    decisions: {
      it: "Il runner consente di scegliere tolleranza, limite di iterazioni e variante SciPy del metodo Gauss-Seidel. La repository elenca Francesco tra gli autori senza ripartire i contributi.",
      en: "The runner accepts a tolerance, iteration limit and SciPy variant of Gauss-Seidel. The repository lists Francesco as an author without assigning individual contributions.",
    },
    status: {
      it: "Progetto universitario pubblico con documentazione e grafici dei risultati; contributi individuali non specificati.",
      en: "Public university project with documentation and result plots; individual contributions are not specified.",
    },
    technologies: ["Python", "SciPy", "NumPy", "Matplotlib", "pandas"],
    github: "https://github.com/sorma/prog1bis-metodi-main",
    visual: "science",
  },
  {
    slug: "bank-marketing",
    number: "13",
    title: { it: "Bank Marketing", en: "Bank Marketing" },
    category: {
      it: "Analisi dati · Machine learning",
      en: "Data analysis · Machine learning",
    },
    summary: {
      it: "Notebook per esplorare dati di campagne bancarie e confrontare modelli di classificazione.",
      en: "A notebook for exploring bank campaign data and comparing classification models.",
    },
    problem: {
      it: "Valutare modelli che prevedono l’adesione di un cliente a una campagna per un deposito a termine.",
      en: "Evaluate models that predict whether a customer subscribes to a term-deposit campaign.",
    },
    solution: {
      it: "Notebook con analisi esplorativa, preparazione delle variabili e confronto con baseline.",
      en: "A notebook with exploratory analysis, feature preparation and model comparison against baselines.",
    },
    features: {
      it: [
        "Feature engineering e split riproducibile.",
        "Confronto tra Decision Tree e Support Vector Machine.",
        "Ricerca di iperparametri e valutazione dei modelli.",
      ],
      en: [
        "Feature engineering and a reproducible data split.",
        "Compare Decision Tree and Support Vector Machine models.",
        "Hyperparameter search and model evaluation.",
      ],
    },
    architecture: {
      it: "Repository composta da notebook Jupyter e dipendenze Python; scarica il dataset tramite kagglehub durante l’esecuzione.",
      en: "A repository of Jupyter notebooks and Python dependencies; it downloads the dataset through kagglehub at runtime.",
    },
    decisions: {
      it: "Il README documenta random_state=42 per split e modelli principali. L’accesso al dataset può richiedere configurazione Kaggle.",
      en: "The README documents random_state=42 for the split and main models. Dataset access may require Kaggle configuration.",
    },
    status: {
      it: "Notebook pubblico, senza demo; la riproduzione dipende dall’accesso al dataset Kaggle indicato dal progetto.",
      en: "Public notebook with no demo; reproduction depends on access to the Kaggle dataset referenced by the project.",
    },
    technologies: ["Python", "pandas", "scikit-learn", "Jupyter", "KaggleHub"],
    github: "https://github.com/sorma/ColabNotebooks",
    visual: "data",
  },
];

const universityProjects = new Set([
  "trackwallet",
  "sistema-rag",
  "mot-big-data-analysis",
  "dct-immagini",
  "solutori-iterativi",
  "bank-marketing",
]);

const projectLanguages: Record<string, string[]> = {
  "arredamenti-sormani": ["JavaScript"],
  "gestionale-sormani": ["TypeScript"],
  costopiatto: ["TypeScript"],
  cipcalor: ["JavaScript"],
  "ristorante-app": ["Kotlin"],
  "chalet-time": ["Java"],
  "chalet-gabriele": ["JavaScript"],
  "sistema-rag": ["Python"],
  trackwallet: ["Java"],
  "mot-big-data-analysis": ["Python"],
  "dct-immagini": ["Python"],
  "solutori-iterativi": ["Python"],
  "bank-marketing": ["Python"],
};

export const projectCatalog: Project[] = projectData.map((project) => ({
  ...project,
  group: universityProjects.has(project.slug) ? "university" : "personal",
  languages: projectLanguages[project.slug] ?? [],
}));
