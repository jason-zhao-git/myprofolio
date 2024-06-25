import React from 'react'
import Experience from "../components/Experience";
import MovSec from "../components/MovSec"; 
import Footer from "../components/Footer";

export default function Home() {
    // Added pt-16 to the main element to add top padding, ensuring that the Hero section is not blocked by the fixed Navbar.
    return (
      <>
        
        <main className="flex min-h-screen flex-col bg-zinc-900 w-full pt-36">
  
  
          <MovSec id="experiences">
            <Experience />
          </MovSec>

          <Footer />
        </main>
      </>
    );
  }
  