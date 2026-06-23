import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants/routes';
import { CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * ThankYouPage — post-form submission confirmation page
 * Shown after successful lead or tutor registration form submission
 */
export function ThankYouPage() {
  return (
    <div className="text-center max-w-md mx-auto px-4">
      {/* Success Icon */}
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>

      <h1 className="font-display font-black text-3xl text-neutral-900 mb-3">
        Thank You! 🎉
      </h1>
      <p className="text-neutral-600 text-lg leading-relaxed mb-8">
        We've received your request. Our team will call you within{' '}
        <strong className="text-brand-purple">24 hours</strong> to match you
        with the perfect tutor.
      </p>

      <div className="bg-brand-purple-light rounded-2xl p-5 mb-8 text-left">
        <h2 className="font-display font-bold text-brand-purple-dark mb-3 text-base">
          What happens next?
        </h2>
        <ul className="flex flex-col gap-2 text-sm text-neutral-700">
          {[
            'Our team reviews your requirements',
            'We match you with the best-fit tutor',
            'You get a call to confirm and schedule a free demo class',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-purple text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ul>
      </div>

      <Link to={ROUTES.HOME}>
        <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />} id="thank-you-home-btn">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
