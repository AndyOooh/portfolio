import React, { useEffect, useState } from 'react';
// Import Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Skills.scss';
import Section from 'components/section';
import SkillsCloud from './skillsCloud/SkillsCloud';
import Certificates from './certificates/Certificates';
import { useMediaQuery } from 'react-responsive';

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
        // <div className='flex-1 flex flex-col justify-center items-center '>
        <Swiper
          onSlideChange={({ realIndex }) => setSlideIndex(realIndex)}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={isMdScreen}
          modules={[Pagination, Navigation]}
          loop={true}
          className='flex-1 w-11/12'>
          <SwiperSlide className='w-full'>
            <SkillsCloud />
          </SwiperSlide>
          <SwiperSlide className='w-full bg-cyan-400/10'>
            <Certificates />
          </SwiperSlide>
          <SwiperSlide className='w-full h-48 bg-sky-400/10'>Slide 3</SwiperSlide>
        </Swiper>
        // </div>
      )}
    </Section>
  );
}

export default Skills;
