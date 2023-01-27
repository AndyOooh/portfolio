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
        <div className='card card-compact gap-2 rounded-none w-11/12 md:w-3/5 shadow-xl'>
          {/* <figure className='border-grad-2'> */}
          <img src={image} alt={title} className='w-full border-grad-2' />
          {/* </figure> */}
          {/* <div className='card-actions w-full justify-center gap-4 absolute bottom-6 left-1/2 -translate-x-1/2'> */}
          <div className='card-actions w-full justify-center gap-4'>
            <a
              href={link}
              target='_blank'
              rel='noreferrer'
              className='sm:btn btn-primary btn-outline border-2 px-6 backdrop-blur bg-white/20'>
              <GiDiploma size={'2.2rem'} />
            </a>
            <a
              href={course}
              target='_blank'
              rel='noreferrer'
              className='sm:btn btn-primary btn-outline border-2 px-6 backdrop-blur bg-white/20'>
              <GiOpenBook size={'2.2rem'} />
            </a>
          </div>
        </div>
      </label>
    </>
  );
}

export default CertificateModal;
