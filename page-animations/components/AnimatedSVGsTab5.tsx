import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedSVGsTab5 = () => {

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

  const fanVariants = (delay: any, rotate: any) => ({
    initial: {
      y: '200%',
      rotate: 0
    },
    animate: {
      y: 0,
      rotate,
      transition: {
        duration: 0.3,
        delay,
      },
    },
  });

  return (
    <>
      <motion.div
        className="absolute bottom-0"
        variants={svgVariants}
        initial="initial"
        animate="animate"
        style={{ originY: 1 }}
      >
        <Image width={366} height={483} src={"phone-5.svg"} alt={'Phone_5'}
        />
      </motion.div>
      <motion.div
        className="absolute lg:bottom-[5%] bottom-[1%] lg:-left-[9%] -left-[16%] "
        variants={fanVariants(0.5, 0)}
        initial="initial"
        animate="animate"
        style={{ transformOrigin: 'bottom left' }}
      >
        <Image className="lg:scale-100 scale-[65%]" width={24} height={34} src={"arrow.svg"} alt={'arrow'}
        />
      </motion.div>
      <motion.div
        className="absolute lg:bottom-[5%] bottom-[1%] lg:-left-[9%] -left-[25%]"
        variants={fanVariants(0.8, 0)}
        initial="initial"
        animate="animate"
      >
        <Image className="lg:scale-100 scale-[65%]" width={160} height={181} src={"pdf.svg"} alt={'pdf'}
        />
      </motion.div>
      <motion.div
        className="absolute lg:bottom-[13%] bottom-[10%] lg:left-[30%] left-[18%]"
        variants={fanVariants(1.1, 0)}
        initial="initial"
        animate="animate"
      >
        <Image className="lg:scale-100 scale-[65%]" width={130} height={156} src={"jpg.svg"} alt={'jpg'}
        />
      </motion.div>
      <motion.div
        className="absolute lg:bottom-[5%] bottom-0 lg:-right-[10%] -right-[22%]"
        variants={fanVariants(1.4, 0)}
        initial="initial"
        animate="animate"
      >
        <Image className="lg:scale-100 scale-[65%]" width={159} height={187} src={"txt.svg"} alt={'txt'}
        />
      </motion.div>
    </>
  );
};

export default AnimatedSVGsTab5;


