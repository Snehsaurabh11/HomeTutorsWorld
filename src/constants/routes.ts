// App-wide route path constants
// Usage: import { ROUTES } from '@constants/routes'

export const ROUTES = {
  HOME:           '/',
  REQUEST_TUTOR:  '/request-tutor',
  BECOME_TUTOR:   '/become-tutor',
  TUTORS:         '/tutors',
  SERVICES:       '/services',
  ABOUT:          '/about',
  CONTACT:        '/contact',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS:          '/terms',
  THANK_YOU:      '/thank-you',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
