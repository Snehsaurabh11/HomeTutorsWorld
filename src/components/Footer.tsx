import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { APP_CONFIG } from '../constants/config';
import { footerQuickLinks, footerSupportLinks } from '../data/navLinks';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

/**
 * Google Reviews placeholder data.
 * Future: replace with Google Business Profile API response.
 */
const googleReviews = [
  {
    id:       'gr-001',
    name:     'Priya M.',
    rating:   5,
    text:     'Excellent tutor matching. Found the perfect Maths tutor in 24 hours!',
    location: 'Noida',
  },
  {
    id:       'gr-002',
    name:     'Rajesh S.',
    rating:   5,
    text:     'Best home tutor service in Greater Noida West. Highly recommended!',
    location: 'Greater Noida West',
  },
];

const GOOGLE_RATING        = 4.9;
const GOOGLE_REVIEW_COUNT  = 127;
/** Update this to the real Google Business review URL once verified */
const GOOGLE_REVIEWS_URL   = 'https://g.page/hometutorsworld/review';

/**
 * Footer — site-wide footer with Google Reviews strip, links, contact info, and social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-purple-dark text-white">

      {/* ── Google Reviews Strip ── */}
      <div className="border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">

            {/* Rating summary */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center gap-0.5" aria-label={`${GOOGLE_RATING} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="font-display font-bold text-white text-sm">{GOOGLE_RATING}</span>
              <span className="text-white/40 text-xs" aria-hidden="true">·</span>
              <span className="text-white/60 text-xs">{GOOGLE_REVIEW_COUNT}+ Google Reviews</span>
            </div>

            {/* Vertical divider (desktop only) */}
            <div className="hidden sm:block w-px h-8 bg-white/15 flex-shrink-0" aria-hidden="true" />

            {/* Review snippet */}
            <p className="flex-1 text-white/60 text-xs leading-relaxed italic min-w-0 truncate">
              &ldquo;{googleReviews[0].text}&rdquo;
              <span className="ml-1.5 text-white/40 not-italic">
                — {googleReviews[0].name}, {googleReviews[0].location}
              </span>
            </p>

            {/* View All CTA */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-xs font-semibold text-brand-yellow hover:text-brand-yellow-dark transition-colors hover:underline underline-offset-2"
              aria-label={`View all ${GOOGLE_REVIEW_COUNT}+ Google Reviews`}
            >
              View All Reviews →
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo variant="white" size="md" useImage={false} />
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              {APP_CONFIG.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={APP_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm font-semibold"
              >
                FB
              </a>
              <a
                href={APP_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm font-semibold"
              >
                IG
              </a>
              <a
                href={APP_CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-sm font-semibold"
              >
                X
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4">Support</h4>
            <ul className="flex flex-col gap-2.5">
              {footerSupportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${APP_CONFIG.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                  {APP_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${APP_CONFIG.email}`}
                  className="flex items-center gap-3 text-white/70 text-sm hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                  {APP_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {APP_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-xs">
          <p>© {currentYear} {APP_CONFIG.displayName}. All Rights Reserved.</p>
          <p>Built with ❤️ for every student&apos;s success</p>
        </div>
      </div>
    </footer>
  );
}
