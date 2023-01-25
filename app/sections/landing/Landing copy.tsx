/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Section from 'components/Section';
import { AnimatePresence, motion } from 'framer-motion';
import { nameVariants } from 'motion/landing.motion';

type Props = {};

function Landing({}: Props) {
  const topic = 'Hi, my name is';
  const title = 'Andreas Øe';

  const [state, setState] = useState(0);
  console.log('🚀  file: Landing.tsx:14  state', state);

  const texts = ['Frontend', 'Backend', 'Web3'];

  // const handlePExit = () => {
  //   let next = state + 1;
  //   setState(next % texts.length);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      let next = state + 1;
      setState(next % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [state, texts.length]);

  return (
    <Section id='landing' justify='center'>
      <motion.div
        variants={nameVariants}
        initial='hidden'
        animate='visible'
        className='text-center'>
        <h2 className='text-md sm:text-lg'>{topic}</h2>
        <h1 className='text-4xl sm:text-5xl md:text-7xl cinzel font-semibold md:font-bold'>
          {title}
        </h1>
      </motion.div>
      <p>I'm a</p>
      <div className='flex gap-4 font-mono uppercase w-1/3 mx-auto'>
        <div className='flex-1 text-end text-lg md:text-xl font-extrabold flex items-center justify-end'>
          {/* <AnimatePresence mode='wait' onExitComplete={handlePExit}> */}
          <AnimatePresence mode='wait'>
            {state === 0 ? (
              <motion.p variants={pVariants} initial='hide' animate='show' className=''>
                {texts[state]}
              </motion.p>
            ) : state === 1 ? (
              <motion.p variants={pVariants} initial='hide' animate='show' className=''>
                {texts[state]}
              </motion.p>
            ) : (
              <motion.p variants={pVariants} initial='hide' animate='show' className=''>
                {texts[state]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className='flex-1 text-red-500/70 text-3xl md:-text-4xl font-black flex flex-col justify-end'>
          <p>Full</p>
          <p>Stack</p>
        </div>
      </div>
      <span className='developer text-4xl md:text-6xl font-black'>Developer</span>
    </Section>
  );
}

export const pVariants = {
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 3,
      delay: 2,
      // repeatDelay: 3,
      // repeatType: 'mirror',
      // repeat: Infinity,
    },
  },
  hide: {
    // y: -20,
    opacity: 0,
  },
  exit: {
    transition: {
      ease: 'easeInOut',
      duration: 2,
    },
  },
};

export default Landing;
