"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const socialLinks = [
  { href: "https://www.linkedin.com/in/vighnesh-prasad-3ba56a2a5", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:vighneshprasad12@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/vighnesh2005", icon: Github, label: "GitHub" },
  { href: "/resume.pdf", icon: FileText, label: "Resume", download: true }
]

  const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-screen 
        px-4 md:px-8 lg:px-10 pt-24 pb-16 md:pt-32 gap-10"
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-red-800/40 blur-3xl" />
      </div>
      
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: false , amount: 0.2 }}
      >
        <Image
            src="/vighnesh1.jpg"
            alt="Hero Image"
            width={800}
            height={800}
            className="object-cover rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] h-[600px] w-[600px]
            sm:h-[340px] sm:w-[340px] md:h-[500px] md:w-[500px] max-md:mt-10"
            />
      </motion.div>

      {/* Text + Socials */}
      <motion.div 
        className="flex flex-col items-start justify-center h-full p-6 md:p-8 lg:p-10 space-y-6 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1 
        
          className="font-rock text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black bg-orange-200 
          px-6 sm:px-8 py-6 sm:py-8 rounded-xl tracking-wider leading-tight"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          M. Vighnesh Prasad
        </motion.h1>

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl text-black mb-8 font-bold tracking-wide font-rock 
          bg-orange-100/90 rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
            viewport={{ once: false, amount: 0.2 }}
        >
          Full Stack Developer
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex px-2 sm:px-4 gap-4 sm:gap-5 items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: false, amount: 0.2 }}
        >
          {socialLinks.map(({ href, icon: Icon, label, download },index) => (
            <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={download ? "_self" : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                {...(download ? { download: "" } : {})}
                initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                whileHover={{ scale: 1.07, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                whileTap={{ scale: 0.98 }}
            >
                <Icon 
                className="text-orange-200 bg-black p-2 h-14 w-14 rounded-lg
                    hover:scale-105 hover:shadow-md hover:shadow-orange-200"
                />
            </motion.a>
            ))}
            <motion.a href="#contact" className="text-orange-200 bg-black p-3 rounded-2xl
            hover:scale-105 hover:rounded-xl transition-all duration-300 ease-in-out
            hover:text-white text-lg font-semibold tracking-wider hover:shadow-md hover:shadow-orange-200"
            initial={{ opacity: 0, y:20 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: false, amount: 0.2 , delay: 1 }}
            >Contact</motion.a>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
