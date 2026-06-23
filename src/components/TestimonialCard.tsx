import type { Testimonial } from '../types/testimonial';
import { Card } from './ui/Card';
import { StarRating } from './ui/StarRating';
import { Quote } from 'lucide-react';
import { cn } from '../utils/cn';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

/**
 * TestimonialCard — displays a parent/student testimonial
 * Used in: TestimonialsSection
 */
export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn('relative overflow-hidden', className)}>
      {/* Decorative quote mark */}
      <Quote
        className="absolute top-4 right-4 w-10 h-10 text-brand-purple-light opacity-60"
        aria-hidden="true"
      />

      <StarRating rating={testimonial.rating} size="sm" showValue={false} className="mb-3" />

      <blockquote className="text-neutral-600 text-sm leading-relaxed mb-4 pr-8">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
        {testimonial.authorPhoto ? (
          <img
            src={testimonial.authorPhoto}
            alt={testimonial.authorName}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-brand-purple-light flex items-center justify-center text-brand-purple font-bold text-base">
            {testimonial.authorName.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-neutral-900 text-sm">{testimonial.authorName}</p>
          <p className="text-xs text-neutral-400">{testimonial.authorRole}</p>
        </div>
      </div>
    </Card>
  );
}
