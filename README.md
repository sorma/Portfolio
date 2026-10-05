# Portfolio di Francesco Sormani

Portfolio bilingue (italiano e inglese) realizzato con React, TypeScript, Vite, React Router e CSS Modules. I contenuti sono locali: nessun backend, analytics o servizio esterno viene chiamato dal sito.

## Avvio e controlli

Richiede Node.js 22 o successivo.

```sh
npm install
npm run dev
```

Aprire l'indirizzo mostrato da Vite, normalmente `http://localhost:5173`.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

In PowerShell, se l'esecuzione di `npm.ps1` è bloccata, usare `npm.cmd` al posto di `npm`.

## Struttura e aggiornamenti

- `src/data/profile.ts`: nome, email e profili pubblici.
- `src/data/site.ts`: origine pubblica opzionale letta da `VITE_SITE_URL` durante la build.
- `src/data/projects.ts`: progetti, link, tecnologie, descrizioni IT/EN e dettagli delle pagine. Per aggiungere un progetto in evidenza, inserire un oggetto in `featuredProjects` con uno `slug` univoco; la route `/progetti/:slug` viene generata dai dati. I progetti compatti sono in `otherProjects`.
- `src/data/copy.ts`: testi dell'interfaccia nelle due lingue. Aggiungere sempre entrambe le versioni.
- `src/App.tsx`: layout, pagine e navigazione.
- `src/App.module.css` e `src/styles/global.css`: stili, variabili CSS e layout responsive.
- `public/images`: immagini delle copertine. Inserire un file ottimizzato e aggiornare `image` e `imageAlt` nel progetto; senza immagine viene usata una copertina grafica.

La lingua predefinita è l'italiano. La scelta viene salvata in `localStorage` e aggiorna l'attributo `lang` dell'HTML. Se in futuro sarà disponibile un CV, aggiungere un file approvato in `public/` e un link tradotto in `copy.ts` e nella sezione contatti. Non è presente alcun CV nel progetto attuale.

## Fonti e contenuti da completare

Sono state consultate le dieci repository elencate nel brief, tramite copie locali temporanee: README, dipendenze, struttura e file di codice rilevanti. Le quattro schede principali si basano su [ArredamentiSormani](https://github.com/sorma/ArredamentiSormani), [RistoranteApp](https://github.com/sorma/RistoranteApp), [progetto-architetture-dati-main](https://github.com/sorma/progetto-architetture-dati-main) e [CipCalor](https://github.com/sorma/CipCalor). Le immagini web nelle copertine provengono dalle rispettive repository e sono fotografie di progetto, non screenshot dell'interfaccia. Le copertine Android e RAG sono grafiche illustrative.

Per i progetti di gruppo, **il contributo personale preciso di Francesco non è documentato**. Le pagine pubbliche descrivono il progetto nel suo insieme senza attribuirgli singole funzioni. Prima di aggiungere dettagli personali, raccogliere una conferma su responsabilità e parti realizzate, soprattutto per RistoranteApp, Sistema RAG, TrackWallet, Chalet Gabriele e i lavori di calcolo scientifico. I README dei progetti di metodi numerici indicano Francesco tra gli autori, senza ripartire i contributi. RistoranteApp non ha un README; i dettagli mostrati derivano dal codice. La repository Chalet-Time contiene solo un README minimale e codice Android non sufficientemente documentato per una descrizione pubblica affidabile: per questo non è nel portfolio.

Restano da confermare eventuali date di laurea, informazioni personali aggiuntive, contributi individuali e diritti di riutilizzo delle fotografie prima della pubblicazione. La repository Arredamenti Sormani documenta una configurazione Cloudflare, ma non viene presentata come demo attualmente online. L'unico collegamento a un sito pubblico è quello di CipCalor.

## Pubblicazione statica e SEO

`npm run build` genera `dist/`. Pubblicare il contenuto su un hosting statico e configurare il fallback di tutte le route verso `/index.html`, mantenendo la normale consegna degli asset esistenti. È necessario per aprire direttamente URL come `/progetti/ristorante-app`. Su Netlify si può usare una regola `/* /index.html 200`; su altri host configurare la riscrittura equivalente.

Il dominio del portfolio non è ancora noto. Quando sarà disponibile, impostare `VITE_SITE_URL` durante la build (vedere `.env.example`) su un'origine HTTPS senza slash finale. Il sito aggiunge allora un canonical per il percorso corrente. Titolo, descrizione e canonical sono gestiti dal client: essendo una SPA, il sorgente HTML iniziale non contiene metadati specifici delle singole pagine. Alcuni crawler e anteprime social potrebbero quindi vedere solo i metadati generici. Per SEO completo delle pagine progetto, introdurre prerendering o rendering server quando si sceglierà l'hosting.
