'use client';

import { useCallback } from 'react';
import { Alegreya_Sans_SC } from '@next/font/google';
import { useMediaQuery } from 'react-responsive';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

// import { particlesOptions } from './particles/polygon-mask.particles';
import { particlesOptions } from './particles/hexagon.particles';
// import { particlesOptions } from './particles/bg-mask.particles';

import './styles/globals.scss';
import Header from './components/header/Header';

const sofia = Alegreya_Sans_SC({
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const numParticles = isLgScreen ? 200 : isMdScreen ? 140 : 100;

  if (particlesOptions?.particles?.number?.value) {
    particlesOptions.particles.number.value = numParticles;
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <html lang='en' className={`${sofia.className}`}>
      <head />
      <body>
        <Particles options={particlesOptions} init={particlesInit} />
        <Header />
        {children}
      </body>
    </html>
  );
}
