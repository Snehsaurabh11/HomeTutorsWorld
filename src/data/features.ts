import type { Feature } from '../types/common';

/**
 * "Why Choose Us" feature cards data
 * Replace icon string with actual Lucide icon name
 */
export const features: Feature[] = [
  {
    id: 'feature-01',
    icon: 'ShieldCheck',
    title: 'Expert Tutors',
    description: 'Experienced and background-verified tutors with proven track records.',
    color: 'text-brand-purple',
  },
  {
    id: 'feature-02',
    icon: 'Laptop',
    title: 'Flexible Learning',
    description: 'Choose between home tuition or online classes — whatever suits you best.',
    color: 'text-brand-yellow',
  },
  {
    id: 'feature-03',
    icon: 'Wallet',
    title: 'Affordable Fees',
    description: 'Quality education at reasonable, transparent prices. No hidden charges.',
    color: 'text-green-500',
  },
  {
    id: 'feature-04',
    icon: 'HeartHandshake',
    title: 'Students First',
    description: 'We focus entirely on student growth, confidence, and academic success.',
    color: 'text-rose-500',
  },
];
