"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: "https://www.linkedin.com/in/vighnesh-prasad-3ba56a2a5", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:vighneshprasad12@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/vighnesh2005", icon: Github, label: "GitHub" },
  { href: "/resume.pdf", icon: FileText, label: "Resume", download: true },
];

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Explicitly set initial state to avoid FOUC or invisible elements
      gsap.set(".hero-text-char", { opacity: 0, y: 100 });
      gsap.set(".hero-subtitle", { opacity: 0, y: 20 });
      gsap.set(".hero-social", { opacity: 0, y: 20 });

      // Reveal Animation
      tl.to(".hero-text-char", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
      })
        .to(".hero-subtitle", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        }, "-=0.5")
        .to(".hero-social", {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        }, "-=0.3");

      // Parallax Scroll Effect
      gsap.to(".hero-title-1", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        x: -100,
      });

      gsap.to(".hero-title-2", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        x: 100,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-20 overflow-hidden section-black"
    >
      {/* Massive Typography */}
      <div ref={textRef} className="z-10 flex flex-col justify-center h-full w-full">
        <h1 className="climate-crisis-regular text-[12vw] leading-[0.9] text-[#FFFCE1] uppercase tracking-wide">
          <div className="overflow-hidden hero-title-1">
            {"M. VIGHNESH".split("").map((char, i) => (
              <span key={i} className="hero-text-char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="overflow-hidden hero-title-2 text-[#FFFCE1]">
            {"PRASAD".split("").map((char, i) => (
              <span key={i} className="hero-text-char inline-block">
                {char}
              </span>
            ))}
          </div>
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-16 border-t border-[#FFFCE1]/20 pt-8 w-full">
          <h2 className="hero-subtitle font-tinos text-2xl md:text-3xl text-gray-300 italic max-w-xl leading-relaxed tracking-normal normal-case">
            Crafting digital experiences with precision, passion, and code.
          </h2>

          <div className="flex gap-8 mt-8 md:mt-0 hero-social">
            {socialLinks.map(({ href, icon: Icon, label, download }) => (
              <a
                key={label}
                href={href}
                target={download ? "_self" : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                download={download}
                className="text-[#FFFCE1] hover:text-gray-300 transition-colors duration-300 transform hover:scale-110"
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-[#FFFCE1]">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
