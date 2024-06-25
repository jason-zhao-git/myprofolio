// pages/guestbook.js
import React from "react";
import MovSec from "../../components/MovSec";
import Link from "next/link";

const messages = [
  { name: "Ohm Sharma", date: "last month", message: "Awesome website!" },
  {
    name: "Max",
    date: "2 months ago",
    message:
      "Hey! Just stumbled across your saaaaaaaate and wanted to say hi. Really cool stuff you've got here! Catch you later! wanted to say hi. Really cool stuff you've got here! Catch you later!",
  },
  {
    name: "n/a",
    date: "2 months ago",
    message: "i think you have good chat...",
  },
  {
    name: "Ella Grayson",
    date: "2 months ago",
    message: "console.log('Hello world')",
  },
  { name: "Peter", date: "3 months ago", message: "👍" },
  {
    name: "Stephen Hawking",
    date: "5 months ago",
    message:
      "I love this website! Jeff sent it my way and I had to take a look.",
  },
  { name: "Unknown", date: "5 months ago", message: "Who's there?" },
  { name: "Jokester", date: "5 months ago", message: "Knock knock?" },
  { name: "Jeff Epstein", date: "6 months ago", message: "I love this guy" },
  {
    name: "Test",
    date: "6 months ago",
    message: `<script>alert("Hello\nHow are you?");</script>`,
  },
  {
    name: "Matthew Kwong",
    date: "6 months ago",
    message: "Hello world! 👋\nWelcome to my personal site.",
  },
  { name: "Ohm Sharma", date: "last month", message: "Awesome website!" },
  {
    name: "Max",
    date: "2 months ago",
    message:
      "Hey! Just stumbled across your site and wanted to say hi. Really cool stuff you've got here! Catch you later!",
  },
  {
    name: "n/a",
    date: "2 months ago",
    message: "i think you have good chat...",
  },
  {
    name: "Ella Grayson",
    date: "2 months ago",
    message: "console.log('Hello world')",
  },
  { name: "Peter", date: "3 months ago", message: "👍" },
  {
    name: "Stephen Hawking",
    date: "5 months ago",
    message:
      "I love this website! Jeff sent it my way and I had to take a look.",
  },
  { name: "Unknown", date: "5 months ago", message: "Who's there?" },
  { name: "Jokester", date: "5 months ago", message: "Knock knock?" },
  { name: "Jeff Epstein", date: "6 months ago", message: "I love this guy" },
  {
    name: "Test",
    date: "6 months ago",
    message: `<script>alert("Hello\nHow are you?");</script>`,
  },
  {
    name: "Matthew Kwong",
    date: "6 months ago",
    message: "Hello world! 👋\nWelcome to my personal site.",
  },
];
const generateInitials = (name) => {
  const initials = name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  return initials.length > 2 ? initials.slice(0, 2) : initials;
};

const Guestbook = () => {
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
        <p className="mb-2 bg-white text-blue-700 font-bold py-2 px-4 rounded hover:bg-blue-200 transition duration-300">
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
              <div className="flex-shrink-0 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-xl font-bold">
                {generateInitials(message.name)}
              </div>
              <div>
                <p className="font-semibold">
                  {message.name} · {message.date}
                </p>
                <p>{message.message}</p>
              </div>
            </div>
          </MovSec>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
