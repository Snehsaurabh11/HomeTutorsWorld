// Brand configuration — single source of truth
// Change here, reflects everywhere in the app

export const APP_CONFIG = {
  name: 'HomeTutorsWorld',
  displayName: 'HOMETUTORSWORLD',
  tagline: 'The Learning Enhancer',
  description:
    'Personalized home tuition and online classes for every student, every goal. Verified & experienced tutors across India.',
  phone: '+91 98765 43210',
  email: 'info@hometutorsworld.com',
  whatsapp: '919876543210',
  address: 'New Delhi, India',
  socialLinks: {
    facebook: 'https://facebook.com/hometutorsworld',
    instagram: 'https://instagram.com/hometutorsworld',
    twitter: 'https://twitter.com/hometutorsworld',
  },
  seo: {
    defaultTitle: 'HomeTutorsWorld — The Learning Enhancer',
    titleTemplate: '%s | HomeTutorsWorld',
    defaultDescription:
      'Find verified, experienced home tutors for your child. Personalized home tuition and online classes for CBSE, ICSE, IIT-JEE, NEET & more. Request a free demo today.',
    keywords:
      'home tutor, home tuition, online tutor, private tutor, CBSE tutor, ICSE tutor, IIT-JEE coaching, NEET coaching, Delhi tutor',
    siteUrl: 'https://hometutorsworld.com',
  },
  stats: {
    tutors: '500+',
    students: '10,000+',
    cities: '25+',
    satisfaction: '98%',
  },
} as const;
