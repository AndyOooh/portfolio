'use client';

import { useCallback } from 'react';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import { Engine, ISourceOptions } from 'tsparticles-engine';

import './styles/globals.scss';
import Header from './components/Header';

// import { particlesOptions } from './config/particles-config';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';
import { particlesOptions } from './config/config';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);
  return (
    <html lang='en'>
      <head />
      <body>
        <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
        <Header />
        {children}
      </body>
    </html>
  );
}

// tsparticles_next13_andy
