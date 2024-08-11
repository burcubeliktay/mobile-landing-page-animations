import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedSVGsTab1 = () => {

  const svgVariants = {
    initial: {
      opacity: 0,
      y: '200%'
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
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
        <Image
          src={"phone-1.svg"}
          alt="Phone_1"
          layout="responsive"
          width={365}
          height={510}
        />
      </motion.div>
    </>
  );
};

export default AnimatedSVGsTab1;
