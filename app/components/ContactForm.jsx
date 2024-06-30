// GuestbookForm.js

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, FormControlLabel, Checkbox } from "@mui/material";

const POST_MSG_API_URL = process.env.NEXT_PUBLIC_POST_MSG_API_URL;

const ContactForm = ({ onSuccess }) => {
  const [gbook, setGbook] = useState(false);
  const handleCheckboxChange = () => {
    setGbook(!gbook);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = async (data) => {
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        onSuccess(data.name);
      } else {
        console.error("Failed to send email:", resData);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData, show_on_guestbook: gbook };

    // Call the handleEmailSubmit function
    // Check if an email address is provided before calling handleEmailSubmit
    if (formData.email) {
      await handleEmailSubmit(dataToSubmit);
    }

    // Handle the guestbook submission
    try {
      const response = await fetch(POST_MSG_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        setStatusMessage("Message submitted successfully!");
        onSuccess(formData.name);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setGbook(false);
      } else {
        setStatusMessage("Error submitting message.");
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      setStatusMessage("Error submitting message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
            className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 font-mono"
            placeholder="jacob@google.com"
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
          value={formData.subject}
          onChange={handleInputChange}
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
          value={formData.message}
          onChange={handleInputChange}
          className="bg-gray-800 border border-gray-700 placeholder-gray-400 text-gray-100 text-sm rounded-lg block w-full p-3 h-52 font-mono"
          placeholder="Let's talk about..."
          required
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
                onChange={handleCheckboxChange}
              />
            }
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "15px",
                color: "white",
              },
            }}
          />
        </Box>

        <div></div>
        <div className="text-gray-400 text-md font-mono">
          Your name, message, and submission date will appear in the Guestbook.
        </div>
        <div className="text-gray-400 text-md font-mono">
          If you just want to leave a guestbook note, email is not required.
        </div>
      </div>

      <div className="relative p-8 mb-6 mr-4 rounded-md">
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
  );
};

export default ContactForm;
