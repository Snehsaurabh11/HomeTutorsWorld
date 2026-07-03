import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { Button } from '../components/ui/Button';
import { CheckCircle2, Phone } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { APP_CONFIG } from '../constants/config';

/**
 * Highlight tags shown below the H1
 */
const heroHighlights = [
  'Verified Tutors',
  'Personalized Learning',
  'Home & Online Classes',
  'Free Trial Class',
];

/**
 * Rotating keyword sequence — only the middle word animates
 * The city suffix "in Noida, Greater Noida & Greater Noida West" stays static
 */
const rotatingWords = [
  'Home Tutor',
  'Home Tuition',
  'CBSE Home Tutor',
  'Maths Tutor',
  'Science Tutor',
  'Female Home Tutor',
  'JEE Faculty',
  'NEET Mentor',
  'IB & IGCSE Tutor',
  'Coding & AI Tutor',
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/**
 * HeroSection — above-the-fold section with tagline and inline lead form
 * H1 structure: "Find the Best [rotating keyword] in Noida, Greater Noida & Greater Noida West"
 */
export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsFading(true);
      window.setTimeout(() => {
        setWordIndex((index) => (index + 1) % rotatingWords.length);
        setIsFading(false);
      }, 280);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex items-center bg-gradient-to-br from-[#efe8ff] via-[#e8deff] to-[#ddd0ff]"
      aria-label="Hero section"
    >
      {/* Background grid dots */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7260c1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Top-right glow blob */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-purple/12 rounded-full blur-3xl"
        aria-hidden="true"
      />
      {/* Bottom-left glow blob */}
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-purple/10 rounded-full blur-2xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left — Copy */}
          <div>
            {/* Trust badge */}
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-xs font-bold rounded-full mb-5 tracking-wide uppercase">
                🌟 Trusted Home &amp; Online Tutors in Delhi NCR
              </span>
            </motion.div>

            {/* H1 — only ONE H1 on the homepage */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.08}
              variants={fadeUp}
              className="font-display font-black text-neutral-900 text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.15] tracking-tight"
            >
              Find the Best
              <br />
              <span
                className={`inline-block text-brand-yellow-dark transition-opacity duration-300 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {rotatingWords[wordIndex]}
              </span>
              <br />
              
              <span className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-neutral-600 leading-relaxed">
                in Noida, Greater Noida &amp; Greater Noida West 
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.18}
              variants={fadeUp}
              className="text-neutral-500 text-base mt-4 max-w-[460px] leading-relaxed"
            >
              Connecting students with verified, experienced home tutors and online educators for CBSE, ICSE, IB, IGCSE, JEE, NEET, CUET, CLAT, Class 1–12, languages, coding and AI.
            </motion.p>

            {/* Highlight tags — 4 items, 2×2 on mobile, 4-col on sm+ */}
            <motion.ul
              initial="hidden"
              animate="visible"
              custom={0.28}
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-7"
            >
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-white/80 border border-brand-purple/10 p-3 text-center text-xs font-semibold text-neutral-700 shadow-soft backdrop-blur-sm"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 mx-auto mb-1.5 rounded-full bg-brand-purple-light text-brand-purple">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <div>{item}</div>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons — visible on all screen sizes */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.36}
              variants={fadeUp}
              className="mt-7 flex items-center gap-3 flex-wrap"
            >
              <a href={`tel:${APP_CONFIG.phone.replace(/\s/g, '')}`}>
                <Button
                  variant="primary"
                  size="md"
                  leftIcon={<Phone className="w-4 h-4" />}
                  id="hero-cta-book-trial"
                >
                  Book Free Trial
                </Button>
              </a>
              <Link to={ROUTES.REQUEST_TUTOR}>
                <Button variant="outline" size="md" id="hero-cta-find-tutor">
                  Find a Tutor
                </Button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.44}
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full"
            >
              {Object.entries(APP_CONFIG.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-3.5 shadow-soft border border-brand-purple/10">
                    <div className="font-display font-black text-xl text-brand-purple">{value}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 capitalize font-medium">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
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
