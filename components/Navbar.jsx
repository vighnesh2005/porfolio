'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

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
      className='sticky top-0 z-50 bg-[#0B1026]/80 backdrop-blur-md border-b border-[#F5D04C]/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4'>
        {/* Logo */}
        <motion.a
          className='font-cinzel text-xl sm:text-2xl md:text-3xl text-[#F5D04C] font-bold tracking-wider
          hover:text-[#F2E8C9] transition-all duration-300 ease-in-out drop-shadow-[0_0_5px_rgba(245,208,76,0.5)]'
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Vighnesh Prasad
        </motion.a>

        {/* Desktop Links */}
        <div className='hidden lg:flex items-center space-x-8'>
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className='text-[#F2E8C9] font-medium text-lg tracking-wide relative group font-cinzel'
              whileHover={{ scale: 1.1, color: '#F5D04C' }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5D04C] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#F5D04C]"></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-[#F5D04C] hover:text-[#F2E8C9] transition-colors duration-300'
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className='fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#1B2440] 
            backdrop-blur-xl p-8 flex flex-col items-start space-y-8 z-50 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-[#F5D04C]/30'
          >
            <div className="w-full flex justify-end mb-4">
              <button onClick={() => setIsOpen(false)} className="text-[#F5D04C]">
                <X size={32} />
              </button>
            </div>
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className='text-[#F2E8C9] text-2xl font-cinzel tracking-widest hover:text-[#F5D04C] transition-colors duration-300'
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
