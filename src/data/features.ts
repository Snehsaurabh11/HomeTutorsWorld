import type { Feature } from '../types/common';

/**
 * "Why Choose Us" feature cards — real business content
 */
export const features: Feature[] = [
  {
    id: 'feature-01',
    icon: 'ShieldCheck',
    title: 'Experienced & Verified Tutors',
    description:
      'Every tutor is thoroughly screened for academic background, teaching experience, and communication skills before being listed.',
    color: 'text-brand-purple',
  },
  {
    id: 'feature-02',
    icon: 'BookOpen',
    title: 'All Major Boards Covered',
    description:
      'CBSE, ICSE, IB, IGCSE, State Boards, and NIOS — we cover them all with dedicated subject-specific expertise.',
    color: 'text-blue-500',
  },
  {
    id: 'feature-03',
    icon: 'Target',
    title: 'Academic & Competitive Exam Support',
    description:
      'From school subjects to JEE, NEET, CUET, and CLAT — comprehensive coaching tailored to every learning goal.',
    color: 'text-green-500',
  },
  {
    id: 'feature-04',
    icon: 'Calendar',
    title: 'Flexible Scheduling',
    description:
      'Choose your preferred time, location, and learning mode — home tuition or live online classes, completely on your terms.',
    color: 'text-rose-500',
  },
];
