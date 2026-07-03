import type { NavLink } from '../types/common';
import { ROUTES } from '../constants/routes';

/**
 * Navigation links for the Navbar
 * highlight: true = renders as CTA button style
 */
export const navLinks: NavLink[] = [
  { label: 'Home',            href: ROUTES.HOME },
  { label: 'Services',        href: ROUTES.SERVICES },
  { label: 'Request a Tutor', href: ROUTES.REQUEST_TUTOR, highlight: true },
  { label: 'Become a Tutor',  href: ROUTES.BECOME_TUTOR },
  { label: 'Contact',         href: ROUTES.CONTACT },
];

/** Footer quick links */
export const footerQuickLinks: NavLink[] = [
  { label: 'Home',            href: ROUTES.HOME },
  { label: 'Services',        href: ROUTES.SERVICES },
  { label: 'Request a Tutor', href: ROUTES.REQUEST_TUTOR },
  { label: 'Become a Tutor',  href: ROUTES.BECOME_TUTOR },
];

/** Footer support links */
export const footerSupportLinks: NavLink[] = [
  { label: 'About Us',          href: ROUTES.ABOUT },
  { label: 'FAQs',              href: '/#faq' },
  { label: 'Privacy Policy',    href: ROUTES.PRIVACY_POLICY },
  { label: 'Terms & Conditions',href: ROUTES.TERMS },
];
