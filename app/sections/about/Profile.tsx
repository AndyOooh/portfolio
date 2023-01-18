import React from 'react';
import ProfileImage from './ProfileImage';

type Props = {};

function Profile({}: Props) {
  return (
    <article className='flex gap-4 w-1/2 mx-auto'>
      <ProfileImage
        image='/me/profile-round-transparent.jpg'
        className='filter grayscale bg-white'
      />
      <ProfileImage image='/me/new-profile-crop1.png' className='filter grayscale'></ProfileImage>
      {/* <ProfileImage image='/me/new-profile-crop1.png' className='filter grayscale' /> */}
      <ProfileImage image='/me/new-profile-crop2.png' className='filter grayscale' />
    </article>
  );
}

export default Profile;
