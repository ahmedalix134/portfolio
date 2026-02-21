"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "../header/Header";
import { BadgeAlert } from "lucide-react";
// import profile from "@/assets/images/profile.png";
// import { ReactLogo, TailwindLogo, TypeScriptLogo } from "@/assets/icons";

export default function About() {
  return (
    <section
      id="About"
      className="w-full bg-[#060606] text-gray-200 py-5 px-5 flex flex-col items-center content-merge"
    >
      <Header
        name="About"
        icon={BadgeAlert}
        color="#060606"
        backgroundColor="white"
      />

      <div className="flex flex-col md:flex-row items-center gap-10 mt-3 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-6"
        >
          <p>
            I am a Front-End Developer passionate about crafting interactive and
            scalable web applications. I specialize in React, Next.js, and
            building sleek, modern UI experiences. With over 3 years of
            experience in building responsive and dynamic front-end
            applications, I enjoy turning complex problems into clean, elegant
            UI solutions.
          </p>

          <div className="flex justify-center flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 cursor-default transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-5 mt-4">
            <a
              href="/Ahmed_Ali_Resumee.pdf"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:scale-105 transition-transform duration-300"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
