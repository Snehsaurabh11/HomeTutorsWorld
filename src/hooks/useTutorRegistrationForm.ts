import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import type { TutorRegistrationData, FormState } from '../types/lead';
import { ROUTES } from '../constants/routes';
import { EMAIL_CONFIG } from '../constants/config';

/**
 * useTutorRegistrationForm — custom hook for the "Become a Tutor" registration form
 *
 * EmailJS credentials are loaded from environment variables.
 * Set VITE_EMAILJS_* values in your .env file (see .env.example).
 */
export function useTutorRegistrationForm() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const methods = useForm<TutorRegistrationData>({
    defaultValues: {
      fullName:     '',
      phone:        '',
      email:        '',
      qualification:'',
      subjects:     [],
      experience:   '',
      teachingMode: 'Both',
      city:         '',
      availability: '',
      aboutYou:     '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: TutorRegistrationData) => {
    setFormState({ status: 'submitting', message: '' });

    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.tutorTemplateId,
        {
          fullName:     data.fullName,
          phone:        data.phone,
          email:        data.email,
          qualification:data.qualification,
          subjects:     data.subjects.join(', '),
          experience:   data.experience,
          teachingMode: data.teachingMode,
          city:         data.city,
          availability: data.availability,
          aboutYou:     data.aboutYou,
        },
        EMAIL_CONFIG.publicKey
      );

      setFormState({ status: 'success', message: 'Application received! We will contact you soon.' });
      methods.reset();
      navigate(ROUTES.THANK_YOU);
    } catch (error) {
      console.error('[TutorRegistration] Error:', error);
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      });
    }
  };

  return {
    methods,
    formState,
    onSubmit: methods.handleSubmit(onSubmit),
    isSubmitting: formState.status === 'submitting',
  };
}
