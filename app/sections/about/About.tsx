/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Section from 'components/Section';
import ProfileImage from './ProfileImage';

function About() {
  const topic = 'About';
  const title = 'Who I am';
  return (
    <Section id='about' topic={topic} title={title}>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:px-8 h-full'>
        <p className='w-5/6 text-sm md:text-base'>
          {/* <span>Hello!</span> I'm Andreas, or <span>Andy</span> as the domain says. <br />
          <br /> */}
          A Danish national relocated to buzzling <span>Bangkok</span> some years ago. I spend my days 
          in the 'big mango' with my <span>girlfriend</span>, playing football and building web things. 
          <br />
          <span>My interest</span> in web development began in <span>2020</span> when I couldn't
          find the tools I needed for my <span>crypto</span> projects. After playing around with
          different APIs in the backend, the frontend quickly caught my interest as well. <br />
          <br />
          <span>Fast-forward</span> to today, and I’ve completed dozens of courses, bootcamps, personal
          projects and a few collaborations.
        </p>
        <div className='flex gap-4 w-1/2 mx-auto'>
          <ProfileImage
            image='/me/new-profile-crop2.png'
            className='filter grayscale aspect-square'
          />
        </div>
      </div>
    </Section>
  );
}

export default About;
