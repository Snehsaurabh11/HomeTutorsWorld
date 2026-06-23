import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/ui/Card';
import { services, boards } from '../data/services';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * ServicesSection — Displays services (left) and boards/classes table (right)
 * Two-column responsive layout
 */
export function ServicesSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 bg-[#FBFAFF]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Services"
            title={<>Expert Home & Online Tuition</>}
            subtitle="For All Subjects, Boards & Competitive Exams"
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Service Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card hover className="h-full p-4">
                    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-2 ${service.color}`}>
                      <span className="text-lg">{service.icon}</span>
                    </div>
                    <h3 className="font-display font-bold text-neutral-900 text-base mb-1">
                      {service.name}
                    </h3>
                    <p className="text-neutral-600 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Boards & Classes Table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display font-bold text-neutral-900 text-2xl mb-6">
              Boards & Classes
            </h3>

            <div className="space-y-3">
              {boards.map((board) => (
                <div
                  key={board.id}
                  className="bg-white rounded-lg p-4 border border-neutral-200 hover:border-brand-purple hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-900">
                      {board.name}
                    </h4>
                    <span className="text-sm text-neutral-600 font-medium">
                      {board.classes}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-5 bg-brand-purple-light rounded-lg border border-brand-purple/20">
              <p className="text-sm text-neutral-700">
                <span className="font-semibold text-brand-purple">Flexibility:</span> We offer personalized tuition tailored to your board, curriculum, and competitive exam requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
