'use client';

import { styles } from './styles';
import Landing from './sections/landing/Landing';
import About from './sections/about/About';
import Work from './sections/work/Work';
import Skills from 'sections/skills/Skills';
import Contact from './sections/contact/Contact';

export default function Home() {
  return (
    <main className={`${styles.innerWidth} flex flex-col`}>
      <Skills />
      <Landing />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
