"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Box, FormControlLabel, Checkbox } from "@mui/material";

const EmailSection = () => {
  const [gbook, setGbook] = useState(false);
  const handle = () => {
    setGbook(!gbook);
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative font-pixel">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">Let's Connect</h5>
        <div className="text-[#ADB7BE] text-md mb-4 max-w-md text-indent-4">
          I’m actively seeking new opportunities, particularly in software
          engineering. Whether you have a job to fill, a question, or just want
          to say hello, I’ll do my best to respond promptly. <br></br>
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-teal-300 to-green-400">
            Don’t hesitate to leave a message in the guestbook!
          </div>
        </div>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/jason-zhao-git">
            <Image src={"images/github-icon.svg"} width={70} height={70} />
          </Link>
          <Link href="https://www.linkedin.com/in/jingqiao-zhao/">
            <Image src={"images/linkedin-icon.svg"} width={70} height={70} />
          </Link>
        </div>
      </div>
      <div>
        <form>
          <div className="mb-6 flex">
            <div className="mr-8">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 font-mono"
                placeholder="Jason Zhao"
                required
              />
            </div>

            <div className="ml-8">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 font-mono"
                placeholder="jacob@google.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 font-mono"
              placeholder="Just say hi"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 h-52 font-mono"
              placeholder="Let's talk about..."
            />
          </div>

          <div className="mb-6 text-white">
            <Box>
              <FormControlLabel
                label="Show my message in the guestbook."
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                    checked={gbook}
                    onChange={handle}
                  />
                }
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "14px",
                    color: "white",
                  },
                }}
              />
            </Box>

            <div></div>
            <div className="text-gray-400 text-sm font-mono">
              Your name, message, and submission date will appear in the
              Guestbook.
            </div>
          </div>

          <div className="relative p-8 mb-6 rounded-md">
            <button
              type="submit"
              className="text-sm bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-3 rounded-sm absolute bottom-0 right-0 flex items-center"
            >
              <Image
                src="/images/send.svg"
                width={20}
                height={20}
                alt="Send Icon"
              />
              <span className="ml-2 mt-2">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
