import { TutorRegistrationForm } from '../components/TutorRegistrationForm';

export function BecomeTutorPage() {
  return (
    <div className="min-h-screen bg-gradient-hero py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-sm font-semibold rounded-full mb-6">
              🎓 Join Our Tutor Network
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl text-neutral-900 leading-tight mb-6">
              Apply to Teach with HomeTutorsWorld
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
              Share your expertise, choose your schedule, and earn by teaching students across India.
            </p>
            <ul className="grid gap-3 text-neutral-700">
              <li>• Flexible teaching options: home tuition, online classes, or both.</li>
              <li>• Dedicated support for every tutor application.</li>
              <li>• Instant visibility to students in your subject area.</li>
            </ul>
          </div>

          <TutorRegistrationForm />
        </div>
      </div>
    </div>
  );
}
