import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { APP_CONFIG } from '../constants/config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { key: 'tutors', label: 'Expert Tutors' },
  { key: 'students', label: 'Students Tutored' },
  { key: 'cities', label: 'Cities Covered' },
  { key: 'satisfaction', label: 'Success Rate' },
] as const;

export function StatisticsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-16 bg-[#F4F1FF]" aria-labelledby="statistics-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Impact"
            title={<>Results That Speak for Themselves</>}
            subtitle="Trusted by thousands of families across India for quality tuition and measurable progress."
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {stats.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="rounded-4xl border border-neutral-200 bg-neutral-50 p-8 text-center h-full">
                <div className="text-5xl font-display font-black text-brand-purple">{APP_CONFIG.stats[item.key]}</div>
                <p className="text-neutral-500 mt-3 font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
