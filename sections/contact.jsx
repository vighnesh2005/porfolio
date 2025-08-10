"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { useState} from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
  return (
    <section id='education' className='flex flex-col items-center p-10 w-full min-h-screen'>
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-orange-200 w-fit p-4  rounded-2xl "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Contact</motion.h2>

      
    </section>
)
}

export default Contact