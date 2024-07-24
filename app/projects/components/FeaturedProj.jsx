"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

import { Binary, TvMinimalPlay, ScanText } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedProj = ({
  name,
  description,
  tag,
  image,
  tech,
  demo,
  code,
  spec,
}) => {
  return (
    <Tilt>
      <div className="container h-full w-full bg-white bg-opacity-10 rounded-3xl shadow-lg border-2 border-opacity-50 border-white backdrop-filter backdrop-blur-lg backdrop-saturate-100 flex p-6">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="w-full md:w-1/3 lg:p-6 z-10">
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="rounded-lg shadow-lg hover:shadow-xl hover:shadow-yellow-500 transition-shadow duration-300"
            />
          </div>
          <div className="text-left p-8 md:p-10 mt-3 w-full md:w-2/3">
            <h2 className="text-xl font-semibold font-pixel text-gray-200 mb-2">
              {name}
            </h2>
            <div className="text-slate-400 mb-2 md:mb-4">
              {description}
            </div>
            {tech && tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((techItem, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-200 text-sm px-2 py-1 rounded-md"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-4 mb-6">
              {demo && (
                <Button
                  variant="outline"
                  as="a"
                  href={demo}
                  className="flex items-center gap-1 text-blue-500 hover:bg-blue-200 hover:border-blue-200"
                >
                  <Binary />
                  Demo
                </Button>
              )}
              {code && (
                <Button
                  variant="outline"
                  as="a"
                  href={code}
                  className="flex items-center gap-1 text-green-600 hover:bg-green-200 hover:border-green-200"
                >
                  <TvMinimalPlay />
                  Code
                </Button>
              )}
              {spec && (
                <Button
                  variant="outline"
                  as="a"
                  href={spec}
                  className="flex items-center gap-1 text-purple-500 hover:bg-purple-200 hover:border-purple-200"
                >
                  <ScanText />
                  Spec
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default FeaturedProj;
