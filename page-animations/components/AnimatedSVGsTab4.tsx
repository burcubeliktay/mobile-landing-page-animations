import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedSVGsTab4 = () => {

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

  const secondSVGVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } }
  };

  const thirdSVGVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1.4 } },
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
        <Image width={366} height={483} src={"phone-4.svg"} alt={'Phone_4'}
        />
      </motion.div>
      <motion.div
        className="absolute lg:bottom-[5%] -bottom-[12%] lg:-left-[15%] -left-[20%]"
        variants={secondSVGVariants}
        initial="initial"
        animate="animate"
      >
        <Image className='lg:scale-100 scale-75' width={43} height={360} src={"volume1.svg"} alt={'volume1'}
        />
      </motion.div>
      <motion.div
        className="absolute lg:bottom-[5%] -bottom-[12%] lg:-right-[15%]  -right-[20%] "
        variants={thirdSVGVariants}
        initial="initial"
        animate="animate"
      >
        <Image className='lg:scale-100 scale-75' width={43} height={360} src={"volume2.svg"} alt={'volume2'}
        />
      </motion.div>
    </>
  );
};

export default AnimatedSVGsTab4;