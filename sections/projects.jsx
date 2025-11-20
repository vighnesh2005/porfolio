"use client";
import { motion } from 'framer-motion';
import { projects } from '@/utils/skills.js';
import Carousel from '@/components/Carousel';

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-10 mt-10 flex flex-col items-center min-h-screen py-10">
        <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-peach text-black w-fit p-3 rounded-2xl gap-2 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      viewport={{ once: false, amount: 0.2 }}
      >Projects</motion.h2>

    <motion.div className="mt-10 w-full max-w-6xl mx-auto space-y-6">
        {
            projects.map((project,index)=>{
                return (
                    <motion.div
                        key={index}
                        className="transform-gpu flex flex-col sm:flex-row p-3 sm:p-5 md:p-6 bg-black/60 backdrop-blur-lg rounded-2xl shadow-lg 
                        gap-3 sm:gap-6 md:gap-8 transition-all duration-150 hover:duration-150 border border-peach/60"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.055, boxShadow: '0 14px 34px rgba(0,0,0,0.5)', transition: { type: 'tween', duration: 0.14, ease: 'easeOut' } }}
                        whileTap={{ scale: 0.985, transition: { type: 'tween', duration: 0.1, ease: 'easeOut' } }}
                        transition={{ type: "spring", stiffness: 360, damping: 16 }}

                        viewport={{ once: false, amount: 0.2 }}
                        >
                        {/* Left: Image / Carousel */}
                        <Carousel
                          images={(project.images && project.images.length > 0) ? project.images : [project.img]}
                          alt={project.title}
                        />

                        {/* Right: Content */}
                        <div className='flex flex-col justify-between flex-1 min-w-[240px]'>
                            <div className="flex flex-col gap-2">
                              {project.location && (
                                <span className="self-start px-3 py-1 rounded-full bg-peach-soft/90 text-black text-sm">{project.location}</span>
                              )}
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-peach text-balance">{project.title}</h3>
                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.description}</p>

                              {/* Tags */}
                              <div className='flex flex-wrap gap-2 mt-2'>
                                {project.tags && project.tags.map((tag, i) => (
                                  <span key={i} className="px-3 py-1 rounded-full bg-peach-soft text-black text-xs border border-peach/70">{tag}</span>
                                ))}
                              </div>
                            </div>

                            {/* Buttons row */}
                            <div className='mt-3 sm:mt-4 flex gap-2 sm:gap-3 flex-wrap'>
                              {project.github && (
                                <motion.a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-black text-peach border border-peach/60 hover:bg-zinc-900 w-full sm:w-auto"
                                  whileHover={{ scale: 1.06, boxShadow: '0 10px 28px rgba(0,0,0,0.45)' }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  GitHub
                                </motion.a>
                              )}
                              {project.link && (
                                <motion.a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full bg-peach text-black border border-black/20 hover:opacity-95 w-full sm:w-auto"
                                  whileHover={{ scale: 1.06, boxShadow: '0 10px 28px rgba(0,0,0,0.45)' }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  Live
                                </motion.a>
                              )}
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