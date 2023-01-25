/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Section from 'components/Section';
import { nameVariants, pVariants } from 'motion/landing.motion';

function Landing() {
  const [pIndex, setPIndex] = useState(0);
  const pTexts = ['Frontend', 'Backend', 'Web3'];
  const resume = './Andreas Oee - Junior Full Stack - Resume.pdf'

  useEffect(() => {
    const interval = setInterval(() => {
      let next = pIndex + 1;
      setPIndex(next % pTexts.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [pIndex, pTexts.length]);

  return (
    <Section id='landing'>
      <div className='flex-center h-full'>
        <motion.div
          variants={nameVariants}
          initial='hidden'
          animate='visible'
          className='text-center'>
          <h2 className='text-md sm:text-lg'>Hi, my name is</h2>
          <h1 className='text-4xl sm:text-5xl md:text-7xl cinzel font-semibold md:font-bold'>
            Andreas Øe
          </h1>
        </motion.div>
        <p className='text-md sm:text-lg'>I'm a</p>
        <div className='flex gap-4 font-mono uppercase w-full mx-auto'>
          <div className='flex-1 text-end text-lg md:text-xl font-extrabold flex items-center justify-end'>
            <AnimatePresence mode='wait'>
              <motion.p
                key={pTexts[pIndex]}
                variants={pVariants}
                initial='hide'
                animate='show'
                exit='exit'>
                {pTexts[pIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className='developer flex-1 text-red-500 text-3xl md:-text-4xl font-black flex flex-col justify-end'>
            <p className='leading-none'>Full</p>
            <p className='leading-none'>Stack</p>
          </div>
        </div>
        <p className='developer text-4xl md:text-6xl font-black'>Developer</p>
        <div className='flex gap-2 mt-6 mx-auto w-3/5'>
          <a href={resume} target='_blank' rel='noreferrer' className='flex-1 btn btn-sm btn-primary btn-outline'>Resumé</a>
          <a href='#contact' className='flex-1 btn btn-sm btn-primary btn-outline'>Contact</a>
        </div>
      </div>
    </Section>
  );
}

export default Landing;
