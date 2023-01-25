import React from 'react';
import CertificateModal from './CertificateModal';

import './Certificates.scss';
import { certList } from './certificatesList';

function Certificates() {
  return (
    <>
      <div className='cert-grid-lg lg:cert-grid-laptop'>
        {certList.slice(0, 12).map((cert, idx) => (
            <label
              key={cert.subtitle + cert.title}
              // htmlFor='my-modal''
              htmlFor={`modal-${idx}`}
              className={`item-${idx} border-grad-2`}>
              {/* <div key={cert.subtitle + cert.title} className={`item-${idx + 1} border-grad-2`}> */}
              <div className='h-full'>
                <div className='object-cover h-full bg-white'>
                  <img src={cert.image} alt={cert.title} className='object-cover w-full' />
                </div>
              </div>
              {/* </div> */}
              <CertificateModal certificate={cert} id={idx} />
            </label>
        ))}
      </div>
    </>
  );
}

export default Certificates;
