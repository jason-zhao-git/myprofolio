import React from "react";
import Projects from "./components/Projects";
import MovSec from "../components/MovSec";
import Footer from "../components/Footer";
import { FaArrowDown } from "react-icons/fa";

const projectList = [
  {
    name: "Project One",
    description:
      "This is a brief description of Project One. It includes some key features and highlights what this project is about.",
    tag: "Web Development",
    image: "/images/projects/1.png",
    tech: ["React", "Tailwind CSS", "Next.js"],
    demo: "#",
    code: "#",
  },
  {
    name: "Project Two",
    description:
      "This is a brief description of Project Two. It includes some key features and highlights what this project is about.",
    tag: "Machine Learning",
    image: "/images/projects/1.png",
    tech: ["Python", "TensorFlow", "Keras"],
    code: "#",
  },
  {
    name: "Project Three",
    description:
      "This is a brief description of Project Three. It includes some key features and highlights what this project is about.",
    tag: "Mobile Development",
    image: "/images/projects/1.png",
    tech: ["Flutter", "Dart"],
    demo: "#",
    spec: "#",
  },
];

const bklprojectList = [
  {
    name: "Gitlet",
    description:
      "Implemented a version control system that mimics some of the features of the popular system Git (add, commit, push, merge, etc.) through serialization. The project focuses intensively on data structures like HashMap and file manipulation.",
    tag: "Web Development",
    image: "/images/projects/gitlet.png",
    tech: ["Java", "Version Control", "HashMap", "Serialization"],
    course: "CS 61B: Data Structures",
  },
  {
    name: "SimpleDB Database",
    description:
      "Implemented a fully functional database with features such as B+ tree indexed data, Joins, Query optimizer, Queuing, Multigranular locking, and Recovery.",
    tag: "Database Systems",
    image: "/images/projects/simpledb.png",
    tech: [
      "Java",
      "Database",
      "B+ Tree",
      "Join/Query Optimization",
      "Concurrency",
    ],
    course: "CS 186: Introduction to Database Systems",
  },
  {
    name: "Pacman AI",
    description:
      "Implemented different versions of Pacman agents AI each using distinctive strategies, such as expectimax search, Q-learning, and Particle Filtering based on Bayes Net inference.",
    tag: "Artificial Intelligence",
    image: "/images/projects/pacman.png",
    tech: [
      "Python",
      "AI",
      "Search",
      "Reinforcement Learning",
      "Bayesian Inference",
    ],
    course: "CS 188: Introduction to Artificial Intelligence",
  },
  {
    name: "2D World Engine",
    description:
      "Created an engine for generating explorable 2D tile-based worlds. The project involved the entire development cycle from ideation to presentation, focusing on software engineering principles and handling complex codebases.",
    tag: "Software Engineering",
    image: "/images/projects/2dworld.png",
    tech: [
      "Java",
      "Software Engineering",
      "Procedural generation",
      "Pseudorandomness",
    ],
    course: "CS 61B: Data Structures",
  },
  {
    name: "Secure File Sharing System",
    description:
      "Designed a secure file sharing system using encryption techniques to ensure data confidentiality and integrity. The system includes user authentication, file storage and retrieval, and secure file sharing and revocation on an Unrestricted Access Database.",
    tag: "Security",
    image: "/images/projects/securefilesharing.png",
    tech: ["Java", "Encryption", "Hashing", "RSA", "AES"],
    course: "CS 161: Computer Security",
  },
  {
    name: "Web Server Breach",
    description:
      "Exploited a poorly designed website to understand common web vulnerabilities including Cross-Site Request Forgery (CSRF), SQL Injection, Cross-Site Scripting (XSS), and more. The project involved identifying and exploiting these vulnerabilities, and then implementing fixes to secure the website.",
    tag: "Web Security",
    image: "/images/projects/webserverbreach.png",
    tech: ["SQL", "Cybersecurity", "SQL Injection", "XSS", "CSRF", "IDOR"],
    course: "CS 161: Computer Security",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-zinc-900 w-full pt-36">
        <MovSec id="underconstruction">
          <div className="w-full flex flex-col items-center justify-center text-center text-white my-20 font-pixel">
            <div className="text-4xl font-semibold mb-4">
              This page is under construction
            </div>
            <div className="text-md mb-8">
              But here is something to keep you entertained:
            </div>
            <FaArrowDown className="animate-bounce text-4xl" />
          </div>
        </MovSec>

        <MovSec id="projects">
          <div className="w-full flex flex-col items-center justify-center text-center text-white font-pixel">
            <div className="text-2xl text-white/85 font-semibold mb-3">
            Berkeley Project Deck
            </div>
            <div className="text-lg text-white/75 font-mono w-full max-w-4xl mb-1">
            These select projects highlight my survival through Berkeley's rigorous curriculum. They required substantial effort and provided invaluable lessons. Please note that these projects are close-sourced to maintain academic honesty.
            </div>{" "}
          </div>
          <Projects projects={bklprojectList} />
        </MovSec>

        <Footer />
      </main>
    </>
  );
}
