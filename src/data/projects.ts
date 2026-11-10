export type Project = {
  slug: string
  index: string
  name: string
  industry: string
  type: 'Website concept'
  focus: string
  summary: string
  problem: string
  approach: string[]
  pages: string[]
  accent: string
  ink: string
  paper: string
}

export const projects: Project[] = [
  {
    slug: 'jaswant-telecom',
    index: '01',
    name: 'Jaswant Telecom',
    industry: 'Mobile repair',
    type: 'Website concept',
    focus: 'Repair enquiries and accessories',
    summary:
      'A storefront for a mobile repair counter: services first, accessories second, and a straight path to an enquiry.',
    problem:
      'Repair shops are often found through a signboard or a marketplace listing. A website concept here is meant to explain what gets fixed, what it costs to ask, and how to start a repair without digging through social posts.',
    approach: [
      'Lead with the repair menu, not a brand story.',
      'Keep accessories visible without competing with the enquiry.',
      'Make calling and WhatsApp available from the first screen on a phone.',
    ],
    pages: ['Home', 'Repairs', 'Accessories', 'Contact'],
    accent: '#E23B3B',
    ink: '#161616',
    paper: '#F4F1EA',
  },
  {
    slug: 'northline-air',
    index: '02',
    name: 'Northline Air',
    industry: 'Home services',
    type: 'Website concept',
    focus: 'Service enquiries and WhatsApp contact',
    summary:
      'An AC repair concept organised around the job a customer actually has: cooling stopped, and they need a person to call.',
    problem:
      'Home-service sites often bury the visit request under slogans. This concept keeps the service area, the kind of job, and a WhatsApp thread one decision apart.',
    approach: [
      'Name the jobs in plain language: service, install, gas, not cooling.',
      'Show the area covered before asking for a number.',
      'Treat WhatsApp as a primary action, not a footer afterthought.',
    ],
    pages: ['Home', 'Services', 'Coverage', 'Book a visit'],
    accent: '#3E6F8C',
    ink: '#14202A',
    paper: '#F3F6F7',
  },
  {
    slug: 'helio-field-solar',
    index: '03',
    name: 'Helio Field Solar',
    industry: 'Renewable energy',
    type: 'Website concept',
    focus: 'Business credibility and lead generation',
    summary:
      'A solar installation concept that explains the offer calmly and asks for a site conversation instead of a hard sell.',
    problem:
      'Solar buyers are comparing trust as much as price. The page has to look established, describe the kinds of installation, and give one clear way to request a conversation.',
    approach: [
      'Open with what is installed and for whom, not with a slogan.',
      'Separate home and small commercial paths.',
      'Use a short lead panel instead of a long form on the first view.',
    ],
    pages: ['Home', 'Installations', 'How it works', 'Request a visit'],
    accent: '#C9852A',
    ink: '#231C14',
    paper: '#F6F1E7',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
