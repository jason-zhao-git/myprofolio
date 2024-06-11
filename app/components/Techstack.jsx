"use client";

import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";

// Load Scene component dynamically to avoid SSR issues with Three.js
const Scene = dynamic(() => import("../components/Three/Scene"), { ssr: false });


const Techstack = () => {
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
            <Scene />
          </div>
        </div>
        <div className="col-span-1 md:col-span-3"></div>
      </div>

      {/* Inventory below the scene */}
      <div className="container mx-auto p-24">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 px-8">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white flex items-center justify-center aspect-square"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Techstack;
