/**
 * Validators — form field validation functions
 * These are used with React Hook Form's validate option
 */

/** Validate Indian mobile number (10 digits) */
export function validatePhone(value: string): true | string {
  const digits = value.replace(/\D/g, '');
  if (!value) return 'Phone number is required';
  if (digits.length !== 10) return 'Enter a valid 10-digit mobile number';
  if (!/^[6-9]/.test(digits)) return 'Enter a valid Indian mobile number';
  return true;
}

/** Validate email address */
export function validateEmail(value: string): true | string {
  if (!value) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
  return true;
}

/** Validate required text field */
export function validateRequired(fieldName: string) {
  return (value: string): true | string => {
    if (!value || !value.trim()) return `${fieldName} is required`;
    return true;
  };
}

/** Validate name (letters and spaces only, min 2 chars) */
export function validateName(value: string): true | string {
  if (!value || !value.trim()) return 'Name is required';
  if (value.trim().length < 2) return 'Name must be at least 2 characters';
  if (!/^[a-zA-Z\s.'-]+$/.test(value)) return 'Enter a valid name';
  return true;
}

/** Validate selection (not empty / default option) */
export function validateSelect(value: string): true | string {
  if (!value || value === '') return 'Please select an option';
  return true;
}
