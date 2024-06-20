"use client";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { useScroll } from "@react-three/drei";

// Load Scene component dynamically to avoid SSR issues with Three.js
const EnchantTableScene = dynamic(
  () => import("../components/Three/EnchantTableScene"),
  {
    ssr: false,
  }
);

const WorkFormat = ({ position, company, link, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between">
      <div>
        <h3 className=" capitalize font-bold text-xl">
          {position}&nbsp;{" "}
          <a href={link} target="_blank" className=" capitalize text-pink-500">
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-md text-white/65">
          {time} | {address}
        </span>
        <p className="w-full font-mono text-lg">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const [tableopen, settableOpen] = useState(false);

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
      <div className="w-[75%] mx-auto relative">
    
    <div className="absolute left-8 top-0 w-[-4px] h-full bg-white border-2 origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <WorkFormat
            position="Software Engineer Intern"
            company="Google"
            link="/"
            time="2022-Now"
            address="SF, CA"
            work="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />

          <WorkFormat
            position="Software Engineer Intern"
            company="Google"
            link="/"
            time="2022-Now"
            address="SF, CA"
            work="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </ul>
      </div>
    </section>
  );
};

export default Experience;
