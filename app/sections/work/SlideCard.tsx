import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs';
import { SiInternetexplorer } from 'react-icons/si';
import ReactPlayer from 'react-player/lazy';

import { ProjectType } from './projects';

function SlideCard(project: ProjectType) {
  return (
    <div key={project.title} className='flex flex-col gap-4 my-0'>
      <div className=' w-full overflow-hidden my-0'>
        {project.video ? (
          <ReactPlayer
            url={project.video}
            className=''
            loop={true}
            width='100%'
            height='100%'
            muted={true}
            playing={true}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            className='h-full xl:h-auto w-full object-contain'
            alt={project.title}
          />
        )}
      </div>
      <div className='p-2 flex flex-col gap-2 md:gap-8'>
        <div className='swiper-pagination'></div>
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

        <div className='flex flex-col w-full md:flex-row'>
          {/* Info */}
          <div className='md:flex-1 flex-wrap flex flex-col md:gap-2'>
            <p className='text-lg font-semibold'>{project.type}</p>
            <p className='text-lg'>
              {project.technologies.map((tech, idx) =>
                idx + 1 === project.technologies.length ? tech : tech + ' ● '
              )}
            </p>
            <p>{project.text}</p>
          </div>

          <div className='divider md:divider-horizontal' />

          {/* Tags */}
          <div className='md:flex-1 flex-wrap self-center flex gap-1'>
            {project.tags?.map(tag => (
              <div key={tag} className='badge badge-primary badge-outline'>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
