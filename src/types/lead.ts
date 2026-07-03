// Lead form submission type
// Structured for EmailJS / API integration

export type LeadSource = 'hero-form' | 'request-tutor-page' | 'popup' | 'footer';

export interface LeadFormData {
  parentName: string;
  phone: string;
  grade: string;
  subjects: string[];      // multi-select
  city: string;
  locality?: string;       // e.g. "Sector 62", "Gaur City"
  message?: string;
  source?: LeadSource;
}

// Tutor registration form data
export interface TutorRegistrationData {
  fullName: string;
  phone: string;
  email: string;
  qualification: string;
  subjects: string[];
  experience: string;
  teachingMode: 'Home Tuition' | 'Online' | 'Both';
  city: string;
  availability: string;
  aboutYou?: string;
}

// Generic form submission state
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormState {
  status: FormStatus;
  message: string;
}
