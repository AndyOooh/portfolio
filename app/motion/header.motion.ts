export const headerVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,

    // whileInView: { opacity: 1 },
    transition: {
      duration: 1.5,
      delay: 0.1,
    },
  },
};
