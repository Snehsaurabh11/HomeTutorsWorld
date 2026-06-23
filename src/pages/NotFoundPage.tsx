import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants/routes';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * NotFoundPage — 404 error page
 */
export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-black text-brand-purple-light mb-4">
          404
        </div>
        <h1 className="font-display font-bold text-2xl text-neutral-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-neutral-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to={-1 as unknown as string}>
            <Button variant="outline" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />} id="404-back-btn">
              Go Back
            </Button>
          </Link>
          <Link to={ROUTES.HOME}>
            <Button variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />} id="404-home-btn">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
