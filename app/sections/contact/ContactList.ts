import { MdOutlineEmail } from 'react-icons/md';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';


export const contactsArray = [
  {
    media: 'Email',
    icon: "<MdOutlineEmail size={iconsize} className='contact__option-icon' />",
    contact: 'andy.oeee@gmail.com',
    link: 'mailto:dummy@dummy.com',
  },
  {
    media: 'LinkedIn',
    icon: "<RiLinkedinBoxLine size={iconsize} className='contact__option-icon' />",
    contact: 'andreas-oee',
    link: 'https://www.linkedin.com/in/andreas-oee/',
  },
  {
    media: 'WhatsApp',
    icon: "<BsWhatsapp size={iconsize} className='contact__option-icon' />",
    contact: '+66634920201',
    link: 'https://wa.me/66634920201',
  },
];
