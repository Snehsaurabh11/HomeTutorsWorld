import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionCardProps {
  number: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function SectionCard({
  number,
  title,
  icon,
  children,
  className,
}: SectionCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {/* Left Accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-brand" />

      <div className="p-7 md:p-9">

        <div className="flex items-start gap-5">

          {/* Number */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-purple-light ring-1 ring-brand-purple/10 transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-lg font-black text-brand-purple">
              {number}
            </span>
          </div>

          <div className="flex-1">

            {/* Heading */}
            <div className="mb-5 flex items-center gap-3">

              {icon && (
                <div className="rounded-xl bg-brand-purple-light p-2 text-brand-purple">
                  {icon}
                </div>
              )}

              <h2 className="font-display text-2xl font-bold text-neutral-900">
                {title}
              </h2>

            </div>

            {/* Body */}
            <div className="space-y-4 text-[15px] leading-8 text-neutral-600">

              {children}

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}