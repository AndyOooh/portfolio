/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Section from 'components/Section';
import { AnimatePresence, motion } from 'framer-motion';
import { nameVariants } from 'motion/landing.motion';

type Props = {};

function Landing({}: Props) {
  const topic = 'Hi, my name is';
  const title = 'Andreas Øe';

  const [pIndex, setPIndex] = useState(0);
  const pTexts = ['Frontend', 'Backend', 'Web3'];

  useEffect(() => {
    const interval = setInterval(() => {
      let next = pIndex + 1;
      setPIndex(next % pTexts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [pIndex, pTexts.length]);

  const pVariants = {
    hide: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
      opacity: 0,
    },
  };

  return (
    // <Section id='landing' justify='center'>
    <Section id='landing'>
      <div className='flex-center h-full'>
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
        <div className='flex gap-4 font-mono uppercase w-full mx-auto'>
          <div className='flex-1 text-end text-lg md:text-xl font-extrabold flex items-center justify-end'>
            {/* <motion.div variants={container} initial='hidden' animate='show'>
            {texts.map((text, index) => (
              <motion.p variants={item} key={index}>
                {text}
              </motion.p>
            ))}
          </motion.div> */}
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
          <div className='flex-1 text-red-500/70 text-3xl md:-text-4xl font-black flex flex-col justify-end'>
            <p>Full</p>
            <p>Stack</p>
          </div>
        </div>
        <span className='developer text-4xl md:text-6xl font-black'>Developer</span>
      </div>
    </Section>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // repeatType: 'reverse',
      duration: 2,
      // delayChildren: 1,
      when: 'beforeChildren',
      staggerChildren: 2,
    },
  },
};

const item = {
  hidden: { opacity: 0, color: 'red' },
  show: {
    opacity: [1, 0],
    color: 'green',
    transition: {
      // ease: 'easeInOut',
      // type: 'tween',
      duration: 2,
      repeat: Infinity,
      repeatDelay: 4,
    },
  },
};

// export const pVariants = {
//   show: {
//     opacity: 1,
//     // y: 0,
//     transition: {
//       ease: 'easeInOut',
//       duration: 3,
//       delay: 2,
//       // repeatDelay: 3,
//       // repeatType: 'mirror',
//       // repeat: Infinity,
//     },
//   },
//   hide: {
//     // y: -20,
//     opacity: 0,
//   },
//   exit: {
//     transition: {
//       ease: 'easeInOut',
//       duration: 2,
//     },
//   },
// };

export default Landing;
