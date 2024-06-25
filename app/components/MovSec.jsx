"use client"
import React from "react";
import { motion } from "framer-motion";

const MovSec = ({ id, children }) => {
  return (
    <div id={id} className="container mx-auto px-12 py-4">
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MovSec;