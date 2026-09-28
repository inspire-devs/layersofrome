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
      { label: 'Calendar', to: '/study-abroad/calendar' },
      { label: 'Map', to: '/study-abroad/map' },
      { label: 'Expenses', to: '/study-abroad/expenses' },
      { label: 'Lodging', to: '/study-abroad/lodging' },
      { label: 'Syllabus', to: '/study-abroad/syllabus' },
      { label: 'Student Journals', to: '/study-abroad/student-journals' },
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
    intro: 'Associate Professor of Ancient History and Humanities, Interim Chair of Philosophy, and Director of the Global Humanities Program at The University of Texas at El Paso.',
    sections: [
      { title: 'Academic leadership', body: 'Dr. Ronald Weber currently serves as Interim Chair of the Philosophy Department and Director of the Global Humanities Program at The University of Texas at El Paso. He is also identified with the directorship of the Humanities Program and the Master of Arts in Interdisciplinary Studies Program.' },
      { title: 'Teaching and research', body: 'His research centers on ancient Rome. He teaches courses on ancient Rome, Greece, the Middle East, and the impact of classical Roman culture in the United States. He has researched and published on the great Italian families of late antiquity, while his current work examines the history and evolution of Rome and its place as a center of world culture.' },
      { title: 'Rome as a classroom', body: 'Since 2002, Dr. Weber has led a yearly two-week study abroad trip to Rome and central Italy. An article on his successes and pedagogies in leading study abroad is forthcoming in Interdisciplinary Humanities. He is also nearing completion of a chapter on Lady Elizabeth Foster, Duchess of Devonshire, and her sponsorship of excavations in the Roman Forum for With Italy as Their Muse: British Women Travelers in the Long Nineteenth Century, 1815–1918.' },
      { title: 'Scholarship and publishing', body: 'As Executive Editor of Interdisciplinary Humanities, the journal of the Humanities Education and Research Association, Dr. Weber oversees financial matters and reviews submissions for three issues each year. His scholarship includes “Albinus: The Living Memory of a Fifth Century Personality” in Historia and work on Livy in Collection Latomus Studies in Latin Literature and Roman History.' },
      { title: 'Teaching through core texts', body: 'His publications on teaching and the development of core texts include “A Search for Order in the Cosmos: Using Plato’s Symposium to Examine Herodotus,” “Young Marco Polo: The Long Term Effects of Study Abroad,” and “Core Text: Reading Nafisi in El Paso.”' },
      { title: 'The Layers of Rome', body: 'In 2015, Dr. Weber received a National Endowment for the Humanities grant to serve as Co-Director of a Summer Institute for Teachers and Scholars on the significance of The Monuments of Rome in English Culture. Created during the institute, The Layers of Rome now operates as an expanding open-access resource for teachers and scholars interested in ancient Rome, and as a platform where institute participants and current students can share their research and teaching methods.' },
      { title: 'A commitment to teaching', body: 'From 1997 to 2002, Dr. Weber served as a Distinguished Fellow of UTEP’s Center for Excellence in Teaching and Learning. In 2007, the Journal of the Scholarship of Teaching and Learning published his article “Creating the Teaching Professor: Guiding Graduate Students to Become Effective Teachers.” He remains active in improving teaching methods as a regular reader and proposal evaluator for JoSTL.' },
    ],
  },
  '/about-us/john-de-frank': {
    title: 'John De Frank', eyebrow: 'Institute Directors',
    intro: 'Co-Faculty and Media Director of Layers of Rome, Global Humanities adjunct lecturer and administrator, filmmaker, producer, journalist, and community educator at The University of Texas at El Paso.',
    sections: [
      { title: 'Border-based media practice', body: 'John Leo De Frank lives and works on the U.S.–Mexico border. His practice spans filmmaking, grant writing, producing, media education, and journalism. He owns De Frank Media, a small business producing commercials, online promotional videos, short and feature documentaries, narrative films, academic media, and multimedia journalism.' },
      { title: 'Art, education, and Layers of Rome', body: 'Mr. De Frank is Assistant Director of the Rubin Center for the Visual Arts, a contemporary art gallery, and a lecturer in UTEP’s Global Humanities Program. He teaches Media & Social Justice, Social Justice & Film, and Layers of Rome Study Abroad. He also serves as co-faculty and Media Producer for the Layers of Rome Educational Resource and Study Abroad Program.' },
      { title: 'Community education', body: 'As an educator, Mr. De Frank teaches media and citizen journalism in the community through nonprofit organizations and collectives. He is a member of Movimiento Hunab Ku, an artist collective of visual and multimedia artists, music producers, writers, poets, and scholars. Its mission is to teach culture and heritage through art and entertainment to underserved communities and young people.' },
      { title: 'A bi-national film festival', body: 'Mr. De Frank is lead organizer of the Del Corazon Film Festival, a bi-national short-film festival with screenings in El Paso and Ciudad Juárez. The festival welcomes independent amateur and professional filmmakers working in documentary, narrative, music video, and animation.' },
    ],
  },
  '/about-us/contributing-faculty-staff': {
    title: 'Contributing Faculty & Staff', eyebrow: 'About Us',
    intro: 'Layers of Rome is built through the work of faculty, educators, students, media makers, and community partners.',
    sections: [{ title: 'Contributor profiles', body: 'Verified contributor biographies and portraits will be added here as the archival content is prepared.' }],
  },
  '/study-abroad/info': {
    title: 'Study Abroad', eyebrow: 'Learn in place',
    intro: 'A six-credit, two-course program that moves from the UTEP campus to Rome and turns the city into a living classroom.',
    sections: [
      { title: '“Conquered so late”', body: '“For the present I know not where to start, overwhelmed as I am by the greatness of my astonishment… In truth, Rome was greater, and greater are its ruins, than I imagined. I no longer wonder that the whole world was conquered by this city but that I was conquered so late.” — Petrarch, Rerum Familiarium' },
      { title: 'Program at a glance', body: 'The Layers of Rome is a six-credit program comprising two required courses.', items: ['Maymester: May 17–May 28 on the UTEP campus', 'Summer I: May 29–June 14 in Rome, Italy', 'Current program year must be confirmed before enrollment', 'Application portal URL pending; applicants will search for “Layers of Rome”'] },
      { title: 'Enrollment', body: 'This six-credit-hour program is offered by the Humanities Program and is open to undergraduate and graduate students qualified to enroll at The University of Texas at El Paso. Every traveler must be enrolled and university fees must be paid in full two weeks before departure. Enrollment requires the professor’s permission and a $575 deposit; College of Liberal Arts advisors enroll approved students after those requirements are met.' },
      { title: 'Course credit', body: 'Students enroll in HUMN 4390 for Maymester and select one Summer I Special Topics course titled “The Layers of Rome”: HIST 3390, HUMN 4390, ART 3307, POLS 4350, or COMM 4350. All listed courses fulfill Humanities Block Electives, allowing students to choose the course that best fits their degree requirements. Graduate students may participate with professor approval and advising through Independent Study and Internship Study.', items: ['Both courses are required unless the program director approves an exception.'] },
      { title: 'Rome through the centuries', body: 'The program surveys Rome from its founding and monarchy through revolt and transformation into the Republic, its expansion into Empire, the Holy Roman Empire, and revival through the Renaissance.' },
      { title: 'The city as classroom', body: 'Instruction continues across the Roman Forum, Forum Boarium, Palatine Hill, Colosseum, Pantheon, great aqueducts, Arch of Constantine, Baths of Caracalla, Circus Maximus, and Largo Argentina. Students also visit churches central to the Holy Roman Empire, including San Clemente, Santa Maria, and St. Peter’s Basilica, as well as the Vatican Palace, Borghese Gallery, Capitoline Museum, Roman House, Keats-Shelley House, and Non-Catholic Cemetery.' },
      { title: 'Beyond central Rome', body: 'The class travels to Ostia Antica, the ancient seaport of Roman power, where instruction continues on site among the ruins. Optional excursions beyond Rome may include ancient Pompeii and Renaissance Florence.' },
      { title: 'Research and media production', body: 'Working on site in teams, students create research and media projects for publication on this website. Their work includes lesson plans, interactive learning tools, digital history and preservation presentations for the traveling Preserving Identities exhibit, and video. These resources support high-school and early-college curricula and remain available to the public.' },
    ],
  },
  '/study-abroad/student-journals': {
    title: 'Student Journals', eyebrow: 'Student voices',
    intro: 'A future home for firsthand reflections on studying, researching, and living in Rome.',
    sections: [
      { title: 'Publication pending', body: 'The source material identifies this section as pending and notes that it may not be included. No student writing will be published until the selection, attribution, permissions, and supporting media have been confirmed.' },
    ],
  },
  '/study-abroad/expenses': {
    title: 'Expenses', eyebrow: 'Plan your journey',
    intro: 'Program fees, tuition, airfare, payment options, scholarships, financial aid, and passport preparation.',
    sections: [
      { title: 'Terms of travel', body: 'All costs reflect the lowest current rates in the supplied program information unless otherwise stated; airfare and tuition may change. UTEP’s travel agency offers a group airfare rate. Students may travel independently, but some scholarship funds may not be available when airfare is purchased outside the university travel agency.' },
      { title: 'Accommodation and attendance', body: 'Room rates are per person for 14 nights unless otherwise specified. Rates are negotiated for the full group, and every student must stay in group accommodations. Attendance is required at all daily class meetings on campus and in Italy. Outside scheduled activities, students may explore Rome independently.' },
      { title: 'Program expenses and fees', body: 'The supplied program fee is $2,300. Payment plans are available for travel expenses other than airfare. Tuition is separate and paid to the university. Estimates use the current market conversion rate for one euro.', items: ['Lodging', 'Instructional fee', 'Security deposit', 'Local travel', 'Site and museum entrance fees'] },
      { title: 'Airfare and tuition', body: 'Estimated airfare is $1,800, plus or minus market changes. The supplied tuition estimate is $1,230.60 per three-credit course, or $2,461.20 for two courses. Eligible students may use financial aid toward tuition. These figures are not tied to a stated program year and must be reconfirmed before payment.' },
      { title: 'Meals', body: 'Meals are not included in estimated program fees because student dining habits vary.' },
      { title: 'Payment plan', body: 'A $575 deposit is required to hold a place. The 12 available spaces are reserved first come, first served and assigned by Humanities Program staff. The supplied plan divides the total program cost into four $575 payments beginning in the fall, with the full amount due by May 1. The Study Abroad Office payment URL has not yet been supplied.' },
      { title: 'Scholarship opportunities', body: 'The Global Humanities Program, Study Abroad Office, and College of Liberal Arts Dean’s Office provide scholarship reimbursement of up to $2,000 to help with program costs. The Study Abroad Office also offers other scholarship opportunities. Contact the Global Humanities Program for details; the scholarship link referenced in the source is still needed.' },
      { title: 'Financial aid', body: 'Eligible students may apply financial aid to tuition. Because this is a six-credit summer program, qualifying students can use summer aid toward tuition costs. The referenced study-abroad financial-aid URL has not yet been supplied.' },
      { title: 'Passports', body: 'All students traveling abroad need a valid passport and are advised to apply at least 12 weeks before travel. U.S. citizens may apply through the main U.S. Post Office or the Westside Post Office on Remcon Road. The UTEP Office of International Programs at 203 Union East is also an Application Acceptance Facility for new and renewal U.S. passports and can be reached at (915) 747-5664.', items: ['Monday–Tuesday: 8:00 a.m.–6:00 p.m.', 'Wednesday–Friday: 8:00 a.m.–5:00 p.m.', 'The supplied source also references uspassportnow.com; applicants should verify official passport guidance and fees before using any service.'] },
      { title: 'Before making a payment', body: 'Dates, fees, airfare, tuition, scholarships, office hours, passport requirements, and external links can change. Confirm all current details with UTEP’s Global Humanities, Study Abroad, Financial Aid, and International Programs offices.' },
    ],
  },
  '/study-abroad/lodging': {
    title: 'Lodging', eyebrow: 'Living in Rome',
    intro: 'Shared apartments provide students with a practical home base for learning and daily life in Rome.',
    sections: [
      { title: 'Apartment living', body: 'While visiting Rome, students stay in co-ed apartments leased by Iowa State University through Boarding House International. Apartments have three to five rooms, each with an ensuite bathroom, plus a shared kitchen and living space.' },
      { title: 'Included amenities', body: 'Apartments include a washing machine, drying racks, and Wi-Fi. Each student receives an individual key for both the apartment building and the apartment.' },
      { title: 'Current-cohort confirmation', body: 'Accommodation providers, addresses, amenities, occupancy, and access arrangements should be reconfirmed for the current cohort before travel. Private lodging addresses will not be published publicly.' },
    ],
  },
  '/study-abroad/syllabus': {
    title: 'Syllabus', eyebrow: 'Academic program',
    intro: 'Course expectations, learning outcomes, assignments, and the full academic schedule.',
    sections: [{ title: 'PDF forthcoming', body: 'The program syllabus has been identified for this page, but the PDF has not yet been supplied. It will be published here after it is received and reviewed for accessibility and current program details.' }],
  },
  '/study-abroad/calendar': {
    title: 'Program Calendar', eyebrow: 'Dates and deadlines',
    intro: 'Application deadlines, campus meetings, travel dates, site visits, and program events in one current schedule.',
    sections: [
      { title: 'Published program dates', body: 'The supplied schedule lists Maymester on the UTEP campus from May 17 through May 28 and Summer I in Rome from May 29 through June 14. No year was included, so students must confirm that these dates apply to the current program cycle.' },
      { title: 'Google Calendar update pending', body: 'This page is designated for an updated Google Calendar. The calendar URL or embed code is still needed; once supplied, it will appear here with an accessible text-based schedule.' },
    ],
  },
  '/study-abroad/map': {
    title: 'Study Abroad Map', eyebrow: 'The city as classroom',
    intro: 'Explore the places where study, travel, and Roman history meet.',
    sections: [
      { title: 'Sites of study', body: 'The program map will connect the Roman Forum, Forum Boarium, Palatine Hill, Colosseum, Pantheon, aqueducts, Arch of Constantine, Baths of Caracalla, Circus Maximus, Largo Argentina, San Clemente, Santa Maria, St. Peter’s Basilica, the Vatican Palace, Borghese Gallery, Capitoline Museum, Roman House, Keats-Shelley House, Non-Catholic Cemetery, and Ostia Antica.' },
      { title: 'Google Map update pending', body: 'This page is designated for an updated Google Map. The map URL or embed code is still needed. Optional Pompeii and Florence excursions can be added once confirmed; private accommodation addresses will not be published.' },
    ],
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
