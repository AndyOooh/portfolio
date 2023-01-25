'use client';

import React, { FormEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { formVariants } from 'motion/contact.motion';

type Props = {};

type Status = 'idle' | 'sending' | 'success' | 'error';

function EmailForm({}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setStatus('idle');
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { currentTarget } = e;
    console.log('🚀  file: EmailForm.tsx:34  currentTarget', currentTarget);
    setStatus('sending');
    try {
      const result = await emailjs.sendForm(
        'service_mig4ob7',
        'portfolio_framer',
        currentTarget,
        'LL9E8AmuqFeA3Cr7P'
      );
      console.log('🚀  file: EmailForm.tsx:34  currentTarget', currentTarget);
      console.log('🚀  file: EmailForm.tsx:23  result', result);
      if (result.status === 200) {
        setStatus('success');
        currentTarget?.reset();
      }
    } catch (error) {
      console.log('error: ', error);
      setStatus('error');
    }
  };
  return (
    <motion.form
      variants={formVariants}
      initial='hidden'
      animate='visible'
      ref={formRef}
      onSubmit={sendEmail}
      className='flex flex-col gap-2 sm:gap-4 w-full'>
      {/* <form onSubmit={sendEmail} className='flex flex-col gap-4'> */}
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        required
        // onChange={handleChange}
        className='input input-ghost w-full sm:max-w-xs border-2 border-primary/50 placeholder:text-primary/50'
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        required
        // onChange={handleChange}
        className='input input-ghost w-full sm:max-w-xs border-2 border-primary/50 placeholder:text-primary/50'
      />
      <textarea
        rows={isSmScreen ? 6 : 4}
        name='message'
        placeholder='Your Message'
        required
        // onChange={handleChange}
        className='textarea textarea-ghost border-2 border-primary/50 w-full sm:max-w-xs placeholder:text-primary/50'></textarea>
      <button
        type='submit'
        className={`btn sm:max-w-xs ${
          status === 'error' ? 'btn-error' : status === 'success' ? 'btn-success' : 'btn-primary'
        }`}
        disabled={false}>
        {status === 'sending'
          ? 'Sending...'
          : status === 'success'
          ? 'Message Sent'
          : status === 'error'
          ? 'Send Message Failed'
          : 'Send Message'}
      </button>
    </motion.form>
  );
}

export default EmailForm;
