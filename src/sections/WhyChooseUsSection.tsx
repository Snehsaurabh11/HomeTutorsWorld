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
  const isDesktop = window.innerWidth >= 1024;

  return (
    <section
      ref={ref}
      className="py-14 "
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
            
          />
        </motion.div>

        {/* Feature grid — 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-6 mt-8">
        
          {features.map((feature, index) => {
            const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[feature.icon] as LucideIcon | undefined;

            return (
              <motion.div
               layout
    key={feature.id}
    className="feature-wrapper"
    initial={{ opacity: 0, y: 24 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.45, delay: index * 0.08 }}
  style={{
  rotate: isDesktop ? [-3, 2, -2, 3][index] : 0,
}}

whileHover={{
  y: -14,
  rotate: 0,
  scale: 1.04,
  transition: {
    duration: 0.35,
    ease: "easeOut",
  },
}}
>
                <div
className={`
group
feature-card
card-${feature.variant}

rounded-3xl

p-5
h-full

flex
flex-col
gap-3

cursor-default

transition-all
duration-500
ease-out
`}
>
                  {/* Icon */}
                  <motion.div
  whileHover={{
    y: -3,
    scale: 1.1,
    rotate: 8,
  }}
  transition={{
    type: "spring",
    stiffness: 320,
    damping: 18,
  }}
 className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/15 backdrop-blur-sm flex-shrink-0"
>
                    {IconComponent ? (
                      <IconComponent className="w-4 h-4" />
                    ) : (
                      <span className="text-sm">📚</span>
                    )}
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h3 className="font-display font-bold text-white text-sm leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed mt-0.5">
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
