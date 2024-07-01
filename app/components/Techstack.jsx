"use client";

import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ex_styles/Inventory.css"

// Load Scene component dynamically to avoid SSR issues with Three.js
const ChestScene = dynamic(() => import("../components/Three/ChestScene"), {
  ssr: false,
});

import Inventory from "./TechInventory/Inventory";

const skills = [
  {
    name: "React.js",
    categories: ["Frontend"],
    src: "/skills/react.svg",
    proficiency: 3,
  },
  {
    name: "Next.js",
    categories: ["Frontend", "Backend"],
    src: "/skills/nextjs.svg",
    proficiency: 4,
  },
  {
    name: "HTML",
    categories: ["Frontend"],
    src: "/skills/html.svg",
    proficiency: 5,
  },
  {
    name: "CSS",
    categories: ["Frontend"],
    src: "/skills/css.svg",
    proficiency: 5,
  },
  {
    name: "Tailwind CSS",
    categories: ["Frontend"],
    src: "/skills/tailwind.svg",
    proficiency: 3,
  },
  {
    name: "Material UI",
    categories: ["Frontend"],
    src: "/skills/mui.svg",
    proficiency: 2,
  },
  {
    name: "Python",
    categories: ["AI/ML", "Programming Language", "Backend","Bioinformatics"],
    src: "/skills/python.svg",
    proficiency: 5,
  },
  {
    name: "Java",
    categories: ["Programming Language", "Backend"],
    src: "/skills/java.svg",
    proficiency: 5,
  },
  {
    name: "C",
    categories: ["Programming Language", "Backend"],
    src: "/skills/c.svg",
    proficiency: 4,
  },
  {
    name: "C++",
    categories: ["Programming Language"],
    src: "/skills/cplusplus.svg",
    proficiency: 1,
  },
  {
    name: "C#",
    categories: ["Programming Language"],
    src: "/skills/csharp.svg",
    proficiency: 1,
  },
  {
    name: "SQL",
    categories: ["Database", "Backend"],
    src: "/skills/sql.svg",
    proficiency: 5,
  },
  {
    name: "Java Script",
    categories: ["Programming Language", "Frontend"],
    src: "/skills/javascript.svg",
    proficiency: 3,
  },
  {
    name: "Bash",
    categories: ["Backend", "Programming Language"],
    src: "/skills/bash.svg",
    proficiency: 3,
  },
  {
    name: "x86",
    categories: ["Programming Language"],
    src: "/skills/x86.svg",
    proficiency: 1,
  },
  {
    name: "Go",
    categories: ["Programming Language", "Backend"],
    src: "/skills/go.svg",
    proficiency: 3,
  },
  {
    name: "Django",
    categories: ["Backend"],
    src: "/skills/django.svg",
    proficiency: 4,
  },
  {
    name: "Django REST API",
    categories: ["Backend"],
    src: "/skills/DRF.svg",
    proficiency: 2,
  },
  {
    name: "Prisma",
    categories: ["Backend"],
    src: "/skills/prisma.svg",
    proficiency: 1,
  },
  {
    name: "Postgre SQL",
    categories: ["Database", "Backend"],
    src: "/skills/postgresql.svg",
    proficiency: 2,
  },
  {
    name: "MySQL",
    categories: ["Database", "Backend"],
    src: "/skills/mysql.svg",
    proficiency: 4,
  },
  {
    name: "AWS",
    categories: ["Tools & Platforms", "Backend"],
    src: "/skills/aws.svg",
    proficiency: 2,
  },
  {
    name: "GIT",
    categories: ["Tools & Platforms"],
    src: "/skills/git.svg",
    proficiency: 4,
  },
  {
    name: "GitHub",
    categories: ["Tools & Platforms"],
    src: "/skills/github.svg",
    proficiency: 4,
  },
  {
    name: "VS Code",
    categories: ["Tools & Platforms"],
    src: "/skills/vscode.svg",
    proficiency: 5,
  },
  {
    name: "PyCharm",
    categories: ["Tools & Platforms"],
    src: "/skills/pycharm.svg",
    proficiency: 2,
  },
  {
    name: "Slack",
    categories: ["Tools & Platforms"],
    src: "/skills/slack.svg",
    proficiency: 5,
  },
  {
    name: "Unix/ Linux",
    categories: ["Tools & Platforms"],
    src: "/skills/linux.svg",
    proficiency: 4,
  },
  {
    name: "PyTorch",
    categories: ["AI/ML","Bioinformatics"],
    src: "/skills/pytorch.svg",
    proficiency: 3,
  },
  {
    name: "Scikit-learn",
    categories: ["AI/ML", "Data Science","Bioinformatics"],
    src: "/skills/scikit-learn.svg",
    proficiency: 2,
  },
  {
    name: "NumPy",
    categories: ["Data Science","Bioinformatics", "AI/ML"],
    src: "/skills/numpy.svg",
    proficiency: 4,
  },
  {
    name: "Pandas",
    categories: ["Data Science","Bioinformatics", "AI/ML"],
    src: "/skills/pandas.svg",
    proficiency: 4,
  },
  {
    name: "Matplot lib",
    categories: ["Data Science","Bioinformatics"],
    src: "/skills/matplotlib.svg",
    proficiency: 3,
  },
  {
    name: "Seaborn",
    categories: ["Data Science","Bioinformatics"],
    src: "/skills/seaborn.svg",
    proficiency: 2,
  },
  {
    name: "OpenMM",
    categories: ["Bioinformatics"],
    src: "/skills/openmm.svg",
    proficiency: 3,
  },
  {
    name: "GROMACS",
    categories: ["Bioinformatics"],
    src: "/skills/gromacs.svg",
    proficiency: 3,
  },
  {
    name: "Mandarin",
    categories: ["Human Language"],
    src: "/skills/mandarin.svg",
    proficiency: 5,
  },
  {
    name: "English",
    categories: ["Human Language"],
    src: "/skills/english.svg",
    proficiency: 5,
  },
  {
    name: "Japanese",
    categories: ["Human Language"],
    src: "/skills/japanese.svg",
    proficiency: 2,
  },
  {
    name: "Swimming",
    categories: ["Sports/Hobbies"],
    src: "/skills/swimming.svg",
    proficiency: 2,
  },
  {
    name: "Anime",
    categories: ["Sports/Hobbies"],
    src: "/skills/anime.svg",
    proficiency: 5,
  },
  {
    name: "Minecraft",
    categories: ["Sports/Hobbies"],
    src: "/skills/minecraft.svg",
    proficiency: 5,
  },
  {
    name: "Martial Art",
    categories: ["Sports/Hobbies"],
    src: "/skills/taekwondo.svg",
    proficiency: 3,
  },
  {
    name: "Baking",
    categories: ["Sports/Hobbies"],
    src: "/skills/baking.svg",
    proficiency: 4,
  },
  {
    name: "Culinary Arts",
    categories: ["Sports/Hobbies"],
    src: "/skills/culinary_arts.svg",
    proficiency: 3,
  },
  {
    name: "Hiking",
    categories: ["Sports/Hobbies"],
    src: "/skills/hiking.svg",
    proficiency: 3,
  },
  {
    name: "Vocal Performance",
    categories: ["Sports/Hobbies"],
    src: "/skills/singing.svg",
    proficiency: 4,
  },
  {
    name: "Agile",
    categories: ["Soft Skills"],
    src: "/skills/agile.svg",
    proficiency: 4,
  },
  {
    name: "Team Collaboration",
    categories: ["Soft Skills"],
    src: "/skills/collaboration.svg",
    proficiency: 4,
  },
  {
    name: "Creative Problem Solving",
    categories: ["Soft Skills"],
    src: "/skills/problem_solving.svg",
    proficiency: 4,
  },
  {
    name: "Time Management",
    categories: ["Soft Skills"],
    src: "/skills/time_management.svg",
    proficiency: 4,
  },
];




const Techstack = () => {
  const [chestopen, setchestOpen] = useState(false);
  return (
    <section className="font-pixel p-10">
      {/* Title on top */}
      <div>
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          My Skills Inventory
        </h1>
      </div>

      {/* Scene in the middle 6 columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-3"></div>
        <div className="col-span-1 md:col-span-6 ">
          <div className="h-72">
            <ChestScene open={chestopen} setOpen={setchestOpen} />
          </div>
        </div>
        <div className="col-span-1 md:col-span-3"></div>
      </div>

      {/* Inventory below the scene */}
      <div className="container mx-auto p-5 grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-12">
        <div className="col-span-1 lg:col-span-8 lg:col-start-2 xl:col-span-8 xl:col-start-3">
        <div className={`inventory ${chestopen ? 'open' : 'closed'}`}>
            <Inventory skills={skills} />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Techstack;
