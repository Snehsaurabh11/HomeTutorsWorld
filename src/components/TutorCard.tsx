import type { Tutor } from '../types/tutor';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';
import { MapPin, BookOpen, Clock } from 'lucide-react';
import { formatExperience } from '../utils/formatters';
import { cn } from '../utils/cn';

interface TutorCardProps {
  tutor: Tutor;
  variant?: 'default' | 'compact';
  className?: string;
}

/**
 * TutorCard — displays a tutor's profile summary
 * Used in: TopTutorsSection (homepage), TutorsPage (listing)
 */
export function TutorCard({ tutor, variant = 'default', className }: TutorCardProps) {
  if (variant === 'compact') {
    return (
      <Card hover className={cn('text-center p-5', className)}>
        {/* Avatar */}
        <div className="relative mx-auto w-16 h-16 mb-3">
          <img
            src={tutor.photo}
            alt={tutor.name}
            className="w-16 h-16 rounded-full object-cover border-[3px] border-brand-purple-light"
          />
          {tutor.status === 'active' && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
          )}
        </div>

        <h3 className="font-display font-bold text-neutral-900 text-sm leading-tight">
          {tutor.name}
        </h3>
        <p className="text-[11px] text-neutral-400 mt-0.5 mb-2">{tutor.qualification}</p>
        <p className="text-[11px] text-neutral-600 mb-2 font-medium">
          {tutor.subjects.slice(0, 2).join(' · ')}
        </p>
        <p className="text-[11px] text-neutral-400 mb-3">{formatExperience(tutor.experience)}</p>
        <StarRating rating={tutor.rating} size="sm" />
      </Card>
    );
  }

  return (
    <Card hover className={cn('overflow-hidden', className)}>
      <div className="flex gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={tutor.photo}
            alt={tutor.name}
            className="w-20 h-20 rounded-2xl object-cover"
          />
          {tutor.status === 'active' && (
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-bold text-neutral-900 text-base leading-tight">
              {tutor.name}
            </h3>
            <StarRating rating={tutor.rating} size="sm" showValue />
          </div>
          <p className="text-xs text-neutral-500 mt-0.5">{tutor.qualification}</p>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {tutor.subjects.map((sub) => (
              <Badge key={sub} variant="purple">{sub}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {formatExperience(tutor.experience)}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {tutor.location}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {tutor.teachingMode}
            </span>
          </div>
        </div>
      </div>

      {tutor.tags && tutor.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-neutral-100">
          {tutor.tags.map((tag) => (
            <Badge key={tag} variant="gray">{tag}</Badge>
          ))}
        </div>
      )}
    </Card>
  );
}
