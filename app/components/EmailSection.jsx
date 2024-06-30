"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";


const EmailSection = () => {
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const handleFormSuccess = (name) => {
    setUserName(name);
    setFormSubmitted(true);
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative font-pixel">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2">Let&apos;s Connect</h5>
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
        {!formSubmitted ? (
          <ContactForm onSuccess={handleFormSuccess} />
        ) : (
          <div className="flex flex-col items-center h-full">
            <Image
              src="/images/check.svg"
              width={80}
              height={80}
              alt="Check Icon"
              className="mb-6 mt-2"
            />
            <p className="text-center text-white/80 mt-4">Message submitted successfully!</p>
            
            <p className="text-center font-mono font-semibold text-xl text-white/80 mt-4">Thank you so much for reaching out, <span className="text-green-400">{userName}</span>! I will respond promptly. A confirmation has been sent out, should you have provided your email address.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
