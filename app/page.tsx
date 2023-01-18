'use client';

import Landing from './sections/landing/Landing';
import About from './sections/about/About';
import Work from './sections/work/Work';
import Contact from './sections/contact/Contact';
import Skills from 'sections/skills/Skills';

export default function Home() {
  return (
    <main className='w-full lg:w-4/5 max-w-7xl mx-auto flex flex-col'>
      <Landing />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
