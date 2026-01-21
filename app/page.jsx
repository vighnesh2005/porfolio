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
      <div className="flex flex-col gap-30">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
