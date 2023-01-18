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

function Work() {
  const topic = 'Work';
  const title = 'Projects';
  return (
    <Section id='work' topic={topic} title={title}>
      <Swiper
        spaceBetween={30}
        // effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        // modules={[EffectFade, Navigation, Pagination]}
        modules={[Navigation, Pagination]}
        className='mySwiper w-11/12 h-3/4 border border-white/20'>
        {projects.map(project => (
          <SwiperSlide key={project.title} className=' '>
            <SlideCard {...project} key={project.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

export default Work;
