'use client';

import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinBoxLine, RiWhatsappLine } from 'react-icons/ri';
// import { BsWhatsapp } from 'react-icons/bs';

// const iconsize = '2rem';

export const contactList = [
  {
    media: 'Email',
    // icon: <MdOutlineEmail size={iconsize} className='contact__option-icon' />,
    icon: <MdOutlineEmail className='contact__option-icon' />,
    contact: 'andy.oeee@gmail.com',
    link: 'mailto:dummy@dummy.com',
  },
  {
    media: 'LinkedIn',
    // icon: <RiLinkedinBoxLine size={iconsize} className='contact__option-icon' />,
    icon: <RiLinkedinBoxLine className='contact__option-icon' />,
    contact: 'andreas-oee',
    link: 'https://www.linkedin.com/in/andreas-oee/',
  },
  {
    media: 'WhatsApp',
    // icon: <RiWhatsappLine size={iconsize} className='contact__option-icon' />,
    icon: <RiWhatsappLine className='contact__option-icon' />,
    contact: '+66 63 492 0201',
    link: 'https://wa.me/66634920201',
  },
];
