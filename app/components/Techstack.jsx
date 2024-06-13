"use client";

import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";

// Load Scene component dynamically to avoid SSR issues with Three.js
const ChestScene = dynamic(() => import("../components/Three/ChestScene"), {
  ssr: false,
});

import Inventory from "./TechInventory/Inventory";

const skills = [
  {
    id: 0,
    name: "Python",
    tags: ["programming language", "AI/ML", "webdev"],
    src: "/skills/python.png",
  },
  {
    id: 1,
    name: "Java",
    tags: ["programming language", "webdev"],
    src: "/skills/java.png",
  },
  {
    id: 2,
    name: "C",
    tags: ["programming language", "systems programming"],
    src: "/skills/c.png",
  },
  {
    id: 3,
    name: "C++",
    tags: ["programming language", "systems programming", "game development"],
    src: "/skills/cplusplus.png",
  },
  {
    id: 4,
    name: "C#",
    tags: ["programming language", "webdev", "game development"],
    src: "/skills/csharp.png",
  },
  { id: 5, name: "SQL", tags: ["database", "webdev"], src: "/skills/sql.png" },
  {
    id: 6,
    name: "JavaScript",
    tags: ["programming language", "webdev"],
    src: "/skills/javascript.png",
  },
  {
    id: 7,
    name: "Bash",
    tags: ["scripting", "systems programming"],
    src: "/skills/bash.png",
  },
  {
    id: 8,
    name: "x86",
    tags: ["assembly language", "systems programming"],
    src: "/skills/x86.png",
  },
  {
    id: 9,
    name: "Go",
    tags: ["programming language", "systems programming", "webdev"],
    src: "/skills/go.png",
  },
  {
    id: 10,
    name: "PyTorch",
    tags: ["AI/ML", "deep learning"],
    src: "/skills/pytorch.png",
  },
  {
    id: 11,
    name: "Django",
    tags: ["web framework", "Python", "webdev"],
    src: "/skills/django.png",
  },
  {
    id: 12,
    name: "React.js",
    tags: ["JavaScript", "webdev", "frontend"],
    src: "/skills/react.png",
  },
  {
    id: 13,
    name: "Next.js",
    tags: ["JavaScript", "webdev", "frontend", "backend"],
    src: "/skills/nextjs.png",
  },
  {
    id: 14,
    name: "Tailwind CSS",
    tags: ["CSS framework", "webdev"],
    src: "/skills/tailwind.png",
  },
  {
    id: 15,
    name: "GIT",
    tags: ["version control", "webdev", "programming"],
    src: "/skills/git.png",
  },
  {
    id: 16,
    name: "MySQL",
    tags: ["database", "webdev"],
    src: "/skills/mysql.png",
  },
  {
    id: 17,
    name: "Unix/Linux",
    tags: ["operating system", "systems programming"],
    src: "/skills/unix_linux.png",
  },
  {
    id: 18,
    name: "Windows",
    tags: ["operating system", "systems programming"],
    src: "/skills/windows.png",
  },
  {
    id: 19,
    name: "AWS",
    tags: ["cloud computing", "webdev", "systems programming"],
    src: "/skills/aws.png",
  },
  {
    id: 20,
    name: "NumPy",
    tags: ["numerical computing", "arrays", "mathematics"],
    src: "/skills/numpy.png",
  },
  {
    id: 21,
    name: "Pandas",
    tags: ["data manipulation", "data analysis", "data structures"],
    src: "/skills/pandas.png",
  },
  {
    id: 22,
    name: "Matplotlib",
    tags: ["data visualization", "plotting", "graphs"],
    src: "/skills/matplotlib.png",
  },
  {
    id: 23,
    name: "Seaborn",
    tags: ["data visualization", "statistical graphics", "matplotlib"],
    src: "/skills/seaborn.png",
  },
  {
    id: 24,
    name: "PostgreSQL",
    tags: ["database", "webdev"],
    src: "/skills/mysql.png",
  },
  {
    id: 25,
    name: "Scikit-learn",
    tags: ["machine learning", "data mining", "data analysis"],
    src: "/skills/scikit-learn.png",
  },
  {
    id: 27,
    name: "GitHub",
    tags: ["version control", "collaboration", "platform"],
    src: "/skills/github.png",
  },
  {
    id: 28,
    name: "VS Code",
    tags: ["IDE", "development environment"],
    src: "/skills/vscode.png",
  },
  {
    id: 29,
    name: "PyCharm",
    tags: ["IDE", "Python", "development environment"],
    src: "/skills/pycharm.png",
  },
  {
    id: 30,
    name: "Slack",
    tags: ["communication", "collaboration", "platform"],
    src: "/skills/slack.png",
  },
  {
    id: 31,
    name: "OpenMM",
    tags: ["bioinformatics", "molecular dynamics", "simulation"],
    src: "/skills/openmm.png",
  },
  {
    id: 32,
    name: "AMBER",
    tags: ["bioinformatics", "molecular dynamics", "simulation"],
    src: "/skills/amber.png",
  },
  {
    id: 33,
    name: "GROMACS",
    tags: ["bioinformatics", "molecular dynamics", "simulation"],
    src: "/skills/gromacs.png",
  },
  { id: 34, name: "Mandarin", tags: ["language"], src: "/skills/mandarin.png" },
  { id: 35, name: "English", tags: ["language"], src: "/skills/english.png" },
  { id: 36, name: "Japanese", tags: ["language"], src: "/skills/japanese.png" },
  {
    id: 37,
    name: "Swimming",
    tags: ["sport", "hobby"],
    src: "/skills/swimming.png",
  },
  {
    id: 38,
    name: "Archery",
    tags: ["sport", "hobby"],
    src: "/skills/archery.png",
  },
  {
    id: 39,
    name: "Minecraft",
    tags: ["gaming", "hobby"],
    src: "/skills/minecraft.png",
  },
  {
    id: 40,
    name: "Taekwondo",
    tags: ["martial arts", "sport"],
    src: "/skills/taekwondo.png",
  },
  {
    id: 41,
    name: "Baking",
    tags: ["culinary", "hobby"],
    src: "/skills/baking.png",
  },
  {
    id: 42,
    name: "Culinary Arts",
    tags: ["culinary", "hobby"],
    src: "/skills/culinary_arts.png",
  },
  {
    id: 43,
    name: "Hiking",
    tags: ["outdoor", "recreation", "hobby"],
    src: "/skills/hiking.png",
  },
  {
    id: 44,
    name: "Material UI",
    tags: ["webdev", "frontend"],
    src: "/skills/mui.png",
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
          <Inventory skills={skills} />
        </div>{" "}
      </div>
    </section>
  );
};

export default Techstack;
