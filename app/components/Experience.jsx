"use client";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";

// Load Scene component dynamically to avoid SSR issues with Three.js
const EnchantTableScene = dynamic(
  () => import("../components/Three/EnchantTableScene"),
  {
    ssr: false,
  }
);

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
    </section>
  );
};

export default Experience;
