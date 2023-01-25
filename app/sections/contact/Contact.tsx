'use client';

import { useEffect, useState } from 'react';
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
  const [domLoaded, setDomLoaded] = useState(false);
  const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const [contactForm, setcontactForm] = useState('Email');

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const radioMenu = (
    <div className='flex gap-4 my-2'>
      {contactList.map(({ media }) => {
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
      <div key={media} className='card card-compact w-full border-2 border-primary/50'>
        <div className='card-body items-center text-center'>
          <div className='flex gap-2 '>
            <h2 className='card-title mb-0'>
              {icon} {media}
            </h2>
          </div>
          <button className='btn btn-sm btn-outline '>
            <a href={link} target='_blank' rel='noreferrer'>
              {contact}
            </a>
          </button>
        </div>
      </div>
    );
  });

  return (
    <Section id='contact' topic={topic} title={title} between={true}>
      {!domLoaded ? (
        <div>Loading...</div>
      ) : isSmScreen ? (
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4 justify-between'>{contacts}</div>
          <EmailForm />
        </div>
      ) : (
        <div>
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
        </div>
      )}
      <Footer />
    </Section>
  );
}

export default Contact;
