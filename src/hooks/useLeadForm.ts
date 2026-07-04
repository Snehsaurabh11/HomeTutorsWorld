import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import type { LeadFormData, FormState } from '../types/lead';
import { ROUTES } from '../constants/routes';
import { EMAIL_CONFIG } from '../constants/config';

/**
 * useLeadForm — custom hook for the "Request a Tutor" lead capture form
 *
 * EmailJS credentials are loaded from environment variables.
 * Set VITE_EMAILJS_* values in your .env file (see .env.example).
 *
 * NOTE: EmailJS template should use {{subjects}} (comma-separated list)
 * and {{locality}} (locality / sector field).
 */
export function useLeadForm(source: LeadFormData['source'] = 'hero-form') {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const methods = useForm<LeadFormData>({
    defaultValues: {
      parentName: '',
      phone:      '',
      grade:      '',
      subjects:   [],
      city:       '',
      locality:   '',
      message:    '',
      source,
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: LeadFormData) => {
    setFormState({ status: 'submitting', message: '' });

    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.leadTemplateId,
        {
          parentName: data.parentName,
          phone:      data.phone,
          grade:      data.grade,
          subject:   data.subjects.join(', '),
          city:       data.city,
          locality:   data.locality || 'Not specified',
          message:    data.message,
          source:     data.source,
        },
        EMAIL_CONFIG.publicKey
      );

      setFormState({ status: 'success', message: 'Thank you! We will contact you within 24 hours.' });
      methods.reset();
      navigate(ROUTES.THANK_YOU);
    } catch (error) {
      console.error('[LeadForm] Error:', error);
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try again or call us directly.',
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
