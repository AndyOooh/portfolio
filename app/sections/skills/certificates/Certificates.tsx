import React from 'react';

import './Certificates.scss';
import { certList } from './certificatesList';

type Props = {};

function Certificates({}: Props) {
  return (
    <div className='cert-grid-lg lg:cert-grid-laptop'>
      {certList.map((cert, idx) => (
        <div key={cert.subtitle + cert.title} className={`item-${idx + 1} border-8 border-red-500`}>
          <div className='h-full'>
            <div className='object-cover h-full'>
              <img src={cert.image} alt={cert.title} className='object-cover w-full' />
            </div>
            {/* {cert.title} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certificates;
