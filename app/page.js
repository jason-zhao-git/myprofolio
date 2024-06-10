import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Techstack from "./components/Techstack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-900 w-full">

      <Navbar />
      <container class="container mx-auto px-12 py-4">
        <Hero />
      </container>

      <container class="container mx-auto px-12 py-4" id="about"> 
        <AboutMe />
      </container>

      
      
    </main>
  );
}
