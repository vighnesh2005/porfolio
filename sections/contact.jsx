"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
    { href: "https://www.linkedin.com/in/vighnesh-prasad-3ba56a2a5", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:vighneshprasad12@gmail.com", icon: Mail, label: "Email" },
    { href: "https://github.com/vighnesh2005", icon: Github, label: "GitHub" },
    { href: "/resume.pdf", icon: FileText, label: "Resume", download: true },
];

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(".contact-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const response = await axios.post("/api/send-email", formData);
            setStatus("success");
            alert(response.data.message || "Email sent successfully");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("error");
            alert("An error occurred while sending the email.");
        }
    };

    return (
        <section
            ref={containerRef}
            id="contact"
            className="relative min-h-screen py-32 px-4 sm:px-8 md:px-16 section-black flex flex-col justify-center overflow-hidden z-20"
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left: Typography */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-7xl md:text-9xl font-bebas text-[#FFFCE1] leading-[0.8] tracking-tighter mb-8">
                        LET'S <br />
                        <span className="text-gray-500">TALK</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-tinos text-gray-400 max-w-md italic">
                        Have a project in mind? Let's build something extraordinary together.
                    </p>

                    <div className="flex gap-6 mt-12">
                        {socialLinks.map(({ href, icon: Icon, label, download }) => (
                            <a
                                key={label}
                                href={href}
                                target={download ? "_self" : "_blank"}
                                rel={download ? undefined : "noopener noreferrer"}
                                download={download}
                                className="p-4 rounded-full border border-[#FFFCE1]/20 text-[#FFFCE1] hover:bg-[#FFFCE1] hover:text-black transition-all duration-300 group"
                            >
                                <Icon size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Form */}
                <div ref={formRef} className="flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="contact-item space-y-2">
                            <label className="text-sm font-mono text-gray-500 uppercase tracking-widest">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-[#FFFCE1]/20 py-4 text-xl text-[#FFFCE1] focus:border-[#FFFCE1] focus:outline-none transition-colors"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="contact-item space-y-2">
                            <label className="text-sm font-mono text-gray-500 uppercase tracking-widest">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full bg-transparent border-b border-[#FFFCE1]/20 py-4 text-xl text-[#FFFCE1] focus:border-[#FFFCE1] focus:outline-none transition-colors"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="contact-item space-y-2">
                            <label className="text-sm font-mono text-gray-500 uppercase tracking-widest">Message</label>
                            <textarea
                                rows={4}
                                required
                                className="w-full bg-transparent border-b border-[#FFFCE1]/20 py-4 text-xl text-[#FFFCE1] focus:border-[#FFFCE1] focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="contact-item mt-8 px-8 py-4 bg-[#FFFCE1] text-black font-bebas text-2xl tracking-wide hover:bg-[#FFFCE1]/90 transition-all duration-300 flex items-center gap-3 disabled:opacity-50"
                        >
                            {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
