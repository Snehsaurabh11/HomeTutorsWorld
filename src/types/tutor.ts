// Tutor profile type — designed to match future API response shape

export type Subject = {
  name: string;
  level: 'Primary' | 'Middle' | 'High School' | 'College' | 'All Levels';
};

export type TeachingMode = 'Home Tuition' | 'Online' | 'Both';

export type TutorStatus = 'active' | 'inactive' | 'pending';

export interface Tutor {
  id: string;
  name: string;
  slug: string;
  photo: string; // URL or import path
  qualification: string; // e.g. "M.Sc Mathematics"
  subjects: string[];
  experience: number; // years
  rating: number; // 1–5
  reviewCount: number;
  teachingMode: TeachingMode;
  location: string; // City / Area
  bio: string;
  isFeatured: boolean;
  status: TutorStatus;
  tags?: string[]; // e.g. ["CBSE", "IIT-JEE", "NEET"]
}

// API response wrapper — ready for future backend integration
export interface TutorApiResponse {
  data: Tutor[];
  total: number;
  page: number;
  pageSize: number;
}
