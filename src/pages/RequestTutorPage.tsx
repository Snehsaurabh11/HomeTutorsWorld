import { LeadForm } from '../components/LeadForm';

/**
 * RequestTutorPage — standalone page with full-width lead capture form
 */
export function RequestTutorPage() {
  return (
    <div className="min-h-screen bg-gradient-hero py-10 md:py-16 px-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-6 md:mb-8 px-2">
          <span className="inline-block px-4 py-1.5 bg-brand-purple-light text-brand-purple text-xs sm:text-sm font-semibold rounded-full mb-4">
            Find Your Perfect Tutor
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 mb-3 leading-tight">
            Request a Tutor
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg">
            Fill in the details below. We'll match you with the best tutor within 24 hours.
          </p>
        </div>
        <LeadForm
          mode="standalone"
          source="request-tutor-page"
          title=""
          subtitle=""
        />
      </div>
    </div>
  );
}
