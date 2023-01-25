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
          <img
            src={project.image}
            className='h-full xl:h-auto w-full object-contain'
            alt={project.title}
          />
        )}
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <div className='swiper-pagination'></div>
        {/* <div className='flex-1 flex gap-4 p-4 border-2 border-cyan-300 bg-purple-200'> */}
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
        {/* <div className='flex gap-4 pb-4 px-4'> */}
        <div className='flex-wrap flex flex-col md:gap-2 md:content-end md:my-0'>
          {/* <h1>{project.title}</h1> */}
          <p className='text-lg font-semibold'>{project.type}</p>
          <p className='text-lg'>
            {project.technologies.map((tech, idx) =>
              idx + 1 === project.technologies.length ? tech : tech + ' ● '
            )}
          </p>
        </div>
        {/* <div className='divider divider-horizontal'></div> */}
        <p>{project.text}</p>
        <div className='md:flex-1 flex-wrap self-center flex gap-1'>
          {project.tags?.map(tag => (
            <div key={tag} className='badge badge-primary badge-outline'>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideCard;
