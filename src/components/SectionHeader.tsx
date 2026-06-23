import { cn } from '../utils/cn';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;      // Small label above the title
  title: ReactNode;      // Main heading — can include spans for color
  subtitle?: string;     // Supporting text below title
  align?: 'left' | 'center' | 'right';
  className?: string;
}

/**
 * SectionHeader — Reusable section title block
 *
 * Usage:
 * <SectionHeader
 *   eyebrow="Why Us"
 *   title={<>Why Choose <span className="text-brand-purple">HomeTutorsWorld?</span></>}
 *   subtitle="We connect students with verified, experienced tutors for guaranteed results."
 *   align="center"
 * />
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple uppercase tracking-widest">
          <span className="w-6 h-0.5 bg-brand-purple rounded-full" aria-hidden="true" />
          {eyebrow}
          <span className="w-6 h-0.5 bg-brand-purple rounded-full" aria-hidden="true" />
        </span>
      )}
      <h2 className="font-display font-bold text-neutral-900 text-3xl md:text-4xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-500 text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
