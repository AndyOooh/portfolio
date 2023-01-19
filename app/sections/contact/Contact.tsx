import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import Section from 'components/section';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer/Footer';
import { contactsArray } from './ContactList';

// type formType = {
//   name?: string;
//   email?: string;
//   message?: string;
// };

function Contact() {
  const topic = 'Contact';
  const title = 'Get in touch';

  const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });

  // const [formData, setFormData] = useState<formType | null>(null);

  // const submitDisabled = !formData?.name || !formData?.email || !formData?.message;

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    // const sendEmail: FormEvent<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('e.currentTarget: ', e.currentTarget);

    emailjs
      .sendForm(
        'service_mig4ob7',
        'portfolio_framer',
        e.currentTarget,
        // JSON.stringify(formData),
        'LL9E8AmuqFeA3Cr7P'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
    // setFormData(null);
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const iconsize = '1.4rem';

  // const contactsArray = [
  //   {
  //     media: 'Email',
  //     icon: <MdOutlineEmail size={iconsize} className='contact__option-icon' />,
  //     contact: 'andy.oeee@gmail.com',
  //     link: 'mailto:dummy@dummy.com',
  //   },
  //   {
  //     media: 'LinkedIn',
  //     icon: <RiLinkedinBoxLine size={iconsize} className='contact__option-icon' />,
  //     contact: 'andreas-oee',
  //     link: 'https://www.linkedin.com/in/andreas-oee/',
  //   },
  //   {
  //     media: 'WhatsApp',
  //     icon: <BsWhatsapp size={iconsize} className='contact__option-icon' />,
  //     contact: '+66634920201',
  //     link: 'https://wa.me/66634920201',
  //   },
  // ];

  const contacts = contactsArray.map(({ media, icon, contact, link }) => {
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
      <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[5%]'>
        {isSmScreen ? (
          // <div className='flex flex-row lg:flex-col gap-4'>{contacts}</div>
          <div className='grid grid-cols-3 lg:grid-rows-3 gap-4'>{contacts}</div>
        ) : (
          <div className='flex gap-4'>
            {contactsArray.map(({ media, icon, contact, link }) => {
              return (
                <label key={media} className='label cursor-pointer flex gap-2 p-0'>
                  <input
                    type='radio'
                    name='radio-10'
                    className='radio radio-xs radio-primary checked:bg-primary'
                    checked
                  />
                  <span className='label-text'>{media} </span>
                </label>
              );
            })}
          </div>
        )}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className='flex flex-col gap-2 sm:gap-4 w-full sm:w-auto placeholder:text-green-500'>
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
            className='textarea textarea-ghost border-2 border-primary/50 w-full max-w-xs placeholder:text-primary/50'></textarea>
          <button type='submit' className='btn btn-primary max-w-xs' disabled={false}>
            Send Message
          </button>
        </form>

        <Footer />
      </div>
    </Section>
  );
}

export default Contact;
