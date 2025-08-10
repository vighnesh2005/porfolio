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
    <section id='education' className='flex flex-col items-center p-10 w-full min-h-screen'>
      <motion.h2 className="text-4xl font-bold text-center mb-8 font-rock tracking-widest
      bg-orange-200 w-fit p-4  rounded-2xl "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 , ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >Contact</motion.h2>

      <div className='flex flex-wrap gap-4 w-full py-5 justify-around '>
        <motion.div className='flex flex-col gap-4 p-6 bg-black rounded-lg shadow-lg
            text-white border-2 border-orange-200 md:w-1/3 w-full
        '
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 , ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <h3 className='text-2xl font-bold mb-4 text-center text-amber-400'>Get in Touch</h3>

            <input type="text" placeholder='Name'
                className='p-2 text-white border-[2px] border-orange-200 rounded-md
                focus:outline-none focus:border-orange-400 transition-all duration-300 ease-in-out
                focus:bg-white focus:text-black'
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            
            <input type="email" placeholder='Email'  
                className='p-2 text-white border-[2px] border-orange-200 rounded-md
                focus:outline-none focus:border-orange-400 transition-all duration-300 ease-in-out
                focus:bg-white focus:text-black'
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            
            <textarea
                placeholder="Message"
                rows={4}
                className="p-2 text-white border-2 border-orange-200 rounded-md
                            focus:outline-none focus:border-orange-400 transition-all duration-300 ease-in-out
                            focus:bg-white focus:text-black resize-none"
                value={formData.message}
                onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
            />

            <button
                className='p-2 text-white border-[2px] border-orange-200 rounded-md
                hover:bg-white hover:text-black transition-all duration-300 ease-in-out'
                onClick={handleSubmit}
            >Send Email</button>
        </motion.div> 
        
        <motion.div className='p-4 lg:w-1/3 w-full flex flex-col gap-4'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 , ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <motion.a
                href="tel:+918309877916"
                className="bg-black text-white p-4 rounded-lg shadow-lg border-2 border-orange-200 w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 , ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}

                >
                📞 Contact Me via Phone No
            </motion.a>
            <motion.div
                className="bg-black text-white p-4 rounded-lg shadow-lg border-2 border-orange-200 w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 , ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                 <h1 className='text-2xl font-bold text-orange-400 p-4'>My Socials</h1>
                 <motion.div
                           className="flex px-4 gap-5 items-center flex-wrap"
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
                                     hover:scale-105 hover:-translate-y-0.5 hover:rounded-xl hover:text-white border-2 border-orange-200
                                     transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-orange-200"
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