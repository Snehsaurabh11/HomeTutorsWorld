import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../utils/cn';

/**
 * TestimonialsSection — parent testimonials with slider
 */
export function TestimonialsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-cta relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative quotes */}
      <div className="absolute top-8 left-8 text-white/10 text-[160px] font-serif leading-none select-none" aria-hidden="true">
        "
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <span className="text-white">
                What Parents Say
              </span>
            }
            subtitle=""
            align="center"
          />
        </motion.div>

        {/* Featured testimonial (large) */}
        <div className="mt-12 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-glow text-center">
                <p className="text-neutral-700 text-lg md:text-xl leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div className="mt-6 flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-brand-purple-light flex items-center justify-center text-brand-purple font-bold text-lg">
                    {testimonials[activeIndex].authorName.charAt(0)}
                  </div>
                  <p className="font-display font-bold text-neutral-900 mt-2">
                    {testimonials[activeIndex].authorName}
                  </p>
                  <p className="text-neutral-500 text-sm">
                    {testimonials[activeIndex].authorRole}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === activeIndex ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
