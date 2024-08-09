import Work1 from "/assets/images/chain2055.png";
import Work2 from '/assets/images/d vs d complete.jpg'
import Work3 from '/assets/images/Queens place done.jpg'
import Work4 from '/assets/images/dainty sample.jpg'
import { motion } from "framer-motion";
function FeaturedWork() {
  return (
    <div className="grid lg:grid-cols-2 max-lg:grid-cols-1 gap-9">
      <motion.div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer" initial={{scale: 0, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: .1}}>
        <img src={Work1} alt="Chain 2055" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </motion.div>
      <motion.div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer" initial={{scale: 0, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: .2}}>
        <img src={Work2} alt="Featured Work" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </motion.div>
      <motion.div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer" initial={{scale: 0, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: .3}}>
        <img src={Work3} alt="Featured Work" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </motion.div>
      <motion.div className="md:w-[500px] md:h-[500px] max-md:w-full max-md:h-full flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer" initial={{scale: 0, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{delay: .4}}>
        <img src={Work4} alt="Featured Work" className="w-[90%] h-full hover:scale-105 transition-all"/>
      </motion.div>
    </div>
  );
}

export default FeaturedWork;
