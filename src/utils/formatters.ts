/**
 * Formatters — pure formatting utility functions
 */

/** Format a phone number to Indian format: +91 XXXXX XXXXX */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
}

/** Capitalize first letter of each word */
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Format experience years */
export function formatExperience(years: number): string {
  return years === 1 ? '1 Year Exp.' : `${years}+ Years Exp.`;
}

/** Format rating to one decimal */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

/** Truncate text with ellipsis */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}
