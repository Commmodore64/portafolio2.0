import localFont from "next/font/local";

//components
import Navbar from "@/components/Header";
import About from "@/components/about";
import Home from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

const myFont = localFont({ src: "../../fonts/brigendsexpanded-nrek1.otf" });

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default HomePage
