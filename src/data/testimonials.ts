import type { Testimonial } from '../types/testimonial';

/**
 * Mock testimonial data — realistic parent/student reviews
 * Replace with API call to GET /api/testimonials when backend is ready.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-001',
    quote:
      'HomeTutorsWorld helped us find the perfect tutor for our daughter. Her grades improved dramatically and she became much more confident in her studies. Highly recommend!',
    authorName: 'Ritu Malhotra',
    authorRole: 'Mother of Class 8 Student',
    rating: 5,
    subject: 'Mathematics',
  },
  {
    id: 'testimonial-002',
    quote:
      'We were struggling to find a reliable Physics tutor for JEE preparation. HomeTutorsWorld connected us with an exceptional tutor within 24 hours. My son scored 95 percentile!',
    authorName: 'Rajesh Khanna',
    authorRole: 'Father of Class 12 Student',
    rating: 5,
    subject: 'Physics',
  },
  {
    id: 'testimonial-003',
    quote:
      "The demo class was free and convincing. Our tutor's teaching style perfectly matched our child's learning pace. We've seen tremendous improvement in just 3 months.",
    authorName: 'Sunita Sharma',
    authorRole: 'Parent of Class 5 Student',
    rating: 5,
    subject: 'All Subjects',
  },
  {
    id: 'testimonial-004',
    quote:
      'Excellent service! The tutor they assigned for NEET Chemistry preparation is knowledgeable, patient, and very effective. My daughter cleared NEET in the first attempt.',
    authorName: 'Vikram Patel',
    authorRole: 'Father of NEET Student',
    rating: 5,
    subject: 'Chemistry',
  },
  {
    id: 'testimonial-005',
    quote:
      'Finding a good English tutor was always difficult. HomeTutorsWorld matched us with a brilliant teacher who improved my son\'s writing skills significantly in just 2 months.',
    authorName: 'Ananya Bose',
    authorRole: 'Mother of Class 10 Student',
    rating: 4,
    subject: 'English',
  },
];
