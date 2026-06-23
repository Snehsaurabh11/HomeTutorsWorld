import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn — className utility
 * Merges clsx conditional classes with tailwind-merge deduplication
 * Usage: cn('base-class', condition && 'conditional-class', 'override-class')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
