"use client";
import { motion } from 'framer-motion';
import { projects } from '@/utils/skills.js';
import Carousel from '@/components/Carousel';

const Projects = () => {
  return (
    <section id="projects" className="w-full px-4 sm:px-6 lg:px-10 mt-10 flex flex-col items-center min-h-screen py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#F5D04C]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#4B6CB7]/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#F5D04C] tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Featured Projects
        </h2>
        <div className="h-1 w-24 bg-[#F5D04C] mx-auto rounded-full shadow-[0_0_10px_#F5D04C]"></div>
      </motion.div>

      <motion.div className="mt-10 w-full max-w-7xl mx-auto space-y-20">
        {
          projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                className="group relative flex flex-col lg:flex-row bg-[#1B2440]/60 backdrop-blur-md rounded-sm shadow-2xl 
                        border border-[#2a2a2a] overflow-hidden min-h-[400px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.1 }}
              >

                {/* Left: Image / Carousel */}
                <div className="w-full lg:w-[55%] relative h-[300px] lg:h-auto bg-black">
                  <Carousel
                    images={(project.images && project.images.length > 0) ? project.images : [project.img]}
                    alt={project.title}
                    className="h-full"
                    imageClassName="h-full object-contain bg-black"
                  />
                </div>

                {/* Right: Content */}
                <div className='flex flex-col justify-center flex-1 p-8 md:p-10 bg-[#0B1026]/95 relative border-t lg:border-t-0 lg:border-l border-[#F5D04C]/20'>

                  <div className="flex flex-col gap-4">
                    {project.location && (
                      <span className="self-start px-3 py-1 rounded-full bg-[#4B6CB7]/20 text-[#F2E8C9] text-xs tracking-widest border border-[#4B6CB7]/30 font-cinzel uppercase">
                        {project.location}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#F5D04C] text-balance drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-[#F2E8C9]/80 text-sm sm:text-base leading-relaxed font-sans border-l-2 border-[#F5D04C]/30 pl-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mt-4'>
                      {project.tags && project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#F5D04C]/10 text-[#F5D04C] text-xs border border-[#F5D04C]/20 shadow-[0_0_5px_rgba(245,208,76,0.1)] font-cinzel">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons row */}
                  <div className='mt-8 flex gap-4 flex-wrap'>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-sm bg-transparent text-[#F2E8C9] border border-[#F2E8C9]/50 hover:bg-[#F2E8C9] hover:text-[#05070A] transition-all duration-300 font-cinzel font-bold tracking-wider uppercase text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-2 rounded-sm bg-[#F5D04C] text-[#05070A] border border-[#F5D04C] hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-300 font-cinzel font-bold tracking-wider shadow-[0_0_15px_rgba(245,208,76,0.3)] uppercase text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live View
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