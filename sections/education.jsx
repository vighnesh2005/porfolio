"use client";
import React, { useLayoutEffect, useRef } from "react";
import { education } from "@/utils/skills.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current;

      const getScrollAmount = () => -(cards.scrollWidth - window.innerWidth);

      const tween = gsap.to(cards, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${cards.scrollWidth}`,
        pin: true,
        pinSpacing: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      id="education"
      className="relative h-screen overflow-hidden bg-black section-black z-30"
    >
      <div
        ref={sectionRef}
        className="flex h-full w-fit items-center px-12 md:px-24 gap-12 md:gap-24 will-change-transform"
      >

        {/* Title Card */}
        <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex flex-col justify-center relative">
          <h2 className="text-7xl md:text-9xl font-bebas text-[#FFFCE1] tracking-tighter leading-none relative z-10">
            EDUCATION <br />
            <span className="text-gray-500">JOURNEY</span>
          </h2>
          <p className="mt-8 text-xl text-gray-400 font-tinos italic max-w-md relative z-10">
            My academic path and the milestones that shaped my technical expertise.
          </p>

          {/* Connecting Line Start */}
          <div className="absolute top-1/2 right-[-6rem] md:right-[-12rem] w-24 md:w-48 h-[2px] bg-[#FFFCE1]/20"></div>
        </div>

        {/* Education Cards */}
        {education.map((edu, index) => (
          <div key={index} className="relative flex items-center">
            {/* Connecting Line (Before) */}
            <div className="absolute top-1/2 left-[-3rem] md:left-[-6rem] w-12 md:w-24 h-[2px] bg-[#FFFCE1]/20"></div>

            <div
              className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] flex flex-col md:flex-row gap-8 md:gap-12 items-center bg-neutral-900/50 border border-[#FFFCE1]/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative z-10 hover:border-[#FFFCE1]/30 transition-colors duration-300"
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-1 rounded-full border border-[#FFFCE1]/30 text-[#FFFCE1] font-mono text-sm uppercase tracking-widest">
                    {edu.duration}
                  </span>
                  <div className="h-[1px] flex-1 bg-[#FFFCE1]/20"></div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bebas text-[#FFFCE1] leading-none">
                  {edu.title}
                </h3>
                <h4 className="text-2xl font-tinos text-gray-400 italic">
                  {edu.institution}
                </h4>
                <p className="text-gray-300 font-sans text-lg leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {edu.image && (
                <div className="w-full md:w-64 h-48 md:h-64 relative flex-shrink-0 rounded-2xl overflow-hidden border border-[#FFFCE1]/10 bg-[#FFFCE1]/5 p-4">
                  <img
                    src={edu.image}
                    alt={edu.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Connecting Line (After) - Only if not last */}
            {index < education.length - 1 && (
              <div className="absolute top-1/2 right-[-3rem] md:right-[-6rem] w-12 md:w-24 h-[2px] bg-[#FFFCE1]/20"></div>
            )}
          </div>
        ))}

        {/* End Spacer */}
        <div className="w-[50vw] flex-shrink-0"></div>
      </div>
    </section>
  );
};

export default Education;