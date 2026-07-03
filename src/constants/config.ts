// Brand configuration — single source of truth
// Change here, reflects everywhere in the app

export const APP_CONFIG = {
  name: 'HomeTutorsWorld',
  displayName: 'HOMETUTORSWORLD',
  tagline: 'Trusted Home & Online Tutors in Delhi NCR',
  description:
    'HomeTutorsWorld is a trusted tutoring platform offering personalized home tuition and online classes for Class 1–12, CBSE, ICSE, IB, IGCSE, State Boards, IIT JEE, NEET, CUET, CLAT, coding, Artificial Intelligence (AI), language courses, and skill development. Currently serving Noida, Greater Noida, and Greater Noida West, with expansion planned across Delhi NCR.',
  phone: '+91 84486 22209',
  email: 'info@hometutorsworld.com',
  whatsapp: '918448622209',
  address: 'Noida, Greater Noida & Greater Noida West',
  socialLinks: {
    facebook: 'https://facebook.com/hometutorsworld',
    instagram: 'https://instagram.com/hometutorsworld',
    twitter: 'https://twitter.com/hometutorsworld',
  },
  seo: {
    defaultTitle: 'Best Home Tutor in Noida, Greater Noida & Greater Noida West | HomeTutorsWorld',
    titleTemplate: '%s | HomeTutorsWorld',
    defaultDescription:
      'Looking for trusted home tutors in Noida, Greater Noida or Greater Noida West? Book a free trial class with verified tutors for CBSE, ICSE, IB, IGCSE, Class 1–12, JEE, NEET, CUET, languages, coding, AI, and online tuition.',
    keywords:
      'home tutor noida, home tutor greater noida, home tutor greater noida west, online tutor, CBSE tutor, ICSE tutor, IB tutor, IGCSE tutor, JEE coaching noida, NEET coaching, CUET coaching, coding tutor, AI tutor, home tuition',
    siteUrl: 'https://hometutorsworld.com',
  },
  stats: {
    tutors: '500+',
    students: '10,000+',
    cities: '25+',
    satisfaction: '98%',
  },
} as const;
