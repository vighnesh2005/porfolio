'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null) // Ref for the mobile menu

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <motion.nav
      className='flex justify-between items-center px-4 md:px-8 py-4 z-50 sticky top-0 bg-black/10 backdrop-blur-md'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Logo */}
      <a
        className='font-great text-lg sm:text-xl md:text-2xl text-orange-200 font-bold tracking-widest
        hover:text-white transition-all duration-300 ease-in-out 
        hover:scale-105 hover:-translate-y-0.5'
        href="#home"
      >
        Vighnesh Prasad
      </a>

      {/* Desktop Links */}
      <div className='hidden md:flex'>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className='mx-3 lg:mx-4 text-orange-200 font-semibold
            hover:text-white transition-all duration-500 ease-in-out  
            text-base lg:text-lg font-bebas tracking-widest
            hover:scale-110 hover:-translate-y-0.5
            relative after:content-[""] after:absolute after:h-0.5 after:w-0 after:bg-[#FFE5E5]
            after:bottom-0 after:left-0 after:rounded-full
            hover:after:w-full after:transition-all after:duration-300 after:ease-in-out'
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-orange-200 hover:text-white transition-all duration-300'
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? "" : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef} // Attach ref
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='fixed top-0 right-0 w-3/4 sm:w-2/3 h-screen bg-black/90 backdrop-blur-md p-6 flex flex-col items-start space-y-6 z-50 shadow-lg'
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07 }}
                className='text-orange-200 text-lg sm:text-xl font-bebas tracking-widest hover:text-white transition-all duration-300'
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
