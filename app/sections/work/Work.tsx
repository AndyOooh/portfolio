'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// import 'swiper/scss/effect-fade';
import { EffectFade, Navigation, Pagination } from 'swiper';
import { projects } from './projects';
import SlideCard from './SlideCard';
import Section from 'components/section';

import './Work.scss';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Work() {
  const topic = 'Work';
  const title = 'Projects';
  // const pageTitles = ['Cloud', 'List', 'Certificates'];
  const slideTitles = projects.map(project => project.title);
  const [domLoaded, setDomLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Section id='work' topic={topic} title={slideTitles[slideIndex]}>
      {domLoaded && (
        // <div className='flex-center flex-1 bg-orange-400/10 my-0'>
        // <div className=' bg-orange-400/10 my-0'>
          <Swiper
            onSlideChange={({ realIndex }) => setSlideIndex(realIndex)}
            spaceBetween={30}
            // effect={'fade'}
            loop={true}
            navigation={isMdScreen}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            // modules={[EffectFade, Navigation, Pagination]}
            modules={[Navigation, Pagination]}
            className='flex-1 w-11/12 border border-white/20'>
            {projects.map(project => (
              <SwiperSlide key={project.title} className=' '>
                <SlideCard {...project} key={project.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        // </div>
      )}
    </Section>
  );
}

export default Work;
