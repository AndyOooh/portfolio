'use client';

import { useEffect, useRef, useState } from 'react';
// import { NavHashLink } from 'react-router-hash-link';
import { AiOutlineFolderOpen, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { RiAwardLine } from 'react-icons/ri';

import Image from 'next/image';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { SiCodesandbox, SiCodewars, SiFreecodecamp } from 'react-icons/si';
import { motion } from 'framer-motion';
import { headerVariants } from 'motion/header.motion';
import Link from 'next/link';
import HeaderNav from './HeaderNav';
import FloatNav from 'components/header/floatNav/FloatNav';
import { useMediaQuery } from 'react-responsive';

export type SectionLink = { name: string; hash: string; icon: JSX.Element };

export const sectionLinks: SectionLink[] = [
  { name: 'About', hash: '#about', icon: <AiOutlineUser /> },
  { name: 'Work', hash: '#work', icon: <AiOutlineFolderOpen /> },
  { name: 'Skills', hash: '#skills', icon: <RiAwardLine /> },
  { name: 'Contact', hash: '#contact', icon: <AiOutlineMessage /> },
];

function Header() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [currentHash, setcurrentHash] = useState<string | null>(null);
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const handleHashchange = () => {
    setcurrentHash(window.location.hash);
  };

  useEffect(() => {
    setDomLoaded(true);
    window.addEventListener('hashchange', handleHashchange);
    return () => {
      window.removeEventListener('hashchange', handleHashchange);
    };
  }, []);

  // const getIsActive = (link: string) => {
  //   return () => window.location.hash === link ? 'border-b-2 border-red-500' : '';
  // };

  return !domLoaded ? (
    <div>Loading...</div>
  ) : isMdScreen ? (
    <HeaderNav currentHash={currentHash} sectionLinks={sectionLinks} />
  ) : (
    <FloatNav currentHash={currentHash} sectionLinks={sectionLinks} />
  );
}

export default Header;
