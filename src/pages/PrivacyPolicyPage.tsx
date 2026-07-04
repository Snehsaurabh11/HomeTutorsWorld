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
    id: 'introduction',
    title: 'Introduction',
    content: [
      'HomeTutorsWorld ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.',
      'By accessing our website or submitting any form, you agree to the practices described in this Privacy Policy.',
      '[ Client: Replace this section with your official introduction. ]',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly, such as your name, phone number, email address, city, and locality when you submit a tutor request or register as a tutor.',
      'We also collect usage data including pages visited, time spent on the site, and device information such as browser type and IP address.',
      '[ Client: Add or remove specific data points as applicable. ]',
    ],
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    content: [
      'To match students with suitable tutors and respond to tutor enquiries.',
      'To send confirmation emails and updates about your request.',
      'To improve our website and services based on usage patterns.',
      'We will never sell, rent, or share your personal data with third parties for marketing purposes.',
      '[ Client: List all actual use cases here. ]',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: [
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience.',
      'You can disable cookies through your browser settings, though some features may not function correctly.',
      '[ Client: Specify which cookies you use (analytics, functional, etc.) ]',
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: [
      'We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, or loss.',
      'No method of internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security.',
      '[ Client: Describe your specific security measures here. ]',
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: [
      'We use third-party services such as EmailJS for form submissions. These services have their own privacy policies.',
      'Our website may contain links to external sites. We are not responsible for the privacy practices of those sites.',
      '[ Client: List all third-party integrations here. ]',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal information held by us.',
      'To exercise these rights, please contact us at info@hometutorsworld.com.',
      '[ Client: Add applicable rights under your jurisdiction (GDPR, IT Act, etc.) ]',
    ],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, please contact us:',
      'Email: info@hometutorsworld.com',
      'Phone: +91 84486 22209',
      'Location: Noida, Greater Noida & Greater Noida West',
    ],
  },
];

export function PrivacyPolicyPage() {
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
                🔒 Legal
              </span>
              <motion.h1
                initial="hidden" animate="visible" custom={0.08} variants={fadeUp}
                className="font-display font-black text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-3"
              >
                Privacy <span className="text-brand-purple">Policy</span>
              </motion.h1>
              <motion.p
                initial="hidden" animate="visible" custom={0.16} variants={fadeUp}
                className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              >
                How we collect, use, and protect your personal information.
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

      {/* Policy Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col gap-5">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
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
          <a href="/terms" className="hover:text-brand-purple transition-colors">
            Terms &amp; Conditions
          </a>
        </p>
      </div>
    </div>
  );
}