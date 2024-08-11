import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedSVGsTab2 = () => {

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

  const secondSVGVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } }
  };

  const thirdSVGVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1.4 } }
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
        <Image width={366} height={510} src={"phone-2.svg"} alt={'TabPhone2'}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[10%] -left-[30%] "
        variants={secondSVGVariants}
        initial="initial"
        animate="animate"
      >
        <Image width={217} height={143} src={"sign.svg"} alt={'sign'} className='lg:scale-100 scale-[65%]' />
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] -right-[30%]"
        variants={thirdSVGVariants}
        initial="initial"
        animate="animate"
      >
        <Image width={216} height={180} src={"stamp.svg"} alt={'stamp'} className='lg:scale-100 scale-[65%]' />
      </motion.div>
    </>
  );
};

export default AnimatedSVGsTab2;