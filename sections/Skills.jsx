"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/utils/skills'

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
    <section id="skills" className="w-full px-4 sm:px-6 lg:px-10 py-20 flex flex-col items-center min-h-screen relative">

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#F5D04C] tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Technical Skills
        </h2>
        <div className="h-1 w-24 bg-[#F5D04C] mx-auto rounded-full shadow-[0_0_10px_#F5D04C]"></div>
      </motion.div>

      <motion.div className='flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 max-w-4xl w-full'>
        {categories.map((category, index) => {
          return (
            <motion.button
              key={index}
              className={`px-6 py-2 rounded-full font-cinzel font-bold tracking-wider transition-all duration-300 border
              ${activeCategory === category
                  ? 'bg-[#F5D04C] text-[#05070A] border-[#F5D04C] shadow-[0_0_15px_rgba(245,208,76,0.4)]'
                  : 'bg-transparent text-[#F2E8C9] border-[#F5D04C]/30 hover:border-[#F5D04C] hover:text-[#F5D04C]'}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          )
        })}
      </motion.div>

      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl w-full">
        {skills.filter(skill => activeCategory === "all" || skill.type.includes(activeCategory)).map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-[#1B2440]/40 backdrop-blur-sm border border-[#F5D04C]/20
            rounded-xl hover:bg-[#1B2440]/60 hover:border-[#F5D04C]/50 transition-all duration-300 group relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.02 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#F5D04C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 p-2 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
              <img src={skill.colored} alt={skill.title} className="w-10 h-10 object-contain" />
            </div>
            <h3 className="relative z-10 text-sm sm:text-base font-semibold text-[#F2E8C9] text-center group-hover:text-[#F5D04C] transition-colors">
              {skill.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}

export default Skills