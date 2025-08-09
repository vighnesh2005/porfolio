'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]
  return (
    <motion.nav
      className='flex justify-between items-center p-4 z-50 sticky top-0'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
        <a className='font-great text-2xl text-orange-200 font-bold tracking-widest
        hover:text-white transition-all duration-300 ease-in-out 
        hover:scale-105 hover:-translate-y-0.5
        '
              href="#home">
            Vighnesh Prasad
        </a>
        <div className='flex'>
          {links.map((link, index) => (
            <a key={index} href={link.href} className='mx-4 text-orange-200 font-semibold
            hover:text-white transition-all duration-500 ease-in-out  
            text-lg 
            font-bebas tracking-widest
            hover:scale-110 hover:-translate-y-0.5
            after:content-[""] after:absolute after:h-0.5 after:w-0 after:bg-[#FFE5E5]
            after:bottom-0 after:left-0 after:rounded-full
            hover:after:w-full
            after:transition-all after:duration-300 after:ease-in-out
            '>
              {link.name}
            </a>
          ))}
        </div>
    </motion.nav>
)
}

export default Navbar;