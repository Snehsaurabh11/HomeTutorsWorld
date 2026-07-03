import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ROUTES } from '../constants/routes';
import { GraduationCap, Banknote, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const tutorPerks = [
  { icon: Clock,        text: 'Flexible Teaching Options' },
  { icon: GraduationCap, text: 'Grow Your Career' },
  { icon: Banknote,     text: 'Earn with HomeTutorsWorld' },
];

/**
 * BecomeTutorSection — tutor recruitment CTA section
 */
export function BecomeTutorSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-12 bg-[#f6f3ff] overflow-hidden"
      aria-labelledby="become-tutor-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-card-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0">
            {/* Left — Content */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple-light text-brand-purple text-xs font-bold rounded-full mb-5 tracking-wide uppercase">
                🎓 Passionate about teaching?
              </span>

              <h2
                id="become-tutor-heading"
                className="font-display font-black text-neutral-900 text-3xl md:text-4xl leading-tight tracking-tight"
              >
                Join Our Growing Tutor Network
              </h2>
              <p className="text-neutral-500 text-base mt-3 leading-relaxed max-w-sm">
                Join HomeTutorsWorld to connect with students, teach online or offline and grow your teaching career with flexible opportunities.
              </p>

              <ul className="flex flex-col gap-3 mt-7">
                {tutorPerks.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-neutral-700 text-sm font-medium">
                    <span className="w-7 h-7 rounded-lg bg-brand-purple-light text-brand-purple flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to={ROUTES.BECOME_TUTOR}>
                  <Button variant="primary" size="md" id="become-tutor-cta">
                    Register as a Tutor
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — Visual */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative min-h-[280px] lg:min-h-0 bg-gradient-brand flex items-center justify-center overflow-hidden"
            >
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full border-2 border-white/20" aria-hidden="true" />
              <div className="absolute top-16 right-20 w-10 h-10 rounded-full border-2 border-white/10" aria-hidden="true" />
              <div className="absolute bottom-12 left-10 w-14 h-14 rounded-full border-2 border-white/15" aria-hidden="true" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10" aria-hidden="true" />

              <div className="flex flex-col items-center justify-center text-white text-center p-8 relative z-10">
                <div className="text-6xl mb-3" role="img" aria-label="Teacher">👩‍🏫</div>
                <p className="text-white/90 text-sm font-semibold">500+ tutors already</p>
                <p className="text-white/70 text-xs mt-1">earning with us</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
