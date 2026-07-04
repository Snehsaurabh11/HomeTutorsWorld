import { TutorRegistrationForm } from '../components/TutorRegistrationForm';
import { CheckCircle2 } from 'lucide-react';

const perks = [
  'Flexible teaching options: home tuition, online classes, or both.',
  'Dedicated support for every tutor application.',
  'Instant visibility to students in your subject area.',
];

/**
 * BecomeTutorPage — tutor application page
 * Mobile: stacked (info → form)
 * Desktop: 2-column (info left, form right)
 */
export function BecomeTutorPage() {
  return (
    <div className="min-h-screen bg-gradient-hero py-10 md:py-14 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_1.1fr] items-start">

          {/* Left — Info */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-xs sm:text-sm font-semibold rounded-full mb-5">
              🎓 Join Our Tutor Network
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-neutral-900 leading-tight mb-4">
              Apply to Teach with{' '}
              <span className="text-brand-purple">HomeTutorsWorld</span>
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              Share your expertise, choose your schedule, and earn by teaching students across India.
            </p>
            <ul className="flex flex-col gap-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-neutral-700 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <TutorRegistrationForm />
        </div>
      </div>
    </div>
  );
}
