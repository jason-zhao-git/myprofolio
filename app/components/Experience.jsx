"use client";
import React, { Suspense, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll } from "framer-motion";
import Expicon from "./Expicon";
import styles from "./ex_styles/glow-text.css";

const educationData = [
  {
    school: "University of California, Berkeley",
    type: "Bachelor of Arts: Computer Science",
    time: "August 2020 - Dec 2024",
    gpa: "3.7",
    courses: [
      "OOP",
      "Data Structure",
      "Data Science",
      "Algorithm",
      "Artificial Intelligence",
      "Machine Learning",
      "Database",
      "Operating System",
      "Cybersecurity",
      "Probability Theory",
      "Optimization",
    ],
  },
  {
    school: "University of California, Berkeley",
    type: "Bachelor of Arts: Molecular and Cell Biology",
    time: "August 2020 - Dec 2024",
    gpa: "3.7",
    courses: [
      "Organic Chemistry",
      "Proteomics",
      "Bacterial Pathogenesis",
      "Biophysical Chemistry",
      "Genetics",
    ],
  },
  {
    school: "Johns Hopkins University",
    type: "Summer School, Bioengineering and Biomedical Engineering",
    time: "May 2019 - Aug 2019",
    gpa: "4.0",
    courses: ["General Molecular Biology", "Protein Engineering and Biochemistry"], // Add specific courses if needed
  },
];

const workExperienceData = [
  {
    position: "Student Research Assistant",
    company: "University of California, San Francisco",
    link: "https://www.ucsf.edu",
    time: "Mar 2023 - Sep 2023",
    address: "San Francisco Bay Area · On-site",
    work: `• Implemented automated solutions for GPU job management using bash scripts, significantly accelerating the process and streamlining robust data analysis including RMSD, Trajectory, and pairwise distance calculations to validate every simulation.
             • Boosted computational efficiency through innovative approaches, leading to quicker processing times, streamlined workflows, and better resource management.
             • Utilized advanced statistical techniques to develop Markov state models, capturing complex system dynamics and identifying key transitions and states of intrinsically Disordered Proteins.
             • Contributed to new simulation methodologies by integrating FRET data, enhancing model precision and providing insights into complex condensates.`,
    codeLinks: [
      ["MD Simulation", "https://github.com/jason-zhao-git/H1_Prota_Dimer.git"],
      [
        "GPU job Management",
        "https://github.com/jason-zhao-git/prodSimGPU.git",
      ],
      ["deepmsm", "https://github.com/markovmodel/deepmsm.git"],
    ],
  },
  {
    position: "Student Web Developer",
    company: "Lawrence Berkeley National Laboratory",
    link: "https://www.lbl.gov",
    time: "Aug 2022 - Jan 2023",
    address: "Berkeley, California, United States · Hybrid",
    work: `• Contributed to the object-oriented design and implementation of a retrosynthesis algorithm using Python, generating corresponding PKS enzyme complex sequences for target molecules.
             • Helped incorporate the latest retrosynthesis algorithm and upgrade the ClusterCAD website’s backend modules using Python on Django.
             • The retrosynthesis algorithm has been adopted by multiple LBNL research teams for their web-based retrosynthesis tools.`,
    codeLinks: [["clusterCAD", "https://clustercad.jbei.org/"]],
  },
  {
    position: "Software Engineer Intern",
    company: "Geopogo",
    link: "https://www.geopogo.com",
    time: "May 2022 - Sep 2022",
    address: "Berkeley, California, United States · Hybrid",
    work: `• Designed a Unity-based prototype for the MagicLeap console, enabling seamless interaction with 3D objects using a singular console interface.
             • Developed a raycasting system with a "gravity gun" feature, enhancing architects’ interaction with AR objects, inspired by the game Gmod.
             • Enhanced the user experience, leading to the system's adoption by multiple architects for showcasing their 3D models.`,
    codeLinks: [
      [
        "Raycasting Prototype",
        "https://github.com/jason-zhao-git/unity-raycasting",
      ],
    ],
  },
  {
    position: "Student Researcher",
    company: "Institute of Computing Technology, Chinese Academy of Sciences",
    link: "http://english.ict.cas.cn/",
    time: "Jun 2019 - Aug 2019",
    address: "Beijing, China · Remote",
    work: `• Mass Spectrometry Comparison System: Created a system to identify the best-matched peptide given an MS2 spectrum.
             • Greatly enhanced the efficiency of peptide identification in my research group by implementing a pipeline that seamlessly maps experimental data to an existing database.`,
  },
];
// Load Scene component dynamically to avoid SSR issues with Three.js
const EnchantTableScene = dynamic(
  () => import("../components/Three/EnchantTableScene"),
  {
    ssr: false,
  }
);

const WorkFormat = ({
  position,
  company,
  link,
  time,
  address,
  work,
  codeLinks,
}) => {
  const ref = useRef(null);
  const workItems = work.split("•").filter((item) => item.trim() !== "");
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between"
    >
      <Expicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-xl">
          {position}&nbsp;{" "}
          <a href={link} target="_blank" className=" capitalize text-teal-500 text-glow">
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-md text-white/65">
          {time} | {address}
        </span>
        <div className="w-full font-mono text-xl text-white/85">
          {workItems.map((item, index) => (
            <p key={index} className="mb-2">
              • {item.trim()}
            </p>
          ))}
        </div>
        {codeLinks && (
          <div className="w-full flex items-center space-x-2 mt-2">
            <div className="font-mono font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">
              Links:
            </div>
            <div className="flex flex-wrap space-x-4">
              {codeLinks.map(([name, url], index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline mt-3"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </li>
  );
};

const EduFormat = ({ school, type, time, gpa, courses }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between"
    >
      <Expicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className=" capitalize font-bold text-xl">{type}</h3>
        <span className="capitalize font-md text-white/65">
          <div className="font-bold text-transparent bg-clip-text text-lg bg-gradient-to-br from-orange-400 via-yellow-500 to-yellow-600 text-yellow-glow">
            {school}
          </div>
        </span>
        <span className="block font-md text-white/65">
          {time} | GPA: {gpa}
        </span>
        <p className="w-full font-mono text-xl text-white/85">
          Courses: {courses.join(", ")}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const [tableopen, settableOpen] = useState(true);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ["start 70%", "center start"],
  });

  return (
    <section className="font-pixel p-10">
      {/* Title on top */}
      <div>
        <h1 className="text-5xl font-bold text-center text-white mb-20">
          Experience & Education
        </h1>
      </div>

      {/* Scene in the middle 6 columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-3"></div>
        <div className="col-span-1 md:col-span-6 ">
          <div className="h-72">
            <EnchantTableScene open={tableopen} setOpen={settableOpen} />
          </div>
        </div>
        <div className="col-span-1 md:col-span-3"></div>
      </div>

      {/* The timeline part of resume */}
      <div>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top"
        />
        <h3 className="text-3xl font-bold text-center text-white mb-20">
          Experience
        </h3>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {workExperienceData.map((experience, index) => (
            <WorkFormat
              key={index}
              position={experience.position}
              company={experience.company}
              link={experience.link}
              time={experience.time}
              address={experience.address}
              work={experience.work}
              codeLinks={experience.codeLinks}
            />
          ))}
        </ul>
        <h3 className="text-3xl font-bold text-center text-white mt-20 mb-20">
          Education
        </h3>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {educationData.map((edu, index) => (
            <EduFormat
              key={index}
              school={edu.school}
              type={edu.type}
              time={edu.time}
              gpa={edu.gpa}
              courses={edu.courses}
            />
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
};

export default Experience;
