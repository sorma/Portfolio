import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { copy } from './data/copy'
import { featuredProjects, otherProjects, type Language, type Project } from './data/projects'
import { profile } from './data/profile'
import { siteUrl } from './data/site'
import styles from './App.module.css'

function usePageMeta(title: string, description: string) {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (siteUrl) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = `${siteUrl}${pathname}`
    } else canonical?.remove()
  }, [title, description, pathname])
}

function Cover({ project, lang, large = false }: { project: Project; lang: Language; large?: boolean }) {
  return <div className={`${styles.cover} ${styles[project.cover]} ${large ? styles.coverLarge : ''}`}>
    {project.image ? <img src={project.image} alt={project.imageAlt?.[lang] ?? ''} width="1200" height="800" loading={large ? 'eager' : 'lazy'} /> :
      <div className={styles.coverArt} aria-hidden="true">
        {project.cover === 'android' ? <div className={styles.phone}><div className={styles.phoneTop} /><div className={styles.phoneTitle} /><div className={styles.phoneGrid}>{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div></div> :
          <div className={styles.ragArt}><span>QUERY</span><b>→</b><span>RETRIEVAL</span><b>→</b><span>ANSWER</span></div>}
      </div>}
    <span className={styles.coverBadge}>{project.kind[lang]}</span>
  </div>
}

function Header({ lang, setLang }: { lang: Language; setLang: (value: Language) => void }) {
  const t = copy[lang]
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false) }, [location.pathname, location.hash])
  const links = [
    ['projects', t.nav.projects], ['skills', t.nav.skills], ['about', t.nav.about], ['contact', t.nav.contact],
  ]
  return <>
    <a className={styles.skip} href="#main">{t.skip}</a>
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.brand} to="/" aria-label={profile.name}><span className={styles.monogram}>FS<span>.</span></span><span className={styles.brandName}>Francesco<br />Sormani</span></Link>
        <button className={styles.menuButton} type="button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? t.close : t.menu} onClick={() => setOpen(!open)}><span /><span /></button>
        <nav id="main-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label={lang === 'it' ? 'Navigazione principale' : 'Main navigation'}>
          {links.map(([id, label]) => <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}
          <div className={styles.language} role="group" aria-label={lang === 'it' ? 'Seleziona lingua' : 'Choose language'}>
            <button type="button" aria-label="Italiano" aria-pressed={lang === 'it'} onClick={() => setLang('it')}>IT</button><span aria-hidden="true">/</span><button type="button" aria-label="English" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
        </nav>
      </div>
    </header>
  </>
}

function Footer({ lang }: { lang: Language }) {
  return <footer className={styles.footer}><div className={styles.container}><div className={styles.footerTop}><span className={styles.footerMark}>FS<span>.</span></span><a href="mailto:francesco.sorma03@gmail.com">{profile.email} ↗</a></div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} Francesco Sormani</span><span>{copy[lang].footer}</span><a href="#top">↑ {lang === 'it' ? 'Torna su' : 'Back to top'}</a></div></div></footer>
}

function Home({ lang }: { lang: Language }) {
  const t = copy[lang]
  usePageMeta(lang === 'it' ? 'Francesco Sormani — Sviluppo software e web' : 'Francesco Sormani — Software and web development', lang === 'it' ? 'Portfolio di Francesco Sormani: progetti web, Android, AI e calcolo scientifico.' : 'Francesco Sormani’s portfolio: web, Android, AI and scientific computing projects.')
  return <main id="main">
    <section className={styles.hero} aria-labelledby="hero-title"><div className={styles.container}>
      <div className={styles.heroGrid}><div className={styles.heroContent}><p className={styles.eyebrow}><span className={styles.dot} />{t.heroEyebrow}</p><h1 id="hero-title">{t.heroTitle}</h1><p className={styles.heroText}>{t.heroText}</p><div className={styles.actions}><Link className={styles.buttonPrimary} to="/#projects">{t.explore}<span aria-hidden="true">↗</span></Link><Link className={styles.buttonText} to="/#contact">{t.contactMe}<span aria-hidden="true">↗</span></Link></div></div>
      <div className={styles.heroVisual} aria-hidden="true"><div className={styles.heroCard}><span className={styles.heroCardTop}>FS / 001</span><span className={styles.heroInitials}>FS<span>.</span></span><div className={styles.heroCardBottom}><span>SOFTWARE<br />& WEB</span><span>DESIGN<br />& BUILD</span></div></div><span className={styles.heroSideText}>FRANCESCO SORMANI · PORTFOLIO</span></div></div>
      <a className={styles.scrollHint} href="#projects"><span className={styles.scrollLine} />{t.scroll}</a>
    </div></section>

    <section className={styles.section} id="projects" aria-labelledby="projects-title"><div className={styles.container}><div className={styles.sectionHeader}><div><p className={styles.sectionKicker}>{t.featuredKicker}</p><h2 id="projects-title">{t.featuredTitle}<span className={styles.bluePeriod}>.</span></h2></div><p>{t.featuredIntro}</p></div>
      <div className={styles.featureGrid}>{featuredProjects.map((project) => <article className={styles.projectCard} key={project.slug}><Link to={`/progetti/${project.slug}`} className={styles.projectImageLink} aria-label={`${t.viewProject}: ${project.title[lang]}`}><Cover project={project} lang={lang} /></Link><div className={styles.projectMeta}><span>{project.number} / {project.kind[lang]}</span><span>↗</span></div><h3><Link to={`/progetti/${project.slug}`}>{project.title[lang]}</Link></h3><p>{project.summary[lang]}</p><div className={styles.tags}>{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div></article>)}</div>
    </div></section>

    <section className={`${styles.section} ${styles.moreSection}`} id="more" aria-labelledby="more-title"><div className={styles.container}><div className={styles.sectionHeader}><div><p className={styles.sectionKicker}>{t.moreKicker}</p><h2 id="more-title">{t.moreTitle}<span className={styles.bluePeriod}>.</span></h2></div><p>{t.moreIntro}</p></div><div className={styles.moreGrid}>{otherProjects.map((project, index) => <article className={styles.moreCard} key={project.github}><div className={styles.moreNumber}>0{index + 5}</div><div><span className={styles.moreKind}>{project.kind[lang]}</span><h3>{project.title[lang]}</h3><p>{project.text[lang]}</p><div className={styles.tags}>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${t.source}: ${project.title[lang]}`} className={styles.moreArrow}>↗</a></article>)}</div></div></section>

    <section className={styles.section} id="skills" aria-labelledby="skills-title"><div className={styles.container}><div className={styles.sectionHeader}><div><p className={styles.sectionKicker}>{t.skillsKicker}</p><h2 id="skills-title">{t.skillsTitle}<span className={styles.bluePeriod}>.</span></h2></div><p>{t.skillsIntro}</p></div><div className={styles.skillsGrid}>{t.skillGroups.map((group, i) => <div className={styles.skillGroup} key={group.title}><span className={styles.skillNumber}>0{i + 1}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item.label}><Link to={`/progetti/${item.project}`}>{item.label}<span aria-hidden="true">↗</span></Link></li>)}</ul></div>)}</div></div></section>

    <section className={`${styles.section} ${styles.aboutSection}`} id="about" aria-labelledby="about-title"><div className={styles.container}><div className={styles.aboutGrid}><div><p className={styles.sectionKicker}>{t.aboutKicker}</p><h2 id="about-title">{t.aboutTitle}<span className={styles.bluePeriod}>.</span></h2><p className={styles.aboutLead}>{t.aboutText}</p></div><div className={styles.education}><div className={styles.educationItem}><span>01</span><div><h3>{t.masters}</h3><p>{t.mastersText}</p></div></div><div className={styles.educationItem}><span>02</span><div><h3>{t.bachelors}</h3><p>{t.bachelorsText}</p></div></div></div></div></div></section>

    <section className={styles.contactSection} id="contact" aria-labelledby="contact-title"><div className={styles.container}><p className={styles.sectionKicker}>{t.contactKicker}</p><div className={styles.contactGrid}><div><h2 id="contact-title">{t.contactTitle}</h2><p>{t.contactText}</p></div><div className={styles.contactLinks}><a href={`mailto:${profile.email}`}><span>{t.emailLabel}</span><strong>{profile.email}</strong><span aria-hidden="true">↗</span></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/sorma</strong><span aria-hidden="true">↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Francesco Sormani</strong><span aria-hidden="true">↗</span></a></div></div></div></section>
  </main>
}

function ProjectPage({ lang }: { lang: Language }) {
  const { slug } = useParams()
  const project = featuredProjects.find((item) => item.slug === slug)
  const t = copy[lang]
  usePageMeta(project ? `${project.title[lang]} — Francesco Sormani` : `${t.notFoundTitle} — Francesco Sormani`, project?.summary[lang] ?? t.notFoundText)
  if (!project) return <NotFoundContent lang={lang} />
  const next = featuredProjects[(featuredProjects.indexOf(project) + 1) % featuredProjects.length]
  return <main id="main" className={styles.detailMain}><div className={styles.container}><Link className={styles.backLink} to="/#projects">← {t.back}</Link><div className={styles.detailHeader}><div><p className={styles.sectionKicker}>{project.number} / {project.kind[lang]}</p><h1>{project.title[lang]}<span className={styles.bluePeriod}>.</span></h1><p>{project.summary[lang]}</p></div><span className={styles.detailIndex}>FS — {project.number}</span></div>
    <Cover project={project} lang={lang} large />{!project.image && <p className={styles.coverCaption}>{t.coverNote}</p>}
    <div className={styles.detailGrid}><aside className={styles.detailAside}><span>{t.overview}</span><div className={styles.tags}>{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className={styles.detailAsideLinks}><a href={project.github} target="_blank" rel="noreferrer">{t.source} ↗</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">{t.live} ↗</a>}</div></aside><div className={styles.detailBody}><section><h2>{t.context}</h2><p>{project.problem[lang]}</p></section><section><h2>{t.functionality}</h2><ul>{project.features[lang].map((feature) => <li key={feature}>{feature}</li>)}</ul></section><section><h2>{t.structure}</h2><p>{project.architecture[lang]}</p></section><section><h2>{t.technical}</h2><p>{project.decision[lang]}</p></section><section><h2>{t.status}</h2><p>{project.status[lang]}</p></section></div></div>
    <div className={styles.nextProject}><span>{t.next}</span><Link to={`/progetti/${next.slug}`}>{next.title[lang]} <span aria-hidden="true">↗</span></Link></div>
  </div></main>
}

function NotFoundContent({ lang }: { lang: Language }) {
  const t = copy[lang]
  return <main id="main" className={styles.notFound}><div className={styles.container}><span className={styles.sectionKicker}>404 / {t.notFoundTitle}</span><h1>{t.notFoundTitle}<span className={styles.bluePeriod}>.</span></h1><p>{t.notFoundText}</p><Link className={styles.buttonPrimary} to="/">{t.home} ↗</Link></div></main>
}

function NotFound({ lang }: { lang: Language }) {
  const t = copy[lang]
  usePageMeta(`${t.notFoundTitle} — Francesco Sormani`, t.notFoundText)
  return <NotFoundContent lang={lang} />
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'it' } catch { return 'it' }
  })
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('portfolio-language', lang) } catch { /* storage may be unavailable */ }
  }, [lang])
  return <div id="top"><ScrollManager /><Header lang={lang} setLang={setLang} /><Routes><Route path="/" element={<Home lang={lang} />} /><Route path="/progetti/:slug" element={<ProjectPage lang={lang} />} /><Route path="*" element={<NotFound lang={lang} />} /></Routes><Footer lang={lang} /></div>
}
