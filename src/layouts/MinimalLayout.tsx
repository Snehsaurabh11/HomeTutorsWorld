import { Outlet } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

/**
 * MinimalLayout — clean layout for standalone pages (ThankYou, 404)
 * No footer, minimal header with just the logo
 */
export function MinimalLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <header className="px-6 py-5 border-b border-neutral-100 bg-white">
        <Link to={ROUTES.HOME} aria-label="Go to homepage">
          <Logo size="md" />
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Outlet />
      </main>
    </div>
  );
}
