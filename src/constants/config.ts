// Brand configuration — single source of truth
// All sensitive/configurable values are loaded from environment variables.
// See .env.example for the full list of required variables.

export const APP_CONFIG = {
  name:        import.meta.env.VITE_BUSINESS_NAME        || 'HomeTutorsWorld',
  displayName: (import.meta.env.VITE_BUSINESS_NAME       || 'HomeTutorsWorld').toUpperCase(),
  tagline:     'Trusted Home & Online Tutors in Delhi NCR',
  description:
    'HomeTutorsWorld is a trusted tutoring platform offering personalized home tuition and online classes for Class 1–12, CBSE, ICSE, IB, IGCSE, State Boards, IIT JEE, NEET, CUET, CLAT, coding, Artificial Intelligence (AI), language courses, and skill development. Currently serving Noida, Greater Noida, and Greater Noida West, with expansion planned across Delhi NCR.',
  phone:    import.meta.env.VITE_CONTACT_PHONE    || '+91 84486 22209',
  email:    import.meta.env.VITE_CONTACT_EMAIL    || 'info@hometutorsworld.com',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER  || '918448622209',
  /**
   * Default WhatsApp message — loaded from VITE_WHATSAPP_DEFAULT_MESSAGE.
   * Will be URL-encoded before use in wa.me links.
   */
  whatsappMessage:
    import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE ||
    'Hello HomeTutorsWorld, I would like to book a free trial class. Please help me find a suitable tutor.',
  address: 'Noida, Greater Noida & Greater Noida West',
  socialLinks: {
    facebook:  'https://facebook.com/hometutorsworld',
    instagram: 'https://instagram.com/hometutorsworld',
    twitter:   'https://twitter.com/hometutorsworld',
  },
  seo: {
    defaultTitle:
      'Best Home Tutor in Noida, Greater Noida & Greater Noida West | HomeTutorsWorld',
    titleTemplate: '%s | HomeTutorsWorld',
    defaultDescription:
      'Looking for trusted home tutors in Noida, Greater Noida or Greater Noida West? Book a free trial class with verified tutors for CBSE, ICSE, IB, IGCSE, Class 1–12, JEE, NEET, CUET, languages, coding, AI and online tuition.',
    keywords:
      'home tutor noida, home tutor greater noida, home tutor greater noida west, online tutor, CBSE tutor, ICSE tutor, IB tutor, IGCSE tutor, JEE coaching noida, NEET coaching, CUET coaching, coding tutor, AI tutor, home tuition',
    siteUrl: 'https://hometutorsworld.com',
  },
  stats: {
    tutors:       '500+',
    students:     '10,000+',
    cities:       '25+',
    satisfaction: '98%',
  },
} as const;

/**
 * EmailJS configuration — loaded from environment variables.
 */
export const EMAIL_CONFIG = {
  serviceId:       import.meta.env.VITE_EMAILJS_SERVICE_ID         || '',
  leadTemplateId:  import.meta.env.VITE_EMAILJS_LEAD_TEMPLATE_ID   || '',
  tutorTemplateId: import.meta.env.VITE_EMAILJS_TUTOR_TEMPLATE_ID  || '',
  publicKey:       import.meta.env.VITE_EMAILJS_PUBLIC_KEY          || '',
} as const;

/**
 * Maps embed URLs — loaded from environment variables.
 */
export const MAPS_CONFIG = {
  serviceLocationsUrl:
    import.meta.env.VITE_GOOGLE_MAP_URL ||
    'https://www.google.com/maps?q=Noida+Greater+Noida+Delhi+NCR&output=embed',
} as const;
