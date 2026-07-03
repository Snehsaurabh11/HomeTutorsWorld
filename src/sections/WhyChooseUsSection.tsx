import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { features } from '../data/features';

/**
 * WhyChooseUsSection — compact premium feature grid
 * Redesigned from large cards to a tighter, more elegant layout
 */
export function WhyChooseUsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-7 bg-[#f6f3ff]"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Why Choose Us"
            title={
              <>
                Why Thousands of Families Choose{' '}
                <span className="text-brand-purple">HomeTutorsWorld</span>
              </>
            }
            subtitle="Our carefully selected tutors focus on concept clarity, confidence building and long-term academic success through personalized one-to-one learning."
            align="center"
            highlighted
          />
        </motion.div>

        {/* Feature grid — 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {features.map((feature, index) => {
            const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[feature.icon] as LucideIcon | undefined;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="group bg-white rounded-xl border border-neutral-200/80 shadow-card p-4 h-full flex flex-col gap-2.5 transition-all duration-300 ease-out hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-purple/20 cursor-default">
                  {/* Icon */}
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-brand-purple-light ${feature.color} flex-shrink-0`}>
                    {IconComponent ? (
                      <IconComponent className="w-4 h-4" />
                    ) : (
                      <span className="text-sm">📚</span>
                    )}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 text-sm leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
