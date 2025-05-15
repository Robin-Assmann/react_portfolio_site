import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TECHNOLOGIES } from "../constants/index";

function Expertises() {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });

    return (
        <div ref={ref} className="border-b-2 border-neutral-700 lg:mb-7 mt-5 px-6 sm:px-12 pb-24 bg-neutral-900 text-neutral-200">
            <motion.h2
                className="pt-16 my-16 text-center text-4xl lg:text-5xl font-light"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                My <span className="text-neutral-400 font-normal">Expertises</span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-12">
                {TECHNOLOGIES.map(({ icon: Icon, color, name, description }, index) => (
                    <motion.div
                        key={name}
                        className="flex items-center gap-6 w-full sm:w-[45%] lg:w-[30%] p-6 bg-neutral-800 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
                    >
                        {/* Icon with bounce effect */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.2 }}
                        >
                            <Icon className="text-8xl" style={{ color }} />
                        </motion.div>
                        
                        {/* Text Section */}
                        <div>
                            <h3 className="text-2xl font-semibold text-neutral-300">{name}</h3>
                            <p className="text-neutral-400 mt-2">{description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Expertises;
