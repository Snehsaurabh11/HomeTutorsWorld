import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { APP_CONFIG } from '../constants/config';
import { cn } from '../utils/cn';
import { useContactForm } from '../hooks/useContactForm';

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
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: `https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(APP_CONFIG.whatsappMessage)}`,
    color: 'bg-green-50 text-green-600',
    description: 'Fastest response channel',
  },
  {
    id: 'address',
    icon: MapPin,
    label: 'Location',
    value: APP_CONFIG.address,
    href: 'https://maps.google.com/?q=Noida+Greater+Noida+India',
    color: 'bg-blue-50 text-blue-600',
    description: 'Serving Pan Delhi NCR',
  },
];

const businessHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM', active: true },
  { day: 'Saturday',         time: '10:00 AM – 6:00 PM', active: true },
  { day: 'Sunday',           time: 'Closed',             active: false },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/**
 * ContactPage — Integrated version matching the useLeadForm pattern.
 * Fully retains layout, custom styling, responsive layout pillars, and animations.
 */
export function ContactPage() {
  const {
    methods,
    formState,
    onSubmit,
    isSubmitting,
  } = useContactForm();

  const {
    register,
    formState: { errors },
  } = methods;

  const submitted = formState.status === 'success';
  const whatsappUrl = `https://wa.me/${APP_CONFIG.whatsapp}?text=${encodeURIComponent(APP_CONFIG.whatsappMessage)}`;

  return (
    <div className="bg-[#faf9ff] min-h-screen">

      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#faf9ff] via-[#f6f3ff] to-[#f0ecff] py-12 md:py-20">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'radial-gradient(circle, #7668B6 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          aria-hidden="true"
        />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-2xl" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <div className="bg-brand-purple-dark/[0.07] rounded-2xl px-6 py-8 md:py-10 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple-light text-brand-purple text-xs font-bold rounded-full mb-5 tracking-wide uppercase">
                📞 Get In Touch
              </span>
              <motion.h1
                initial="hidden" animate="visible" custom={0.08} variants={fadeUp}
                className="font-display font-black text-neutral-900 text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-3"
              >
                We're Here to <span className="text-brand-purple">Help You</span>
              </motion.h1>
              <motion.p
                initial="hidden" animate="visible" custom={0.16} variants={fadeUp}
                className="text-neutral-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
              >
                Have a question about finding a tutor? Reach out — our team responds within 24 hours.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Contact Info Cards ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-8 relative z-10">
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
                <div className="min-w-0">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-neutral-900 group-hover:text-brand-purple transition-colors duration-200 leading-snug break-words">
                    {item.value}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    {item.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* ── Main Content Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">

          {/* Left Column — Contact Form */}
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
                  {formState.message}
                </p>
              </motion.div>
            )}

            {/* Error Banner */}
            {formState.status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4"
              >
                <p className="text-sm font-medium text-red-600">
                  {formState.message}
                </p>
              </motion.div>
            )}

            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
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
                <label htmlFor="contact-message" className="text-sm font-semibold text-neutral-700">
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

          {/* Right Column — WhatsApp CTA, Contact Shortcuts, and Hours */}
          <div className="flex flex-col gap-6">
            
            {/* WhatsApp Big CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl p-5 sm:p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp size={28} />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-base sm:text-lg leading-tight">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm mt-0.5">Get instant answers — we reply in minutes</p>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <Send className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Quick Actions Shortcuts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <a
                href={`tel:${APP_CONFIG.phone.replace(/\s/g, '')}`}
                className="group bg-white rounded-2xl border border-neutral-200/80 shadow-card p-5 flex items-center gap-3 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="w-10 h-10 rounded-xl bg-brand-purple-light text-brand-purple flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Call Now</p>
                  <p className="text-sm font-bold text-neutral-900 group-hover:text-brand-purple transition-colors truncate">{APP_CONFIG.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${APP_CONFIG.email}`}
                className="group bg-white rounded-2xl border border-neutral-200/80 shadow-card p-5 flex items-center gap-3 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Email</p>
                  <p className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition-colors truncate">{APP_CONFIG.email}</p>
                </div>
              </a>
            </motion.div>

            {/* Business Hours Block */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="bg-white rounded-2xl border border-neutral-200/80 shadow-card p-6 md:p-8"
            >
              <h2 className="font-display font-bold text-neutral-900 text-xl mb-6 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-brand-purple inline-block" aria-hidden="true" />
                Business Hours
              </h2>
              <div className="flex flex-col gap-3">
                {businessHours.map(({ day, time, active }) => (
                  <div key={day} className="flex items-center justify-between py-2.5 border-b border-neutral-100 last:border-0">
                    <span className="text-sm font-medium text-neutral-700">{day}</span>
                    <span
                      className={cn(
                        'text-sm font-semibold px-3 py-1 rounded-lg',
                        active ? 'text-brand-purple bg-brand-purple-light' : 'text-neutral-400 bg-neutral-100'
                      )}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-brand-purple-dark/[0.06] rounded-xl">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  💡 <strong>Tip:</strong> WhatsApp is our fastest channel. For urgent enquiries, send us a message and we'll respond within minutes.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}