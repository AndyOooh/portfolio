import { useCallback, useEffect, useRef, useState } from 'react';
import { TagCloudOptions } from 'TagCloud';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { useMediaQuery } from 'react-responsive';

import './SkillsCloud.scss';
import { cloudList } from './cloudList';
import React from 'react';

function SkillsCloud() {
  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });

  // const parentRef = useRef<HTMLDivElement | null>(null);

  // const [windowHeight, setWindowHeight] = useState(0);
  // console.log('🚀  file: SkillsCloud.tsx:16  windowHeight', windowHeight);
  // const [windowWidth, setWindowWidth] = useState(0);
  // console.log('🚀  file: SkillsCloud.tsx:17  windowWidth', windowWidth);

  // useEffect(() => {
  //   const clientWidth = parentRef.current?.clientWidth;
  //   const clientHeight = parentRef.current?.clientHeight;
  //   if (!clientWidth || !clientHeight) return;
  //   setWindowHeight(clientHeight);
  //   setWindowWidth(clientWidth);
  // });

  const factor = isLgScreen ? 1.8 : isMdScreen ? 2.4 : 3;

  const optionsCb = useCallback(
    (w: Window & typeof globalThis): TagCloudOptions => ({
      radius: Math.min(500, w.innerWidth, w.innerHeight) / factor,
      maxSpeed: 'fast',
    }),
    [factor]
  );

  return (
    <div
      // ref={parentRef}
      className='h-full flex items-stretch'>
      <TagCloud
        options={optionsCb}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
        className='flex-1 flex items-center'>
        {cloudList}
      </TagCloud>
    </div>
  );
}

export default React.memo(SkillsCloud);



// TODO:
// toggle/dropddown: web3, standard, concepts, (maybe backend, frontend)
// Search: search anything and it will light up on cloud and/or will have a small text
// onhover: show text as tooltip