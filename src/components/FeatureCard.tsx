import type { Feature } from '../types/common';
import { Card } from './ui/Card';
import { cn } from '../utils/cn';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

/**
 * FeatureCard — "Why Choose Us" feature item
 * Dynamically loads Lucide icon by name string from feature data
 */
export function FeatureCard({ feature, className }: FeatureCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[feature.icon] as LucideIcon | undefined;

  return (
    <Card hover className={cn('flex flex-col items-center text-center gap-3', className)}>
      <div
        className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center bg-neutral-50',
          feature.color
        )}
      >
        {IconComponent ? (
          <IconComponent className="w-7 h-7" />
        ) : (
          <span className="text-2xl">📚</span>
        )}
      </div>
      <h3 className="font-display font-bold text-neutral-900 text-lg">{feature.title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
    </Card>
  );
}
