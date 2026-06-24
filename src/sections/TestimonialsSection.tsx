import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../utils/cn';

/**
 * TestimonialsSection — parent testimonials with slider
 * Premium redesign: lighter background, glass card, icon-based quote mark
 */
export function TestimonialsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      ref={ref}
      className="py-12 bg-[#f0ecff] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle background blobs */}
      <div
        className="absolute -top-32 -right-32 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-purple/8 rounded-full blur-2xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>What Parents <span className="text-brand-purple">Say About Us</span></>
            }
            subtitle="Trusted by thousands of families across Delhi NCR."
            align="center"
          />
        </motion.div>

        {/* Featured testimonial */}
        <div className="mt-8 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="bg-white rounded-3xl p-7 md:p-10 shadow-card-lg border border-brand-purple/10 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-7 text-brand-purple-light" aria-hidden="true">
                  <Quote className="w-10 h-10 fill-current opacity-50" />
                </div>

                <p className="text-neutral-700 text-base md:text-lg leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-purple-light flex items-center justify-center text-brand-purple font-bold text-base flex-shrink-0">
                    {testimonials[activeIndex].authorName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-neutral-900 text-sm leading-none">
                      {testimonials[activeIndex].authorName}
                    </p>
                    <p className="text-neutral-400 text-xs mt-0.5">
                      {testimonials[activeIndex].authorRole}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full bg-white border border-neutral-200 hover:border-brand-purple/40 hover:bg-brand-purple-light text-neutral-600 hover:text-brand-purple flex items-center justify-center transition-all duration-200 shadow-soft"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === activeIndex
                      ? 'w-6 h-2 bg-brand-purple'
                      : 'w-2 h-2 bg-neutral-300 hover:bg-brand-purple/50'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full bg-white border border-neutral-200 hover:border-brand-purple/40 hover:bg-brand-purple-light text-neutral-600 hover:text-brand-purple flex items-center justify-center transition-all duration-200 shadow-soft"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
