import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants/routes';
import { CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const tutorPerks = [
  'Flexible Teaching Options',
  'Grow Your Career',
  'Earn with HomeTutorsWorld',
];

/**
 * BecomeTutorSection — tutor recruitment CTA section
 */
export function BecomeTutorSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 bg-white overflow-hidden"
      aria-labelledby="become-tutor-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-4xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="p-10 md:p-14"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-sm font-semibold rounded-full mb-6">
                🎓 Join Our Network
              </span>

              <h2
                id="become-tutor-heading"
                className="font-display font-black text-neutral-900 text-4xl md:text-5xl leading-tight"
              >
                Become a Tutor
              </h2>
              <p className="text-neutral-600 text-lg mt-4 leading-relaxed">
                Join our community of expert educators and make a difference in students' lives.
              </p>

              <ul className="flex flex-col gap-3 mt-8">
                {tutorPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-neutral-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link to={ROUTES.BECOME_TUTOR}>
                  <Button
                    variant="primary"
                    size="lg"
                    id="become-tutor-cta"
                  >
                    Join as a Tutor
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — Image placeholder (replace with actual image) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative h-80 lg:h-full min-h-[360px] bg-gradient-brand flex items-end justify-center overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full border-4 border-white/20" aria-hidden="true" />
              <div className="absolute top-20 right-20 w-12 h-12 rounded-full border-4 border-white/10" aria-hidden="true" />
              <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full border-4 border-white/15" aria-hidden="true" />

              {/* Tutor illustration placeholder */}
              <div className="flex flex-col items-center justify-center h-full text-white text-center p-8">
                <div className="text-7xl mb-4">👩‍🏫</div>
                <p className="text-white/80 text-sm font-medium">
                  500+ tutors already earning with us
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
