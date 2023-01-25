import React, { useEffect, useState } from 'react';
// Import Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Skills.scss';
import Section from 'components/Section';
import SkillsCloud from './skillsCloud/SkillsCloud';
import Certificates from './certificates/Certificates';
import { useMediaQuery } from 'react-responsive';
import List from './list/List';

const slideNames = ['sphere', 'list', 'certificates'];

function Skills() {
  const topic = 'Skills';
  const slideTitles = ['Cloud', 'Certificates', 'List'];
  const [domLoaded, setDomLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const pagination = {
    clickable: true,
    // renderBullet: function (index: number, className: string) {
    //   return '<span class="' + className + '">' + slideNames[index] + '</span>';
    // },
  };

  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Section id='skills' topic={topic} title={slideTitles[slideIndex]}>
      {domLoaded && (
        // <div className='flex-center'>
        <Swiper
          onSlideChange={({ realIndex }) => setSlideIndex(realIndex)}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={isMdScreen}
          modules={[Pagination, Navigation]}
          loop={true}
          className='flex-1 w-full'>
          <SwiperSlide className='w-full flex-center'>
            <Certificates />
          </SwiperSlide>
          <SwiperSlide className='w-full flex-center'>
            <List />
          </SwiperSlide>
          <SwiperSlide className='w-full flex-center'>
            <SkillsCloud />
          </SwiperSlide>
        </Swiper>
        // </div>
      )}
    </Section>
  );
}

export default Skills;
