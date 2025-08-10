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
    <section id="skills" className="p-10 flex flex-col items-center ">
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-orange-200 w-fit p-3 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Skills</motion.h2>

      <motion.div className='flex flex-wrap justify-center gap-10 mb-8'>
        { categories.map((category,index) =>{
          return (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-lg font-bebas transition-colors duration-300 font-bold tracking-widest
              text-xl 
              ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-orange-300'}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 , duration: 0.2 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" , delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {category}
            </motion.button>
          )
        })}
      </motion.div>

      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.filter(skill => activeCategory === "all" || skill.type.includes(activeCategory)).map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-2 bg-orange-200
            hover:bg-orange-400  hover:-translate-y-0.5 transition-all
            rounded-lg shadow-lg hover:shadow-xl  duration-300 "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src={skill.colored} alt={skill.title} className="w-10 h-10 mb-2" />
            <h3 className="text-lg font-semibold text-center ">{skill.title}</h3>
          </motion.div>
        ))} 
      </motion.div>

    </section>
  )
}

export default Skills