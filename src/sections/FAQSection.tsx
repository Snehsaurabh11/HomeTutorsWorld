import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ data — add/remove questions by editing this array only.
 * No JSX changes needed.
 */
const faqs: { question: string; answer: string }[] = [
  {
    question: 'Do you provide home tuition?',
    answer:
      'Yes. We connect students with experienced, background-verified home tutors who visit at your preferred time and location. We currently serve Noida, Greater Noida, Greater Noida West and nearby areas of Delhi NCR.',
  },
  {
    question: 'Do you offer online classes?',
    answer:
      'Yes. We provide live, one-to-one online tutoring sessions for all subjects, boards and competitive exams. Online classes are available across India — from any device, at any convenient time.',
  },
  {
    question: 'Which boards do you cover?',
    answer:
      'We cover all major boards — CBSE, ICSE, IB, IGCSE, NIOS and State Boards — for Class 1 through 12. We also offer expert coaching for competitive exams including JEE Main, JEE Advanced, NEET, CUET and CLAT.',
  },
  {
    question: 'Is a demo class available?',
    answer:
      "Yes. We offer a free demo class so you can evaluate the tutor's teaching style, subject knowledge and compatibility with your child — before committing to regular sessions. No obligation involved.",
  },
  {
    question: 'Which classes do you teach?',
    answer:
      'We provide tutors for Nursery/KG through Class 12 across all streams — Science, Commerce and Arts. We also support competitive exam aspirants and learners of coding, Artificial Intelligence (AI) and foreign languages.',
  },
  {
    question: 'Can I choose my preferred tutor?',
    answer:
      "Yes. After understanding your requirements, our academic team suggests the most suitable tutors. You can review their profile, subject expertise and teaching mode — and make your final decision after the free demo class.",
  },
  {
    question: 'Do you provide tutors for Coding and AI?',
    answer:
      'Yes. We offer specialized tutors for Coding (Python, Java, Web Development) and Artificial Intelligence (AI). These personalized sessions are available as home visits or live online classes, suitable for school students and beginners alike.',
  },
];

/**
 * FAQSection — premium accordion with smooth expand/collapse via Framer Motion
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
                  <span
                    className={`font-display font-semibold text-base leading-snug transition-colors duration-200 ${
                      isOpen
                        ? 'text-brand-purple'
                        : 'text-neutral-900 group-hover:text-brand-purple'
                    }`}
                  >
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
