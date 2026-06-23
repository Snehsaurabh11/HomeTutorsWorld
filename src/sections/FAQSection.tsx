import { SectionHeader } from '../components/SectionHeader';

const faqs = [
  {
    question: 'How quickly can I get a tutor?',
    answer: 'Once you submit the form, our team reviews your request and matches you with a qualified tutor within 24 hours.',
  },
  {
    question: 'Do tutors provide online classes as well?',
    answer: 'Yes. We offer both home tuition and online tutoring options depending on your preference.',
  },
  {
    question: 'Are tutors verified before matching?',
    answer: 'Absolutely. All tutors are vetted for experience, qualifications, and teaching ability before they are listed.',
  },
  {
    question: 'Can I request a free demo session?',
    answer: 'Yes. Many tutors offer a free demo class so you can judge the teaching style before committing.',
  },
  {
    question: 'How do I become a tutor?',
    answer: 'Visit our Become a Tutor page, submit your application, and our team will reach out with the next steps.',
  },
];

export function FAQSection() {
  return (
    <section className="py-16 bg-[#F7F4FF]" aria-labelledby="faq-heading" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title={<>Frequently Asked Questions</>}
          subtitle="Answers to the most common questions about booking tutors and working with HomeTutorsWorld."
          align="center"
        />

        <div className="mt-12 grid gap-4 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 transition-shadow duration-200 open:shadow-card"
            >
              <summary className="cursor-pointer font-semibold text-neutral-900 text-lg list-none marker:hidden">
                {faq.question}
              </summary>
              <p className="mt-4 text-neutral-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
