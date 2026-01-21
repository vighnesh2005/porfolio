"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-[#FFFCE1]">
      <Link href="#home" className="text-2xl font-climate tracking-tighter hover:scale-105 transition-transform">
        VP
      </Link>

      <div className="hidden md:flex gap-8 font-bebas text-xl tracking-wide">
        <Link href="#projects" className="hover:underline decoration-2 underline-offset-4">Projects</Link>
        <Link href="#skills" className="hover:underline decoration-2 underline-offset-4">Skills</Link>
        <Link href="#education" className="hover:underline decoration-2 underline-offset-4">Education</Link>
        <Link href="#contact" className="hover:underline decoration-2 underline-offset-4">Contact</Link>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 border border-white rounded-full font-bebas text-lg hover:bg-white hover:text-black transition-colors duration-300"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
