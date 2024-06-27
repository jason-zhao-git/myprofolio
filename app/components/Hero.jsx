"use client";
import React from "react";
import Image from "next/image";

//typing animation
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className=" font-pixel grid grid-cols-1 sm:grid-cols-12 gap-4">
        {/*everything about avatar image */}
        <div className="col-span-4 place-self-center mr-8 mt-4 lg:mt-0 ml-12 transform translate-x-8 sm:translate-x-0">
          <div className="rounded-full bg-[#343434] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/ava1-r.png"
              alt="Avatar"
              width={370}
              height={390}
            ></Image>
          </div>
          {/*Hire Me and download Resume buttons */}
          <div className="mt-12 flex flex-col items-center lg:flex-center lg:items-center lg:flex-row lg:justify-center">
            <a
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-2 lg:mr-4 mb-4 border bg-white hover:bg-slate-300 text-slate-800 font-semibold"
              href="/Jingqiao_resume.pdf" // This path points to the resume file in the public folder
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-2">My Resume</p>
            </a>
            <button
              className="px-5 py-3 w-full sm:w-fit rounded-full mr-2 mb-4 bg-transparent hover:bg-gradient-to-br from-blue-700 via-teal-600 to-green-700 p-8 border-2 border-white text-white/90 font-semibold"
              onClick={() =>
                (window.location.href = "mailto:jingz-plz-reply@berkeley.edu")
              }
            >
              <p className="mt-2">Contact Me</p>
            </button>
          </div>
        </div>

        {/*everything about introduction*/}
        <div className="col-span-8 place-self-center mt-6 ml-6 sm:ml-12 text-center sm:text-left">
          <h1 className="text-slate-200 mb-5 font-extrabold text-4xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              className="mt-8"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jingqiao (Jason)",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Software Developer",
                3000,
                "Awkwardly Social...",
                1000,
                "Into Bioinformatics",
                1000,
              ]}
              wrapper="span"
              speed={10}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BA] text-xl lg:text-3xl mb-6 mt-6 tracking-wider leading-loose font-mono">
            “The programmer, like the poet, works only slightly removed from
            pure thought-stuff. He builds his castles in the air, from air,
            creating by exertion of the imagination.”
            <br></br>
            <br></br>
            -- Frederick P. Brooks, MMM{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
