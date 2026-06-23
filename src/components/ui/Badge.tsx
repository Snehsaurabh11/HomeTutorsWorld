import { cn } from '../../utils/cn';
import type { ReactNode } from 'react';

type BadgeVariant = 'purple' | 'yellow' | 'green' | 'red' | 'gray';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  purple: 'bg-brand-purple-light text-brand-purple-dark',
  yellow: 'bg-brand-yellow-light text-amber-700',
  green: 'bg-green-50 text-green-700',
  red: 'bg-rose-50 text-rose-700',
  gray: 'bg-neutral-100 text-neutral-600',
};

export function Badge({ children, variant = 'purple', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
