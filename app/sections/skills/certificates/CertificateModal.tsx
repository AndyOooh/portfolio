import { GiDiploma, GiOpenBook } from 'react-icons/gi';

import { Certificate } from './certificatesList';

type Props = {
  certificate: Certificate;
  id: number;
};

function CertificateModal({ certificate: { image, title, link, course }, id }: Props) {
  return (
    <>
      <input type='checkbox' id={`modal-${id}`} className='modal-toggle' />
      <label htmlFor={`modal-${id}`} className='modal cursor-pointer'>
        <div className='card card-compact rounded-none w-11/12 shadow-xl border-grad-2'>
          <figure>
            <img src={image} alt={title} className='w-full' />
          </figure>
          <div className='card-actions w-full justify-center gap-4 absolute bottom-6 left-1/2 -translate-x-1/2'>
            <a
              href={link}
              target='_blank'
              rel='noreferrer'
              className='sm:btn btn-primary btn-outline border-2 px-6 backdrop-blur'>
              <GiDiploma size={'2.2rem'} />
            </a>
            <a
              href={course}
              target='_blank'
              rel='noreferrer'
              className='sm:btn btn-primary btn-outline border-2 px-6 backdrop-blur'>
              <GiOpenBook size={'2.2rem'} />
            </a>
          </div>
        </div>
      </label>
    </>
  );
}

export default CertificateModal;
