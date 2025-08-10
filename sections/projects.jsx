"use client";
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <section id="projects" className="p-10 mt-10 flex flex-col items-center">
        <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-orange-200 w-fit p-3 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Projects</motion.h2>

    <motion.p>

    </motion.p>
      
    </section>
)
}

export default Projects