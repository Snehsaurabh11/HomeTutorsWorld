import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { navLinks } from '../data/navLinks';
import { ROUTES } from '../constants/routes';
import { APP_CONFIG } from '../constants/config';
import { cn } from '../utils/cn';

/**
 * Navbar — sticky navigation with mobile menu
 * Becomes opaque on scroll, transparent at top
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-white/96 backdrop-blur-lg shadow-soft border-b border-brand-purple/8'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to={ROUTES.HOME} onClick={closeMobileMenu} aria-label="HomeTutorsWorld Home">
          <Logo size="md" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.highlight ? (
              <Link key={link.label} to={link.href} onClick={closeMobileMenu} className="ml-2">
                <Button variant="primary" size="sm" id={`nav-${link.label.toLowerCase().replace(/ /g, '-')}`}>
                  {link.label}
                </Button>
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={closeMobileMenu}
                id={`nav-${link.label.toLowerCase().replace(/ /g, '-')}`}
                className={({ isActive }) =>
                  cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out group',
                    isActive
                      ? 'text-brand-purple bg-brand-purple-light'
                      : 'text-neutral-600 hover:text-brand-purple hover:bg-brand-purple/6'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Active underline indicator */}
                    <span
                      className={cn(
                        'absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-brand-purple transition-all duration-200',
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            )
          )}
        </div>

        {/* Desktop Phone CTA */}
        <a
          href={`tel:${APP_CONFIG.phone.replace(/\s/g, '')}`}
          className="hidden lg:flex items-center gap-2 text-sm font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors duration-200"
        >
          <span className="w-8 h-8 rounded-full bg-brand-purple-light flex items-center justify-center">
            <Phone className="w-3.5 h-3.5" />
          </span>
          {APP_CONFIG.phone}
        </a>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-brand-purple hover:bg-brand-purple-light transition-all duration-200"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-out bg-white border-t border-neutral-100/80',
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.highlight ? (
              <Link key={link.label} to={link.href} onClick={closeMobileMenu} className="mt-2">
                <Button variant="primary" size="md" fullWidth id={`mobile-nav-${link.label.toLowerCase().replace(/ /g, '-')}`}>
                  {link.label}
                </Button>
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-200',
                    isActive
                      ? 'text-brand-purple bg-brand-purple-light font-semibold'
                      : 'text-neutral-700 hover:text-brand-purple hover:bg-brand-purple/6'
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
          {/* Mobile Phone */}
          <a
            href={`tel:${APP_CONFIG.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2.5 px-4 py-2.5 text-brand-purple font-semibold text-base mt-1"
          >
            <span className="w-8 h-8 rounded-full bg-brand-purple-light flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </span>
            {APP_CONFIG.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
