// Professional background for the Portfolio section, sourced from Sunmbola
// Matthew Oladimeji's CV. NOTE: private contact details (home address and phone
// number) are intentionally omitted — this is a public website.

export const SUMMARY =
  'A versatile professional bridging medical science, education, and digital media. ' +
  'BSc and MSc in Medical Laboratory Technology, now studying medicine at Nicolaus ' +
  'Copernicus University, with hands-on clinical laboratory experience across Nigeria, ' +
  'India, Italy, and Poland — and years of teaching before moving into health-education ' +
  'video and web development.'

// Accent colours reuse the site palette so each entry reads distinctly.
export const EXPERIENCE = [
  {
    role: 'Independent Content Creator',
    org: 'MD-Neo Talks · YouTube',
    location: 'Poland',
    period: '2026 – Present',
    accent: '#ff5a63',
    points: [
      'Founded and independently produce a health-education channel (@MDNeoTalks) that translates clinical topics into clear, accessible video for a general audience.',
      'Write, film, and edit every episode — covering disease prevention, symptom awareness, and preventive medicine.',
      'Apply clinical laboratory and medical training to keep the science accurate while adapting complex material for non-specialists.',
    ],
  },
  {
    role: 'Freelance Web Designer',
    org: 'Freelance',
    location: 'Poland',
    period: '2025 – Present',
    accent: '#2e90fa',
    points: [
      'Design and build custom, responsive websites for clients, managing each project independently from concept through launch.',
      'Learning and applying HTML, CSS, and JavaScript to build beyond template-based tools.',
    ],
  },
  {
    role: 'Medical Intern · Vascular Surgery',
    org: 'Szpital Uniwersytecki nr 1 im. dr. A. Jurasza',
    location: 'Bydgoszcz, Poland',
    period: 'Jun – Sep 2025',
    accent: '#7c5cff',
    points: [
      'Summer clinical clerkship in the Department of Vascular Surgery.',
    ],
  },
  {
    role: 'Medical Intern (IMD)',
    org: 'SP ZOZ MSWiA w Katowicach',
    location: 'Katowice, Poland',
    period: 'Jun – Sep 2024',
    accent: '#10b981',
    points: [
      'Summer clinical medical internship placement.',
    ],
  },
  {
    role: 'Biology & Geography Lecturer · Academic Coordinator',
    org: 'Emmaus Christian School',
    location: 'Rome, Italy & Poland',
    period: '2019 – 2025',
    accent: '#f59e0b',
    points: [
      'Delivered biology and geography lessons and one-on-one consultations with students and parents across two countries.',
      'As Academic Coordinator, built long-term relationships with families, tracked performance, prepared reports for leadership, and sustained high enrolment and retention.',
    ],
  },
  {
    role: 'Medical Laboratory Technologist Intern',
    org: 'Pondicherry Institute of Medical Sciences (PIMS)',
    location: 'India',
    period: '2018',
    accent: '#f45fb4',
    points: [
      'Assisted in operating and maintaining instruments for haematology, biochemistry, and clinical pathology testing.',
      'Performed sample collection, preparation, and analysis to SOPs, supporting accurate technical documentation.',
    ],
  },
  {
    role: 'Medical Laboratory Technologist Intern (Post-BSc)',
    org: 'Dr. Kamakshi Memorial Hospital',
    location: 'Chennai, India',
    period: '2015 – 2016',
    accent: '#2e90fa',
    points: [
      'Operated specialised equipment and automated analysers for routine and specialised clinical testing.',
      'Produced technical reports and maintained accurate documentation across rotating shifts and high-volume workloads.',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'Medicine',
    school: 'Nicolaus Copernicus University, Collegium Medicum',
    location: 'Bydgoszcz, Poland',
    period: '2024 – Present',
    accent: '#10b981',
  },
  {
    degree: 'MSc, Medical Laboratory Technology',
    school: 'Tamil Nadu Dr. M.G.R. Medical University',
    location: 'Chennai, India',
    period: '2016 – 2018',
    accent: '#2e90fa',
  },
  {
    degree: 'BSc, Medical Laboratory Technology',
    school: 'Tamil Nadu Dr. M.G.R. Medical University',
    location: 'Chennai, India',
    period: '2012 – 2015',
    accent: '#7c5cff',
  },
  {
    degree: 'High School Certificate',
    school: 'Lagos African Church Grammar School',
    location: 'Lagos, Nigeria',
    period: '2003 – 2009',
    accent: '#f59e0b',
  },
]

// Clinical clerkships / rotations — to be filled in from LinkedIn once provided.
// The Portfolio section only renders this block when it has entries.
// Shape: { specialty, hospital, location, period }
export const CLERKSHIPS = []

export const SKILLS = [
  {
    group: 'Clinical & Laboratory',
    items: [
      'Sample preparation & analysis',
      'Diagnostic testing',
      'Automated analysers',
      'SOP & quality control',
      'Laboratory Information Systems (LIS)',
    ],
  },
  {
    group: 'Digital & Web',
    items: ['Website design & build', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    group: 'Communication & Content',
    items: [
      'Public speaking',
      'Cross-cultural communication',
      'Scientific writing',
      'Video scripting, filming & editing',
    ],
  },
  {
    group: 'Core Competencies',
    items: ['MS Office', 'Basic SPSS', 'Critical thinking', 'Attention to detail', 'Adaptable under pressure'],
  },
]

export const AWARDS = [
  {
    title: 'Second Best Paper Presentation',
    detail: 'National Allied Laboratory Science Conference — clinical advances of stem-cell therapy in myocardial infarction.',
    org: 'MMM College of Allied Health Sciences',
    year: '2018',
  },
  {
    title: 'Paper Presentation · PHARMACON Conference',
    detail: 'Effect of algae extract on biochemical and haematological changes in rabbits.',
    org: 'MMM College of Allied Health Sciences',
    year: '2016',
  },
  {
    title: 'Certificate of Merit · Nostalgia',
    detail: '3rd place, English Elocution.',
    org: 'MMM College of Allied Health Sciences',
    year: '2015',
  },
  {
    title: 'Best Student · Biology and Food & Nutrition',
    detail: '',
    org: 'Lagos African Church Grammar School',
    year: '2008',
  },
]
