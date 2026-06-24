import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can I get a tutor?',
    answer:    'Once you submit the form, our team reviews your request and matches you with a qualified tutor within 24 hours.',
  },
  {
    question: 'Do tutors provide online classes as well?',
    answer:    'Yes. We offer both home tuition and online tutoring options depending on your preference.',
  },
  {
    question: 'Are tutors verified before matching?',
    answer:    'Absolutely. All tutors are vetted for experience, qualifications, and teaching ability before they are listed.',
  },
  {
    question: 'Can I request a free demo session?',
    answer:    'Yes. Many tutors offer a free demo class so you can judge the teaching style before committing.',
  },
  {
    question: 'How do I become a tutor?',
    answer:    'Visit our Become a Tutor page, submit your application, and our team will reach out with the next steps.',
  },
];

/**
 * FAQSection — premium accordion with smooth expand/collapse
 * Replaced native <details> with React state for animation control
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-12 bg-[#faf9ff]" aria-labelledby="faq-heading" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title={<>Frequently Asked Questions</>}
          subtitle="Everything you need to know about finding a tutor with HomeTutorsWorld."
          align="center"
        />

        <div className="mt-8 max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border bg-white overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-brand-purple/25 shadow-card'
                    : 'border-neutral-200/80 shadow-soft hover:border-brand-purple/20'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
                >
                  <span className={`font-display font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-brand-purple' : 'text-neutral-900 group-hover:text-brand-purple'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'bg-brand-purple text-white rotate-180'
                        : 'bg-neutral-100 text-neutral-500 group-hover:bg-brand-purple-light group-hover:text-brand-purple'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-4 border-t border-neutral-100">
                        <p className="text-neutral-500 text-sm leading-relaxed pt-3">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
