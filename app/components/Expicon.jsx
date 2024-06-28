"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ex_styles/glow-text.css";


const Expicon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: reference,
    offset: ["center end", "center center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <figure className="absolute left-0 stroke-white">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-pink-700 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light"
          style={{ pathLength }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-pink-600"
        />
      </svg>
    </figure>
  );
};

export default Expicon;
