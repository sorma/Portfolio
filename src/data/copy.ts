import type { Language } from "./projects";

export const copy: Record<
  Language,
  {
    skip: string;
    nav: {
      home: string;
      projects: string;
      skills: string;
      about: string;
      contact: string;
    };
    menu: string;
    close: string;
    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    explore: string;
    contactMe: string;
    scroll: string;
    featuredKicker: string;
    featuredTitle: string;
    featuredIntro: string;
    personalProjects: string;
    universityProjects: string;
    personalIntro: string;
    universityIntro: string;
    previousProject: string;
    nextProjectControl: string;
    projectCount: string;
    viewProject: string;
    source: string;
    live: string;
    moreKicker: string;
    moreTitle: string;
    moreIntro: string;
    skillsKicker: string;
    skillsTitle: string;
    skillsIntro: string;
    skillGroups: {
      title: string;
      items: { label: string; project: string }[];
    }[];
    aboutKicker: string;
    aboutTitle: string;
    aboutText: string;
    masters: string;
    mastersText: string;
    bachelors: string;
    bachelorsText: string;
    contactKicker: string;
    contactTitle: string;
    contactText: string;
    emailLabel: string;
    footer: string;
    back: string;
    overview: string;
    context: string;
    solution: string;
    functionality: string;
    structure: string;
    technical: string;
    status: string;
    languages: string;
    technologyStack: string;
    links: string;
    next: string;
    notFoundTitle: string;
    notFoundText: string;
    home: string;
    coverNote: string;
  }
> = {
  it: {
    skip: "Vai al contenuto",
    nav: {
      home: "Home",
      projects: "Progetti",
      skills: "Competenze",
      about: "Percorso",
      contact: "Contatti",
    },
    menu: "Apri menu",
    close: "Chiudi menu",
    heroEyebrow: "Portfolio / Sviluppatore software",
    heroTitle: "Francesco Sormani",
    heroText:
      "Studio Informatica magistrale all’Università degli Studi di Milano-Bicocca. Mi interessa progettare e realizzare applicazioni software, web e strumenti che integrano dati e intelligenza artificiale.",
    explore: "Esplora i progetti",
    contactMe: "Contattami",
    scroll: "Scorri per esplorare",
    featuredKicker: "01 / Portfolio",
    featuredTitle: "Progetti",
    featuredIntro:
      "Applicazioni web e mobile, progetti universitari e sperimentazioni. Ogni scheda approfondisce obiettivi, funzionalità e scelte tecniche documentate nel codice.",
    personalProjects: "Progetti personali",
    universityProjects: "Progetti universitari",
    personalIntro:
      "Applicazioni e prodotti software sviluppati in contesti personali, dal problema alla soluzione completa.",
    universityIntro:
      "Progetti universitari e sperimentazioni tra dati, intelligenza artificiale e metodi numerici.",
    previousProject: "Progetto precedente",
    nextProjectControl: "Progetto successivo",
    projectCount: "progetti",
    viewProject: "Apri il progetto",
    source: "Codice sorgente",
    live: "Visita il sito",
    moreKicker: "02 / Altri lavori",
    moreTitle: "Altri progetti",
    moreIntro: "Esperienze tra sviluppo mobile, web, dati e metodi numerici.",
    skillsKicker: "02 / Strumenti e ambiti",
    skillsTitle: "Tecnologie nei progetti",
    skillsIntro:
      "Gli strumenti che uso, organizzati per ambito. Seleziona una tecnologia per scoprire come la applico e in quale progetto l’ho utilizzata.",
    skillGroups: [
      {
        title: "Frontend",
        items: [
          { label: "React · TypeScript", project: "costopiatto" },
          { label: "Next.js · CSS Modules", project: "arredamenti-sormani" },
          { label: "React Router · Vite", project: "costopiatto" },
        ],
      },
      {
        title: "Backend",
        items: [
          { label: "Node.js · Express", project: "gestionale-sormani" },
          { label: "REST API", project: "costopiatto" },
          { label: "Java · Firebase", project: "chalet-time" },
        ],
      },
      {
        title: "Database",
        items: [
          { label: "PostgreSQL · Prisma", project: "gestionale-sormani" },
          { label: "Cloudflare D1", project: "chalet-gabriele" },
          { label: "Firestore", project: "ristorante-app" },
        ],
      },
      {
        title: "Mobile",
        items: [
          { label: "Java · Android", project: "chalet-time" },
          { label: "Kotlin · Jetpack Compose", project: "ristorante-app" },
          { label: "Room · WorkManager", project: "ristorante-app" },
        ],
      },
      {
        title: "Dati & AI",
        items: [
          { label: "Python · PySpark", project: "mot-big-data-analysis" },
          { label: "LlamaIndex · BM25", project: "sistema-rag" },
          { label: "scikit-learn", project: "bank-marketing" },
        ],
      },
      {
        title: "Calcolo & qualità",
        items: [
          { label: "NumPy · SciPy", project: "solutori-iterativi" },
          { label: "PSNR · SSIM", project: "dct-immagini" },
          { label: "Playwright", project: "arredamenti-sormani" },
        ],
      },
    ],
    aboutKicker: "03 / Percorso",
    aboutTitle: "Studio, progetto, imparo.",
    aboutText:
      "Mi interessa realizzare software utile e curato, dalla struttura dei dati all’esperienza d’uso. I progetti personali e universitari mi hanno portato a esplorare applicazioni web e Android, sistemi di gestione, analisi dei dati e intelligenza artificiale.",
    masters: "Laurea magistrale in Informatica",
    mastersText: "In corso · Università degli Studi di Milano-Bicocca",
    bachelors: "Laurea triennale in Informatica",
    bachelorsText: "Università degli Studi di Milano-Bicocca",
    contactKicker: "04 / Contatti",
    contactTitle: "Parliamone.",
    contactText:
      "Per opportunità professionali, collaborazioni o per approfondire un progetto, puoi contattarmi qui.",
    emailLabel: "Email",
    footer: "Portfolio di Francesco Sormani.",
    back: "Torna ai progetti",
    overview: "Panoramica",
    context: "Contesto e obiettivo",
    solution: "Soluzione",
    functionality: "Funzionalità",
    structure: "Tecnologie e struttura",
    technical: "Scelte tecniche",
    status: "Stato e limiti",
    languages: "Linguaggi utilizzati",
    technologyStack: "Tecnologie e strumenti",
    links: "Esplora",
    next: "Progetto successivo",
    notFoundTitle: "Pagina non trovata",
    notFoundText:
      "Questo indirizzo non corrisponde a una pagina del portfolio.",
    home: "Torna alla home",
    coverNote: "Anteprima grafica, non screenshot del progetto",
  },
  en: {
    skip: "Skip to content",
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "Background",
      contact: "Contact",
    },
    menu: "Open menu",
    close: "Close menu",
    heroEyebrow: "Portfolio / Software developer",
    heroTitle: "Francesco Sormani",
    heroText:
      "I’m studying for an MSc in Computer Science at the University of Milano-Bicocca. I’m interested in designing and building software and web applications, as well as tools that bring together data and artificial intelligence.",
    explore: "Explore projects",
    contactMe: "Get in touch",
    scroll: "Scroll to explore",
    featuredKicker: "01 / Portfolio",
    featuredTitle: "Projects",
    featuredIntro:
      "Web and mobile applications, university work and experiments. Each project page covers goals, features and technical choices documented in the source.",
    personalProjects: "Personal projects",
    universityProjects: "University projects",
    personalIntro:
      "Applications and software products developed in personal contexts, from the initial problem through to a complete solution.",
    universityIntro:
      "University projects and experiments across data, artificial intelligence and numerical methods.",
    previousProject: "Previous project",
    nextProjectControl: "Next project",
    projectCount: "projects",
    viewProject: "View project",
    source: "Source code",
    live: "Visit website",
    moreKicker: "02 / More work",
    moreTitle: "Other projects",
    moreIntro:
      "Work across mobile and web development, data and numerical methods.",
    skillsKicker: "02 / Tools and areas",
    skillsTitle: "Technologies in practice",
    skillsIntro:
      "Tools I use, organized by area. Select a technology to see how I apply it and which project I used it in.",
    skillGroups: [
      {
        title: "Frontend",
        items: [
          { label: "React · TypeScript", project: "costopiatto" },
          { label: "Next.js · CSS Modules", project: "arredamenti-sormani" },
          { label: "React Router · Vite", project: "costopiatto" },
        ],
      },
      {
        title: "Backend",
        items: [
          { label: "Node.js · Express", project: "gestionale-sormani" },
          { label: "REST APIs", project: "costopiatto" },
          { label: "Java · Firebase", project: "chalet-time" },
        ],
      },
      {
        title: "Databases",
        items: [
          { label: "PostgreSQL · Prisma", project: "gestionale-sormani" },
          { label: "Cloudflare D1", project: "chalet-gabriele" },
          { label: "Firestore", project: "ristorante-app" },
        ],
      },
      {
        title: "Mobile",
        items: [
          { label: "Java · Android", project: "chalet-time" },
          { label: "Kotlin · Jetpack Compose", project: "ristorante-app" },
          { label: "Room · WorkManager", project: "ristorante-app" },
        ],
      },
      {
        title: "Data & AI",
        items: [
          { label: "Python · PySpark", project: "mot-big-data-analysis" },
          { label: "LlamaIndex · BM25", project: "sistema-rag" },
          { label: "scikit-learn", project: "bank-marketing" },
        ],
      },
      {
        title: "Computing & quality",
        items: [
          { label: "NumPy · SciPy", project: "solutori-iterativi" },
          { label: "PSNR · SSIM", project: "dct-immagini" },
          { label: "Playwright", project: "arredamenti-sormani" },
        ],
      },
    ],
    aboutKicker: "03 / Background",
    aboutTitle: "Study, design, learn.",
    aboutText:
      "I’m interested in building useful, considered software, from data structures through to the user experience. Personal and university projects have led me to explore web and Android applications, management systems, data analysis and artificial intelligence.",
    masters: "MSc in Computer Science",
    mastersText: "In progress · University of Milano-Bicocca",
    bachelors: "BSc in Computer Science",
    bachelorsText: "University of Milano-Bicocca",
    contactKicker: "04 / Contact",
    contactTitle: "Let’s talk.",
    contactText:
      "For professional opportunities, collaborations or a conversation about a project, you can reach me here.",
    emailLabel: "Email",
    footer: "Portfolio of Francesco Sormani.",
    back: "Back to projects",
    overview: "Overview",
    context: "Context and goal",
    solution: "Solution",
    functionality: "Features",
    structure: "Technology and structure",
    technical: "Technical decisions",
    status: "Status and limits",
    languages: "Programming languages",
    technologyStack: "Technologies and tools",
    links: "Explore",
    next: "Next project",
    notFoundTitle: "Page not found",
    notFoundText: "This address does not match a portfolio page.",
    home: "Back to home",
    coverNote: "Graphic preview, not a project screenshot",
  },
};
