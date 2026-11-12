import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { copy } from "./data/copy";
import {
  projectCatalog,
  type Language,
  type Project,
  type ProjectGroup,
} from "./data/projects";
import { profile } from "./data/profile";
import { siteUrl } from "./data/site";
import styles from "./App.module.css";

function usePageMeta(title: string, description: string) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (siteUrl) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = `${siteUrl}${pathname}`;
    } else canonical?.remove();
  }, [title, description, pathname]);
}

function Cover({
  project,
  lang,
  large = false,
}: {
  project: Project;
  lang: Language;
  large?: boolean;
}) {
  return (
    <div
      className={`${styles.cover} ${styles[project.visual]} ${styles[`cover_${project.slug.replaceAll("-", "_")}`] ?? ""} ${large ? styles.coverLarge : ""}`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt?.[lang] ?? ""}
          width="1200"
          height="800"
          loading={large ? "eager" : "lazy"}
        />
      ) : (
        <div className={styles.coverArt} aria-hidden="true">
          <span className={styles.coverIndex}>{project.number}</span>
          {project.visual === "mobile" ? (
            <div className={styles.phone}>
              <div className={styles.phoneTop} />
              <div className={styles.phoneTitle} />
              <div className={styles.phoneGrid}>
                {Array.from({ length: 9 }, (_, i) => (
                  <i key={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.artwork}>
              <span>
                {{
                  "arredamenti-sormani": "SPAZI · MATERIALI",
                  "gestionale-sormani": "ORDINI · CLIENTI",
                  costopiatto: "RICETTE · COSTI",
                  cipcalor: "CLIMA · COMFORT",
                  "ristorante-app": "MENU · TAVOLI",
                  "chalet-time": "PRENOTAZIONI",
                  "chalet-gabriele": "OSPITALITÀ · ALPI",
                  "sistema-rag": "DOCUMENTI → RISPOSTE",
                  trackwallet: "WALLET · ANALYTICS",
                  "mot-big-data-analysis": "MOBILITÀ · DATI",
                  "dct-immagini": "FREQUENZE · DCT",
                  "solutori-iterativi": "MATRICI · SOLUZIONE",
                  "bank-marketing": "SEGMENTI · CAMPAGNE",
                }[project.slug] ?? project.category[lang]}
              </span>
              <b>
                {{
                  "arredamenti-sormani": "⌂",
                  "gestionale-sormani": "▤",
                  costopiatto: "◉",
                  cipcalor: "°",
                  "ristorante-app": "◷",
                  "chalet-time": "⌑",
                  "chalet-gabriele": "⌂",
                  "sistema-rag": "↗",
                  trackwallet: "€",
                  "mot-big-data-analysis": "↗",
                  "dct-immagini": "◩",
                  "solutori-iterativi": "Σ",
                  "bank-marketing": "◌",
                }[project.slug] ?? "✳"}
              </b>
              <i />
            </div>
          )}
        </div>
      )}
      <span className={styles.coverBadge}>{project.category[lang]}</span>
    </div>
  );
}

function useScrollReveal(revision: string) {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      targets.forEach((target) => target.classList.add(styles.revealed));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = entry.target.parentElement
              ? Array.from(entry.target.parentElement.children)
              : [];
            const order = Math.max(0, siblings.indexOf(entry.target)) % 5;
            entry.target.setAttribute("data-reveal-order", String(order));
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [revision]);
}

function technologyDescription(name: string, lang: Language) {
  const descriptions: Record<string, Record<Language, string>> = {
    React: { it: "Libreria JavaScript per costruire interfacce componendo elementi riutilizzabili.", en: "A JavaScript library for building interfaces from reusable components." },
    TypeScript: { it: "Aggiunge tipi statici a JavaScript per rendere il codice più chiaro e controllabile.", en: "Adds static types to JavaScript to make code clearer and easier to check." },
    "Next.js": { it: "Framework React per applicazioni web con routing e rendering integrati.", en: "A React framework for web apps with routing and rendering built in." },
    "CSS Modules": { it: "Organizza gli stili CSS in moduli isolati per evitare conflitti tra componenti.", en: "Scopes CSS styles to modules to avoid conflicts between components." },
    "React Router": { it: "Gestisce la navigazione tra pagine e viste nelle applicazioni React.", en: "Handles navigation between pages and views in React applications." },
    Vite: { it: "Strumento di sviluppo e build per applicazioni web moderne.", en: "A development and build tool for modern web applications." },
    "Node.js": { it: "Ambiente che permette di eseguire JavaScript sul server.", en: "A runtime environment for running JavaScript on the server." },
    Express: { it: "Framework Node.js per definire API e gestire richieste HTTP.", en: "A Node.js framework for defining APIs and handling HTTP requests." },
    "REST API": { it: "Interfaccia che espone risorse e operazioni tramite richieste HTTP.", en: "An interface that exposes resources and operations through HTTP requests." },
    PostgreSQL: { it: "Database relazionale open source per archiviare e interrogare dati strutturati.", en: "An open source relational database for storing and querying structured data." },
    Prisma: { it: "Toolkit per accedere al database tramite uno schema e un client tipizzato.", en: "A toolkit for database access through a schema and typed client." },
    "Cloudflare D1": { it: "Database SQL serverless integrato nell’infrastruttura Cloudflare.", en: "A serverless SQL database integrated with Cloudflare infrastructure." },
    Firestore: { it: "Database cloud NoSQL di Firebase per dati sincronizzati in tempo reale.", en: "Firebase’s cloud NoSQL database for real time synced data." },
    Java: { it: "Linguaggio orientato agli oggetti usato per applicazioni e servizi.", en: "An object oriented language used for applications and services." },
    Android: { it: "Piattaforma per lo sviluppo di applicazioni per dispositivi mobili.", en: "A platform for building applications for mobile devices." },
    Kotlin: { it: "Linguaggio moderno per lo sviluppo Android e applicazioni JVM.", en: "A modern language for Android and JVM application development." },
    "Jetpack Compose": { it: "Toolkit dichiarativo per creare interfacce native Android con Kotlin.", en: "A declarative toolkit for building native Android interfaces with Kotlin." },
    Room: { it: "Libreria Android che semplifica l’accesso a un database SQLite locale.", en: "An Android library that simplifies access to a local SQLite database." },
    WorkManager: { it: "Libreria Android per pianificare attività in background affidabili.", en: "An Android library for scheduling reliable background tasks." },
    Python: { it: "Linguaggio versatile usato qui per analisi dati e calcolo.", en: "A versatile language used here for data analysis and computing." },
    PySpark: { it: "API Python di Apache Spark per elaborare grandi quantità di dati.", en: "Apache Spark’s Python API for processing large datasets." },
    LlamaIndex: { it: "Framework per collegare modelli linguistici a dati e documenti.", en: "A framework for connecting language models to data and documents." },
    BM25: { it: "Metodo di ranking per trovare documenti rilevanti in una ricerca testuale.", en: "A ranking method for finding relevant documents in text search." },
    "scikit-learn": { it: "Libreria Python con strumenti per machine learning e analisi predittiva.", en: "A Python library with tools for machine learning and predictive analysis." },
    NumPy: { it: "Libreria Python per calcolo numerico e gestione di array multidimensionali.", en: "A Python library for numerical computing and multidimensional arrays." },
    SciPy: { it: "Libreria Python di algoritmi scientifici, ottimizzazione e metodi numerici.", en: "A Python library for scientific algorithms, optimization and numerical methods." },
    Playwright: { it: "Strumento per automatizzare e verificare applicazioni web nei browser.", en: "A tool for automating and checking web applications in browsers." },
    "REST APIs": { it: "Interfacce che espongono risorse e operazioni tramite richieste HTTP.", en: "Interfaces that expose resources and operations through HTTP requests." },
  };
  return descriptions[name]?.[lang] ?? (lang === "it"
    ? "Strumento utilizzato nel progetto per implementare le funzionalità e le scelte tecniche documentate."
    : "A tool used in the project to implement its features and documented technical choices.");
}

function Header({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: (value: Language) => void;
}) {
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const targets = ["home", "projects", "about", "skills", "contact"]
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!("IntersectionObserver" in window) || targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.2, 0.5] },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);
  const links = [
    ["home", t.nav.home],
    ["projects", t.nav.projects],
    ["about", t.nav.about],
    ["skills", t.nav.skills],
    ["contact", t.nav.contact],
  ];
  return (
    <>
      <a className={styles.skip} href="#main">
        {t.skip}
      </a>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      >
        <div className={styles.headerInner}>
          <Link className={styles.brand} to="/" aria-label={profile.name}>
            <span className={styles.monogram}>
              FS<span>.</span>
            </span>
            <span className={styles.brandName}>
              Francesco
              <br />
              Sormani
            </span>
          </Link>
          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
          <nav
            id="main-nav"
            className={`${styles.nav} ${open ? styles.navOpen : ""}`}
            aria-label={
              lang === "it" ? "Navigazione principale" : "Main navigation"
            }
          >
            {links.map(([id, label]) => (
              <Link
                key={id}
                to={`/#${id}`}
                className={active === id ? styles.navActive : undefined}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div
              className={styles.language}
              role="group"
              aria-label={
                lang === "it" ? "Seleziona lingua" : "Choose language"
              }
            >
              <button
                type="button"
                aria-label="Italiano"
                aria-pressed={lang === "it"}
                onClick={() => setLang("it")}
              >
                IT
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                aria-label="English"
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer({ lang }: { lang: Language }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <span className={styles.footerMark}>
            FS<span>.</span>
          </span>
          <a href="mailto:francesco.sorma03@gmail.com">{profile.email} ↗</a>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Francesco Sormani</span>
          <span>{copy[lang].footer}</span>
          <a href="#top">↑ {lang === "it" ? "Torna su" : "Back to top"}</a>
        </div>
      </div>
    </footer>
  );
}

function Home({ lang }: { lang: Language }) {
  const t = copy[lang];
  const [selectedTechnology, setSelectedTechnology] = useState<{ name: string; group: string; project: string } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [projectGroup, setProjectGroup] = useState<ProjectGroup>("personal");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  useEffect(() => {
    if (!selectedTechnology) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedTechnology(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedTechnology]);
  const visibleProjects = projectCatalog.filter(
    (project) => project.group === projectGroup,
  );
  usePageMeta(
    lang === "it"
      ? "Francesco Sormani — Sviluppo software e web"
      : "Francesco Sormani — Software and web development",
    lang === "it"
      ? "Portfolio di Francesco Sormani: progetti web, Android, AI e calcolo scientifico."
      : "Francesco Sormani’s portfolio: web, Android, AI and scientific computing projects.",
  );
  useScrollReveal(`${lang}-${projectGroup}`);
  useEffect(() => {
    setActiveProjectIndex(0);
    const track = carouselRef.current;
    if (!track) return;
    track.scrollTo({
      left: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [projectGroup]);
  const scrollToProject = (index: number) => {
    const track = carouselRef.current;
    const slide = track?.children.item(index) as HTMLElement | null;
    if (!track || !slide) return;
    const offset =
      slide.getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({
      left: track.scrollLeft + offset,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    setActiveProjectIndex(index);
  };
  const updateActiveProject = () => {
    const track = carouselRef.current;
    if (!track) return;
    const trackLeft = track.getBoundingClientRect().left + 24;
    const index = Array.from(track.children).findIndex(
      (slide) => slide.getBoundingClientRect().right > trackLeft + 20,
    );
    if (index >= 0) setActiveProjectIndex(index);
  };
  return (
    <main id="main">
      <section className={styles.hero} id="home" aria-labelledby="hero-title">
        <div className={styles.heroPhoto} aria-hidden="true">
          <span className={styles.photoFallback}>
            FS<span>.</span>
          </span>
          <img
            src="/images/profile-hero.png"
            alt=""
            fetchPriority="high"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <p className={`${styles.eyebrow} ${styles.heroEyebrow}`}>
              <span className={styles.dot} />
              {t.heroEyebrow}
            </p>
            <h1 id="hero-title">
              <span className={styles.heroTitleLine}>
                <span>Francesco</span>
              </span>
              <span className={styles.heroTitleLine}>
                <span>
                  Sormani<span className={styles.accentPeriod}>.</span>
                </span>
              </span>
            </h1>
            <p className={`${styles.heroText} ${styles.heroIntro}`}>{t.heroText}</p>
            <div className={`${styles.actions} ${styles.heroActions}`}>
              <Link className={styles.buttonPrimary} to="/#projects">
                {t.explore}
                <span aria-hidden="true">↗</span>
              </Link>
              <Link className={styles.buttonText} to="/#contact">
                {t.contactMe}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroSignature} aria-hidden="true">
            <span>
              SOFTWARE
              <br />& WEB
            </span>
            <span>BUILD · LEARN</span>
          </div>
          <a className={styles.scrollHint} href="#projects">
            <span className={styles.scrollLine} />
            {t.scroll}
          </a>
        </div>
      </section>

      <section
        className={styles.section}
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-reveal>
            <div>
              <p className={styles.sectionKicker}>{t.featuredKicker}</p>
              <h2 id="projects-title">
                {t.featuredTitle}
                <span className={styles.bluePeriod}>.</span>
              </h2>
            </div>
            <p>{t.featuredIntro}</p>
          </div>
          <div
            className={styles.projectSwitcher}
            role="tablist"
            aria-label={t.featuredTitle}
          >
            <button
              id="personal-projects-tab"
              type="button"
              role="tab"
              aria-selected={projectGroup === "personal"}
              aria-controls="project-carousel-panel"
              className={
                projectGroup === "personal" ? styles.switcherActive : ""
              }
              onClick={() => setProjectGroup("personal")}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  setProjectGroup("university");
                  document.getElementById("university-projects-tab")?.focus();
                }
              }}
            >
              <span>{t.personalProjects}</span>
              <small>
                {String(
                  projectCatalog.filter(
                    (project) => project.group === "personal",
                  ).length,
                ).padStart(2, "0")}
              </small>
            </button>
            <button
              id="university-projects-tab"
              type="button"
              role="tab"
              aria-selected={projectGroup === "university"}
              aria-controls="project-carousel-panel"
              className={
                projectGroup === "university" ? styles.switcherActive : ""
              }
              onClick={() => setProjectGroup("university")}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  setProjectGroup("personal");
                  document.getElementById("personal-projects-tab")?.focus();
                }
              }}
            >
              <span>{t.universityProjects}</span>
              <small>
                {String(
                  projectCatalog.filter(
                    (project) => project.group === "university",
                  ).length,
                ).padStart(2, "0")}
              </small>
            </button>
          </div>
          <div className={styles.carouselIntro} data-reveal key={projectGroup}>
            <p>
              {projectGroup === "personal"
                ? t.personalIntro
                : t.universityIntro}
            </p>
            <div className={styles.carouselControls}>
              <button
                type="button"
                onClick={() =>
                  scrollToProject(Math.max(0, activeProjectIndex - 1))
                }
                disabled={activeProjectIndex === 0}
                aria-label={t.previousProject}
              >
                ←
              </button>
              <span aria-live="polite">
                {String(activeProjectIndex + 1).padStart(2, "0")} <i>/</i>{" "}
                {String(visibleProjects.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() =>
                  scrollToProject(
                    Math.min(
                      visibleProjects.length - 1,
                      activeProjectIndex + 1,
                    ),
                  )
                }
                disabled={activeProjectIndex === visibleProjects.length - 1}
                aria-label={t.nextProjectControl}
              >
                →
              </button>
            </div>
          </div>
          <div
            id="project-carousel-panel"
            role="tabpanel"
            aria-labelledby={
              projectGroup === "personal"
                ? "personal-projects-tab"
                : "university-projects-tab"
            }
          >
            <div
              className={styles.projectCarousel}
              ref={carouselRef}
              onScroll={updateActiveProject}
              tabIndex={0}
              role="region"
              aria-roledescription={lang === "it" ? "carosello" : "carousel"}
              aria-label={`${projectGroup === "personal" ? t.personalProjects : t.universityProjects} — ${visibleProjects.length} ${t.projectCount}`}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft" && activeProjectIndex > 0) {
                  event.preventDefault();
                  scrollToProject(activeProjectIndex - 1);
                }
                if (
                  event.key === "ArrowRight" &&
                  activeProjectIndex < visibleProjects.length - 1
                ) {
                  event.preventDefault();
                  scrollToProject(activeProjectIndex + 1);
                }
              }}
            >
              {visibleProjects.map((project, index) => (
                <article
                  className={styles.projectCard}
                  key={project.slug}
                  data-reveal
                  role="group"
                  aria-roledescription={lang === "it" ? "progetto" : "slide"}
                  aria-label={`${index + 1} / ${visibleProjects.length}`}
                >
                  <Link
                    to={`/progetti/${project.slug}`}
                    className={styles.projectImageLink}
                    aria-label={`${t.viewProject}: ${project.title[lang]}`}
                  >
                    <Cover project={project} lang={lang} />
                  </Link>
                  <div className={styles.projectMeta}>
                    <span>
                      {project.number} / {project.category[lang]}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.source}: ${project.title[lang]}`}
                    >
                      ↗
                    </a>
                  </div>
                  <h3>
                    <Link to={`/progetti/${project.slug}`}>
                      {project.title[lang]}
                    </Link>
                  </h3>
                  <p>{project.summary[lang]}</p>
                  <div
                    className={styles.projectTech}
                    aria-label={t.technologyStack}
                  >
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className={styles.carouselDots}
            role="group"
            aria-label={t.featuredTitle}
          >
            {visibleProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                aria-label={`${project.title[lang]} (${index + 1} ${t.projectCount})`}
                aria-current={activeProjectIndex === index ? "true" : undefined}
                onClick={() => scrollToProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-reveal>
            <div>
              <p className={styles.sectionKicker}>{t.skillsKicker}</p>
              <h2 id="skills-title">
                {t.skillsTitle}
                <span className={styles.bluePeriod}>.</span>
              </h2>
            </div>
            <p>{t.skillsIntro}</p>
          </div>
          <div className={styles.skillsGrid}>
            {t.skillGroups.map((group, i) => (
              <div className={styles.skillGroup} key={group.title} data-reveal>
                <span className={styles.skillNumber}>0{i + 1}</span>
                <h3>{group.title}</h3>
                <div className={styles.techCloud}>
                  {group.items.flatMap((item) => item.label.split(" · ").map((name) => ({ name, project: item.project }))).map((item) => (
                    <button key={`${item.name}-${item.project}`} type="button" onClick={() => setSelectedTechnology({ name: item.name, group: group.title, project: item.project })}>
                      <span>{item.name}</span><i aria-hidden="true">↗</i>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedTechnology && (() => {
        const aliases: Record<string, string[]> = {
          "REST API": ["REST API", "REST APIs"],
          "REST APIs": ["REST API", "REST APIs"],
          Firestore: ["Firestore", "Cloud Firestore"],
        };
        const matchingNames = (aliases[selectedTechnology.name] ?? [selectedTechnology.name]).map((name) => name.toLowerCase());
        const matchingProjects = projectCatalog.filter((project) =>
          project.technologies.some((technology) => matchingNames.includes(technology.toLowerCase())),
        );
        const relatedProjects = matchingProjects.length > 0
          ? matchingProjects
          : projectCatalog.filter((project) => project.slug === selectedTechnology.project);
        if (relatedProjects.length === 0) return null;
        return (
          <div className={styles.techDialogBackdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedTechnology(null); }}>
            <section className={styles.techDialog} role="dialog" aria-modal="true" aria-labelledby="technology-title">
              <button className={styles.techDialogClose} type="button" aria-label={lang === "it" ? "Chiudi" : "Close"} onClick={() => setSelectedTechnology(null)}>×</button>
              <p className={styles.sectionKicker}>{selectedTechnology.group}</p>
              <h2 id="technology-title">{selectedTechnology.name}<span className={styles.bluePeriod}>.</span></h2>
              <p>{technologyDescription(selectedTechnology.name, lang)}</p>
              <div className={styles.techDialogProject}>
                <span>{lang === "it" ? `Usata in ${relatedProjects.length} ${relatedProjects.length === 1 ? "progetto" : "progetti"}` : `Used in ${relatedProjects.length} ${relatedProjects.length === 1 ? "project" : "projects"}`}</span>
                {relatedProjects.map((project) => (
                  <article className={styles.techDialogRelated} key={project.slug}>
                    <Link to={`/progetti/${project.slug}`} onClick={() => setSelectedTechnology(null)}>{project.title[lang]} <i aria-hidden="true">↗</i></Link>
                    <p>{project.summary[lang]}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        );
      })()}

      <section
        className={`${styles.section} ${styles.aboutSection}`}
        id="about"
        aria-labelledby="about-title"
      >
        <div className={styles.container}>
          <div className={styles.aboutGrid} data-reveal>
            <div>
              <p className={styles.sectionKicker}>{t.aboutKicker}</p>
              <h2 id="about-title">
                {t.aboutTitle}
                <span className={styles.bluePeriod}>.</span>
              </h2>
              <p className={styles.aboutLead}>{t.aboutText}</p>
            </div>
            <div className={styles.education}>
              <div className={styles.educationItem}>
                <span>01</span>
                <div>
                  <h3>{t.masters}</h3>
                  <p>{t.mastersText}</p>
                </div>
              </div>
              <div className={styles.educationItem}>
                <span>02</span>
                <div>
                  <h3>{t.bachelors}</h3>
                  <p>{t.bachelorsText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.contactSection}
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className={styles.container}>
          <p className={styles.sectionKicker}>{t.contactKicker}</p>
          <div className={styles.contactGrid} data-reveal>
            <div>
              <h2 id="contact-title">{t.contactTitle}</h2>
              <p>{t.contactText}</p>
            </div>
            <div className={styles.contactLinks}>
              <a href={`mailto:${profile.email}`}>
                <span>{t.emailLabel}</span>
                <strong>{profile.email}</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>github.com/sorma</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>Francesco Sormani</strong>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectPage({ lang }: { lang: Language }) {
  const { slug } = useParams();
  const project = projectCatalog.find((item) => item.slug === slug);
  const t = copy[lang];
  useScrollReveal(`${lang}-${slug ?? "missing"}`);
  usePageMeta(
    project
      ? `${project.title[lang]} — Francesco Sormani`
      : `${t.notFoundTitle} — Francesco Sormani`,
    project?.summary[lang] ?? t.notFoundText,
  );
  if (!project) return <NotFoundContent lang={lang} />;
  const next =
    projectCatalog[
      (projectCatalog.indexOf(project) + 1) % projectCatalog.length
    ];
  return (
    <main id="main" className={styles.detailMain}>
      <div className={styles.container}>
        <Link className={styles.backLink} to="/#projects">
          ← {t.back}
        </Link>
        <div className={styles.detailHeader} data-reveal>
          <div>
            <p className={styles.sectionKicker}>
              {project.number} / {project.category[lang]}
            </p>
            <h1>
              {project.title[lang]}
              <span className={styles.bluePeriod}>.</span>
            </h1>
            <p>{project.summary[lang]}</p>
          </div>
          <span className={styles.detailIndex}>FS — {project.number}</span>
        </div>
        <div className={styles.detailCover} data-reveal>
          <Cover project={project} lang={lang} large />
        </div>
        {!project.image && <p className={styles.coverCaption}>{t.coverNote}</p>}
        <div className={styles.detailGrid} data-reveal>
          <aside className={styles.detailAside}>
            <span>{t.overview}</span>
            <h2 className={styles.languageHeading}>{t.languages}</h2>
            <ul className={styles.languageList}>
              {project.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <div className={styles.detailAsideLinks}>
              <a href={project.github} target="_blank" rel="noreferrer">
                {t.source} ↗
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  {t.live} ↗
                </a>
              )}
            </div>
          </aside>
          <div className={styles.detailBody}>
            <section data-reveal>
              <h2>{t.context}</h2>
              <p>{project.problem[lang]}</p>
            </section>
            <section data-reveal>
              <h2>{t.solution}</h2>
              <p>
                {project.solution[lang]} {project.features[lang].join(" ")}
              </p>
            </section>
            <section data-reveal>
              <h2>{t.structure}</h2>
              <p>{project.architecture[lang]}</p>
            </section>
            <section data-reveal>
              <h2>{t.technical}</h2>
              <p>{project.decisions[lang]}</p>
            </section>
            <section data-reveal>
              <h2>{t.status}</h2>
              <p>{project.status[lang]}</p>
            </section>
          </div>
        </div>
        <div className={styles.nextProject} data-reveal>
          <span>{t.next}</span>
          <Link to={`/progetti/${next.slug}`}>
            {next.title[lang]} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

function NotFoundContent({ lang }: { lang: Language }) {
  const t = copy[lang];
  return (
    <main id="main" className={styles.notFound}>
      <div className={styles.container}>
        <span className={styles.sectionKicker}>404 / {t.notFoundTitle}</span>
        <h1>
          {t.notFoundTitle}
          <span className={styles.bluePeriod}>.</span>
        </h1>
        <p>{t.notFoundText}</p>
        <Link className={styles.buttonPrimary} to="/">
          {t.home} ↗
        </Link>
      </div>
    </main>
  );
}

function NotFound({ lang }: { lang: Language }) {
  const t = copy[lang];
  usePageMeta(`${t.notFoundTitle} — Francesco Sormani`, t.notFoundText);
  return <NotFoundContent lang={lang} />;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = window.setTimeout(
        () => document.getElementById(id)?.scrollIntoView(),
        0,
      );
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      return localStorage.getItem("portfolio-language") === "en" ? "en" : "it";
    } catch {
      return "it";
    }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("portfolio-language", lang);
    } catch {
      /* storage may be unavailable */
    }
  }, [lang]);
  return (
    <div id="top">
      <ScrollManager />
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/progetti/:slug" element={<ProjectPage lang={lang} />} />
        <Route path="*" element={<NotFound lang={lang} />} />
      </Routes>
      <Footer lang={lang} />
    </div>
  );
}
