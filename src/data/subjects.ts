import type { Subject } from '../types/common';

/**
 * Subjects data with visual styling
 * Replace with API call to GET /api/subjects when backend is ready.
 */
export const subjects: Subject[] = [
  {
    id: 'sub-01',
    name: 'Mathematics',
    icon: '📐',
    color: 'bg-brand-purple-light text-brand-purple',
    description: 'From basics to advanced calculus and JEE-level problem solving.',
    levels: ['Class 1-5', 'Class 6-10', 'Class 11-12', 'JEE/NEET'],
  },
  {
    id: 'sub-02',
    name: 'Physics',
    icon: '⚛️',
    color: 'bg-blue-50 text-blue-600',
    description: 'Mechanics, thermodynamics, electromagnetism, and modern physics.',
    levels: ['Class 6-10', 'Class 11-12', 'JEE/NEET'],
  },
  {
    id: 'sub-03',
    name: 'Chemistry',
    icon: '🧪',
    color: 'bg-green-50 text-green-600',
    description: 'Organic, inorganic, and physical chemistry for boards and competitive exams.',
    levels: ['Class 6-10', 'Class 11-12', 'JEE/NEET'],
  },
  {
    id: 'sub-04',
    name: 'Biology',
    icon: '🌿',
    color: 'bg-emerald-50 text-emerald-600',
    description: 'Botany, zoology, and human physiology for NEET and board exams.',
    levels: ['Class 6-10', 'Class 11-12', 'NEET'],
  },
  {
    id: 'sub-05',
    name: 'English',
    icon: '📖',
    color: 'bg-amber-50 text-amber-600',
    description: 'Grammar, writing, reading comprehension, and literature analysis.',
    levels: ['Class 1-5', 'Class 6-10', 'Class 11-12'],
  },
  {
    id: 'sub-06',
    name: 'Computer Science',
    icon: '💻',
    color: 'bg-violet-50 text-violet-600',
    description: 'Python, Java, Data Structures, and CBSE CS curriculum.',
    levels: ['Class 6-10', 'Class 11-12', 'Undergraduate'],
  },
  {
    id: 'sub-07',
    name: 'Accountancy',
    icon: '📊',
    color: 'bg-orange-50 text-orange-600',
    description: 'Financial accounting, ledgers, and trial balance for commerce students.',
    levels: ['Class 11-12', 'Undergraduate'],
  },
  {
    id: 'sub-08',
    name: 'Hindi',
    icon: '🇮🇳',
    color: 'bg-rose-50 text-rose-600',
    description: 'Hindi grammar, literature, and writing skills for all classes.',
    levels: ['Class 1-5', 'Class 6-10', 'Class 11-12'],
  },
];
