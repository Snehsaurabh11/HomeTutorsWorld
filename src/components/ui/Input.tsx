import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
            {props.required && <span className="text-rose-500 ml-1">*</span>}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-white text-neutral-900 text-sm',
            'placeholder:text-neutral-400 outline-none transition-all duration-200',
            'focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20',
            error
              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
              : 'border-neutral-200 hover:border-neutral-300',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-rose-500 flex items-center gap-1">
            <span>⚠</span> {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs text-neutral-400">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
