import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const sections = [
  {
    id: 'agreement',
    title: 'Agreement to Terms',
    content: [
      'By accessing or using the HomeTutorsWorld website and services, you agree to be bound by these Terms & Conditions.',
      'If you do not agree with any part of these terms, please do not use our services.',
      '[ Client: Replace with your official agreement clause. ]',
    ],
  },
  {
    id: 'our-services',
    title: 'Our Services',
    content: [
      'HomeTutorsWorld acts as an intermediary platform connecting students and parents with independent tutors.',
      'We do not directly employ tutors. Tutors are independent service providers responsible for their own conduct and teaching quality.',
      'We currently serve Noida, Greater Noida, and Greater Noida West, with expansion planned across Delhi NCR.',
      '[ Client: Describe all service types and delivery modes here. ]',
    ],
  },
  {
    id: 'registration',
    title: 'Tutor & Student Registration',
    content: [
      'Users who register as tutors agree to provide accurate information about their qualifications and experience.',
      'HomeTutorsWorld reserves the right to verify tutor credentials before listing them on the platform.',
      'False or misleading information may result in immediate removal from the platform.',
      '[ Client: Add specific verification and registration requirements. ]',
    ],
  },
  {
    id: 'payments',
    title: 'Fees & Payments',
    content: [
      'Tuition fees are agreed upon directly between the tutor and the student/parent. HomeTutorsWorld may charge a facilitation or matching fee.',
      'All payments should be made as agreed at the time of booking.',
      'HomeTutorsWorld is not responsible for payment disputes between tutors and students.',
      '[ Client: Insert actual fee structure, payment methods, and refund policy. ]',
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation Policy',
    content: [
      'Session cancellations must be communicated at least 24 hours in advance.',
      'Repeated last-minute cancellations may result in account suspension.',
      '[ Client: Define your exact cancellation and rescheduling policy. ]',
    ],
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    content: [
      'All users (tutors, students, and parents) are expected to behave respectfully and professionally.',
      'Any form of harassment, misconduct, or unethical behaviour will result in immediate suspension.',
      'HomeTutorsWorld maintains a zero-tolerance policy for abuse of any kind.',
      '[ Client: Define specific conduct rules and enforcement procedures. ]',
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: [
      'HomeTutorsWorld provides the platform "as is" and makes no guarantees about specific learning outcomes.',
      'We are not liable for any direct, indirect, or consequential damages arising from the use of our platform.',
      '[ Client: Consult a legal professional for jurisdiction-specific liability clauses. ]',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      'All content on the HomeTutorsWorld website, including text, graphics, and branding, is the property of HomeTutorsWorld.',
      'You may not reproduce, distribute, or use our content without prior written permission.',
      '[ Client: Add specific IP clauses applicable to your business. ]',
    ],
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to These Terms',
    content: [
      'HomeTutorsWorld reserves the right to modify these Terms & Conditions at any time.',
      'Continued use of the platform after changes constitutes acceptance of the updated terms.',
      '[ Client: Add versioning and effective date information. ]',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: [
      'For questions or concerns about these Terms & Conditions, please contact us:',
      'Email: info@hometutorsworld.com',
      'Phone: +91 84486 22209',
      'Location: Noida, Greater Noida & Greater Noida West',
    ],
  },
];

export function TermsPage() {
  return (
    <div className="bg-[#faf9ff] min-h-screen">
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#faf9ff] via-[#f6f3ff] to-[#f0ecff] py-12 md:py-16">
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{ backgroundImage: 'radial-gradient(circle, #7668B6 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          aria-hidden="true"
        />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-2xl" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <div className="bg-brand-purple-dark/[0.07] rounded-2xl px-6 py-8 md:py-10 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-xs font-bold rounded-full mb-5 tracking-wide uppercase">
                📋 Legal
              </span>
              <motion.h1
                initial="hidden" animate="visible" custom={0.08} variants={fadeUp}
                className="font-display font-black text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-3"
              >
                Terms &amp; <span className="text-brand-purple">Conditions</span>
              </motion.h1>
              <motion.p
                initial="hidden" animate="visible" custom={0.16} variants={fadeUp}
                className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              >
                Please read these terms carefully before using our services.
              </motion.p>
              <motion.p
                initial="hidden" animate="visible" custom={0.22} variants={fadeUp}
                className="text-neutral-400 text-xs mt-3"
              >
                Last updated: July 2025
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col gap-5">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04 * index }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-card p-6 md:p-8"
            >
              <SectionHeader
                eyebrow={String(index + 1).padStart(2, '0')}
                title={section.title}
                align="left"
                highlighted
              />
              <ul className="mt-4 flex flex-col gap-2.5">
                {section.content.map((para, i) => (
                  <li key={i} className="text-neutral-600 text-sm md:text-base leading-relaxed flex gap-2">
                    <span className="text-brand-purple mt-1 flex-shrink-0">•</span>
                    <span>{para}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-400 mt-10">
          © {new Date().getFullYear()} HomeTutorsWorld. All rights reserved.{' '}
          <a href="/privacy-policy" className="hover:text-brand-purple transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}