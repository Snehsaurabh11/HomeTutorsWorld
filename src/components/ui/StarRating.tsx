import { cn } from '../../utils/cn';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

const sizeMap = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' };
const textSizeMap = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' };

export function StarRating({
  rating,
  maxStars = 5,
  size = 'md',
  showValue = true,
  className,
}: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {Array.from({ length: maxStars }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              sizeMap[size],
              i < Math.round(rating)
                ? 'fill-brand-yellow text-brand-yellow'
                : 'fill-neutral-200 text-neutral-200'
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className={cn('font-semibold text-neutral-700', textSizeMap[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
