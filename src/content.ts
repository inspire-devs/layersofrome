export type NavItem = { label: string; to: string; children?: NavItem[]; external?: boolean }
export type PageData = {
  title: string
  eyebrow: string
  intro: string
  sections: { title: string; body: string; items?: string[] }[]
}

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us', to: '/about-us/ronald-weber', children: [
      { label: 'Dr. Ronald J. Weber', to: '/about-us/ronald-weber' },
      { label: 'John De Frank', to: '/about-us/john-de-frank' },
      { label: 'Contributing Faculty & Staff', to: '/about-us/contributing-faculty-staff' },
    ],
  },
  {
    label: 'Study Abroad', to: '/study-abroad/info', children: [
      { label: 'Info', to: '/study-abroad/info' },
      { label: 'Student Journals', to: '/study-abroad/student-journals' },
      { label: 'Expenses', to: '/study-abroad/expenses' },
      { label: 'Lodging', to: '/study-abroad/lodging' },
      { label: 'Syllabus', to: '/study-abroad/syllabus' },
      { label: 'Calendar', to: '/study-abroad/calendar' },
      { label: 'Map', to: '/study-abroad/map' },
      { label: 'Class Folder', to: 'https://minersutep-my.sharepoint.com', external: true },
    ],
  },
  { label: 'Lesson Plans', to: '/lesson-plans' },
  {
    label: 'Preserving Identities', to: '/preserving-identities/the-exhibit', children: [
      { label: 'The Exhibit', to: '/preserving-identities/the-exhibit' },
      { label: 'Background', to: '/preserving-identities/background' },
      { label: 'Community Outreach', to: '/preserving-identities/community-outreach' },
    ],
  },
  { label: 'Ostia Antica', to: '/ostia-antica' },
  { label: 'Map Tours', to: '/map-tours' },
  { label: 'Roman Timeline', to: '/roman-timeline' },
]

export const pages: Record<string, PageData> = {
  '/about-us/ronald-weber': {
    title: 'Dr. Ronald J. Weber', eyebrow: 'Institute Directors',
    intro: 'Academic leadership, teaching innovation, and the scholarly vision behind Layers of Rome.',
    sections: [
      { title: 'Professor of Ancient History and Humanities', body: 'Dr. Ronald J. Weber serves the University of Texas at El Paso through the Humanities Program and the Master of Arts in Interdisciplinary Studies Program. His research focuses on ancient Rome, classical culture, and the evolution of Rome as a center of world culture.' },
      { title: 'The origin of Layers of Rome', body: 'Since 2002, Dr. Weber has led study abroad programs in Rome and central Italy. In 2015, a National Endowment for the Humanities summer institute helped establish Layers of Rome as an expanding, open-access resource for teachers, scholars, students, and Roman enthusiasts.' },
    ],
  },
  '/about-us/john-de-frank': {
    title: 'John De Frank', eyebrow: 'Institute Directors',
    intro: 'Lecturer, filmmaker, media producer, and community collaborator.',
    sections: [
      { title: 'Media and education', body: 'John Leo De Frank works across filmmaking, journalism, media education, and documentary production. At UTEP he teaches in the Humanities Program and serves as co-faculty and media producer for Layers of Rome.' },
      { title: 'Community storytelling', body: 'His work connects regional storytelling, public humanities, citizen journalism, and bi-national cultural collaboration across El Paso and Ciudad Juárez.' },
    ],
  },
  '/about-us/contributing-faculty-staff': {
    title: 'Contributing Faculty & Staff', eyebrow: 'About Us',
    intro: 'Layers of Rome is built through the work of faculty, educators, students, media makers, and community partners.',
    sections: [{ title: 'Contributor profiles', body: 'Verified contributor biographies and portraits will be added here as the archival content is prepared.' }],
  },
  '/study-abroad/info': {
    title: 'Study Abroad', eyebrow: 'Learn in place',
    intro: 'Experience Rome as a living classroom through a six-credit interdisciplinary program.',
    sections: [
      { title: 'Program snapshot', body: 'Students study on the UTEP campus and in Rome, combining humanities coursework with on-site research, media production, and collaborative learning.', items: ['Six credit hours across two courses', 'On-campus Maymester preparation', 'Summer study in Rome, Italy', 'Open to qualified undergraduate and graduate students'] },
      { title: 'A city of layers', body: 'The program surveys Rome from monarchy and Republic through Empire, the Holy Roman Empire, and the Renaissance. Learning continues at the Forum, Palatine Hill, Colosseum, Pantheon, museums, churches, Ostia Antica, and other significant sites.' },
    ],
  },
  '/study-abroad/student-journals': {
    title: 'Excerpts From Student Journals', eyebrow: 'Student voices',
    intro: 'Personal observations capture the wonder, complexity, and lasting impact of encountering Rome firsthand.',
    sections: [
      { title: '“A layer of Rome”', body: 'Students write about ancient monuments and modern streets, museum encounters, food, beaches, public spaces, and the emotional experience of leaving a city that has become familiar.' },
      { title: 'Archive in progress', body: 'The complete, attributed journal collection and its supporting photography will be restored in the next content phase.' },
    ],
  },
  '/study-abroad/expenses': {
    title: 'Expenses', eyebrow: 'Plan your journey',
    intro: 'A practical guide to program fees, tuition, airfare, aid, scholarships, and passport preparation.',
    sections: [
      { title: 'Terms of travel', body: 'Program costs vary by year and market conditions. Tuition is separate from travel expenses, and students must participate in all scheduled academic activities.' },
      { title: 'What program fees support', body: 'Program fees traditionally include lodging, instructional costs, local transportation, security deposits, and admission to museums and historic sites.' },
      { title: 'Funding and preparation', body: 'Scholarships and summer financial aid may be available to eligible students. Current figures, deadlines, and passport guidance will be confirmed before the next program cycle.' },
    ],
  },
  '/study-abroad/lodging': {
    title: 'Lodging', eyebrow: 'Living in Rome',
    intro: 'Shared apartments give students a practical home base during the program.',
    sections: [{ title: 'Apartment living', body: 'Students traditionally stay in co-ed apartments with shared kitchens and living spaces, ensuite bathrooms, Wi-Fi, laundry facilities, and independent building access. Current accommodations will be confirmed for each cohort.' }],
  },
  '/study-abroad/syllabus': {
    title: 'Syllabus', eyebrow: 'Academic program',
    intro: 'Course expectations, learning outcomes, assignments, and the program schedule will be published here.',
    sections: [{ title: 'Content in preparation', body: 'The current syllabus is being reviewed for the next Layers of Rome program.' }],
  },
  '/study-abroad/calendar': {
    title: 'Program Calendar', eyebrow: 'Dates and deadlines',
    intro: 'A clear view of application deadlines, class meetings, travel dates, site visits, and program events.',
    sections: [{ title: 'Calendar coming soon', body: 'The legacy calendar is unavailable. A new accessible calendar will be added when the next program schedule is confirmed.' }],
  },
  '/study-abroad/map': {
    title: 'Study Abroad Map', eyebrow: 'The city as classroom',
    intro: 'Explore the places where study, travel, and Roman history meet.',
    sections: [{ title: 'Interactive map coming soon', body: 'A new map will connect program sites, museums, monuments, excursions, and neighborhood context without publishing private lodging addresses.' }],
  },
  '/preserving-identities/the-exhibit': {
    title: 'The Exhibit', eyebrow: 'Preserving Identities',
    intro: 'An interactive bilingual multimedia exhibit connecting Roman heritage, preservation, and public learning.',
    sections: [
      { title: 'Physical and digital layers', body: 'Created from student research in Rome, the exhibit combines photographs, maps, interpretive text, QR-connected media, videos, articles, and immersive reconstructions.' },
      { title: 'Explore the digital exhibit', body: 'Digital experiences focus on four Roman subjects.', items: ['The Colosseum', 'Santa Costanza', 'The obelisks of Rome', 'The Pantheon'] },
    ],
  },
  '/preserving-identities/background': {
    title: 'Background', eyebrow: 'Preserving Identities',
    intro: 'How immersive research became a public conversation about cultural heritage.',
    sections: [
      { title: 'Learning through preservation', body: 'Students studied identity, museums, archaeological sites, exhibition design, preservation practices, and the ways digital media can expand access to cultural heritage.' },
      { title: 'Field research', body: 'The project brought students into conversation with museum professionals, archaeologists, public institutions, and historic places in Rome and the El Paso region.' },
    ],
  },
  '/preserving-identities/community-outreach': {
    title: 'Community Outreach', eyebrow: 'A traveling exhibit',
    intro: 'Preserving Identities moved from the university into museums and El Paso-area schools.',
    sections: [
      { title: 'Exhibition history', body: 'The exhibit debuted at the UTEP Library in 2017 and later appeared at Coronado High School, the UTEP College of Liberal Arts, Del Valle High School, Eastlake High School, and UTEP’s Centennial Museum.' },
    ],
  },
  '/ostia-antica': {
    title: 'Ostia Antica: The Mouth of Rome', eyebrow: 'Port, metropolis, classroom',
    intro: 'Discover the ancient port that connected Rome to resources, people, and cultures across the Mediterranean.',
    sections: [
      { title: 'A layered city', body: 'Ostia grew from a village to a military outpost, a major port, and a multicultural center of commerce. Today it is an archaeological park, a destination, and a vast classroom.' },
      { title: 'Explore Ancient Ostia', body: 'Interactive maps and cultural stories will guide visitors through the city walls, customs, religious life, mosaics, and monuments.' },
    ],
  },
  '/map-tours': {
    title: 'Map Tours', eyebrow: 'On-site and online',
    intro: 'Free interactive tours bring meaningful, place-based stories to classrooms, travelers, and Roman enthusiasts.',
    sections: [
      { title: 'Literary Walks Tour', body: 'Follow the footsteps of Grand Tourists and pilgrims through literature, visual art, music, and the Roman places that inspired them.' },
      { title: 'The Roman Forum Tour', body: 'Trace a path through the Forum’s prominent structures and learn how public life, government, commerce, and culture converged in the heart of Rome.' },
    ],
  },
  '/roman-timeline': {
    title: 'Timeline of the Roman Empire', eyebrow: '753 BCE–565 CE',
    intro: 'Move through the people, events, places, and transformations that shaped Roman history.',
    sections: [{ title: 'Interactive timeline in preparation', body: 'The legacy timeline is being rebuilt with an accessible text alternative and responsive exploration tools.' }],
  },
}

export const lessons = [
  { slug: '20-romans-pompei', title: 'Continuity of Culture: Romans in Pompeii', grade: 'Grades 3–6', time: '5–7 class periods', subjects: 'Social Sciences, English, History', authors: 'Lori Howell, Melody Nishinaga, Sarah Poku, Warren Soper', imageLabel: 'Pompeii archaeological street' },
  { slug: '21-lesson-plan-template', title: 'Detective Work: What Did Music Sound Like in Ancient Rome?', grade: 'Grades K–4', time: '4–6 class periods', subjects: 'History, Music, English', authors: 'Melody Nishinaga', imageLabel: 'Ancient Roman musicians' },
  { slug: 'jewish-people-in-rome', title: 'History of the Jewish People in Rome — From Ancient Rome to the 20th Century', grade: 'Grades 10–12', time: '5–7 class periods', subjects: 'Social Sciences, History', authors: 'M. Rachel Gonzalez, Eric Williams, Matthew P. Gonzales, Matthew I. Euzarraga, Jovana Nieto, Crystal Calderon, Mia Montes, Lauren Flores', status: 'Coming soon', imageLabel: 'Memorial stones in Rome' },
  { slug: '19-maecenas-et-diam-congue-malesuada-augue-non-mollis-augue', title: 'Monumental Literacy', grade: 'Grade 6', time: '7–8 45-minute class periods', subjects: 'Social Studies, Language Arts', authors: 'Diane S. Hance, Librarian; Grisham Middle School, Round Rock ISD', note: 'Timing may need adjustment for research and technology availability.', imageLabel: 'Roman relief sculptures' },
  { slug: '17-rhetoric', title: 'Rhetoric in the Monuments of Ancient Rome', grade: 'Grades 11–12 and AP', time: '5–7 class periods', subjects: 'English, AP Language and Composition', authors: 'Claire Walter', imageLabel: 'Ara Pacis monument' },
  { slug: 'pantheon-interdisciplinary-study', title: 'The Pantheon: An Interdisciplinary Study in How History, Art, Math and Science Combine to Reveal Roman Culture', grade: 'Grade 6', time: '7–8 45-minute class periods', subjects: 'History', authors: 'Ruben Sandoval and Amy Perez', status: 'Under revision', imageLabel: 'The Pantheon in Rome' },
  { slug: '22-rome-home', title: 'Rome and Home: Connecting Classrooms to Roman Space and Mind', grade: 'Grades 6–12', time: '6–8 class periods (1 hour each)', subjects: 'Interdisciplinary Humanities', authors: 'Dennis Rogala, Charles Diaz, Grant Potts, Kristen Van Der Linden, Phillip Harvey', skills: 'Primary source analysis and comparison, artwork analysis, word walls, personal evaluation of local monuments, group discussions, and peer teaching.', status: 'Under revision', imageLabel: 'Panoramic view of Rome' },
]
