import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { BsGithub, BsLinkedin, BsGlobe2 } from 'react-icons/bs';
import { SiInternetexplorer } from 'react-icons/si';
import ReactPlayer from 'react-player/lazy';

import { ProjectType } from './projects';

function SlideCard(project: ProjectType) {
  return (
    <div key={project.title} className='h-full flex flex-col gap-4 '>
      <div className='h-2/3 w-full  overflow-hidden'>
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
          <img src={project.imageRel} className='' alt={project.title} />
        )}
      </div>
      <div className='swiper-pagination'></div>
      {/* <div className='flex-1 flex gap-4 p-4 border-2 border-cyan-300 bg-purple-200'> */}
      <div className='flex gap-4'>
        <div className='flex-1 flex justify-end'>
          <a
            className='btn btn-outline gap-2'
            href={project.gitHub}
            target='_blank'
            rel='noreferrer'>
            <BsGithub />
            Github
          </a>
        </div>
        <div className='flex-1'>
          <a
            className={`btn btn-outline gap-2 ${!project.liveDemo ? 'btn-disabled' : ''}`}
            href={project.liveDemo}
            target='_blank'
            rel='noreferrer'>
            <BsGlobe2 />
            Live Demo
          </a>
        </div>
      </div>
      <div className='flex gap-4 pb-4 px-4'>
        <div className='flex-1 flex-wrap flex flex-col gap-2 content-end'>
          <h1>{project.title}</h1>
          <p>{project.type}</p>
          <p>
            {project.technologies.map((tech, idx) =>
              idx + 1 === project.technologies.length ? tech : tech + ' - '
            )}
          </p>
        </div>
        <div className='divider divider-horizontal'></div>
        <div className='tag-grid flex-1 flex-wrap self-center gap-2'>
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
