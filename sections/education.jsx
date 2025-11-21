"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { education } from '@/utils/skills.js';

const Education = () => {
  return (
    <section id='education' className='flex flex-col items-center w-full min-h-screen px-4 sm:px-6 lg:px-10 py-20 relative'>

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#F5D04C] tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Education
        </h2>
        <div className="h-1 w-24 bg-[#F5D04C] mx-auto rounded-full shadow-[0_0_10px_#F5D04C]"></div>
      </motion.div>

      <div className='w-full max-w-5xl mx-auto relative'>
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[#F5D04C]/30 transform md:-translate-x-1/2 hidden md:block"></div>

        <div className='flex flex-col gap-12'>
          {
            education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className={`bg-[#1B2440]/60 backdrop-blur-md p-6 md:p-8 rounded-sm border border-[#F5D04C]/20 shadow-xl relative group
                     hover:border-[#F5D04C]/50 transition-all duration-300
                     ${isEven ? 'md:text-left' : 'md:text-right'}`}>

                      {/* Connector Dot (Desktop) */}
                      <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#F5D04C] rounded-full shadow-[0_0_10px_#F5D04C] hidden md:block
                        ${isEven ? '-right-[42px]' : '-left-[42px]'}`}></div>

                      <h3 className='text-2xl font-cinzel font-bold text-[#F5D04C] mb-2'>{edu.title}</h3>
                      <h4 className='text-xl text-[#F2E8C9] font-medium mb-1'>{edu.institution}</h4>
                      <span className='inline-block px-3 py-1 bg-[#4B6CB7]/20 text-[#F2E8C9] text-xs tracking-widest border border-[#4B6CB7]/30 rounded-full mb-4 font-cinzel'>
                        {edu.duration}
                      </span>
                      <p className='text-[#F2E8C9]/80 text-sm leading-relaxed font-sans'>
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Image/Icon (Optional - if education object has image) */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-center">
                    {edu.image && (
                      <div className="relative w-full max-w-[300px] aspect-video overflow-hidden rounded-sm border-2 border-[#c5a059] shadow-lg group bg-white">
                        <img
                          src={edu.image}
                          alt={edu.title}
                          className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110'
                        />
                        <div className="absolute inset-0 bg-[#0B1026]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                      </div>
                    )}
                  </div>

                </motion.div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Education