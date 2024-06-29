"use client";
import React, { useState } from "react";
import ProjectCard from "./proj/ProjectCard.jsx";
import ProjectTag from "./proj/ProjectTag.jsx";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styles from "../exstyles/hidscroll.css";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
];

const Projectsold = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className="font-pixel p-10">
      <h2 className="text-5xl font-bold text-center text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-16">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="AI/ML"
          onClick={handleTagChange}
          isSelected={tag == "AI/ML"}
        />
      </div>

      <div className="relative flex items-center">
      <div className="absolute left-0 z-10">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
      </div>
      <div
        id="slider"
        className="flex overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide space-x-4 mx-10"
        style={{ width: 'calc(100% - 80px)' }} // Adjust this width based on your requirements
      >
        {filteredProjects.map((project) => (
          <div key={project.id} className="inline-block w-96"> {/* Adjust width as needed */}
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </div>
        ))}
      </div>
      <div className="absolute right-0 z-10">
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
      
    </section>
  );
};

export default Projectsold;
