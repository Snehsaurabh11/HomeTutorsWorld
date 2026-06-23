import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/ui/Card';
import { ShieldCheck, Users, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    id: 'step-01',
    icon: ShieldCheck,
    title: 'Verified Tutors',
    description: 'Every tutor is screened for experience, qualifications, and teaching excellence.',
  },
  {
    id: 'step-02',
    icon: Users,
    title: 'Personalized Match',
    description: 'We match tutors based on subjects, grade, availability, and learning goals.',
  },
  {
    id: 'step-03',
    icon: BookOpen,
    title: 'Learning That Works',
    description: 'Flexible home tuition or online sessions designed for faster improvement.',
  },
];

export function HowItWorksSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-16 bg-[#EDE9FF]"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="How It Works"
            title={<>A simple 3-step process to get started</>}
            subtitle="From first enquiry to your first class — we make finding a tutor easy and worry-free."
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8 border-transparent shadow-none bg-white/90">
                  <div className="w-14 h-14 rounded-3xl bg-brand-purple text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-neutral-900 text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
