'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav className='navbar bg-base-100 md:w-4/5 border-2 border-gray-700'>
    <div className='relative h-full w-full bg-orange-400 my-0'>
      <Image
        src='/me/new-profile-crop2.png'
        alt='avatar'
        fill={true}
        quality={100}
        sizes='(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 20vw'
        priority={true}
        className='bg-orange-400 my-0'
      />
    </div>
    <div className=' bg-orange-400 my-0'>hello</div>
    <div className=''>
      <ul className='menu menu-horizontal px-1'>
        <li>
          <Link href={'/'}>Item 1</Link>
        </li>
        <li>
          <Link href={'/'}>Item 2</Link>
        </li>
        <li>
          <Link href={'/'}>Item 3</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
