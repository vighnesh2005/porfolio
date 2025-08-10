import Navbar from "@/components/Navbar";
import Hero from "@/sections/hero";
import Skills from "@/sections/Skills";
import Projects from "@/sections/projects";
import Education from "@/sections/education";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <>
    <Navbar /> 
    <Hero />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}
