"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {skills} from '@/utils/skills'

const Skills = () => {
  const categories = [
    "all",
    "Frontend",
    "Backend",
    "Languages",
    "Tools"
  ];
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="w-full px-4 sm:px-6 lg:px-10 py-10 flex flex-col items-center min-h-screen mt-5">
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-peach text-black w-fit p-3 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Skills</motion.h2>

      <motion.div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 max-w-4xl w-full'>
        { categories.map((category,index) =>{
          return (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-lg font-bebas transition-colors duration-300 font-bold tracking-widest
              text-xl 
              ${activeCategory === category ? 'bg-peach text-black shadow-lg' : 'bg-peach-soft text-[#3b2f1e] hover:bg-peach'}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.06, boxShadow: '0 10px 28px rgba(0,0,0,0.35)' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {category}
            </motion.button>
          )
        })}
      </motion.div>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 max-w-5xl w-full">
        {skills.filter(skill => activeCategory === "all" || skill.type.includes(activeCategory)).map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-3 bg-peach-soft text-black border border-peach/70
            hover:bg-peach transition-all
            rounded-xl shadow-lg hover:shadow-xl duration-300 "
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.06, boxShadow: '0 10px 30px rgba(0,0,0,0.45)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.04 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={skill.colored} alt={skill.title} className="w-10 h-10 mb-2" />
            <h3 className="text-lg font-semibold text-center text-black">{skill.title}</h3>
          </motion.div>
        ))} 
      </motion.div>

    </section>
  )
}

export default Skills