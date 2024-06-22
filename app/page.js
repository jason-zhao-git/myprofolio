"use client";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Techstack from "./components/Techstack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { motion} from "framer-motion";

const MovSec = ({id, children }) => {
  return (
    <container id={id} class="container mx-auto px-12 py-4">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        {children}
      </motion.div>
    </container>
  );
};

export default function Home() {
  //Added pt-16 to the main element to add top padding, ensuring that the Hero section is not blocked by the fixed Navbar.
  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 w-full pt-36">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <Hero />
      </div>

      <MovSec id="about">
        <AboutMe />
      </MovSec>

      <MovSec id="experience">
        <Experience />
      </MovSec>

      <MovSec id="skills">
        <Techstack />
      </MovSec>

      <MovSec id="projects">
        <Projects />
      </MovSec>

      <MovSec id="contact">
        <EmailSection />
      </MovSec>

      <Footer />
    </main>
  );
}
