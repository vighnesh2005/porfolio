"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { education } from '@/utils/skills.js';

const Education = () => {
  return (
    <section id='education' className='flex flex-col items-center lg:p-10 w-full min-h-screen'>
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-orange-200 w-fit p-4  rounded-2xl "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Education</motion.h2>
      
      <motion.div className='w-full mt-10 flex flex-col items-center gap-8 p-4'>
        {
          education.map((edu, index) => {
            return (
              <motion.div
                key={index}
                className='bg-blue-950 p-6 rounded-lg shadow-lg w-full hover:shadow-orange-200 flex max-lg:flex-wrap
                hover:shadow-md hover:-translate-y-2 transition-all duration-500 border-2 border-orange-200
                gap-4 lg:gap-8 '
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <img src={edu.image} alt={edu.title} className='h-60 mb-4 border-2 border-orange-200 rounded-2xl' />
                <div className='flex flex-col gap-2 '>
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