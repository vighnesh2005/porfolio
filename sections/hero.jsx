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
    <section id="home" className="flex flex-wrap items-center justify-around h-screen md:p-10">
      
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
            width={400}
            height={400}
            className="object-cover rounded-2xl shadow-lg h-[400px] w-[400px]"
            />
      </motion.div>

      {/* Text + Socials */}
      <motion.div 
        className="flex flex-col items-start justify-center h-full p-10 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1 
        
          className="font-rock text-4xl text-black bg-orange-200 px-8 py-10 rounded-xl tracking-wider"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          M. Vighnesh Prasad
        </motion.h1>

        <motion.h2 
          className="text-4xl text-white mb-10 font-bold tracking-wide font-rock px-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
            viewport={{ once: false, amount: 0.2 }}
        >
          Full Stack Developer
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex px-8 gap-5 items-center"
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
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 * index }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Icon 
                className="text-orange-200 bg-black p-2 h-12 w-12 rounded-lg
                    hover:scale-105 hover:-translate-y-0.5 hover:rounded-xl hover:text-white
                    transition-all duration-300 ease-in-out"
                />
            </motion.a>
            ))}
            <motion.a href="#contact" className="text-orange-200 bg-black p-3 rounded-2xl
            hover:scale-105 hover:-translate-y-0.5 hover:rounded-xl transition-all duration-300 ease-in-out
            hover:text-white text-lg font-semibold tracking-wider"
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
