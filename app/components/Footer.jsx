"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";
import styles from "./ex_styles/Navbar.module.css";



const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"} className="text-5xl text-white font-semibold md:ml-10">
          <Image
            src="/images/logo.png"
            alt="LOGO"
            className={`${styles.blurEffect}`}
            width={50}
            height={70}
          ></Image>
        </Link>
        <p className="text-slate-700">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
