import React from "react";
import "./skills.css";
import Header from "../header/Header";
import { BookOpen } from "lucide-react";
import SkillsParticles from "../skillsTsparticles/SkillsTsparticles";
import SkillsContent from "../skillscontent/SkillsContent";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="skills content-merge"
      style={{ backgroundColor: "#060606" }}
    >
      <Header
        name="My Skills"
        icon={BookOpen}
        color="black"
        backgroundColor="white"
      />
      <SkillsParticles />
      <SkillsContent />
    </section>
  );
};

export default Skills;
