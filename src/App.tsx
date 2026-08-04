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
        <div className="intro-grid"><h2>To understand Rome,<br />you have to look closer.</h2><div><p>Layers of Rome is both a study abroad program and an open-source educational resource for high school and college teachers, students, scholars, and Roman enthusiasts exploring Rome’s central role as a creator and disseminator of world culture.</p><p>The platform brings together place-based learning, public history, digital media, lesson plans, interactive exhibits, and map tours for use in Rome or in the classroom.</p></div></div>
      </section>
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-heading"><p className="eyebrow">How the layers grew</p><h2>From a course in Rome to a resource for everyone.</h2></div>
          <div className="milestones">
            <article><span>Nearly two decades</span><h3>Learning in place</h3><p>What began as a study abroad course grew into a multifaceted curriculum resource grounded in the experience of Rome and its cultural history.</p></article>
            <article><span>2015</span><h3>An NEH summer institute</h3><p>A grant from the National Endowment for the Humanities supported <em>The Monuments of Rome in English Culture</em>, bringing 25 scholars and teachers into the Roman environment to develop lesson plans about Roman life, culture, and history.</p></article>
            <article><span>Today</span><h3>Open learning, on site or online</h3><p>The institute helped reshape Layers of Rome as both a study abroad program and an open-source educational tool with classroom resources and interactive ways to explore the city.</p></article>
          </div>
        </div>
      </section>
      <section className="study-feature">
        <div className="container study-feature-grid">
          <div>
            <p className="eyebrow">UTEP Humanities Study Abroad</p>
            <h2>The city becomes the classroom.</h2>
            <p className="study-lede">Study Abroad is the premiere activity of UTEP’s Humanities Program. Students encounter Roman history, art, and culture in their physical setting—learning why context and place matter in the evolution of world cultures.</p>
            <p>In Rome and selected Italian cities, students draw on all their senses, practice hands-on skills, and solve real-world problems while creating powerful interactive resources. They work alongside faculty to develop research and publish it on Layers of Rome.</p>
            <Link className="button primary" to="/study-abroad/info">Explore study abroad <Arrow /></Link>
          </div>
          <dl className="program-facts">
            <div><dt>02</dt><dd><strong>Weeks on campus</strong><span>Preparation and interdisciplinary study at UTEP</span></dd></div>
            <div><dt>02</dt><dd><strong>Weeks in Italy</strong><span>Immersive learning in Rome and other selected cities</span></dd></div>
            <div><dt>06</dt><dd><strong>Credit hours</strong><span>Up to six credits in Humanities, History, and Communication</span></dd></div>
          </dl>
        </div>
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
  return <><PageHero data={{ title: 'Lesson Plans', eyebrow: 'Teach the layers', intro: 'Teacher- and student-authored explorations of Roman life, culture, and history for K–12 classrooms.', sections: [] }} />
    <main id="main" className="container page-main lesson-index-page"><Breadcrumbs title="Lesson Plans" eyebrow="Educational resources" />
      <section className="lesson-origin">
        <div><p className="eyebrow">The Monuments of Rome in English Culture</p><h2>A curriculum born from immersion.</h2></div>
        <div><p>In 2015, a National Endowment for the Humanities grant supported a summer institute for teachers. Twenty-five K–12 scholars and educators immersed themselves in the Roman environment, connecting their disciplines with the humanities, classics, history, and social sciences.</p><p>Through that on-site experience, they created lesson plans exploring Roman life, culture, and history. Since 2015, Layers of Rome has continued this work with UTEP study abroad students as authors.</p></div>
      </section>
      <section className="reflection-feature" aria-labelledby="reflection-title">
        <div><p className="eyebrow">Implementing the lesson plan</p><h2 id="reflection-title">An NEH teacher/scholar reflection</h2><p>Candice Printz reflects on her experience in Rome and the classroom application of her lesson plan.</p></div>
        <div className="reflection-videos">
          <div className="video-placeholder"><span>Part 01</span><p>Video archive placeholder</p></div>
          <div className="video-placeholder"><span>Part 02</span><p>Video archive placeholder</p></div>
        </div>
      </section>
      <div className="lesson-heading"><div><p className="eyebrow">The collection</p><h2>Explore the lesson plans</h2></div><p>{lessons.length} interdisciplinary resources for elementary, middle, and high school learning.</p></div>
      <div className="lesson-grid">{lessons.map((lesson, i) => {
        const card = <>
          <div className="lesson-image-placeholder" role="img" aria-label={`Image placeholder: ${lesson.imageLabel}`}><span>Image forthcoming</span><b>{lesson.imageLabel}</b><i aria-hidden="true">L·R</i></div>
          <div className="lesson-card-content"><div className="lesson-card-top"><span className="lesson-index">{String(i + 1).padStart(2, '0')}</span>{lesson.status && <span className="lesson-status">{lesson.status}</span>}</div><p className="eyebrow">{lesson.grade}</p><h2>{lesson.title}</h2><dl><div><dt>Time</dt><dd>{lesson.time}</dd></div><div><dt>Authors</dt><dd>{lesson.authors}</dd></div><div><dt>Subjects</dt><dd>{lesson.subjects}</dd></div>{lesson.note && <div><dt>Note</dt><dd>{lesson.note}</dd></div>}{lesson.skills && <div><dt>Skills</dt><dd>{lesson.skills}</dd></div>}</dl>{!lesson.status && <b className="lesson-link">View lesson <span aria-hidden="true">→</span></b>}</div>
        </>
        return lesson.status ? <article className="lesson-card unavailable" key={lesson.slug}>{card}</article> : <Link to={`/lesson-plans/${lesson.slug}`} className="lesson-card" key={lesson.slug}>{card}</Link>
      })}</div>
    </main></>
}

function LessonDetail() {
  const { slug } = useParams()
  const lesson = lessons.find((item) => item.slug === slug)
  if (!lesson) return <NotFound />
  if (lesson.slug === '17-rhetoric') return <RhetoricLesson />
  const data: PageData = {
    title: lesson.title, eyebrow: `${lesson.grade} · ${lesson.time}`, intro: lesson.subjects,
    sections: [
      { title: 'Overview', body: 'This lesson-plan archive is being transferred from the original Layers of Rome site. Its complete teacher-authored content, standards, activities, and downloads will be restored in the next content phase.' },
      { title: 'Lesson structure', body: 'The final page will organize guiding questions, objectives, preparation, lesson sequence, assessment, extensions, standards, and classroom resources in a clear in-page navigation system.' },
    ],
  }
  return <StandardPage data={data} />
}

const rhetoricSections = [
  ['overview', 'Overview'], ['introduction', 'Introduction'], ['questions', 'Guiding questions'],
  ['objectives', 'Learning objectives'], ['preparation', 'Preparation instructions'],
  ['activities', 'Lesson activities'], ['assessment', 'Assessment'], ['extension', 'Extend the lesson'],
  ['standards', 'College and career readiness'], ['resources', 'Additional lessons and resources'],
]

function ResourceItem({ children }: { children: React.ReactNode }) {
  return <li><span>{children}</span><small>Archive file forthcoming</small></li>
}

function RhetoricLesson() {
  useEffect(() => { document.title = 'Rhetoric in the Monuments of Ancient Rome | Layers of Rome' }, [])
  return <>
    <section className="rhetoric-hero">
      <div className="rhetoric-hero-art" aria-hidden="true"><i /><i /><i /></div>
      <div className="container rhetoric-hero-copy"><p className="eyebrow">Lesson plan · English & AP Language</p><h1>Rhetoric in the Monuments of Ancient Rome</h1><p>Students connect written rhetoric with the visual language of Roman monuments, studying how Cicero and Augustus shaped public memory.</p></div>
    </section>
    <main id="main" className="container rhetoric-page">
      <Breadcrumbs title="Rhetoric in the Monuments of Ancient Rome" eyebrow="Lesson Plans" />
      <section className="lesson-fact-band" aria-label="Lesson details">
        <div><span>Grade levels</span><strong>11–12 and AP students</strong></div><div><span>Time required</span><strong>5–7 class periods</strong></div><div><span>Author</span><strong>Claire Walter</strong><a href="mailto:cwalter@wolcottschool.org">cwalter@wolcottschool.org</a></div><div><span>Subject areas</span><strong>English, AP Language and Composition</strong></div>
      </section>
      <div className="lesson-document">
        <aside className="lesson-toc"><p className="eyebrow">The lesson</p><nav aria-label="Lesson sections">{rhetoricSections.map(([id, label], i) => <a href={`#${id}`} key={id}><span>{String(i + 1).padStart(2, '0')}</span>{label}</a>)}</nav></aside>
        <article className="lesson-article">
          <section id="overview" className="lesson-copy-section"><p className="eyebrow">01 · Overview</p><h2>Rhetoric made visible</h2><p className="lesson-standfirst">The classical tradition of rhetoric fostered the skills of information discovery, organization, and presentation. Its history extends from Greek playwrights Sophocles and Euripides through philosophers Plato and Aristotle and orator Demosthenes, before rhetorical techniques passed to Rome and Cicero.</p><p>Because public spaces served as message boards and cultural expressions, their physical forms employed the rhetorical styles, structures, and tenets of those early playwrights, philosophers, and orators. Monumental rhetoric reached its most dramatic expression during the Roman Empire.</p><p>Cicero, voice of the waning Roman Republic, and Augustus, rising Emperor of Rome, employed rhetorical strategies and devices reflected in the physical spaces around them. By studying visual depictions alongside written forms, students build frameworks for identifying rhetorical strategies and analyzing their use.</p></section>
          <section id="introduction" className="lesson-copy-section"><p className="eyebrow">02 · Introduction</p><h2>Oratory, architecture, and public memory</h2><p>Marcus Tullius Cicero (106–43 B.C.) became Rome’s best remembered and most imitated orator. His three orations of 63 B.C. sought to expose Catiline’s plot to overthrow the Roman government and affirm Cicero’s legacy as a champion of representative government. Popular memory later designated the surviving buildings and spaces of the Roman Forum as a physical memorial to his deeds.</p><p>The Ara Pacis (Altar of Peace) and the <em>Res Gestae</em> are significant works from the time of Caesar Augustus, Rome’s first emperor from 27 B.C. to A.D. 14. Commissioned in 13 B.C. to honor Augustus’ return and consolidation of the empire, the Ara Pacis originally stood in the Campus Martius. Augustus wrote the <em>Res Gestae</em> at the end of his reign in A.D. 14 to commemorate and legitimize his achievements; it was inscribed on stone monuments throughout the Roman Empire.</p><p>Quintilian presented the elements of Roman rhetoric in the <em>Institutio Oratoria</em> (A.D. 96), while Vitruvius articulated a philosophy of architecture and visual rhetoric in <em>De Architectura</em>. Professor David Jolliffe’s rhetorical triangle provides a framework for deconstructing rhetoric. Together, these works reveal how rhetoric is embedded in society’s fabric.</p></section>
          <section id="questions" className="lesson-copy-section"><p className="eyebrow">03 · Guiding questions</p><h2>Questions for inquiry</h2><ul className="question-list"><li>What are the basic elements of rhetoric?</li><li>How does written rhetoric work?</li><li>How are visual rhetorical devices similar to written rhetorical devices?</li><li>How do visual and written rhetoric accomplish a similar purpose?</li></ul></section>
          <section id="objectives" className="lesson-copy-section"><p className="eyebrow">04 · Learning objectives</p><h2>Students will be able to…</h2><ol className="objective-list"><li>Identify the basic elements of rhetoric.</li><li>Analyze how written rhetoric works.</li><li>Identify and analyze how visual rhetorical devices are similar to written rhetorical devices.</li><li>Analyze how written and visual rhetoric work to accomplish a similar purpose.</li></ol></section>
          <section id="preparation" className="lesson-copy-section"><p className="eyebrow">05 · Preparation instructions</p><h2>Prepare the source set</h2><p>The original lesson references the following videos, packets, and supporting materials. Their labels are preserved here; verified downloadable files will be restored from the archive.</p><ol className="resource-list"><ResourceItem>Video: Ara Pacis</ResourceItem><ResourceItem>Video: The Roman Forum &amp; the Temple of Saturn</ResourceItem><ResourceItem>Student Resource Packet 1 and Student Resource Packet 2</ResourceItem><ResourceItem>Graphic Organizer</ResourceItem><ResourceItem>Elements of the Rhetorical Triangle by Professor David Jolliffe, presented by Clori Rose</ResourceItem><ResourceItem>How to Read a Monument</ResourceItem><ResourceItem>Language and Composition Prompt on Cicero</ResourceItem></ol></section>
          <section id="activities" className="lesson-copy-section"><p className="eyebrow">06 · Lesson activities</p><h2>A two-part progression</h2><div className="activity-grid"><div><span>Lesson one</span><h3>Augustus and synthesized argument</h3><p>Students explore relationships among several primary sources to build a synthesized argument about Augustus’ rhetorical strategies. They study visual rhetoric alongside written forms and build frameworks for identifying and analyzing written rhetorical strategies.</p></div><div><span>Lesson two</span><h3>Cicero and independent analysis</h3><p>Students follow the first lesson’s format with new source material from Cicero, building independence and a deeper understanding of rhetorical analysis.</p></div></div></section>
          <section id="assessment" className="lesson-copy-section"><p className="eyebrow">07 · Assessment</p><h2>From formative response to AP-style essay</h2><p>Questions in the graphic organizers for lessons one and two may be used as formative assessments, or students may develop a full essay on either question.</p><p>Students then receive an AP Language and Composition-style prompt with a longer excerpt from one of Cicero’s <em>Orations Against Catiline</em>. Their rhetorical analysis essay brings together the skills developed and reinforced across both lessons.</p></section>
          <section id="extension" className="lesson-copy-section"><p className="eyebrow">08 · Extend the lesson</p><h2>Adapt, scaffold, and transfer</h2><p>This extended plan is one way to organize the material; teachers are encouraged to adapt it to their needs and schedules. The excerpts in the student packets are sufficient for visual rhetorical analysis, though the complete works can provide greater context.</p><p>Students can reuse the graphic organizers to practice skill transfer or receive further scaffolding, identifying the rhetorical situation—audience, exigence, and purpose—and the visual and written features that helped Augustus and Cicero succeed.</p><p>For a creative connection between structural and written rhetoric, students can research famous American speeches and their settings, such as Martin Luther King Jr.’s “I Have a Dream” speech on the steps of the Lincoln Memorial. The original lesson accompanies this activity with <em>Thinking About Architectural and Written Texts</em>.</p></section>
          <section id="standards" className="lesson-copy-section"><p className="eyebrow">09 · College and career readiness</p><h2>Common Core writing standards</h2><div className="standards-list"><div><strong>CCSS.ELA-Literacy.W.11-12.1</strong><p>Write arguments to support claims in an analysis of substantive topics or texts, using valid reasoning and relevant and sufficient evidence.</p></div><div><strong>CCSS.ELA-Literacy.W.11-12.1.a</strong><p>Introduce precise, knowledgeable claims; establish their significance; distinguish them from alternate or opposing claims; and organize claims, counterclaims, reasons, and evidence logically.</p></div><div><strong>CCSS.ELA-Literacy.W.11-12.1.b</strong><p>Develop claims and counterclaims fairly and thoroughly, supplying the most relevant evidence while addressing strengths, limitations, and the audience’s knowledge, concerns, values, and possible biases.</p></div></div></section>
          <section id="resources" className="lesson-copy-section"><p className="eyebrow">10 · Additional lessons and resources</p><h2>Archive restoration in progress</h2><p>The original downloadable videos, student packets, graphic organizers, prompts, and supporting lesson documents are being verified before publication. Their titles remain listed above so no part of the lesson’s resource structure is lost.</p></section>
        </article>
      </div>
    </main>
  </>
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
