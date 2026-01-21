"use client";
import React, { useEffect, useRef } from "react";
import { projects } from "@/utils/skills.js";
import Carousel from "@/components/Carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Slide-in Transition for Title
      gsap.from(".projects-title", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards Staggered Reveal
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative min-h-screen py-32 px-4 sm:px-8 md:px-16 section-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="projects-title text-6xl md:text-8xl font-bebas text-[#FFFCE1] mb-24 tracking-tighter">
          SELECTED <span className="text-gray-500">PROJECTS</span>
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
            >
              {/* Project Image/Carousel */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-[#FFFCE1]/10 group-hover:border-[#FFFCE1] transition-colors duration-500 shadow-lg group-hover:shadow-2xl bg-[#FFFCE1]/5">
                <Carousel
                  images={project.images && project.images.length > 0 ? project.images : [project.img]}
                  alt={project.title}
                  className="h-full w-full"
                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[#FFFCE1] font-mono text-sm tracking-widest uppercase">
                    0{index + 1}
                  </span>
                  <div className="h-[1px] w-12 bg-[#FFFCE1]"></div>
                  {project.location && (
                    <span className="text-gray-400 font-tinos italic">
                      {project.location}
                    </span>
                  )}
                </div>

                <h3 className="text-4xl md:text-6xl font-bebas text-[#FFFCE1] group-hover:text-gray-300 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 font-tinos text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags && project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-[#FFFCE1]/20 text-gray-400 rounded-full group-hover:border-[#FFFCE1] group-hover:text-[#FFFCE1] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#FFFCE1] hover:text-gray-300 transition-colors duration-300 font-bebas text-xl tracking-wide"
                    >
                      <Github size={20} />
                      GITHUB
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#FFFCE1] hover:text-gray-300 transition-colors duration-300 font-bebas text-xl tracking-wide"
                    >
                      <ExternalLink size={20} />
                      LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;