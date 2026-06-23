import type { Tutor } from '../types/tutor';

/**
 * Mock tutor data — realistic profiles
 * Data structure is designed to match future API response shape.
 * Replace this with an API call to GET /api/tutors when backend is ready.
 */
export const tutors: Tutor[] = [
  {
    id: 'tutor-001',
    name: 'Rahul Sharma',
    slug: 'rahul-sharma',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    qualification: 'M.Sc Mathematics, IIT Delhi',
    subjects: ['Mathematics', 'Physics'],
    experience: 5,
    rating: 4.9,
    reviewCount: 87,
    teachingMode: 'Both',
    location: 'South Delhi',
    bio: 'Passionate math educator with 5+ years of experience coaching Class 10-12 students for CBSE boards and IIT-JEE. Known for making complex concepts simple.',
    isFeatured: true,
    status: 'active',
    tags: ['CBSE', 'IIT-JEE', 'Class 11-12'],
  },
  {
    id: 'tutor-002',
    name: 'Neha Verma',
    slug: 'neha-verma',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    qualification: 'B.Tech Computer Science, DTU',
    subjects: ['Computer Science', 'Mathematics'],
    experience: 4,
    rating: 4.7,
    reviewCount: 63,
    teachingMode: 'Both',
    location: 'North Delhi',
    bio: 'Experienced CS tutor specializing in Python, Data Structures, and Class 11-12 CBSE Computer Science. Friendly teaching style with strong academic results.',
    isFeatured: true,
    status: 'active',
    tags: ['CBSE', 'Python', 'Class 11-12'],
  },
  {
    id: 'tutor-003',
    name: 'Pooja Singh',
    slug: 'pooja-singh',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    qualification: 'M.Sc Physics, Delhi University',
    subjects: ['Physics', 'Science'],
    experience: 6,
    rating: 4.8,
    reviewCount: 102,
    teachingMode: 'Home Tuition',
    location: 'West Delhi',
    bio: 'Highly rated Physics teacher with 6 years of experience. Specializes in NEET preparation and Class 9-12 Physics. 95% of students show grade improvement.',
    isFeatured: true,
    status: 'active',
    tags: ['NEET', 'CBSE', 'Class 9-12'],
  },
  {
    id: 'tutor-004',
    name: 'Ankit Gupta',
    slug: 'ankit-gupta',
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    qualification: 'B.Com, MBA Finance',
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    experience: 5,
    rating: 4.6,
    reviewCount: 48,
    teachingMode: 'Both',
    location: 'East Delhi',
    bio: 'Commerce specialist with MBA background. Expert in Accountancy, Business Studies, and Economics for Class 11-12. Makes commerce subjects engaging and practical.',
    isFeatured: true,
    status: 'active',
    tags: ['CBSE', 'Commerce', 'Class 11-12'],
  },
  {
    id: 'tutor-005',
    name: 'Priya Kapoor',
    slug: 'priya-kapoor',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    qualification: 'M.A. English Literature, JNU',
    subjects: ['English'],
    experience: 7,
    rating: 4.9,
    reviewCount: 124,
    teachingMode: 'Both',
    location: 'Central Delhi',
    bio: 'English language expert helping students master grammar, essay writing, and literature analysis. Exceptional results in CBSE English board exams.',
    isFeatured: false,
    status: 'active',
    tags: ['CBSE', 'ICSE', 'English Literature'],
  },
  {
    id: 'tutor-006',
    name: 'Amit Mishra',
    slug: 'amit-mishra',
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    qualification: 'M.Sc Chemistry, BHU',
    subjects: ['Chemistry', 'Science'],
    experience: 8,
    rating: 4.8,
    reviewCount: 156,
    teachingMode: 'Home Tuition',
    location: 'Gurugram',
    bio: 'Senior Chemistry educator with 8 years of experience in CBSE, ICSE, and NEET coaching. Has helped 200+ students achieve top scores in board exams.',
    isFeatured: false,
    status: 'active',
    tags: ['NEET', 'CBSE', 'ICSE', 'JEE'],
  },
];

/** Get only featured tutors */
export const getFeaturedTutors = (): Tutor[] =>
  tutors.filter((t) => t.isFeatured && t.status === 'active');

/** Get tutor by slug */
export const getTutorBySlug = (slug: string): Tutor | undefined =>
  tutors.find((t) => t.slug === slug);
