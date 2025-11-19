"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { education } from '@/utils/skills.js';

const Education = () => {
  return (
    <section id='education' className='flex flex-col items-center w-full min-h-screen px-4 sm:px-6 lg:px-10 py-10'>
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-orange-200 text-black w-fit p-4  rounded-2xl "
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
                className='bg-black/60 backdrop-blur-lg p-6 md:p-7 rounded-2xl shadow-lg w-full hover:shadow-orange-200 flex max-lg:flex-wrap
                hover:shadow-md transition-all duration-300 border border-orange-200/70
                gap-4 md:gap-6 lg:gap-8 '
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06, boxShadow: '0 10px 30px rgba(0,0,0,0.55)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <img src={edu.image} alt={edu.title} className='h-60 w-full max-w-xs object-cover mb-4 border-2 border-orange-200 rounded-2xl' />
                <div className='flex flex-col gap-2 flex-1 min-w-[220px]'>
                <h3 className='text-3xl font-semibold mb-2 text-orange-300'>{edu.title}</h3>
                <p className='text-gray-300 '>{edu.institution}</p>
                <p className='text-gray-400'>{edu.duration}</p>
                <p className='text-gray-300 mt-2'>{edu.description}</p> 
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