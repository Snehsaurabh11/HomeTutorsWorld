import { cn } from '../utils/cn';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;      // Small label above the title
  title: ReactNode;      // Main heading — can include spans for color
  subtitle?: string;     // Supporting text below title
  align?: 'left' | 'center' | 'right';
  className?: string;
  /**
   * When true, wraps the header in a premium dark-tinted container
   * inspired by the footer's brand-purple-dark colour, blending
   * naturally with the page background.
   */
  highlighted?: boolean;
}

/**
 * SectionHeader — Reusable section title block
 *
 * Usage (standard):
 * <SectionHeader
 *   eyebrow="Why Us"
 *   title={<>Why Choose <span className="text-brand-purple">HomeTutorsWorld?</span></>}
 *   subtitle="We connect students with verified, experienced tutors."
 *   align="center"
 * />
 *
 * Usage (with highlighted background):
 * <SectionHeader highlighted ... />
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  highlighted = false,
}: SectionHeaderProps) {
  const alignClass = {
    left:   'text-left items-start',
    center: 'text-center items-center',
    right:  'text-right items-end',
  }[align];

  const inner = (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple uppercase tracking-[0.14em]">
          <span className="w-5 h-px bg-brand-purple/50 rounded-full" aria-hidden="true" />
          {eyebrow}
          <span className="w-5 h-px bg-brand-purple/50 rounded-full" aria-hidden="true" />
        </span>
      )}
      <h2 className="font-display font-bold text-neutral-900 text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-500 text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );

  if (highlighted) {
    return (
      <div
        className={cn(
          'bg-brand-purple-dark/[0.07] rounded-2xl px-6 py-6',
          align === 'center' && 'flex flex-col items-center text-center',
          align === 'left'   && 'flex flex-col items-start text-left',
          align === 'right'  && 'flex flex-col items-end text-right',
        )}
      >
        {inner}
      </div>
    );
  }

  return inner;
}
