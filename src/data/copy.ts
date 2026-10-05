import type { Language } from './projects'

export const copy: Record<Language, {
  skip: string; nav: { projects: string; skills: string; about: string; contact: string }; menu: string; close: string;
  heroEyebrow: string; heroTitle: string; heroText: string; explore: string; contactMe: string; scroll: string;
  featuredKicker: string; featuredTitle: string; featuredIntro: string; viewProject: string; source: string; live: string;
  moreKicker: string; moreTitle: string; moreIntro: string;
  skillsKicker: string; skillsTitle: string; skillsIntro: string; skillGroups: { title: string; items: { label: string; project: string }[] }[];
  aboutKicker: string; aboutTitle: string; aboutText: string; masters: string; mastersText: string; bachelors: string; bachelorsText: string;
  contactKicker: string; contactTitle: string; contactText: string; emailLabel: string; footer: string;
  back: string; overview: string; context: string; functionality: string; structure: string; technical: string; status: string; links: string; next: string;
  notFoundTitle: string; notFoundText: string; home: string; coverNote: string;
}> = {
  it: {
    skip: 'Vai al contenuto', nav: { projects: 'Progetti', skills: 'Competenze', about: 'Percorso', contact: 'Contatti' }, menu: 'Apri menu', close: 'Chiudi menu',
    heroEyebrow: 'Portfolio / Sviluppo software & web', heroTitle: 'Ciao, sono Francesco Sormani.', heroText: 'Studio Informatica magistrale all’Università di Milano-Bicocca. Mi interessa costruire software e prodotti web chiari, utili e ben organizzati. Qui raccolgo progetti che spaziano dal web ad Android, AI e calcolo scientifico.', explore: 'Esplora i progetti', contactMe: 'Contattami', scroll: 'Scorri per esplorare',
    featuredKicker: '01 / Lavori selezionati', featuredTitle: 'Progetti in evidenza', featuredIntro: 'Quattro progetti, quattro contesti tecnici. Ogni approfondimento racconta il problema, il software e le scelte verificabili nel codice.', viewProject: 'Apri il progetto', source: 'Codice sorgente', live: 'Visita il sito',
    moreKicker: '02 / Altri lavori', moreTitle: 'Altri progetti', moreIntro: 'Esperienze tra sviluppo mobile, web, dati e metodi numerici.',
    skillsKicker: '03 / Strumenti e ambiti', skillsTitle: 'Competenze nei progetti', skillsIntro: 'Tecnologie e metodi visibili nel codice delle repository collegate.',
    skillGroups: [
      { title: 'Web', items: [{ label: 'React · Next.js', project: 'arredamenti-sormani' }, { label: 'CSS Modules', project: 'cipcalor' }] },
      { title: 'Mobile', items: [{ label: 'Kotlin · Jetpack Compose', project: 'ristorante-app' }, { label: 'Room · WorkManager', project: 'ristorante-app' }] },
      { title: 'Dati & AI', items: [{ label: 'Python · LlamaIndex', project: 'sistema-rag' }, { label: 'Retrieval · BM25', project: 'sistema-rag' }] },
      { title: 'Strumenti', items: [{ label: 'Git · GitHub', project: 'arredamenti-sormani' }, { label: 'Playwright', project: 'arredamenti-sormani' }] },
    ],
    aboutKicker: '04 / Percorso', aboutTitle: 'Studio, sperimento, costruisco.', aboutText: 'Il mio interesse principale è lo sviluppo software e web. I progetti universitari e personali mi hanno permesso di lavorare anche su applicazioni Android, sistemi AI e calcolo scientifico.', masters: 'Laurea magistrale in Informatica', mastersText: 'Ultimo anno · Università degli Studi di Milano-Bicocca', bachelors: 'Laurea triennale in Informatica', bachelorsText: 'Conseguita · Università degli Studi di Milano-Bicocca',
    contactKicker: '05 / Contatti', contactTitle: 'Restiamo in contatto.', contactText: 'Per scrivermi o esplorare il codice dei progetti, trovi qui i miei riferimenti.', emailLabel: 'Scrivimi via email', footer: 'Progettato e realizzato per Francesco Sormani.',
    back: 'Torna ai progetti', overview: 'Panoramica', context: 'Contesto e obiettivo', functionality: 'Funzionalità verificate', structure: 'Tecnologie e struttura', technical: 'Scelte tecniche', status: 'Stato e limiti', links: 'Esplora', next: 'Progetto successivo',
    notFoundTitle: 'Pagina non trovata', notFoundText: 'Questo indirizzo non corrisponde a una pagina del portfolio.', home: 'Torna alla home', coverNote: 'Copertina grafica, non schermata dell’app',
  },
  en: {
    skip: 'Skip to content', nav: { projects: 'Projects', skills: 'Skills', about: 'Background', contact: 'Contact' }, menu: 'Open menu', close: 'Close menu',
    heroEyebrow: 'Portfolio / Software & web development', heroTitle: 'Hi, I’m Francesco Sormani.', heroText: 'I’m in the final year of an MSc in Computer Science at the University of Milano-Bicocca. I’m interested in building clear, useful and well structured software and web products. These projects span the web, Android, AI and scientific computing.', explore: 'Explore projects', contactMe: 'Get in touch', scroll: 'Scroll to explore',
    featuredKicker: '01 / Selected work', featuredTitle: 'Featured projects', featuredIntro: 'Four projects in four technical contexts. Each case study covers the problem, the software and decisions supported by the code.', viewProject: 'View project', source: 'Source code', live: 'Visit website',
    moreKicker: '02 / More work', moreTitle: 'Other projects', moreIntro: 'Work across mobile and web development, data and numerical methods.',
    skillsKicker: '03 / Tools and areas', skillsTitle: 'Skills in practice', skillsIntro: 'Technologies and methods visible in the linked repositories.',
    skillGroups: [
      { title: 'Web', items: [{ label: 'React · Next.js', project: 'arredamenti-sormani' }, { label: 'CSS Modules', project: 'cipcalor' }] },
      { title: 'Mobile', items: [{ label: 'Kotlin · Jetpack Compose', project: 'ristorante-app' }, { label: 'Room · WorkManager', project: 'ristorante-app' }] },
      { title: 'Data & AI', items: [{ label: 'Python · LlamaIndex', project: 'sistema-rag' }, { label: 'Retrieval · BM25', project: 'sistema-rag' }] },
      { title: 'Tools', items: [{ label: 'Git · GitHub', project: 'arredamenti-sormani' }, { label: 'Playwright', project: 'arredamenti-sormani' }] },
    ],
    aboutKicker: '04 / Background', aboutTitle: 'Learning, exploring, building.', aboutText: 'My main interest is software and web development. University and personal projects have also taken me into Android applications, AI systems and scientific computing.', masters: 'MSc in Computer Science', mastersText: 'Final year · University of Milano-Bicocca', bachelors: 'BSc in Computer Science', bachelorsText: 'Completed · University of Milano-Bicocca',
    contactKicker: '05 / Contact', contactTitle: 'Let’s stay in touch.', contactText: 'You can reach me or explore the project code through these links.', emailLabel: 'Send me an email', footer: 'Designed and built for Francesco Sormani.',
    back: 'Back to projects', overview: 'Overview', context: 'Context and goal', functionality: 'Verified features', structure: 'Technology and structure', technical: 'Technical decisions', status: 'Status and limits', links: 'Explore', next: 'Next project',
    notFoundTitle: 'Page not found', notFoundText: 'This address does not match a portfolio page.', home: 'Back to home', coverNote: 'Graphic cover, not an app screenshot',
  },
}
