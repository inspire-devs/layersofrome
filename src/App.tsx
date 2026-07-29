import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { lessons, navigation, pages, type NavItem, type PageData } from './content'

const Arrow = () => <span aria-hidden="true">↗</span>

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="header-bar">
        <Link className="brand" to="/" aria-label="Layers of Rome home">
          <span className="brand-mark">L·R</span>
          <span><strong>Layers of Rome</strong><small>UTEP Humanities</small></span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">Menu</button>
        <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          {navigation.map((item) => <NavGroup key={item.label} item={item} />)}
        </nav>
      </div>
    </header>
  )
}

function NavGroup({ item }: { item: NavItem }) {
  return (
    <div className="nav-group">
      <NavLink to={item.to}>{item.label}</NavLink>
      {item.children && <div className="dropdown">{item.children.map((child) =>
        child.external
          ? <a key={child.label} href={child.to} target="_blank" rel="noreferrer">{child.label} <Arrow /></a>
          : <NavLink key={child.label} to={child.to}>{child.label}</NavLink>
      )}</div>}
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div><p className="footer-kicker">Layers of Rome</p><h2>History is not behind us.<br />It is beneath our feet.</h2></div>
        <div><h3>Program contacts</h3><p>Dr. Ronald J. Weber<br /><a href="mailto:rweber@utep.edu">rweber@utep.edu</a><br />(915) 747-6512</p><p>John De Frank<br /><a href="mailto:jdefrank@utep.edu">jdefrank@utep.edu</a><br />(915) 525-5330</p></div>
        <div><h3>University</h3><a href="https://www.utep.edu" target="_blank" rel="noreferrer">The University of Texas at El Paso <Arrow /></a><p>500 West University Avenue<br />El Paso, TX 79968<br />915-747-5000</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} The University of Texas at El Paso</span><span>Accessibility · Site feedback</span></div>
    </footer>
  )
}

function Breadcrumbs({ title, eyebrow }: { title: string; eyebrow: string }) {
  return <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>{eyebrow}</span><span>/</span><span>{title}</span></div>
}

function PageHero({ data }: { data: PageData }) {
  return (
    <section className="page-hero">
      <div className="ruin-shape" aria-hidden="true"><i /><i /><i /></div>
      <div className="container hero-content">
        <p className="eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
        <p className="lede">{data.intro}</p>
      </div>
    </section>
  )
}

function StandardPage({ data }: { data: PageData }) {
  useEffect(() => { document.title = `${data.title} | Layers of Rome` }, [data.title])
  return (
    <>
      <PageHero data={data} />
      <main id="main" className="container page-main">
        <Breadcrumbs title={data.title} eyebrow={data.eyebrow} />
        <div className="editorial">
          {data.sections.map((section, index) => (
            <section key={section.title} className="content-section">
              <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
              <div><h2>{section.title}</h2><p>{section.body}</p>
                {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

function Home() {
  useEffect(() => { document.title = 'Layers of Rome | Explore. Learn. Preserve.' }, [])
  const pathways = [
    ['Study Abroad', 'Learn where history happened.', '/study-abroad/info', '01'],
    ['Lesson Plans', 'Bring Roman history into the classroom.', '/lesson-plans', '02'],
    ['Preserving Identities', 'Explore cultural heritage through digital exhibits.', '/preserving-identities/the-exhibit', '03'],
    ['Ostia Antica', 'Enter the ancient port that fed an empire.', '/ostia-antica', '04'],
  ]
  return (
    <main id="main">
      <section className="home-hero">
        <div className="hero-architecture" aria-hidden="true"><div className="arch" /><div className="sun" /></div>
        <div className="container home-hero-copy">
          <p className="eyebrow">Rome is more than a destination</p>
          <h1>Every street holds<br />another <em>layer.</em></h1>
          <p>Study abroad, teaching resources, and digital explorations revealing Rome’s central role in world culture.</p>
          <div className="hero-actions"><Link className="button primary" to="/study-abroad/info">Study in Rome</Link><Link className="button text" to="/lesson-plans">Explore resources <Arrow /></Link></div>
        </div>
        <p className="hero-caption">The city becomes the classroom.</p>
      </section>
      <section className="intro container">
        <p className="eyebrow">A living educational resource</p>
        <div className="intro-grid"><h2>To understand Rome,<br />you have to look closer.</h2><div><p>Layers of Rome is both a study abroad program and an open educational resource for teachers, students, scholars, and Roman enthusiasts.</p><p>Developed through UTEP’s Humanities Program, it brings together place-based learning, public history, digital media, and classroom-ready curriculum.</p></div></div>
      </section>
      <section className="pathways">
        <div className="container"><div className="section-heading"><p className="eyebrow">Choose a path</p><h2>Begin your exploration</h2></div>
          <div className="pathway-grid">{pathways.map(([title, text, to, number]) =>
            <Link className="pathway-card" key={title} to={to}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b aria-hidden="true">→</b></Link>
          )}</div>
        </div>
      </section>
      <section className="quote-band"><div className="container"><blockquote>“Rome was greater, and greater are its ruins, than I imagined.”</blockquote><p>— Petrarch, <em>Rerum Familiarium</em></p></div></section>
    </main>
  )
}

function LessonIndex() {
  return <><PageHero data={{ title: 'Lesson Plans', eyebrow: 'Teach the layers', intro: 'Classroom-ready explorations created by teachers, scholars, and UTEP students.', sections: [] }} />
    <main id="main" className="container page-main"><Breadcrumbs title="Lesson Plans" eyebrow="Educational resources" />
      <div className="lesson-grid">{lessons.map((lesson, i) => <Link to={`/lesson-plans/${lesson.slug}`} className="lesson-card" key={lesson.slug}>
        <span className="lesson-index">{String(i + 1).padStart(2, '0')}</span><p className="eyebrow">{lesson.grade}</p><h2>{lesson.title}</h2><dl><div><dt>Time</dt><dd>{lesson.time}</dd></div><div><dt>Subjects</dt><dd>{lesson.subjects}</dd></div></dl><b>View lesson →</b>
      </Link>)}</div>
    </main></>
}

function LessonDetail() {
  const { slug } = useParams()
  const lesson = lessons.find((item) => item.slug === slug)
  if (!lesson) return <NotFound />
  const data: PageData = {
    title: lesson.title, eyebrow: `${lesson.grade} · ${lesson.time}`, intro: lesson.subjects,
    sections: [
      { title: 'Overview', body: 'This lesson-plan archive is being transferred from the original Layers of Rome site. Its complete teacher-authored content, standards, activities, and downloads will be restored in the next content phase.' },
      { title: 'Lesson structure', body: 'The final page will organize guiding questions, objectives, preparation, lesson sequence, assessment, extensions, standards, and classroom resources in a clear in-page navigation system.' },
    ],
  }
  return <StandardPage data={data} />
}

function RoutedPage() {
  const location = useLocation()
  const data = pages[location.pathname]
  return data ? <StandardPage data={data} /> : <NotFound />
}

function NotFound() {
  return <main id="main" className="not-found container"><p className="eyebrow">404 · Lost among the layers</p><h1>This road does not lead to Rome.</h1><p>The page may have moved, or it may still be under excavation.</p><Link className="button primary" to="/">Return home</Link></main>
}

export default function App() {
  return <div className="app"><Header /><Routes><Route path="/" element={<Home />} /><Route path="/lesson-plans" element={<LessonIndex />} /><Route path="/lesson-plans/:slug" element={<LessonDetail />} /><Route path="*" element={<RoutedPage />} /></Routes><Footer /></div>
}
