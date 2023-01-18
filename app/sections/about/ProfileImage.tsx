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
      <div className='inner-shad relative rounded-full flex-1 overflow-hidden h-full aspect-square'>
        <Image
          src={image}
          alt='profile'
          fill={true}
          quality={100}
          sizes='(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 20vw'
          priority={true}
          // placeholder='blur'
          className={className}
        />
        {children}
      </div>
    </>
  );
};

export default ProfileImage;
