import type { Testimonial } from '../types/testimonial';

/**
 * Testimonials — real parent & student reviews
 *
 * Future Google Business integration:
 * 1. Fetch reviews from Google Business Profile API.
 * 2. Map each review to this Testimonial interface.
 * 3. The TestimonialsSection carousel renders them automatically — no JSX changes needed.
 *
 * Fields:
 *   id          — unique identifier
 *   quote       — review text
 *   authorName  — reviewer's name
 *   authorRole  — role + location (e.g. "Parent · Sector 50, Noida")
 *   rating      — star rating (1–5)
 *   subject?    — optional subject the tutor taught
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-001',
    quote:
      'Found an excellent Maths tutor for my son in Sector 50, Noida within just 24 hours. The personalized one-to-one approach has significantly improved his board exam scores. Highly recommend HomeTutorsWorld!',
    authorName: 'Priya Malhotra',
    authorRole: 'Parent · Sector 50, Noida',
    rating: 5,
    subject: 'Mathematics',
  },
  {
    id: 'testimonial-002',
    quote:
      "Exceptional service! They matched us with a brilliant Physics and Chemistry tutor for JEE Advanced preparation. My daughter's confidence has improved dramatically and the free demo class made choosing so easy.",
    authorName: 'Rajesh Sharma',
    authorRole: 'Parent · Greater Noida West',
    rating: 5,
    subject: 'JEE Preparation',
  },
  {
    id: 'testimonial-003',
    quote:
      'Outstanding experience from start to finish. The CBSE English tutor was patient, knowledgeable and truly committed to my child\'s progress. Results improved in just two months. Will definitely recommend to all parents!',
    authorName: 'Sunita Verma',
    authorRole: 'Parent · Gamma, Greater Noida',
    rating: 5,
    subject: 'English',
  },
];
