import React from "react";
import styles from "./ex_styles/Navbar.module.css";

const AboutMe = () => {
  return (
    <section class="text-white text-center place-self-center font-pixel grid grid-cols-1 sm:grid-cols-12 gap-4 py-12">
      <div class="col-span-1 sm:col-start-2 sm:col-span-10 mt-10 md:mt-16 text-left flex flex-col h-full place-self-center">
        <h1 class="text-5xl font-bold text-center text-white mb-4">About Me</h1>
        <div class="text-[#ADB7BA] text-lg lg:text-2xl text-center lg:text-left mb-6 mt-6 ml-10 tracking-wider leading-loose">
          <p  className="py-1">
            &gt; A {" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">Computer Science student</span> currently studying at the <a href="https://www.blockeley.com/" class="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 hover:underline">UC
            Berkeley</a>, dual majoring in Molecular & Cell Biology. I have delved deep into a diverse range of
            courses including  <span class="text-transparent bg-clip-text bg-gradient-to-br from-pink-200 via-fuchsia-300 to-purple-300">OOP, Data Structures, Algorithms, Data Science, AI/ML, Database, Cybersecurity</span> and more.
          </p>

          <p  className="py-2">
          &gt; A{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">
              software enthusiast
            </span>{" "}
            who enjoys turning challenges
            into opportunities.
          </p>
          <p  className=" py-1">
          &gt; A{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">
              collaborative team player
            </span>{" "}
            with the adaptability to thrive both independently and in group
            settings.
          </p>
          <p className="py-2">
          &gt; A{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">
              quick learner
            </span>{" "}
            who embraces discomfort while mastering new tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
