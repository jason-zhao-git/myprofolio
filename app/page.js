"use client"
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Techstack from "./components/Techstack";
import Experience from "./components/Experience";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import MovSec from "./components/MovSec"; 

export default function Home() {
  // Added pt-16 to the main element to add top padding, ensuring that the Hero section is not blocked by the fixed Navbar.
  return (
    <>
      
      <main className="flex min-h-screen flex-col bg-zinc-900 w-full pt-36">

        
        <MovSec id="hero">
          <Hero />
          </MovSec>
      

        <MovSec id="about">
          <AboutMe />
        </MovSec>

        

        <MovSec id="skills">
          <Techstack />
        </MovSec>

        {/*<MovSec id="projects">
          <Projects />
        </MovSec>*/}

        <MovSec id="contact">
          <EmailSection />
        </MovSec>

        <Footer />
      </main>
    </>
  );
}
