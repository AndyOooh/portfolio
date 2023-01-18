import React from 'react';

type Props = {};

const GradientDiv = (props: Props) => {
  return (
    <>
      <div className='flex gap-2'>
        <div className='tw-grad-01 border-4 border-red-500  w-36 h-36'>GradientDiv</div>
        <div className='tw-grad-02 border-4 border-red-500  w-36 h-36'>GradientDiv</div>
        <div className='grad-01 border-4 border-red-500  w-36 h-36'>GradientDiv</div>
      </div>
      <div className='tw-grad-01 aspect-square p-2 w-1/4'>
        <div className='bg-slate-500 h-full p-2 flex-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, culpa
          dolore quibusdam nisi repellendus corrupti quisquam a ad facilis.
        </div>
      </div>
    </>
  );
};

export default GradientDiv;
