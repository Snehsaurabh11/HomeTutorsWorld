import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import { useTutorRegistrationForm } from '../hooks/useTutorRegistrationForm';
import { SUBJECT_OPTIONS } from '../constants/theme';
import { cn } from '../utils/cn';

const teachingModeOptions = [
  { value: 'Home Tuition', label: 'Home Tuition' },
  { value: 'Online', label: 'Online' },
  { value: 'Both', label: 'Both' },
];

export function TutorRegistrationForm({ className }: { className?: string }) {
  const { methods, formState, onSubmit, isSubmitting } = useTutorRegistrationForm();
  const { register, formState: { errors } } = methods;

  return (
    <div className={cn('bg-white rounded-3xl shadow-card-hover p-8 md:p-10', className)}>
      <div className="mb-6">
        <h3 className="font-display font-bold text-3xl text-neutral-900">Become a Tutor</h3>
        <p className="text-neutral-500 mt-2">
          Apply now and join HomeTutorsWorld to teach students online or at home.
        </p>
      </div>

      {formState.status === 'success' && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl mb-4">
          <span className="text-green-700">✓</span>
          <p className="text-green-700 text-sm font-medium">{formState.message}</p>
        </div>
      )}

      {formState.status === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-4">
          <span className="text-rose-700">⚠</span>
          <p className="text-rose-700 text-sm font-medium">{formState.message}</p>
        </div>
      )}

      <form onSubmit={onSubmit} noValidate className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              required: 'Phone number is required',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit Indian mobile number',
              },
            })}
            error={errors.phone?.message}
          />
        </div>

        <Input
          id="tutor-email"
          label="Email Address"
          placeholder="name@example.com"
          type="email"
          required
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
          error={errors.email?.message}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="tutor-qualification"
            label="Qualification"
            placeholder="e.g. B.Ed, M.Sc, MBA"
            required
            {...register('qualification', {
              required: 'Qualification is required',
            })}
            error={errors.qualification?.message}
          />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="tutor-teaching-mode" className="text-sm font-medium text-neutral-700">
              Teaching Mode
              <span className="text-rose-500">*</span>
            </label>
            <Select
              id="tutor-teaching-mode"
              label=""
              placeholder="Select Teaching Mode"
              options={teachingModeOptions}
              required
              {...register('teachingMode', {
                required: 'Please select a teaching mode',
              })}
              error={errors.teachingMode?.message}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="tutor-city"
            label="City"
            placeholder="e.g. New Delhi"
            required
            {...register('city', { required: 'City is required' })}
            error={errors.city?.message}
          />
          <Input
            id="tutor-experience"
            label="Experience"
            placeholder="e.g. 5 years"
            required
            {...register('experience', { required: 'Experience is required' })}
            error={errors.experience?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="tutor-subjects" className="text-sm font-medium text-neutral-700">
              Subjects You Teach
              <span className="text-rose-500">*</span>
            </label>
            <select
              id="tutor-subjects"
              multiple
              className="w-full h-40 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-sm outline-none transition-all duration-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
              {...register('subjects', { required: 'Select at least one subject' })}
            >
              {SUBJECT_OPTIONS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            {errors.subjects && (
              <p className="text-xs text-rose-500">{errors.subjects.message}</p>
            )}
          </div>

          <Input
            id="tutor-availability"
            label="Availability"
            placeholder="e.g. Weekdays evenings / Weekends"
            required
            {...register('availability', { required: 'Availability is required' })}
            error={errors.availability?.message}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="tutor-about" className="text-sm font-medium text-neutral-700">
            Tell us about yourself
          </label>
          <textarea
            id="tutor-about"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-sm outline-none transition-all duration-200 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
            placeholder="Share your teaching style, preferred classes, and strengths"
            {...register('aboutYou')}
          />
          {errors.aboutYou && (
            <p className="text-xs text-rose-500">{errors.aboutYou.message}</p>
          )}
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting}>
          Submit Application
        </Button>
      </form>
    </div>
  );
}
