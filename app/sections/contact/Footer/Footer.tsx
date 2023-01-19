import { sectionLinks } from 'components/header/Header';
import { SiCodewars, SiCodesandbox, SiFreecodecamp } from 'react-icons/si';
import { BsLinkedin, BsGithub, BsStackOverflow } from 'react-icons/bs';

// import './Footer.scss';

type Props = {};

function Footer({}: Props) {
  const socials = [
    {
      href: 'https://github.com/AndyOooh',
      icon: <BsGithub color='dc944c' />,
    },
    {
      href: 'https://stackoverflow.com/users/12930072/andyoh',
      icon: <BsStackOverflow color='dc944c' />,
    },
    {
      href: 'https://www.codewars.com/users/AndyOooh',
      icon: <SiCodewars color='dc944c' />,
    },
    {
      href: 'https://codesandbox.io/u/AndyOooh',
      icon: <SiCodesandbox color='dc944c' />,
    },
    {
      href: 'https://www.linkedin.com/in/andreas-oee',
      icon: <BsLinkedin color='dc944c' />,
    },
    {
      href: 'https://www.freecodecamp.org/andy_ohhh',
      icon: <SiFreecodecamp color='dc944c' />,
    },
  ];

  return (
    <footer className='flex-center rounded gap-2 bg-primary/20 py-2 px-4'>
      <a href='#' className='footer__logo'>
        AndyOh
      </a>
      {/* <ul>
        {sectionLinks.map((link, i) => (
          <li key={link.name}>
            <a href={link.hash}>{link.name}</a>
          </li>
        ))}
      </ul> */}
      <div className='grid grid-flow-col gap-1 flex-1'>
        {socials.map((social, i) => (
          <a
            key={social.href}
            href={social.href}
            target='_blank'
            rel='noreferrer'
            className='p-3 border-2 border-primary color-primary'>
            {social.icon}
          </a>
        ))}
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 Andreas Oee</small>
      </div>
    </footer>
  );
}

export default Footer;
