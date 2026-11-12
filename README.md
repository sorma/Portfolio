# Portfolio di Francesco Sormani

Portfolio bilingue italiano/inglese realizzato con React, TypeScript, Vite, React Router e CSS Modules. L'interfaccia usa un tema scuro, una hero predisposta per la fotografia personale e schede progetto generate da un catalogo centralizzato. Non sono richiesti backend, analytics o servizi esterni.

## Avvio

Richiede Node.js 22 o successivo.

```sh
npm install
npm run dev
```

Altri controlli disponibili:

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Fotografia della hero

Inserire la fotografia personale in `public/images/profile-hero.jpg`. La hero usa `object-fit: cover`; per regolare il ritaglio desktop e mobile modificare `--hero-object-position` e `--hero-object-position-mobile` in `src/styles/global.css`. La pagina mostra un fondale tipografico finché il file non viene aggiunto. Non è inclusa alcuna foto stock o generata.

## Catalogo dei progetti

`src/data/projects.ts` contiene `projectCatalog`, l'elenco unico dei progetti e i contenuti italiani/inglesi: descrizione, contesto, soluzione, funzionalità, architettura, scelte tecniche, stato, linguaggi, tecnologie e collegamenti. Ogni progetto ha il campo `group` per la categoria personale o universitaria. Per aggiungere una scheda, creare uno slug univoco e aggiungere i dati di lingua e categoria; il carosello e il percorso `/progetti/:slug` vengono generati dal catalogo. Le competenze in `src/data/copy.ts` collegano le tecnologie alle schede.

## Audit GitHub e inventario

Il profilo è stato enumerato tramite l'API pubblica con `per_page=100` (14 repository, tutte non fork e non archiviate); le copie temporanee per la lettura di README, manifest, struttura e sorgenti sono state conservate fuori dal repository del portfolio.

| Repository                      | Classificazione                | Presenza nel portfolio   |
| ------------------------------- | ------------------------------ | ------------------------ |
| ArredamentiSormani              | Sito web                       | Sì                       |
| Chalet-Time                     | Applicazione Android           | Sì                       |
| ChaletGabriele                  | Sito web multilingua           | Sì                       |
| CipCalor                        | Sito web online                | Sì                       |
| ColabNotebooks                  | Notebook di analisi dati       | Sì, Bank Marketing       |
| CostoPiatto                     | Applicazione web               | Sì                       |
| GestionaleSormani               | Sistema gestionale web         | Sì                       |
| mot-big-data-analysis           | Progetto di analisi dati       | Sì                       |
| Portfolio                       | Portfolio personale            | È il repository corrente |
| prog1bis-metodi-main            | Progetto universitario         | Sì, solutori iterativi   |
| prog2-metodi-main               | Progetto universitario         | Sì, DCT e compressione   |
| progetto-architetture-dati-main | Ricerca/sperimentazione RAG    | Sì                       |
| RistoranteApp                   | Applicazione Android           | Sì                       |
| TrackWallet-master              | Applicazione Android di gruppo | Sì                       |

I 13 progetti esterni al portfolio hanno una pagina di dettaglio e sono divisi in sei progetti universitari (TrackWallet, Sistema RAG, Analisi Big Data MOT, DCT e compressione, solutori iterativi, Bank Marketing) e sette progetti personali. Chalet-Time è incluso dopo aver consultato README, guida architetturale e codice. `mot-big-data-analysis` non ha un README descrittivo: la scheda riassume le pipeline presenti nel sorgente e segnala questo limite. Nei progetti universitari e di gruppo il portfolio descrive il repository senza attribuire contributi individuali non documentati. Le schede usano copertine grafiche; TrackWallet include una schermata dell'app. Solo CipCalor è presentato come sito attualmente online.

## Struttura

- `src/data/projects.ts`: catalogo e contenuti dei progetti.
- `src/data/copy.ts`: testi e competenze nelle due lingue.
- `src/data/profile.ts`: nome, email e profili pubblici.
- `src/App.tsx`: layout, navigazione, sezioni e pagina di dettaglio.
- `src/App.module.css`: componenti visivi e layout responsive.
- `src/styles/global.css`: palette, tipografia e preferenze globali.
- `public/images`: immagini di progetto e fotografia hero da aggiungere.

La lingua italiana è predefinita; la scelta viene mantenuta in `localStorage`. La navigazione e i reveal rispettano `prefers-reduced-motion`.

## SEO e pubblicazione

Impostare `VITE_SITE_URL` in fase di build quando il dominio del portfolio è disponibile. I metadati specifici di pagina vengono aggiornati dal client; essendo una SPA, per generare anteprime social specifiche per ciascun progetto servirà aggiungere prerendering o rendering server. In produzione, configurare l'hosting per riscrivere le route `/progetti/*` verso `index.html`.
