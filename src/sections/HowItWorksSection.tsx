import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ClipboardList, UserCheck, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    id:          'step-01',
    number:      '01',
    icon:        ClipboardList,
    title:       'Submit Requirement',
    description: 'Tell us your subject, board, class, and location. Takes less than 2 minutes.',
    color:       'bg-brand-purple-light text-brand-purple',
  },
  {
    id:          'step-02',
    number:      '02',
    icon:        UserCheck,
    title:       'Get Matched',
    description: 'Our team handpicks verified tutors based on your requirements within 24 hours.',
    color:       'bg-violet-50 text-violet-600',
  },
  {
    id:          'step-03',
    number:      '03',
    icon:        GraduationCap,
    title:       'Start Learning',
    description: 'Begin with a free demo class. If satisfied, continue with flexible scheduling.',
    color:       'bg-indigo-50 text-indigo-600',
  },
];

/**
 * HowItWorksSection — compact horizontal 3-step process
 * Desktop: horizontal flow with connector lines
 * Mobile:  stacked vertical layout
 */
export function HowItWorksSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-7 bg-[#f0ecff]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="How It Works"
            title={<>3 Simple Steps to Find Your Tutor</>}
            subtitle="From first enquiry to your first class — fast and worry-free."
            align="center"
          />
        </motion.div>

        {/* Steps */}
        <div className="relative mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector line (desktop only, between steps) */}
                {!isLast && (
                  <div
                    className="hidden md:block absolute top-6 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px"
                    aria-hidden="true"
                    style={{
                      background: 'linear-gradient(90deg, #7668B6 0%, #c4b8f0 100%)',
                      opacity: 0.35,
                    }}
                  />
                )}

                {/* Step icon with number badge */}
                <div className="relative mb-4 flex-shrink-0">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.color} shadow-soft`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-purple text-white text-[10px] font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Text */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 p-5 w-full shadow-soft">
                  <h3 className="font-display font-bold text-neutral-900 text-base leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
