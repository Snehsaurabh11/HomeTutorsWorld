import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { APP_CONFIG } from '../constants/config';
import { footerQuickLinks, footerSupportLinks } from '../data/navLinks';
import { Phone, Mail, MapPin } from 'lucide-react';

/**
 * Footer — site-wide footer with links, contact info, and social links
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-purple-dark text-white">
      {/* Main Footer */}
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-xs">
          <p>© {currentYear} {APP_CONFIG.displayName}. All Rights Reserved.</p>
          <p>Built with ❤️ for every student's success</p>
        </div>
      </div>
    </footer>
  );
}
