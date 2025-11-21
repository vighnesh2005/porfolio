"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import axios from "axios";


const socialLinks = [
    { href: "https://www.linkedin.com/in/vighnesh-prasad-3ba56a2a5", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:vighneshprasad12@gmail.com", icon: Mail, label: "Email" },
    { href: "https://github.com/vighnesh2005", icon: Github, label: "GitHub" },
    { href: "/resume.pdf", icon: FileText, label: "Resume", download: true }
]

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/send-email', {
                name: formData.name,
                email: formData.email,
                message: formData.message
            });

            alert(response.data.message || 'Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
        }
    };


    return (
        <section id='contact' className='flex flex-col items-center w-full min-h-screen px-4 sm:px-6 lg:px-10 py-20 relative overflow-hidden'>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5D04C]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#4B6CB7]/5 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-[#F5D04C] tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Correspondence
                </h2>
                <div className="h-1 w-24 bg-[#F5D04C] mx-auto rounded-full shadow-[0_0_10px_#F5D04C]"></div>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-12 w-full py-5 justify-between max-w-6xl mx-auto items-start'>

                {/* Contact Form - Vintage Paper / Canvas Style */}
                <motion.div className='flex flex-col gap-6 p-8 bg-[#1B2440]/40 backdrop-blur-md rounded-sm shadow-2xl
            text-[#F2E8C9] border border-[#F5D04C]/30 lg:w-1/2 w-full relative group'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5D04C] to-transparent opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5D04C] to-transparent opacity-50"></div>

                    <h3 className='text-2xl font-cinzel font-bold mb-2 text-[#F5D04C] text-center'>Send a Letter</h3>

                    <div className="space-y-6">
                        <div className="relative">
                            <input type="text" placeholder='Name'
                                className='w-full p-3 bg-transparent border-b-2 border-[#F5D04C]/30 text-[#F2E8C9] placeholder-[#F2E8C9]/40
                        focus:outline-none focus:border-[#F5D04C] transition-all duration-300 font-sans text-lg'
                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>

                        <div className="relative">
                            <input type="email" placeholder='Email'
                                className='w-full p-3 bg-transparent border-b-2 border-[#F5D04C]/30 text-[#F2E8C9] placeholder-[#F2E8C9]/40
                        focus:outline-none focus:border-[#F5D04C] transition-all duration-300 font-sans text-lg'
                                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>

                        <div className="relative">
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="w-full p-3 bg-transparent border-b-2 border-[#F5D04C]/30 text-[#F2E8C9] placeholder-[#F2E8C9]/40
                                    focus:outline-none focus:border-[#F5D04C] transition-all duration-300 font-sans text-lg resize-none"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                                }
                            />
                        </div>
                    </div>

                    <motion.button
                        className='mt-4 py-3 px-8 self-center bg-[#F5D04C] text-[#05070A] font-cinzel font-bold tracking-widest rounded-sm
                shadow-[0_0_20px_rgba(245,208,76,0.3)] hover:bg-[#c5a059] transition-all duration-300 relative overflow-hidden'
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Send Message</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300"></div>
                    </motion.button>
                </motion.div>

                {/* Contact Info & Socials */}
                <motion.div className='lg:w-1/2 w-full flex flex-col gap-8'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.a
                        href="tel:+918309877916"
                        className="group flex items-center justify-center gap-4 p-6 bg-[#1B2440]/40 backdrop-blur-sm border border-[#F5D04C]/30 rounded-sm
                hover:bg-[#1B2440]/60 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(245, 208, 76, 0.15)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="text-2xl">📞</span>
                        <span className="text-xl font-cinzel text-[#F2E8C9] group-hover:text-[#F5D04C] transition-colors">+91 83098 77916</span>
                    </motion.a>

                    <motion.div
                        className="p-8 bg-[#1B2440]/40 backdrop-blur-sm border border-[#F5D04C]/30 rounded-sm shadow-lg flex flex-col items-center"
                        whileHover={{ boxShadow: '0 0 20px rgba(245, 208, 76, 0.15)' }}
                    >
                        <h1 className='text-2xl font-cinzel font-bold text-[#F5D04C] mb-8'>Connect Elsewhere</h1>
                        <motion.div
                            className="flex gap-8 items-center flex-wrap justify-center"
                        >
                            {socialLinks.map(({ href, icon: Icon, label, download }, index) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={download ? "_self" : "_blank"}
                                    rel={download ? undefined : "noopener noreferrer"}
                                    {...(download ? { download: "" } : {})}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-[#F5D04C] blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                    <Icon
                                        className="relative text-[#F2E8C9] h-10 w-10 group-hover:text-[#F5D04C] transition-colors duration-300"
                                    />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>


        </section>
    )
}

export default Contact
