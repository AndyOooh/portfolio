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
      name: 'Github',
    },
    {
      href: 'https://stackoverflow.com/users/12930072/andyoh',
      icon: <BsStackOverflow color='dc944c' />,
      name: 'Stack Overflow',
    },
    {
      href: 'https://www.codewars.com/users/AndyOooh',
      icon: <SiCodewars color='dc944c' />,
      name: 'Codewars',
    },
    {
      href: 'https://codesandbox.io/u/AndyOooh',
      icon: <SiCodesandbox color='dc944c' />,
      name: 'CodeSandbox',
    },
    {
      href: 'https://www.linkedin.com/in/andreas-oee',
      icon: <BsLinkedin />,
      name: 'LinkedIn',
    },
    {
      href: 'https://www.freecodecamp.org/andy_ohhh',
      icon: <SiFreecodecamp />,
      name: 'FreeCodeCamp',
    },
  ];

  return (
    <footer className='flex-center rounded gap-2 bg-primary/20 py-2 w-full'>
      <a href='#' className='footer__logo'>
        andyo.xyz
      </a>

      {/* <div className='grid grid-flow-col gap-1 w-full border-2 border-red-300'> */}
      {/* <div className='flex justify-center flex-wrap gap-1 w-full border-2 border-red-300'> */}
      <div className='flex justify-center gap-1'>
        {socials.map((social, i) => (
          <div
            key={social.href}
            className='tooltip hover:tooltip-open 
            btn btn-primary btn-outline
            rounded-none border-2
            flex justify-center items-center'
            data-tip={social.name}>
            <a href={social.href} target='_blank' rel='noreferrer'>
              {social.icon}
            </a>
          </div>
        ))}
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 Andreas Oee</small>
      </div>
    </footer>
  );
}

export default Footer;
