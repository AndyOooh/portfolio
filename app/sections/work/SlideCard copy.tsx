'use client';

/* eslint-disable @next/next/no-img-element */
import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import { useElementSize } from 'usehooks-ts';
import cn from 'classnames';

import { ProjectType } from './projects';

function SlideCard(project: ProjectType) {
  const [cardRef, { width: cardWidth, height: cardHeight }] = useElementSize();

  const wide = cardWidth / cardHeight > 0.95;

  // TODO: info and tags need to be flex-wrap and half width when card is column.

  const cardClass = cn({
    'flex gap-4 my-0 h-full': true,
    'flex-col': !wide,
    'flex-row justify-center align-center': wide,
  });

  const detailsClass = cn({
    // 'flex flex-col w-full md:flex-row': true,
    'flex gap-2': true,
    'flex-col justify-center w-2/5': wide,
    'flex-col md:grid-cols-2': !wide,
  });

  const imageButtonClass = cn({
    'flex-center gap-2': true,
    'w-3/5': wide,
  });

  return (
    <div key={project.title} ref={cardRef} className={cardClass}>
      <div className={imageButtonClass}>
        <div className='w-full overflow-hidden my-0'>
          <img
            src={project.image}
            className='h-full xl:h-auto w-full object-contain' // tgis need to be cover and max-h on wide
            alt={project.title}
          />
        </div>

        {/* Buttons */}
        <div className='flex gap-4'>
          <div className='flex-1 flex justify-end'>
            <a
              className='btn btn-sm md:btn-md btn-outline gap-2'
              href={project.gitHub}
              target='_blank'
              rel='noreferrer'>
              <BsGithub />
              Github
            </a>
          </div>
          <div className='flex-1'>
            <a
              className={`btn btn-sm md:btn-md btn-outline gap-2 ${
                !project.liveDemo ? 'btn-disabled' : ''
              }`}
              href={project.liveDemo}
              target='_blank'
              rel='noreferrer'>
              <BsGlobe2 />
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className={detailsClass}>
        {/* Info */}
        {/* <div className='flex flex-wrap flex-col md:gap-2 md:w-1/2'> */}
        <div className='flex flex-col md:gap-2'>
          <p className='text-lg font-semibold'>{project.type}</p>
          <p className='text-primary'>
            {project.technologies.map((tech, idx) =>
              idx + 1 === project.technologies.length ? tech : tech + ' ● '
            )}
          </p>
          <p>{project.text}</p>
        </div>
        {cardHeight > 575 ? (
          <>
            <div className='divider m-1 md:m-4 md:divider-horizontal' />
            {/* <div className='flex flex-wrap self-center gap-1 md:w-1/2'> */}
            <div className='flex flex-wrap gap-1 w-full'>
              {project.tags?.map(tag => (
                <div key={tag} className='badge badge-primary badge-outline'>
                  {tag}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default SlideCard;
