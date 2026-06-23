import type { Subject } from '../types/common';

/**
 * Services data for ServicesSection
 * Includes core subjects, competitive exam prep, and boards data
 */
export const services: Subject[] = [
  {
    id: 'svc-01',
    name: 'Mathematics',
    icon: '📐',
    color: 'bg-brand-purple-light text-brand-purple',
    description: 'From basics to advanced calculus and problem solving.',
    levels: ['All Classes'],
  },
  {
    id: 'svc-02',
    name: 'Physics',
    icon: '⚛️',
    color: 'bg-blue-50 text-blue-600',
    description: 'Mechanics, thermodynamics, electromagnetism.',
    levels: ['Class 6-12'],
  },
  {
    id: 'svc-03',
    name: 'Chemistry',
    icon: '🧪',
    color: 'bg-green-50 text-green-600',
    description: 'Organic, inorganic, and physical chemistry.',
    levels: ['Class 6-12'],
  },
  {
    id: 'svc-04',
    name: 'Biology',
    icon: '🌿',
    color: 'bg-emerald-50 text-emerald-600',
    description: 'Botany, zoology, and human physiology.',
    levels: ['Class 6-12'],
  },
  {
    id: 'svc-05',
    name: 'English',
    icon: '📖',
    color: 'bg-amber-50 text-amber-600',
    description: 'Grammar, writing, reading comprehension.',
    levels: ['All Classes'],
  },
  {
    id: 'svc-06',
    name: 'Computer Science',
    icon: '💻',
    color: 'bg-violet-50 text-violet-600',
    description: 'Python, Java, Data Structures, CBSE curriculum.',
    levels: ['Class 6-12'],
  },
  {
    id: 'svc-07',
    name: 'Commerce',
    icon: '📊',
    color: 'bg-orange-50 text-orange-600',
    description: 'Accountancy, Economics, Business Studies.',
    levels: ['Class 11-12'],
  },
  {
    id: 'svc-08',
    name: 'JEE Preparation',
    icon: '🎯',
    color: 'bg-red-50 text-red-600',
    description: 'Comprehensive coaching for JEE Main & Advanced.',
    levels: ['Class 11-12'],
  },
  {
    id: 'svc-09',
    name: 'NEET Preparation',
    icon: '🔬',
    color: 'bg-pink-50 text-pink-600',
    description: 'Strategic preparation for medical entrance exams.',
    levels: ['Class 11-12'],
  },
  {
    id: 'svc-10',
    name: 'CUET Preparation',
    icon: '📚',
    color: 'bg-indigo-50 text-indigo-600',
    description: 'Dedicated coaching for university entrance exam.',
    levels: ['Class 12'],
  },
  {
    id: 'svc-11',
    name: 'State Competitive Exams',
    icon: '🏆',
    color: 'bg-cyan-50 text-cyan-600',
    description: 'Preparation for state-level competitive exams.',
    levels: ['Class 10-12'],
  },
];

/**
 * Boards and educational systems data
 * Used in the right-side table of ServicesSection
 */
export interface Board {
  id: string;
  name: string;
  classes: string;
}

export const boards: Board[] = [
  {
    id: 'board-01',
    name: 'CBSE',
    classes: 'Classes 1–12',
  },
  {
    id: 'board-02',
    name: 'ICSE',
    classes: 'Classes 1–12',
  },
  {
    id: 'board-03',
    name: 'ISC',
    classes: 'Classes 11–12',
  },
  {
    id: 'board-04',
    name: 'State Boards',
    classes: 'Classes 1–12',
  },
  {
    id: 'board-05',
    name: 'NIOS',
    classes: 'Classes 10–12',
  },
  {
    id: 'board-06',
    name: 'Competitive Exams',
    classes: 'JEE, NEET, CUET',
  },
];
