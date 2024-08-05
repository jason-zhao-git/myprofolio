"use client"
import React, { useState } from "react";
import SwiperCard from "./swiper_proj/SwiperCard";
import { Binary, TvMinimalPlay, ScanText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (index) => {
    setActiveProject(projects[index]);
  };

  const slides = projects.map(project => project.image);
  return (
    <section className="flex justify-center items-center h-full p-4">
      <div
        className="content flex flex-col md:flex-row justify-center items-center gap-4 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] backdrop-blur-lg rounded-2xl w-full max-w-4xl border border-[rgba(255,255,255,0.2)] shadow-[inset_0_0_4px_rgba(255,255,255,0.2),_0_4px_16px_rgba(0,0,0,0.1)]"
      >
        <div className="text-left p-8 md:p-10 md:ml-6 w-full md:w-1/2">
          <h2 className="text-xl font-semibold font-pixel text-gray-200 mb-2">
            {activeProject.name}
          </h2>
          <p className=" text-slate-400 mb-2 md:mb-4">
            {activeProject.description}
          </p> 
          {activeProject.tech && activeProject.tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 text-sm px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 mt-4 -mb-2">
            {activeProject.demo && (
                <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 text-blue-500 hover:bg-blue-200 hover:border-blue-200"
                  >
                    <TvMinimalPlay />
                    Demo
                  </Button>
                </a>
              )}
              {activeProject.code && (
                <a href={activeProject.code} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 text-green-600 hover:bg-green-200 hover:border-green-200"
                  >
                    <Binary />
                    Code
                  </Button>
                </a>
              )}
              {activeProject.spec && (
                <a href={activeProject.spec} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 text-purple-500 hover:bg-purple-200 hover:border-purple-200"
                  >
                    <ScanText />
                    Spec
                  </Button>
                </a>
              )}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
          <SwiperCard slides={slides} onSlideChange={handleSlideChange} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
