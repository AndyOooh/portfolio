// h should match height of floating nav + it's offset

// h-[calc(100vh-3rem-4px)]
// 49.6 is measured height (in devtools) of Floatnav

// pbb-20 before (monday)

export const styles = {
  innerWidth: `w-full lg:w-4/5 max-w-7xl mx-auto`,

  section: `h-screen flex flex-col items-center 

  `,

  sectionWrapper: `
  w-[95%]

  h-[calc(100vh-2rem-(49.6px/2))]
  md:h-[calc(100vh-6rem)]
  
  mt-4
  md:mt-20

  p-4
  pb-12
  md:pb-4

  flex
  flex-col
  items-center

  scale: 0
  opacity: 0
  
  border-grad
  backdrop-blur-sm
  bg-primary/5
  `,

  // innerWidth: '2xl:max-w-[1280px] w-full',
  //   interWidth: 'lg:w-[80%] w-[100%]',

  //   paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  //   yPaddings: 'sm:py-16 xs:py-8 py-12',
  //   xPaddings: 'sm:px-16 px-6',
  //   topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  //   bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  //   flexCenter: 'flex justify-center items-center',
  //   flexStart: 'flex justify-start items-start',
  //   flexEnd: 'flex justify-end',
  //   navPadding: 'pt-[98px]',

  //   // hero section
  //   heroHeading:
  //     'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
  //   heroDText:
  //     'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
};
