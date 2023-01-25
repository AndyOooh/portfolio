export const nameVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
  
      // whileInView: { opacity: 1 },
      transition: {
        duration: 1.2,
        delay: 0.1,
      },
    },
  };

  
  export const pVariants = {
    hide: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
      opacity: 0,
    },
  };