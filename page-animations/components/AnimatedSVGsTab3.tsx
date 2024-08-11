import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedSVGsTab3 = () => {

  const svgVariants = {
    initial: {
      opacity: 0,
      y: '200%',
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const svgVariants2 = {
    initial: {
      opacity: 0,
      scale: 1,
      y: '200%',
    },
    animate: {
      opacity: 1,
      scale: 0.8,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 1,
      },
    },
  };

  const svgVariants3 = {
    initial: {
      opacity: 0,
      scale: 1,
      y: '200%',
    },
    animate: {
      opacity: 1,
      scale: 0.9,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 1.4,
      },
    },
  };

  const svgVariants4 = {
    initial: {
      opacity: 0,
      scale: 1,
      y: '200%',
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 1.8,
      },
    },
  };

  return (
    <>
      <motion.div
        className="absolute bottom-0"
        variants={svgVariants}
        initial="initial"
        animate="animate"
        style={{ originY: 1 }}
      >
        <Image width={375} height={483} src="phone-3.svg" alt="Phone" />
      </motion.div>
      <motion.div
        className="absolute top-[20%] left-[10%] right-[10%]"
        variants={svgVariants2}
        initial="initial"
        animate="animate"
      >
        <Image width={292} height={342} src="/file-preview.svg" alt="File Preview" />
      </motion.div>
      <motion.div
        className="absolute top-[26%] left-[10%] right-[10%]"
        variants={svgVariants3}
        initial="initial"
        animate="animate"
      >
        <Image width={292} height={342} src="/file-preview.svg" alt="File Preview" />
      </motion.div>
      <motion.div
        className="absolute top-[32%] left-[10%] right-[10%]"
        variants={svgVariants4}
        initial="initial"
        animate="animate"
      >
        <Image width={292} height={342} src="/file-preview.svg" alt="File Preview" />
      </motion.div>
    </>
  );
};

export default AnimatedSVGsTab3;
