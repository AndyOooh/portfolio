import Image from 'next/image';
import React from 'react';

import meRound from '../../public/me/profile-round-transparent.jpg';
import meClose from '../../public/me/new-profile-crop1.png';
import meFar from '../../public/me/new-profile-crop2.png';
import meCut from '../../public/me/profile--transparent-cut.jpg';
import ProfileImage from './ProfileImage';

type Props = {};

function Hero({}: Props) {
  return (
    <section id='hero' className='page-section'>
      <div className='my-grad-01 w-1/2 h-36'></div>
      <h1>Hero Section</h1>

      <div className='flex gap-4 w-1/2 mx-auto'>
        <ProfileImage image='/me/profile-round-transparent.jpg' className='filter grayscale ' />
        <ProfileImage image='/me/new-profile-crop1.png' className='filter grayscale'></ProfileImage>
        {/* <ProfileImage image='/me/new-profile-crop1.png' className='filter grayscale' /> */}
        <ProfileImage image='/me/new-profile-crop2.png' className='filter grayscale' />
      </div>
     

      <div className='my-grad-01 w-1/3 h-24 bottom-80 right-48 translate-x-28 rotate-12'></div>
    </section>
  );
}

export default Hero;
