import { HERO_CONTENT } from "../constants/index";
import ProfilePic from "../assets/profile_picture.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  }),
};

function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px" });

  return (
    <div ref={ref} className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-24">
        <div className="flex flex-wrap max-lg:flex-col-reverse items-center gap-6 md:gap-10 lg:gap-20 justify-center lg:justify-between">

        {/* Text */}
        <div className="w-full md:w-3/4 lg:w-3/5 text-center lg:text-left">
          
          {/* Name */}
          <motion.h1
            variants={fadeAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2} 
            className="pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-tight"
          >
            Robin Aßmann
          </motion.h1>

          {/* Job */}
          <motion.span
            variants={fadeAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.5} 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-300 bg-clip-text text-xl sm:text-3xl md:text-3xl tracking-tight text-transparent inline-block"
          >
            Frontend Developer
          </motion.span>

          {/* Description */}
          <motion.p
            variants={fadeAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.8} 
            className="my-2 max-w-3xl text-lg text-justify text-neutral-300 font-light leading-relaxed max-md:text-justify max-md:text-[16px]"
          >
            {HERO_CONTENT} <br />
          </motion.p>
        </div>

        {/* Images */}
        <div className="w-full md:w-auto flex justify-center lg:justify-end">
          <img
            src={ProfilePic}
            alt="Robin Aßmann"
            className="rounded-4xl w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 lg:w-105 lg:h-105"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
