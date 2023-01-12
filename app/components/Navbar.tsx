'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';

import styles from '../styles';
import { navVariants } from '../utils/motion/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.innerWidth} mx-auto py-4`}>
    <div className='flex justify-between' >
      <FaSearch size={24} />
      <h2 className='font-extrabold text-2xl'>Andreas</h2>
      <BiMenuAltRight size={24} />
    </div>
  </motion.nav>
);

export default Navbar;
