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
      className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-screen flex-wrap
        px-6 md:px-12 lg:px-20 xl:px-24 pt-6 pb-16 gap-12 lg:gap-16 bg-[#0B1026]"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Swirling nebula effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4B6CB7] via-transparent to-transparent blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F5D04C] via-transparent to-transparent blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Image Section - Museum Frame Style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        className="relative group order-2 md:order-1 flex-shrink-0"
      >
        <div className="relative p-4 bg-gradient-to-br from-[#2a2a2a] to-[#05070A] rounded-sm shadow-2xl 
            rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-in-out border border-[#F5D04C]/20">
          <div className="absolute inset-0 border border-[#F5D04C]/10 m-1 pointer-events-none"></div>
          <Image
            src="/vighnesh1.jpg"
            alt="Hero Image"
            width={1000}
            height={1000}
            className="object-cover h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] xl:h-[550px] xl:w-[550px]
                filter sepia-[0.1] contrast-110 group-hover:sepia-0 transition-all duration-500 shadow-inner"
          />
        </div>
      </motion.div>

      {/* Text + Socials */}
      <motion.div
        className="flex flex-col items-start justify-center h-full space-y-8 md:space-y-10 max-w-4xl z-10 order-1 md:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="space-y-4">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="h-[2px] w-16 bg-gradient-to-r from-[#F5D04C] to-transparent"></span>
            <h2 className="text-[#F5D04C] text-base sm:text-lg font-cinzel tracking-[0.3em] uppercase font-bold">
              The Portfolio of
            </h2>
          </motion.div>

          <motion.h1
            className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#F2E8C9] 
            leading-[1.05] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            M. Vighnesh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D04C] via-[#e0c055] to-[#F5D04C] bg-[length:200%_auto] animate-gradient">
              Prasad
            </span>
          </motion.h1>
        </div>

        <motion.div
          className="relative pl-8 border-l-4 border-[#F5D04C]/40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#F2E8C9]/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed font-sans max-w-2xl">
            A <span className="font-semibold text-[#F5D04C]">Full Stack Developer</span> blending engineering precision with artistic vision.
            Building digital experiences that are as functional as they are beautiful.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap gap-6 pt-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="px-8 sm:px-10 py-3 sm:py-4 bg-[#F5D04C] text-[#05070A] font-cinzel font-bold tracking-widest uppercase text-sm sm:text-base rounded-sm
              hover:bg-[#d4b038] transition-all duration-300 shadow-[0_0_20px_rgba(245,208,76,0.3)]
              hover:shadow-[0_0_30px_rgba(245,208,76,0.5)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          <div className="flex gap-5">
            {socialLinks.map(({ href, icon: Icon, label, download }, index) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={download ? "_self" : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                {...(download ? { download: "" } : {})}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 border border-[#F5D04C]/30 rounded-full hover:border-[#F5D04C] hover:bg-[#F5D04C]/10 transition-all duration-300 group"
              >
                <Icon
                  className="text-[#F2E8C9] h-5 w-5 sm:h-6 sm:w-6 group-hover:text-[#F5D04C] transition-colors duration-300"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
