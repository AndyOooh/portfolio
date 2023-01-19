import { motion } from 'framer-motion';
import { headerVariants } from 'motion/header.motion';
import Image from 'next/image';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SectionLink } from './Header';

export type NavProps = {
  currentHash: string | null;
  sectionLinks: SectionLink[];
};

function HeaderNav({ currentHash, sectionLinks }: NavProps) {
  const imageWrapperClasses = 'relative h-full aspect-square overflow-hidden border-b-2';

  const navigation = sectionLinks.map(link => {
    return (
      <li key={link.hash} className='rounded-none hover:text-white/70'>
        <a
          // smooth
          href={link.hash}
          className={
            currentHash === link.hash ? 'rounded-none border-b-2 border-red-500 ' : 'rounded none'
          }>
          {link.hash.slice(1)}
        </a>
        {/* <a
          href={link.name}
          className={window.location.hash === link.name ? 'border-b-2 border-b-red-500' : ''}>
          {link.name.slice(1)}
        </a> */}
      </li>
    );
  });

  return (
    <motion.header
      variants={headerVariants}
      initial='hidden'
      animate='visible'
      // ref={headerRef}
      // onScroll={getPosition}
      className='z-50 fixed top-0 left-0 w-full h-16 flex items-center 
      backdrop-blur-sm 
      py-2
      shadow-lg shadow-red-500/50
      '>
      <div className='h-full w-full lg:w-4/5 max-w-7xl flex justify-between items-center mx-4 '>
        <a
          // smooth
          href='/#'
          className={
            currentHash === ''
              ? ` border-red-500 ${imageWrapperClasses}`
              : ` border-transparent ${imageWrapperClasses}`
          }>
          <Image
            src='/ao/ao-gold-frame-trans.png'
            alt='icon'
            fill={true}
            quality={100}
            sizes='(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 20vw'
            priority={true}
            className='p-2 text-orange-400'
          />
        </a>
        <div className='flex justify-center items-center gap-8'>
          <nav className='hidden md:block'>
            <ul className='menu menu-horizontal'>{navigation}</ul>
          </nav>
          <div className='h-full flex justify-center items-center'>
            <a
              href='https://www.linkedin.com/in/andreas-oee'
              target='_blank'
              rel='noreferrer'
              className='p-2 hover:text-white/70 h-full'>
              <BsLinkedin size={'1.2rem'} />
            </a>
            <a
              href='https://github.com/AndyOooh'
              target='_blank'
              rel='noreferrer'
              className='p-2 hover:text-white/70'>
              <BsGithub size={'1.2rem'} />
            </a>
            {/* <a
              href='https://stackoverflow.com/users/12930072/andyoh'
              target='_blank'
              rel='noreferrer'>
              <BsStackOverflow />
            </a>
            <a href='https://www.codewars.com/users/AndyOooh' target='_blank' rel='noreferrer'>
              <SiCodewars />
            </a>
            <a href='https://codesandbox.io/u/AndyOooh' target='_blank' rel='noreferrer'>
              <SiCodesandbox />
            </a>
            <a href='https://www.freecodecamp.org/andy_ohhh' target='_blank' rel='noreferrer'>
              <SiFreecodecamp />
            </a> */}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default HeaderNav;
