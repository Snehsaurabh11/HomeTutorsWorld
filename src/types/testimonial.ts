// Testimonial type

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string; // e.g. "Mother of Class 8 Student"
  authorPhoto?: string;
  rating: number;
  subject?: string;
}

// API response wrapper
export interface TestimonialApiResponse {
  data: Testimonial[];
  total: number;
}
