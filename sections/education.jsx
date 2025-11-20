"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { education } from '@/utils/skills.js';

const Education = () => {
  return (
    <section id='education' className='flex flex-col items-center w-full min-h-screen px-4 sm:px-6 lg:px-10 py-10'>
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-peach text-black w-fit p-4  rounded-2xl "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Education</motion.h2>
      
      <motion.div className='w-full max-w-6xl mx-auto mt-10 flex flex-col items-center gap-8 p-4'>
        {
          education.map((edu, index) => {
            return (
              <motion.div
                key={index}
                className='transform-gpu bg-black/60 backdrop-blur-lg p-3 sm:p-5 md:p-7 rounded-2xl shadow-lg w-full flex flex-col sm:flex-row
                hover:shadow-md transition-all duration-150 border border-peach/60
                gap-3 sm:gap-5 md:gap-8 '
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.055, boxShadow: '0 14px 34px rgba(0,0,0,0.5)', transition: { type: 'tween', duration: 0.14, ease: 'easeOut' } }}
                whileTap={{ scale: 0.985, transition: { type: 'tween', duration: 0.1, ease: 'easeOut' } }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <img src={edu.image} alt={edu.title} className='w-full h-40 xs:h-48 sm:h-56 md:h-60 sm:max-w-[320px] object-cover mb-3 sm:mb-0 border-2 border-peach/60 rounded-2xl' />
                <div className='flex flex-col gap-2 flex-1 min-w-[220px]'>
                <h3 className='text-2xl sm:text-3xl font-semibold text-peach'>{edu.title}</h3>
                <p className='text-gray-300 text-sm sm:text-base'>{edu.institution}</p>
                <p className='text-gray-400 text-sm sm:text-base'>{edu.duration}</p>
                <p className='text-gray-300 mt-2 leading-relaxed text-sm sm:text-base'>{edu.description}</p> 
                </div>
              </motion.div>
            )
          })
        }
      </motion.div>
    </section>
  )
}

export default Education