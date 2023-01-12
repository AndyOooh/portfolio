import Image from 'next/image';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  image: string;
  className?: string;
};

const ProfileImage = ({ children, image, className }: Props) => {
  return (
    <>
      <div className='relative border-4 border-purple-900 rounded-full flex-1 overflow-hidden h-full aspect-square'>
        <Image
          src={image}
          alt='profile'
          // width={100%}
          fill={true}
          quality={100}
          sizes='(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 20vw'
          priority={true}
          // placeholder='blur'
          // className='filter grayscale backdrop-blur-lg bg-white/50'
          className={className}
        />
        {children}
      </div>
    </>
  );
};

export default ProfileImage;
