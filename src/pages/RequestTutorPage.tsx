import { LeadForm } from '../components/LeadForm';

/**
 * RequestTutorPage — standalone page with full-width lead capture form
 */
export function RequestTutorPage() {
  return (
    <div className="min-h-screen bg-gradient-hero py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-brand-purple-light text-brand-purple text-sm font-semibold rounded-full mb-4">
            Find Your Perfect Tutor
          </span>
          <h1 className="font-display font-black text-4xl text-neutral-900 mb-3">
            Request a Tutor
          </h1>
          <p className="text-neutral-500 text-lg">
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
