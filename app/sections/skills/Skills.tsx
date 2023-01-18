import React, { useEffect, useState } from 'react';
// Import Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Skills.scss';
import Section from 'components/section';
import SkillsCloud from './skillsCloud/SkillsCloud';
import Certificates from './certificates/Certificates';

const slideNames = ['sphere', 'list', 'certificates'];

function Skills() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const topic = 'Skills';
  const pageTitles = ['Cloud', 'List', 'Certificates'];
  const pagination = {
    clickable: true,
    // renderBullet: function (index: number, className: string) {
    //   return '<span class="' + className + '">' + slideNames[index] + '</span>';
    // },
  };

  return (
    <Section id='skills' topic={topic} title={pageTitles[slideIndex]}>
      <Swiper
        onSlideChange={({ realIndex }) => setSlideIndex(realIndex)}
        slidesPerView={1}
        spaceBetween={30}
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className='skillsSwiper flex-1'>
        <SwiperSlide className='w-full'>
          <SkillsCloud />
        </SwiperSlide>
        <SwiperSlide className='w-full h-48 bg-cyan-400/10'>
          <Certificates />
        </SwiperSlide>
        <SwiperSlide className='w-full h-48 bg-sky-400/10'>Slide 3</SwiperSlide>
      </Swiper>
    </Section>
  );
}

export default Skills;
