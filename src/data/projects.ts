export type Language = 'it' | 'en'
type Localized = Record<Language, string>

export type Project = {
  slug: string
  number: string
  title: Localized
  kind: Localized
  summary: Localized
  problem: Localized
  features: Record<Language, string[]>
  architecture: Localized
  decision: Localized
  status: Localized
  technologies: string[]
  github: string
  image?: string
  imageAlt?: Localized
  cover: 'interior' | 'android' | 'rag' | 'forest'
  live?: string
}

export const featuredProjects: Project[] = [
  {
    slug: 'arredamenti-sormani', number: '01',
    title: { it: 'Arredamenti Sormani', en: 'Arredamenti Sormani' },
    kind: { it: 'Sviluppo web', en: 'Web development' },
    summary: { it: 'Un sito vetrina per esplorare cucine, armadi e realizzazioni attraverso contenuti e immagini organizzati.', en: 'A showcase website for browsing kitchens, wardrobes and completed interiors through structured content and imagery.' },
    problem: { it: 'Presentare un catalogo articolato in modo chiaro, mantenendo coerenti navigazione, contenuti e pagine di prodotto.', en: 'Present a varied catalogue clearly while keeping navigation, content and product pages consistent.' },
    features: { it: ['Pagine dedicate a cucine, armadi, piani, prodotti e lavori.', 'Cataloghi e realizzazioni gestiti in file di dati locali.', 'Menu e caroselli interattivi; contenuti delle pagine renderizzati sul server.'], en: ['Dedicated pages for kitchens, wardrobes, worktops, products and completed work.', 'Catalogues and projects managed in local data files.', 'Interactive menu and carousels; page content rendered on the server.'] },
    architecture: { it: 'Next.js App Router con React e CSS Modules. Dati separati in src/data, componenti riutilizzati per le sezioni di catalogo e metadati definiti per pagina.', en: 'Next.js App Router with React and CSS Modules. Data lives in src/data, catalogue sections share components, and metadata is defined per page.' },
    decision: { it: 'Il README documenta il rendering server delle pagine e limita JavaScript alle interazioni di menu e caroselli. La struttura dei dati permette di aggiornare cataloghi e marchi senza riscrivere i componenti.', en: 'The README documents server rendered pages and limits JavaScript to menu and carousel interactions. The data structure lets catalogues and brands change without rewriting components.' },
    status: { it: 'Repository pubblica. Il README indica una configurazione per Cloudflare Workers; non è stata verificata una pubblicazione attuale del sito.', en: 'Public repository. Its README describes a Cloudflare Workers configuration; current public deployment was not verified.' },
    technologies: ['Next.js', 'React', 'CSS Modules', 'Playwright'],
    github: 'https://github.com/sorma/ArredamentiSormani',
    image: '/images/arredamenti.webp', imageAlt: { it: 'Fotografia di una cucina dal progetto Arredamenti Sormani', en: 'Kitchen photograph from the Arredamenti Sormani project' }, cover: 'interior',
  },
  {
    slug: 'ristorante-app', number: '02',
    title: { it: 'RistoranteApp', en: 'RistoranteApp' },
    kind: { it: 'Applicazione Android', en: 'Android application' },
    summary: { it: 'Un’app Android per consultare i tavoli e gestire le comande, con persistenza locale e sincronizzazione in background.', en: 'An Android app for viewing tables and managing orders, with local storage and background synchronization.' },
    problem: { it: 'Rendere consultabili tavoli e ordini nel flusso operativo di un ristorante, conservando le modifiche anche prima della sincronizzazione.', en: 'Make tables and orders available during restaurant service while preserving changes before synchronization.' },
    features: { it: ['Selezione della sala e griglia dei tavoli con indicazione delle comande.', 'Creazione, lettura e cancellazione logica degli ordini.', 'Coda di sincronizzazione locale verso Firestore tramite WorkManager.'], en: ['Hall selection and a table grid showing order state.', 'Order creation, reading and soft deletion.', 'Local synchronization queue to Firestore using WorkManager.'] },
    architecture: { it: 'Kotlin e Jetpack Compose per l’interfaccia. Livelli data, domain e presentation; Room per i dati locali, Hilt per le dipendenze, Firestore e WorkManager per la sincronizzazione.', en: 'Kotlin and Jetpack Compose for the UI. Data, domain and presentation layers; Room for local data, Hilt for dependencies, Firestore and WorkManager for synchronization.' },
    decision: { it: 'Nel repository, i salvataggi aggiornano prima Room e accodano un’operazione; uno scheduler avvia poi il lavoro di sincronizzazione. Questo descrive il comportamento implementato, senza affermare risultati di affidabilità misurati.', en: 'In the repository, saves update Room first and enqueue an operation; a scheduler then starts synchronization. This describes implemented behavior without claiming measured reliability outcomes.' },
    status: { it: 'Codice sorgente disponibile. Non è documentata una release pubblica né è stato eseguito il progetto su dispositivo.', en: 'Source code is available. No public release is documented, and the app was not run on a device.' },
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt', 'WorkManager', 'Firestore'],
    github: 'https://github.com/sorma/RistoranteApp', cover: 'android',
  },
  {
    slug: 'sistema-rag', number: '03',
    title: { it: 'Sistema RAG', en: 'RAG System' },
    kind: { it: 'AI e dati', en: 'AI & data' },
    summary: { it: 'Una pipeline sperimentale che confronta configurazioni di retrieval e generazione su basi di conoscenza specifiche.', en: 'An experimental pipeline comparing retrieval and generation configurations over domain specific knowledge bases.' },
    problem: { it: 'Esaminare come chunking, trasformazione delle query, retrieval e reranking incidano sulle risposte di un sistema RAG.', en: 'Examine how chunking, query transformation, retrieval and reranking affect a RAG system’s answers.' },
    features: { it: ['Fase di ottimizzazione suddivisa in chunking/embedding, trasformazione della query e retrieval/reranking.', 'Confronto fra ricerca vettoriale, BM25 e ricerca ibrida con reciprocal rank fusion.', 'Fase generativa con runner, metriche e valutazione tramite un modello judge locale.'], en: ['Optimization phase split into chunking/embedding, query transformation and retrieval/reranking.', 'Comparison of vector search, BM25 and hybrid search using reciprocal rank fusion.', 'Generation phase with experiment runner, metrics and evaluation by a local judge model.'] },
    architecture: { it: 'Progetto Python con moduli separati per optimization_phase e generative_phase, configurazioni JSON e dataset di domande per due domini. Le dipendenze includono LlamaIndex e componenti di reranking.', en: 'Python project with separate optimization_phase and generative_phase modules, JSON configurations and question datasets for two domains. Dependencies include LlamaIndex and reranking components.' },
    decision: { it: 'Il codice di retrieval seleziona modalità vector, BM25 o hybrid e può applicare un Cross-Encoder locale. I risultati vengono salvati in file per riprendere esperimenti già eseguiti.', en: 'The retrieval code selects vector, BM25 or hybrid modes and can apply a local Cross-Encoder. Results are saved to files so completed experiments can be resumed.' },
    status: { it: 'Repository di ricerca pubblica. L’esecuzione richiede modelli e configurazioni locali/API; i risultati sperimentali non sono riportati qui.', en: 'Public research repository. Running it requires local models and API configuration; experimental results are not reported here.' },
    technologies: ['Python', 'LlamaIndex', 'BM25', 'Cross-Encoder', 'Ollama'],
    github: 'https://github.com/sorma/progetto-architetture-dati-main', cover: 'rag',
  },
  {
    slug: 'cipcalor', number: '04',
    title: { it: 'CipCalor', en: 'CipCalor' },
    kind: { it: 'Sito web online', en: 'Live website' },
    summary: { it: 'Un sito aziendale per presentare prodotti forestali, servizi, mezzi e contatti in un percorso di navigazione diretto.', en: 'A company website presenting forestry products, services, equipment and contacts through a direct navigation flow.' },
    problem: { it: 'Organizzare l’offerta e i recapiti di un’azienda forestale in pagine facilmente consultabili anche da telefono.', en: 'Organize a forestry company’s offering and contact details into pages that are easy to browse on mobile.' },
    features: { it: ['Pagine per prodotti, servizi, mezzi, certificazioni e contatti.', 'Immagini e documenti locali associati ai contenuti.', 'Versione pubblica consultabile su cipcalor.it.'], en: ['Pages for products, services, equipment, certifications and contacts.', 'Local images and documents associated with content.', 'Public website available at cipcalor.it.'] },
    architecture: { it: 'Next.js App Router e React, componenti condivisi per navigazione e footer, CSS Modules per le pagine. Il README documenta una build OpenNext per Cloudflare Workers.', en: 'Next.js App Router and React, shared navigation and footer components, CSS Modules for pages. The README documents an OpenNext build for Cloudflare Workers.' },
    decision: { it: 'I recapiti condivisi sono centralizzati in src/lib/company.js. Il repository distingue build Next.js, build del Worker e verifiche prima della pubblicazione.', en: 'Shared contact details are centralized in src/lib/company.js. The repository separates the Next.js build, Worker build and predeployment checks.' },
    status: { it: 'Sito online confermato: www.cipcalor.it. Il repository è pubblico.', en: 'Confirmed live website: www.cipcalor.it. The repository is public.' },
    technologies: ['Next.js', 'React', 'CSS Modules', 'Cloudflare Workers'],
    github: 'https://github.com/sorma/CipCalor', live: 'https://www.cipcalor.it',
    image: '/images/cipcalor.webp', imageAlt: { it: 'Fotografia della lavorazione forestale dal progetto CipCalor', en: 'Forestry photograph from the CipCalor project' }, cover: 'forest',
  },
]

export const otherProjects = [
  { title: { it: 'TrackWallet', en: 'TrackWallet' }, kind: { it: 'Android · Finanza personale', en: 'Android · Personal finance' }, text: { it: 'App di gruppo per conti, categorie, transazioni e riepiloghi.', en: 'Group app for accounts, categories, transactions and summaries.' }, technologies: ['Java', 'Firebase'], github: 'https://github.com/sorma/TrackWallet-master' },
  { title: { it: 'Chalet Gabriele', en: 'Chalet Gabriele' }, kind: { it: 'Web · Multilingua', en: 'Web · Multilingual' }, text: { it: 'Sito Next.js in quattro lingue con menu gestito tramite Cloudflare D1.', en: 'Four language Next.js website with a menu managed through Cloudflare D1.' }, technologies: ['Next.js', 'Cloudflare D1'], github: 'https://github.com/sorma/ChaletGabriele' },
  { title: { it: 'Compressione immagini con DCT', en: 'Image compression with DCT' }, kind: { it: 'Calcolo scientifico', en: 'Scientific computing' }, text: { it: 'Confronto della DCT2 e compressione a blocchi di immagini in scala di grigi.', en: 'DCT2 comparison and block compression of grayscale images.' }, technologies: ['Python', 'SciPy'], github: 'https://github.com/sorma/prog2-metodi-main' },
  { title: { it: 'Solutori iterativi per matrici sparse', en: 'Iterative solvers for sparse matrices' }, kind: { it: 'Calcolo scientifico', en: 'Scientific computing' }, text: { it: 'Libreria che confronta Jacobi, Gauss-Seidel e metodi del gradiente su sistemi lineari.', en: 'Library comparing Jacobi, Gauss-Seidel and gradient methods for linear systems.' }, technologies: ['Python', 'SciPy'], github: 'https://github.com/sorma/prog1bis-metodi-main' },
  { title: { it: 'Bank Marketing', en: 'Bank Marketing' }, kind: { it: 'Data science', en: 'Data science' }, text: { it: 'Notebook per esplorazione dati e confronto di modelli di classificazione.', en: 'Notebook for data exploration and comparison of classification models.' }, technologies: ['Python', 'scikit-learn'], github: 'https://github.com/sorma/ColabNotebooks' },
]
