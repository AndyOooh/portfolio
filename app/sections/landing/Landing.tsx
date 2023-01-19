/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Section from 'components/section';

type Props = {};

function Landing({}: Props) {
  const topic = 'Hi, my name is';
  const title = 'Andreas Øe';
  return (
    <Section id='landing' center={true}>
      <div className='text-center'>
        <h2 className='text-md sm:text-lg'>Hi, my name is</h2>
        <h1 className='text-4xl sm:text-5xl md:text-7xl cinzel font-semibold md:font-bold'>Andreas Øe</h1>
      </div>
      <p>I'm a</p>
      <div className='flex gap-4 font-mono uppercase'>
        <div className='text-end text-lg md:text-xl font-extrabold '>
          <p className=''>Frontend</p>
          <p className=''>Backend</p>
          <p className=''>Web3</p>
          {/* <p className='text-sm font-light'>Frontend</p>
          <p className='text-base font-medium'>Backend</p>
          <p className='text-lg font-semibold'>Web3</p> */}
        </div>
        <div className='text-red-500/70 text-3xl md:-text-4xl font-black flex flex-col justify-end'>
          <p>Full</p>
          <p>Stack</p>
        </div>
      </div>
      <span className='developer text-4xl md:text-6xl font-black'>Developer</span>
    </Section>
  );
}

export default Landing;
