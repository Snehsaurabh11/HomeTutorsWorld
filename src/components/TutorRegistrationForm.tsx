import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { MultiSelect } from './ui/MultiSelect';
import { Button } from './ui/Button';
import { useTutorRegistrationForm } from '../hooks/useTutorRegistrationForm';
import { SUBJECT_OPTIONS } from '../constants/theme';
import { cn } from '../utils/cn';
import { Controller } from 'react-hook-form';

const teachingModeOptions = [
  { value: 'Home Tuition', label: 'Home Tuition' },
  { value: 'Online',       label: 'Online Classes' },
  { value: 'Both',         label: 'Both (Home + Online)' },
];

const SUBJECTS_LIST = [...SUBJECT_OPTIONS] as string[];

interface TutorRegistrationFormProps {
  className?: string;
}

/**
 * TutorRegistrationForm — compact two-column layout for the tutor apply form.
 *
 * Row layout (2-col on md+, stacked on mobile):
 *   R1: Full Name       | Phone Number
 *   R2: Email           | Qualification
 *   R3: City            | Experience
 *   R4: Teaching Mode   | Availability
 *   R5: Subjects        (full-width MultiSelect)
 *   R6: About textarea  (compact, 3 rows)
 *   Submit
 */
export function TutorRegistrationForm({ className }: TutorRegistrationFormProps) {
  const { methods, formState, onSubmit, isSubmitting } = useTutorRegistrationForm();
  const { register, control, formState: { errors } } = methods;

  return (
    <div className={cn('bg-white rounded-3xl shadow-card-hover p-6 md:p-8', className)}>
      <div className="mb-5">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-neutral-900">Become a Tutor</h3>
        <p className="text-neutral-500 text-sm mt-1.5">
          Apply now to join our verified tutor network.
        </p>
      </div>

      {formState.status === 'success' && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-4">
          <span className="text-green-600 text-base flex-shrink-0">✓</span>
          <p className="text-green-700 text-sm font-medium">{formState.message}</p>
        </div>
      )}
      {formState.status === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-4">
          <span className="text-rose-600 text-base flex-shrink-0">⚠</span>
          <p className="text-rose-700 text-sm font-medium">{formState.message}</p>
        </div>
      )}

      <form onSubmit={onSubmit} noValidate className="grid gap-3">

        {/* Row 1: Name | Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            id="tutor-full-name"
            label="Full Name"
            placeholder="e.g. Anjali Verma"
            required
            {...register('fullName', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Enter at least 2 characters' },
            })}
            error={errors.fullName?.message}
          />
          <Input
            id="tutor-phone"
            label="Phone Number"
            placeholder="10-digit mobile number"
            type="tel"
            required
            {...register('phone', {
              required: 'Phone is required',
              pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit mobile number' },
            })}
            error={errors.phone?.message}
          />
        </div>

        {/* Row 2: Email | Qualification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            id="tutor-email"
            label="Email Address"
            placeholder="name@example.com"
            type="email"
            required
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
            })}
            error={errors.email?.message}
          />
          <Input
            id="tutor-qualification"
            label="Qualification"
            placeholder="e.g. B.Ed, M.Sc, MBA"
            required
            {...register('qualification', { required: 'Qualification is required' })}
            error={errors.qualification?.message}
          />
        </div>

        {/* Row 3: City | Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            id="tutor-city"
            label="City"
            placeholder="e.g. Noida"
            required
            {...register('city', { required: 'City is required' })}
            error={errors.city?.message}
          />
          <Input
            id="tutor-experience"
            label="Teaching Experience"
            placeholder="e.g. 3 years"
            required
            {...register('experience', { required: 'Experience is required' })}
            error={errors.experience?.message}
          />
        </div>

        {/* Row 4: Teaching Mode | Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Select
            id="tutor-teaching-mode"
            label="Teaching Mode"
            placeholder="Select Mode"
            options={teachingModeOptions}
            required
            {...register('teachingMode', { required: 'Please select a teaching mode' })}
            error={errors.teachingMode?.message}
          />
          <Input
            id="tutor-availability"
            label="Availability"
            placeholder="e.g. Weekday evenings / Weekends"
            required
            {...register('availability', { required: 'Availability is required' })}
            error={errors.availability?.message}
          />
        </div>

        {/* Row 5: Subjects — MultiSelect (full width) */}
        <Controller
          name="subjects"
          control={control}
          rules={{ validate: (v) => (Array.isArray(v) && v.length > 0) || 'Select at least one subject' }}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              id="tutor-subjects"
              label="Subjects You Teach"
              options={SUBJECTS_LIST}
              value={value ?? []}
              onChange={onChange}
              placeholder="Search and select subjects..."
              required
              error={errors.subjects?.message as string | undefined}
            />
          )}
        />

        {/* Row 6: About textarea (compact) */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="tutor-about" className="text-sm font-medium text-neutral-700">
            About You <span className="text-neutral-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="tutor-about"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-sm outline-none transition-all duration-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 resize-none placeholder:text-neutral-400"
            placeholder="Your teaching style, strengths, and preferred classes..."
            {...register('aboutYou')}
          />
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting} id="tutor-form-submit">
          Submit Application
        </Button>

        <p className="text-center text-xs text-neutral-400">
          🔒 Your information is 100% secure and private.
        </p>
      </form>
    </div>
  );
}
