// Design system token constants
// Reference these in components instead of hardcoding values

export const THEME = {
  colors: {
    brandPurple: '#6B4EFF',
    brandPurpleDark: '#5238D4',
    brandPurpleLight: '#EDE9FF',
    brandYellow: '#F5A623',
    white: '#FFFFFF',
    dark: '#1A1A2E',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    fast: '150ms ease',
    default: '300ms ease',
    slow: '500ms ease',
  },
  zIndex: {
    navbar: 100,
    modal: 200,
    toast: 300,
  },
} as const;

// Grade/Class options for forms
export const GRADE_OPTIONS = [
  'Nursery / KG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
  'Undergraduate',
  'Postgraduate',
  'Competitive Exam',
] as const;

// Subject options for forms
// Used in both the lead form (single select) and tutor registration (multi-select)
export const SUBJECT_OPTIONS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'Hindi',
  'History',
  'Geography',
  'Economics',
  'Business Studies',
  'Accountancy',
  'Political Science',
  'Computer Science',
  'Science',
  'Sanskrit',
  'French',
  'German',
  'Spanish',
  'Japanese',
  'Coding',
  'Artificial Intelligence (AI)',
  'Spoken English',
  'Reasoning',
  'Aptitude',
  'Other',
] as const;

// Teaching mode options
export const TEACHING_MODE_OPTIONS = [
  'Home Tuition',
  'Online',
  'Both',
] as const;

// Preferred mode options (lead form)
export const PREFERRED_MODE_OPTIONS = [
  { value: 'Home Tuition', label: 'Home Tuition' },
  { value: 'Online',       label: 'Online Classes' },
  { value: 'Both',         label: 'Both (Home + Online)' },
] as const;
