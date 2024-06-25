"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Image from "next/image";
import styles from "./ex_styles/Navbar.module.css";


const navLinks = [
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Skills",
    path: "/#skills",
  },
  {
    route: true,
    title: "Experience",
    path: "./experience",
  },
  {
    route: true,
    title: "Projects",
    path: "./projects",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
  {
    route: true,
    title: "Guestbook",
    path: "./guestbook",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
 //making sure if forgot to close toggle the expanded list auto go back
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaQueryChange = (e) => {
      setIsLargeScreen(e.matches);
    };

    setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [navbarOpen]);
  return (
    <nav  className="fixed top-0 left-0 w-full bg-zinc-900 z-50 lg:border-b lg:border-gray-400">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-1 mt-2 mb-0">
        <Link href={"/"} className="text-xl text-white font-semibold lg:ml-10">
          <Image
            src="/images/logo.png"
            alt="LOGO"
            className={`${styles.blurEffect} lg:ml-24`}
            width={60}
            height={60}
          ></Image>
        </Link>
        <div className="mobile-menu block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block lg:w-auto" id="navbar">
          <ul className="flex p-4 lg:p-0 lg:flex-row lg:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              link.route ? (
                <li key={index}>
                  <Link href={link.path} key={link.title} className="text-[#d7d8d8] font-pixel hover:text-gray-600">
                    <div className="mt-2">{link.title}</div>
                  </Link>
                </li>
              ) : (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              )
            ))}
          
          </ul>
        </div>
      </div>
      {navbarOpen && !isLargeScreen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
