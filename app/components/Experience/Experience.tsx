import React from "react";
import "./Experience.css";
import { Blocks } from "lucide-react";
import Header from "../header/Header";
import ProjectCard from "../projectCard/ProjectCard";
import learning from "@/assets/images/Screenshot 2026-02-21 123620.png";
import Dashboard from "@/assets/images/3195377.jpg";
import Ecommerce from "@/assets/images/ecommerce.png";

export const Experience = () => {
  return (
    <section id="Experience" className="Experience">
      <Header
        name="Experience"
        icon={Blocks}
        color="white"
        backgroundColor="#060606"
      />
      <div className="content-Experience">
        <ProjectCard
          title="Educational Platform"
          image={learning}
          challenge="Building a scalable online learning platform capable of organizing multiple courses and video lectures while maintaining high performance and smooth navigation."
          solution="Designed a structured course system with categorized content, implemented optimized media loading strategies, and built a clean, content-focused UI to enhance the student learning experience."
          tech="Next.js, React, TypeScript, Tailwind CSS, API Integration"
          result="Delivered a fast, organized, and user-friendly learning platform with scalable architecture ready to support future content expansion."
        />
        <ProjectCard
          title="Fullstack E-commerce Platform"
          image={Ecommerce}
          challenge="Creating a seamless online shopping experience that is fast, responsive, and easy to navigate."
          solution="Built a fullstack platform using Next.js and TypeScript with MongoDB, featuring dynamic product listings, smooth interactions, and a responsive design."
          tech="Next.js, TypeScript, MongoDB, Tailwind CSS, React"
          result="Delivered a polished, high-performance e-commerce site that ensures fast loading, intuitive navigation, and an engaging shopping experience."
        />

        <ProjectCard
          title="Business Management Dashboard"
          image={Dashboard}
          challenge="Developing a centralized dashboard to manage multiple stores and warehouses, including inventory tracking, stock transfers, and sales monitoring."
          solution="Built a modular dashboard structure with dynamic data visualization, implemented advanced filtering and search features, and designed an intuitive interface for daily operational management."
          tech="React, TypeScript, Chart Integration, API Handling, State Management"
          result="Improved operational efficiency by providing clear real-time insights, streamlined inventory management, and reduced manual workflow errors."
        />
      </div>
    </section>
  );
};
