"use client";
import { motion } from 'framer-motion';
import { projects } from '@/utils/skills.js';

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

    <motion.div>
        {
            projects.map((projects,index)=>{
                return (
                    <motion.div
                        key={index}
                        className="flex max-lg:flex-wrap mb-8 p-6 bg-green-950 rounded-lg shadow-lg 
                        gap-10 hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        >
                        <img
                            src={projects.img}
                            alt={projects.title}
                            className="h-52 object-cover rounded-t-lg mb-4 border-2 border-orange-200"
                        />
                        <div className='flex flex-col justify-between'>
                            <h3 className="text-3xl font-semibold mb-2 text-orange-300">
                            {projects.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{projects.description}</p>
                            <div>
                            <a
                            href={projects.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:text-orange-600 transition-colors duration-200"
                            >
                            View Project
                            </a>
                            <a
                            href={projects.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 text-orange-400 hover:text-orange-600 transition-colors duration-200"
                            >
                            GitHub
                            </a>
                            </div>
                            <div className='flex flex-wrap gap-4 mt-4'>
                            {
                                projects.tags.map((skill, index) => {
                                    return (
                                        <div key={index} className="flex items-center gap-2 mb-2">
                                            <span className="text-gray-300">{skill}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        </div>
                        
                        </motion.div>

                )
            })
        }
    </motion.div>
      
    </section>
)
}

export default Projects