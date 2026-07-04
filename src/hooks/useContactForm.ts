import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../constants/config';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}

export function useContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const methods = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState({
      status: 'submitting',
      message: '',
    });

    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.leadTemplateId,
        {
          // Identifies which form submitted the email
          formType: 'Contact Form',

          // Contact Form Data
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not Provided',
          subject: data.subject,
          message: data.message,

          // Request Tutor template compatibility
          parentName: data.name,
          grade: 'N/A',
          subjects: 'N/A',
          city: 'N/A',
          locality: 'N/A',
          source: 'contact-page',
        },
        EMAIL_CONFIG.publicKey
      );

      setFormState({
        status: 'success',
        message:
          'Your message has been sent successfully. We will contact you within 24 hours.',
      });

      methods.reset();
    } catch (error) {
      console.error('[ContactForm] Error:', error);

      setFormState({
        status: 'error',
        message:
          'Unable to send your message at the moment. Please try again later or contact us directly.',
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