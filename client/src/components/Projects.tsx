import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { PROJECTS } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="border-b-2 border-neutral-600 lg:mb-7 mt-5 px-4 sm:px-8 pb-24"
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "exit"}
    >
      <h2 className="my-20 text-center text-3xl lg:text-4xl font-extralight">
        Example Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
      >
        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 p-5 rounded-lg cursor-pointer hover:bg-[#111214] transition-all duration-500 hover:shadow-[0_0_35px_1px_#ffffff54] hover:scale-102 transform"
            variants={itemVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-light mt-5 text-neutral-200">
              {project.title}
            </h3>
            <p className="text-neutral-500 mt-3">{project.description}</p>
            <ul className="mt-5">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="inline-block bg-neutral-600 text-neutral-200 px-2 py-2 rounded-lg text-sm mr-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
