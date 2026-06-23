import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/ui/Card';
import { subjects } from '../data/subjects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function SubjectsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 bg-neutral-50"
      aria-labelledby="subjects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Subjects"
            title={<>We Cover Every Major Subject</>}
            subtitle="Choose from a wide range of subjects for school, board exams, and competitive preparation."
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card hover className="h-full p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-3xl mb-5 ${subject.color}`}>
                  <span className="text-2xl">{subject.icon}</span>
                </div>
                <h3 className="font-display font-bold text-neutral-900 text-xl mb-2">
                  {subject.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {subject.description}
                </p>
                <div className="text-xs text-neutral-500 font-medium">
                  {subject.levels.join(' · ')}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
