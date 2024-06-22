import React from "react";
import styles from "./ex_styles/Navbar.module.css";

const AboutMe = () => {
  return (
    <section class="text-white text-center place-self-center font-mono grid grid-cols-1 sm:grid-cols-12 gap-4 py-12">
      <div class="col-span-1 sm:col-start-2 sm:col-span-10 mt-10 md:mt-16 text-left flex flex-col h-full place-self-center">
        <h1 class="text-5xl font-pixel font-bold text-center text-white mb-4">
          About Me
        </h1>
        <div class="text-[#ADB7BA] text-lg lg:text-2xl text-center lg:text-left mb-6 mt-6 ml-10 tracking-wider leading-loose">
          <p className="py-1">
            <span style={{ fontWeight: "bold" }}>&gt;</span> A{" "}
            <span class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">
              Computer Science Student:
            </span>{" "}
            Currently studying at{" "}
            <a
              href="https://www.blockeley.com/"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 hover:underline"
            >
              UC Berkeley
            </a>
            , I am dual majoring in Computer Science and Molecular & Cell
            Biology. I have delved deep into a diverse range of courses
            including{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-300">
              OOP, Data Structures, Algorithms, Data Science, AI/ML, Database,
              Cybersecurity
            </span>{" "}
            and more.
          </p>

          <p className="py-2">
            <span style={{ fontWeight: "bold" }}>&gt;</span> A{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400 font-bold">
              Software Enthusiast:
            </span>{" "}
            I thrive on the thrill of solving complex problems and transforming
            challenges into innovative solutions.
          </p>
          <p className=" py-1">
            <span style={{ fontWeight: "bold" }}>&gt;</span> A{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400 font-bold">
              Nomad At Heart:
            </span>{" "}
            With{" "}
            <a
              href="https://en.wikipedia.org/wiki/Inner_Mongolia"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 hover:underline"
            >
              Mongolian
            </a>{" "}
            roots, I carry the spirit of the nomad in my veins. This cultural
            heritage instills in me a unique perspective on{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-300">
              adaptability, resilience, and exploration
            </span>
            . It fuels my passion for discovering new horizons, both in
            technology and in life.
          </p>
          <p className=" py-1">
            <span style={{ fontWeight: "bold" }}>&gt;</span> A{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400 font-bold">
              Collaborative Team Player:
            </span>{" "}
            I excel in both team projects and independent tasks, bringing
            cooperation and leadership. My internships and research have honed
            my ability to adapt, collaborate, and contribute effectively to
            group objectives.
          </p>
          <p className="py-2">
            <span style={{ fontWeight: "bold" }}>&gt;</span> A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400 font-bold">
              Lifelong Learner:
            </span>{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-300">Embracing discomfort and uncertainty</span>, I continuously seek
            opportunities to learn and master new technologies.
          </p>

          <p className="py-2">
            <span style={{ fontWeight: "bold" }}>&gt;</span> A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400 font-bold">
            Global Citizen:
            </span>{" "}
            Having lived and studied around the world, I bring a global perspective to my work and interactions. This diverse exposure has gifted me an <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-300">open and inclusive mindset</span> to appreciate different cultures and viewpoints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
