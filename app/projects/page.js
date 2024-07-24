import React from "react";
import Projects from "./components/Projects";
import MovSec from "../components/MovSec";
import Footer from "../components/Footer";
import { FaArrowDown } from "react-icons/fa";
import styles from "../components/ex_styles/glow-text.css"
import { bklprojectList } from "@/utils";
import FeaturedSession from "./components/FeaturedSession";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-zinc-900 w-full pt-36">
        <MovSec id="underconstruction">
          <div className="w-full flex flex-col items-center justify-center text-center text-white my-14 font-pixel">
            <div className="text-4xl font-semibold mb-4 py-4 -mt-8 rainbow_text_animated">
              Featured Projects
            </div>
            <div className="text-lg mb-8">
              Here is something to keep you entertained:
            </div>
            <FaArrowDown className="animate-bounce text-4xl" />
          </div>
          <FeaturedSession />
        </MovSec>

        <MovSec id="projects">
          <div className="w-full flex flex-col items-center justify-center text-center text-white font-pixel mt-2">
            <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400/80 via-yellow-500/90 to-yellow-600/80 font-semibold p-3">
            Berkeley Project Deck
            </div>
            <div className="text-lg text-white/75 font-mono w-full max-w-4xl mb-1">
            These select projects highlight my survival through Berkeley&#39;s rigorous curriculum. They required substantial effort and provided invaluable lessons. Please note that these projects are close-sourced to maintain academic honesty.
            </div>{" "}
          </div>
          <Projects projects={bklprojectList} />
        </MovSec>

        <Footer />
      </main>
    </>
  );
}
