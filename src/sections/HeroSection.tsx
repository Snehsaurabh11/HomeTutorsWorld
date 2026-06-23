import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { APP_CONFIG } from '../constants/config';

const heroHighlights = [
  'Verified & Experienced Tutors',
  'Personalized Learning',
  'Free Demo Class',
];

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

/**
 * HeroSection — above-the-fold section with tagline and inline lead form
 */
export function HeroSection() {
  return (
    <section
      className="relative bg-gradient-hero overflow-hidden min-h-[calc(100vh-64px)] flex items-center"
      aria-label="Hero section"
    >
      {/* Background decorative dots */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #6B4EFF22 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-2xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-sm font-semibold rounded-full mb-6">
                ✨ {APP_CONFIG.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="font-display font-black text-neutral-900 text-4xl sm:text-5xl lg:text-6xl leading-tight"
            >
              The Right Tutor{' '}
              <br className="hidden sm:block" />
              Makes{' '}
              <span className="text-brand-purple relative">
                All The
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-yellow rounded-full"
                  aria-hidden="true"
                />
              </span>{' '}
              <br />
              Difference
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-neutral-600 text-lg mt-6 leading-relaxed max-w-lg"
            >
              Personalized home tuition and online classes for every student,
              every goal. Connect with verified, experienced tutors near you.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="flex flex-col gap-3 mt-8"
            >
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-neutral-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Mobile CTA (form is below on mobile) */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
              className="mt-8 flex items-center gap-4 lg:hidden"
            >
              <Link to={ROUTES.REQUEST_TUTOR}>
                <Button variant="primary" size="lg" id="hero-mobile-cta">
                  Request a Tutor
                </Button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={fadeUp}
              className="mt-10 grid grid-cols-3 gap-4 max-w-md"
            >
              {Object.entries(APP_CONFIG.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="font-display font-black text-2xl text-brand-purple">{value}</div>
                  <div className="text-xs text-neutral-500 mt-0.5 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
          >
            <LeadForm
              mode="inline"
              source="hero-form"
              title="Request a Tutor"
              subtitle="Fill the form and we will find the best tutor for you."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
