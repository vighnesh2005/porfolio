"use client";
import React, { useEffect, useRef, useState } from "react";
import { skills } from "@/utils/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Frontend", "Backend", "Languages", "Tools"];

  // Filter skills based on active category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.type.includes(activeCategory)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the container entrance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Staggered Grid Animation
      gsap.fromTo(
        ".skill-item",
        { opacity: 0, scale: 0, rotation: -15 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          stagger: {
            amount: 0.5,
            grid: "auto",
            from: "center",
          },
          ease: "back.out(1.5)",
          overwrite: "auto",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative min-h-screen py-20 px-4 sm:px-8 section-white flex flex-col items-center justify-center z-20"
    >
      <div className="max-w-6xl w-full z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-bebas text-black tracking-tighter mb-8">
            TECHNICAL <span className="text-gray-500">ARSENAL</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                    ? "bg-black text-white border-black shadow-lg scale-105"
                    : "bg-transparent text-gray-500 border-black/10 hover:border-black hover:text-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 w-full mx-auto justify-items-center">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.title}-${index}`}
              className="skill-item flex flex-col items-center justify-center gap-3 group w-24"
            >
              <div className="relative w-24 h-24 bg-white rounded-2xl border border-black/5 flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:border-black/20 transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={skill.colored}
                    alt={skill.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <span className="text-[10px] font-mono text-gray-400 group-hover:text-black uppercase tracking-wider text-center transition-colors duration-300">
                {skill.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;