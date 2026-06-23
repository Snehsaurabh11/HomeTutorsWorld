import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import type { TutorRegistrationData, FormState } from '../types/lead';
import { ROUTES } from '../constants/routes';

/**
 * useTutorRegistrationForm — custom hook for the "Become a Tutor" registration form
 *
 * Prepared for EmailJS integration. To connect:
 * 1. npm install @emailjs/browser
 * 2. Uncomment the emailjs.send() call below
 * 3. Add your SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY
 */
export function useTutorRegistrationForm() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const methods = useForm<TutorRegistrationData>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      qualification: '',
      subjects: [],
      experience: '',
      teachingMode: 'Both',
      city: '',
      availability: '',
      aboutYou: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: TutorRegistrationData) => {
    setFormState({ status: 'submitting', message: '' });

    try {
      console.log("Tutor Registration Data:", data);
      await emailjs.send(
  'service_w9zp2i8',
  'template_s0vo4km',
  {
    fullName: data.fullName,
    phone: data.phone,
    email: data.email,
    qualification: data.qualification,
    subjects: data.subjects.join(', '),
    experience: data.experience,
    teachingMode: data.teachingMode,
    city: data.city,
    availability: data.availability,
    aboutYou: data.aboutYou,
  },
  'oaYgrPV0Cau37hnGI'
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
