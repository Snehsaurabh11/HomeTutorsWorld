import { cn } from '../../utils/cn';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

const paddingClasses = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
};

export function Card({
  children,
  hover = false,
  padding = 'md',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-neutral-200/80 shadow-card',
        hover && 'transition-all duration-300 ease-out hover:shadow-card-hover hover:-translate-y-1.5 cursor-pointer hover:border-brand-purple/20',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
