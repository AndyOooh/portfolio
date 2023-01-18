'use client';

import { useCallback } from 'react';
import {  Alegreya_Sans_SC } from '@next/font/google';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';

// import { particlesOptions } from './particles/polygon-mask.particles';
import { particlesOptions } from './particles/hexagon.particles';
// import { particlesOptions } from './particles/bg-mask.particles';

import './styles/globals.scss';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const sofia = Alegreya_Sans_SC({
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  return (
    <html lang='en' className={`${sofia.className}`}>
      <head />
      <body>
        <BrowserRouter>
          <Particles options={particlesOptions} init={particlesInit} />
          <Header />
          <Routes>
            <Route path='/' element={children} />
          </Routes>
        </BrowserRouter>
      </body>
    </html>
  );
}

// tsparticles_next13_andy
