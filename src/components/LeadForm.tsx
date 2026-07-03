import { Controller } from 'react-hook-form';
import { useLeadForm } from '../hooks/useLeadForm';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { MultiSelect } from './ui/MultiSelect';
import { Button } from './ui/Button';
import { GRADE_OPTIONS, SUBJECT_OPTIONS } from '../constants/theme';
import type { LeadFormData } from '../types/lead';
import { cn } from '../utils/cn';
import { CheckCircle, AlertCircle } from 'lucide-react';

type LeadFormMode = 'inline' | 'standalone';

interface LeadFormProps {
  mode?: LeadFormMode;
  source?: LeadFormData['source'];
  title?: string;
  subtitle?: string;
  className?: string;
}

const gradeSelectOptions = GRADE_OPTIONS.map((g) => ({ value: g, label: g }));
const SUBJECTS_LIST = [...SUBJECT_OPTIONS] as string[];

/**
 * LeadForm — "Request a Tutor" lead capture form
 *
 * Field layout (responsive 2-column grid):
 *   Row 1: Parent / Guardian Name  |  Phone Number
 *   Row 2: Class / Grade           |  City
 *   Row 3: Locality / Sector       |  (full width)
 *   Row 4: Subject(s)              |  (MultiSelect, full width)
 *
 * Stacks to single column on mobile (< sm breakpoint).
 */
export function LeadForm({
  mode = 'inline',
  source = 'hero-form',
  title = 'Request a Tutor',
  subtitle = 'Fill the form and we will find the best tutor for you.',
  className,
}: LeadFormProps) {
  const { methods, formState, onSubmit, isSubmitting } = useLeadForm(source);
  const { register, control, formState: { errors } } = methods;

  return (
    <div
      className={cn(
        'bg-white rounded-3xl shadow-card-hover',
        mode === 'inline' ? 'p-6' : 'p-8 md:p-10',
        className
      )}
    >
      {/* Header */}
      <div className="mb-5">
        <h3
          className={cn(
            'font-display font-bold text-neutral-900',
            mode === 'inline' ? 'text-xl' : 'text-2xl md:text-3xl'
          )}
        >
          {title}
        </h3>
        <p className="text-neutral-500 text-sm mt-1">{subtitle}</p>
      </div>

      {/* Success */}
      {formState.status === 'success' && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-4">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-green-700 text-sm font-medium">{formState.message}</p>
        </div>
      )}

      {/* Error */}
      {formState.status === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-4">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <p className="text-rose-700 text-sm font-medium">{formState.message}</p>
        </div>
      )}

      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">

        {/* Row 1: Parent Name | Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            id="lead-parent-name"
            label="Parent / Guardian Name"
            placeholder="e.g. Ritu Sharma"
            required
            autoComplete="name"
            {...register('parentName', {
              required: 'Parent name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            error={errors.parentName?.message}
          />
          <Input
            id="lead-phone"
            label="Phone Number"
            placeholder="10-digit mobile number"
            type="tel"
            required
            autoComplete="tel"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit Indian mobile number',
              },
            })}
            error={errors.phone?.message}
          />
        </div>

        {/* Row 2: Grade | City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Select
            id="lead-grade"
            label="Class / Grade"
            placeholder="Select Class"
            required
            options={gradeSelectOptions}
            {...register('grade', { required: 'Please select a class' })}
            error={errors.grade?.message}
          />
          <Input
            id="lead-city"
            label="City"
            placeholder="e.g. Noida, Greater Noida"
            required
            autoComplete="address-level2"
            {...register('city', { required: 'City is required' })}
            error={errors.city?.message}
          />
        </div>

        {/* Row 3: Locality / Sector (full width) */}
        <Input
          id="lead-locality"
          label="Locality / Sector"
          placeholder="e.g. Sector 62, Gaur City, Alpha 1"
          autoComplete="address-level3"
          {...register('locality')}
          error={errors.locality?.message}
        />

        {/* Row 4: Subjects — MultiSelect (full width) */}
        <Controller
          name="subjects"
          control={control}
          rules={{
            validate: (v) =>
              (Array.isArray(v) && v.length > 0) || 'Please select at least one subject',
          }}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              id="lead-subjects"
              label="Subject(s)"
              options={SUBJECTS_LIST}
              value={value ?? []}
              onChange={onChange}
              placeholder="Search and select subjects..."
              required
              error={errors.subjects?.message as string | undefined}
            />
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isSubmitting}
          id="lead-form-submit"
          className="mt-1"
        >
          Find My Tutor
        </Button>

        <p className="text-center text-xs text-neutral-400">
          🔒 Your information is 100% secure and private.
        </p>
      </form>
    </div>
  );
}
