import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { FeatureCard } from '../components/FeatureCard';
import { features } from '../data/features';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * WhyChooseUsSection — 4-feature grid explaining the value proposition
 */
export function WhyChooseUsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 bg-[#F7F4FF]"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Why Us"
            title={
              <>
                Why Choose{' '}
                <span className="text-brand-purple">HomeTutorsWorld?</span>
              </>
            }
            subtitle="We connect students with verified, experienced tutors — trusted by 10,000+ families across India."
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard feature={feature} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
