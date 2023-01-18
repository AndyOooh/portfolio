export const sectionVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
   

    transition: {
      originX: 0,
      originY: 0,
      duration: 0.35,
      delay: 0.02,
    //   when: 'beforeChildren',
    //   staggerChildren: 0.25,
    },
  },
};
