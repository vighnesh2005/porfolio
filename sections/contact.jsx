"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { useState} from 'react'
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
    <section id='contact' className='flex flex-col items-center w-full min-h-screen px-4 sm:px-6 lg:px-10 py-10'>
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-peach text-black w-fit p-4  rounded-2xl "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Contact</motion.h2>

      <div className='flex flex-col lg:flex-row gap-8 w-full py-5 justify-between max-w-6xl mx-auto'>
        <motion.div className='flex flex-col gap-4 p-6 bg-black rounded-2xl shadow-lg
            text-white border border-peach/60 lg:w-1/2 w-full
        '
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.8 , ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <h3 className='text-2xl font-bold mb-4 text-center text-peach'>Get in Touch</h3>

            <input type="text" placeholder='Name'
                className='p-2 text-white border-[2px] border-peach rounded-md
                focus:outline-none focus:border-peach transition-all duration-300 ease-in-out
                focus:bg-white focus:text-black'
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            
            <input type="email" placeholder='Email'  
                className='p-2 text-white border-[2px] border-peach rounded-md
                focus:outline-none focus:border-peach transition-all duration-300 ease-in-out
                focus:bg-white focus:text-black'
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            
            <textarea
                placeholder="Message"
                rows={4}
                className="p-2 text-white border-2 border-peach rounded-md
                            focus:outline-none focus:border-peach transition-all duration-300 ease-in-out
                            focus:bg-white focus:text-black resize-none"
                value={formData.message}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
            />

            <button
                className='p-2 text-black bg-peach border border-black/20 rounded-md
                hover:opacity-95 transition-all duration-300 ease-in-out'
                onClick={handleSubmit}
            >Send Email</button>
        </motion.div> 
        
        <motion.div className='p-4 lg:w-1/2 w-full flex flex-col gap-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 , ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <motion.a
                href="tel:+918309877916"
                className="bg-black text-white p-4 rounded-lg shadow-lg border-2 border-peach/60 w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06, boxShadow: '0 10px 28px rgba(0,0,0,0.5)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
            >
                📞 Contact Me Via Phone No
            </motion.a>
            <motion.div
                className="bg-black text-white p-4 rounded-lg shadow-lg border-2 border-peach/60 w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.06, boxShadow: '0 10px 28px rgba(0,0,0,0.5)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
            >
                 <h1 className='text-2xl font-bold text-peach p-4'>My Socials</h1>
                 <motion.div
                           className="flex px-4 gap-5 items-center flex-wrap"
                           initial={{ opacity: 0, y: 50 }}
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
                                 className="text-peach bg-black p-2 h-12 w-12 rounded-lg
                                     hover:scale-105 hover:rounded-xl border-2 border-peach/60
                                     transition-all duration-300 ease-in-out"
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