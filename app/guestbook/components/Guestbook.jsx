// pages/guestbook.js
"use client"
import React, { useEffect, useState } from "react";
import MovSec from "../../components/MovSec";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const LIST_MSG_API_URL = process.env.NEXT_PUBLIC_LIST_MSG_API_URL;


const generateInitials = (name) => {
  const initials = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  return initials.length > 2 ? initials.slice(0, 2) : initials;
};

const Guestbook = () => {
    const [messages, setMessages] = useState([{
        "date": "2024-06-26T02:24:24.324627Z",
        "name": "Jason Zhao",
        "message": "Hi everybody! Welcome to my website!"
    }]);
    //console.log(`${MSG_API_URL}`)
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        
        const response = await fetch(LIST_MSG_API_URL);
        const data = await response.json();
        setMessages(data.results);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container mx-auto px-12 py-8 flex flex-col items-center">
      <h1 className="py-4 text-3xl font-bold font-pixel text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
        Guestbook
      </h1>
      <p className="text-lg mb-8 font-mono">
        Leave a note in my guestbook. Share your thoughts, stories, or a just
        say hi!
      </p>
      <Link href="/#contact">
        <p className="mb-4 bg-white text-blue-700 font-bold py-2 px-4 rounded hover:bg-blue-200 transition duration-300">
          Leave a Note
        </p>
      </Link>
      <div className="">
        {messages.map((message, index) => (
          <MovSec>
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg flex items-center space-x-4"
            >
              <div className="flex-shrink-0 w-12 h-12 text-blue-200 bg-gray-600 rounded-full flex items-center justify-center text-xl font-bold">
                {generateInitials(message.name)}
              </div>
              <div>
                <p className="font-semibold mb-1 mr-1">
                    <span className=" text-blue-200">{message.name}</span> · {formatDistanceToNow(new Date(message.date), { addSuffix: true })}
                </p>
                <p className="mr-1 text-blue-100">{message.message}</p>
              </div>
            </div>
          </MovSec>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
