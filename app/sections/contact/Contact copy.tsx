'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import Footer from './Footer/Footer';
import { contactList } from './ContactList';
import { formVariants } from 'motion/contact.motion';
import Section from 'components/Section';
import EmailForm from './EmailForm';

function Contact() {
  const topic = 'Contact';
  const title = 'Get in touch';
  const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const [contactForm, setcontactForm] = useState('Email');

  const radioMenu = (
    <div className='flex gap-4'>
      {contactList.map(({ media, icon, contact, link }) => {
        return (
          <label key={media} className='label cursor-pointer flex gap-2 p-0'>
            <input
              type='radio'
              name='radio-10'
              className='radio radio-xs radio-primary checked:bg-primary'
              defaultChecked={media === 'Email'}
              onChange={() => setcontactForm(media)}
            />
            <span className='label-text'>{media} </span>
          </label>
        );
      })}
    </div>
  );

  const contacts = contactList.map(({ media, icon, contact, link }) => {
    return (
      <article key={media} className='card card-compact w-full border-2 border-primary/50'>
        <div className='card-body items-center text-center'>
          {icon}
          <h2 className='card-title'>{media}</h2>
          {/* <p>{contact}</p> */}
          <button className='btn btn-sm btn-outline '>
            <a href={link} target='_blank' rel='noreferrer'>
              Message
            </a>
          </button>
        </div>
      </article>
    );
  });

  return (
    <Section id='contact' topic={topic} title={title} center>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-[5%]'>
        {isSmScreen ? (
          // <div className='flex flex-row lg:flex-col gap-4'>{contacts}</div>
          <>
            {/* <div className='grid grid-cols-3 lg:grid-rows-3 gap-4'>{contacts}</div> */}
            <div className='flex flex-col gap-4'>{contacts}</div>
            <EmailForm />
          </>
        ) : (
          <>
            {radioMenu}
            {contactForm === 'Email' ? (
              <EmailForm />
            ) : (
              contactList.map(({ media, icon, contact, link }) => {
                return media === contactForm ? (
                  <motion.div
                    key={media}
                    variants={formVariants}
                    initial='hidden'
                    animate='visible'
                    className='w-full flex flex-col gap-2'>
                    <div className='card w-full border-2 border-primary/50'>
                      <div className='card-body items-center text-center'>
                        {icon}
                        <h2 className='card-title text-3xl'>{media}</h2>
                        <p className='text-lg'>{contact}</p>
                      </div>
                    </div>
                    <button className='btn btn-primary w-full'>
                      <a href={link} target='_blank' rel='noreferrer'>
                        Send Message
                      </a>
                    </button>
                  </motion.div>
                ) : null;
              })
            )}
          </>
        )}
      </div>
      <Footer />
    </Section>
  );
}

export default Contact;
