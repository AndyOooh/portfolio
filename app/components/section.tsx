import React, { Children } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { styles } from '../styles';

import { motion, useScroll } from 'framer-motion';
import { sectionVariants } from 'motion/sections.motion';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  topic?: string;
  title?: string;
  center?: boolean;
};

function Section({ children, id, topic, title, center = false }: SectionProps) {
  const hash = id === 'landing' ? '/' : `#${id}`;
  useScrollSpy(id, hash);
  const { scrollYProgress } = useScroll();
  return (
    <section id={id} className={styles.section}>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        // animate='visible'
        whileInView='visible'
        className={`${styles.sectionWrapper} ${center ? 'flex-center' : ''}`}>
        <div className='text-center'>
          <h2 className='text-md sm:text-lg'>{topic}</h2>
          <h1 className='text-2xl sm:text-3xl md:text-4xl'>{title}</h1>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

export default Section;
