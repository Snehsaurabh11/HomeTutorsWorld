import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { APP_CONFIG } from '../constants/config';
import { useForm } from 'react-hook-form';
import { cn } from '../utils/cn';


interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    id: 'phone',
    icon: Phone,
    label: 'Call Us',
    value: APP_CONFIG.phone,
    href: `tel:${APP_CONFIG.phone.replace(/\s/g, '')}`,
    color: 'bg-brand-purple-light text-brand-purple',
    description: 'Mon–Sat, 9 AM – 8 PM',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email Us',
    value: APP_CONFIG.email,
    href: `mailto:${APP_CONFIG.email}`,
    color: 'bg-amber-50 text-amber-600',
    description: 'We reply within 24 hours',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: `https://wa.me/${APP_CONFIG.whatsapp}`,
    color: 'bg-green-50 text-green-600',
    description: 'Fastest response channel',
  },
  {
    id: 'address',
    icon: MapPin,
    label: 'Location',
    value: APP_CONFIG.address,
    href: 'https://maps.google.com/?q=New+Delhi,India',
    color: 'bg-blue-50 text-blue-600',
    description: 'Serving Pan-India',
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/**
 * ContactPage — full contact page with form, contact info cards, map, and WhatsApp CTA
 */
export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate async submit (replace with emailjs or API call)
    await new Promise((r) => setTimeout(r, 1200));
    console.log('[ContactForm] submitted:', data);
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
    // Reset success message after 5 s
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#faf9ff] min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#faf9ff] via-[#f6f3ff] to-[#f0ecff] py-14 md:py-20">
        {/* Background dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #7668B6 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        {/* Glow blobs */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-2xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-xs font-bold rounded-full mb-5 tracking-wide uppercase">
              📞 Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="font-display font-black text-neutral-900 text-4xl md:text-5xl leading-tight tracking-tight mb-4"
          >
            We're Here to{' '}
            <span className="text-brand-purple">Help You</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="text-neutral-500 text-lg max-w-lg mx-auto leading-relaxed"
          >
            Have a question about finding a tutor? Reach out — our team responds within 24 hours.
          </motion.p>
        </div>
      </div>

      {/* ── Contact Info Cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.id === 'whatsapp' || item.id === 'address' ? '_blank' : undefined}
                rel={item.id === 'whatsapp' || item.id === 'address' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-neutral-200/80 shadow-card p-5 flex flex-col gap-3 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', item.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-brand-purple transition-colors duration-200 leading-snug">
                    {item.value}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* ── Main Section: Form + Map ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white rounded-3xl shadow-card-lg border border-neutral-200/80 p-7 md:p-10"
          >
            <div className="mb-7">
              <h2 className="font-display font-bold text-neutral-900 text-2xl leading-tight">
                Send Us a Message
              </h2>
              <p className="text-neutral-500 text-sm mt-1.5">
                Fill the form below and we'll get back to you shortly.
              </p>
            </div>

            {/* Success Banner */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-6"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-green-700 text-sm font-medium">
                  Message sent! We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="contact-name"
                  label="Your Name"
                  placeholder="e.g. Ritu Sharma"
                  required
                  autoComplete="name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                  error={errors.name?.message}
                />
                <Input
                  id="contact-phone"
                  label="Phone Number"
                  placeholder="10-digit mobile number"
                  type="tel"
                  autoComplete="tel"
                  {...register('phone', {
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Enter a valid 10-digit Indian mobile number',
                    },
                  })}
                  error={errors.phone?.message}
                />
              </div>

              <Input
                id="contact-email"
                label="Email Address"
                placeholder="you@example.com"
                type="email"
                required
                autoComplete="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                error={errors.email?.message}
              />

              <Input
                id="contact-subject"
                label="Subject"
                placeholder="e.g. Looking for a Math tutor in Delhi"
                required
                {...register('subject', { required: 'Subject is required' })}
                error={errors.subject?.message}
              />

              {/* Message textarea */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-neutral-700"
                >
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us more about what you're looking for..."
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border bg-white text-neutral-900 text-sm placeholder:text-neutral-400',
                    'transition-all duration-200 outline-none resize-none',
                    'focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple',
                    errors.message
                      ? 'border-rose-400 focus:ring-rose-200'
                      : 'border-neutral-200 hover:border-brand-purple/40'
                  )}
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="text-rose-500 text-xs">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isSubmitting}
                rightIcon={<Send className="w-4 h-4" />}
                id="contact-submit-btn"
                className="mt-1"
              >
                Send Message
              </Button>

              <p className="text-center text-xs text-neutral-400">
                🔒 Your information is 100% secure and private.
              </p>
            </form>
          </motion.div>

          {/* ── Right Side: Map + WhatsApp CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="flex flex-col gap-5"
          >
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-brand-purple/15 shadow-card-lg">
              <iframe
                title="HomeTutorsWorld Location - Delhi NCR"
                src="https://www.google.com/maps?q=New+Delhi+India&output=embed"
                width="100%"
                height="340"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp instant chat card */}
            <a
              href={`https://wa.me/${APP_CONFIG.whatsapp}?text=Hi%2C%20I%20need%20help%20finding%20a%20tutor.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-display font-bold text-base leading-tight">Chat on WhatsApp</p>
                <p className="text-white/80 text-sm mt-0.5">Get instant answers — reply in minutes</p>
              </div>
              <div className="ml-auto">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </a>

            {/* Business hours card */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-card p-5">
              <h3 className="font-display font-bold text-neutral-900 text-base mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-brand-purple inline-block" aria-hidden="true" />
                Business Hours
              </h3>
              <div className="flex flex-col gap-2.5">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM', active: true },
                  { day: 'Saturday',         time: '10:00 AM – 6:00 PM', active: true },
                  { day: 'Sunday',           time: 'Closed',             active: false },
                ].map(({ day, time, active }) => (
                  <div key={day} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                    <span className="text-sm font-medium text-neutral-700">{day}</span>
                    <span
                      className={cn(
                        'text-sm font-semibold px-2.5 py-0.5 rounded-lg',
                        active
                          ? 'text-brand-purple bg-brand-purple-light'
                          : 'text-neutral-400 bg-neutral-100'
                      )}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
