import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, X, Check, Search } from 'lucide-react';
import { cn } from '../../utils/cn';

interface MultiSelectProps {
  id: string;
  label: string;
  options: readonly string[] | string[];
  value: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

/**
 * MultiSelect — accessible, searchable multi-select with chip display.
 *
 * Design matches the existing Input / Select components:
 *   • Same border, radius, focus ring, and font styles
 *   • Selected items display as removable brand-purple chips
 *   • Dropdown closes on outside click or Escape key
 *   • Keyboard accessible (Enter / Space to open, Escape to close)
 */
export function MultiSelect({
  id,
  label,
  options,
  value,
  onChange,
  placeholder = 'Search and select...',
  required = false,
  error,
}: MultiSelectProps) {
  const [isOpen, setIsOpen]   = useState(false);
  const [search, setSearch]   = useState('');
  const containerRef          = useRef<HTMLDivElement>(null);
  const searchRef             = useRef<HTMLInputElement>(null);

  // Filter options by search query
  const filtered = options.filter((o) =>
    o.toLowerCase().includes(search.toLowerCase())
  );

  /* ── Close on outside click ── */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* ── Auto-focus search input when dropdown opens ── */
  useEffect(() => {
    if (isOpen) {
      // Small delay so the element is mounted first
      const t = setTimeout(() => searchRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  /* ── Toggle a single option ── */
  const toggle = useCallback(
    (option: string) => {
      if (value.includes(option)) {
        onChange(value.filter((v) => v !== option));
      } else {
        onChange([...value, option]);
      }
    },
    [value, onChange]
  );

  /* ── Remove chip ── */
  const removeChip = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== option));
  };

  /* ── Keyboard: Escape closes ── */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearch('');
    }
  };

  /* ── Trigger keyboard handler (Enter / Space opens) ── */
  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSearch('');
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-1.5"
      onKeyDown={handleKeyDown}
    >
      {/* Label */}
      <label htmlFor={`${id}-trigger`} className="text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-rose-500 ml-0.5">*</span>}
      </label>

      {/* Trigger */}
      <div
        id={`${id}-trigger`}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${id}-dropdown`}
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          'relative w-full min-h-[46px] px-3 py-2 rounded-xl border bg-white text-sm',
          'cursor-pointer select-none transition-all duration-200',
          'flex flex-wrap items-center gap-1.5 pr-8',
          isOpen
            ? 'border-brand-purple ring-2 ring-brand-purple/20 outline-none'
            : 'border-neutral-200 hover:border-neutral-300',
          error ? 'border-rose-400 ring-2 ring-rose-200' : ''
        )}
      >
        {/* Chips or placeholder */}
        {value.length === 0 ? (
          <span className="text-neutral-400 text-sm">{placeholder}</span>
        ) : (
          value.map((v) => (
            <span
              key={v}
              className="inline-flex items-center gap-1 bg-brand-purple-light text-brand-purple text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {v}
              <button
                type="button"
                onClick={(e) => removeChip(v, e)}
                aria-label={`Remove ${v}`}
                className="hover:text-brand-purple-dark transition-colors ml-0.5"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </span>
          ))
        )}

        {/* Chevron */}
        <ChevronDown
          className={cn(
            'w-4 h-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2',
            'transition-transform duration-200 pointer-events-none',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="relative z-50 -mt-0.5">
          <div
            id={`${id}-dropdown`}
            role="listbox"
            aria-multiselectable="true"
            aria-label={label}
            className="absolute top-0 left-0 right-0 bg-white border border-neutral-200 rounded-xl shadow-card-hover overflow-hidden flex flex-col"
          >
            {/* Search bar */}
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-neutral-100 flex-shrink-0">
              <Search className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" aria-hidden="true" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search subjects..."
                aria-label="Search subjects"
                className="flex-1 text-sm outline-none bg-transparent text-neutral-700 placeholder:text-neutral-400"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Option list */}
            <ul className="max-h-52 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <li className="px-3 py-3 text-sm text-neutral-400 text-center">
                  No subjects found
                </li>
              ) : (
                filtered.map((option) => {
                  const isSelected = value.includes(option);
                  return (
                    <li
                      key={option}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => toggle(option)}
                      className={cn(
                        'flex items-center justify-between px-3 py-2 text-sm cursor-pointer',
                        'transition-colors duration-100',
                        isSelected
                          ? 'bg-brand-purple-light text-brand-purple font-medium'
                          : 'text-neutral-700 hover:bg-neutral-50'
                      )}
                    >
                      <span>{option}</span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 flex-shrink-0 text-brand-purple" aria-hidden="true" />
                      )}
                    </li>
                  );
                })
              )}
            </ul>

            {/* Footer — count + clear all */}
            {value.length > 0 && (
              <div className="flex items-center justify-between px-3 py-2 border-t border-neutral-100 flex-shrink-0">
                <span className="text-xs text-neutral-400">
                  {value.length} subject{value.length !== 1 ? 's' : ''} selected
                </span>
                <button
                  type="button"
                  onClick={() => onChange([])}
                  className="text-xs text-rose-500 hover:text-rose-600 font-medium transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="text-xs text-rose-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
