'use client';

import Section from 'components/Section';
import React from 'react';

type Props = {};

function TestModal({}: Props) {
  return (
    <Section id='test'>
      {/* The button to open modal */}
      <label htmlFor='my-modal-4' className='btn'>
        open modal
      </label>

      {/* test box */}
      <div className='w-[95%] h-80 bg-red-100/40 border-2 border-yellow-400'>I am a box</div>

      {/* Put this part before </body> tag */}
      <input type='checkbox' id='my-modal-4' className='modal-toggle' />
      <label htmlFor='my-modal-4' className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          <h3 className='text-lg font-bold'>Congratulations random Internet user!</h3>
          <p className='py-4'>
            You have been selected for a chance to get one year of subscription to use Wikipedia for
            free!
          </p>
        </label>
      </label>
    </Section>
  );
}

export default TestModal;

{
  /* <div className='card card-compact w-full bg-base-100 shadow-xl'>
<figure>
  <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
</figure>
<div className='card-body'>
  <h2 className='card-title'>Shoes!</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div className='card-actions justify-end'>
    <button className='btn btn-primary'>Buy Now</button>
  </div>
</div>
</div> */
}
