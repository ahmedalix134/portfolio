import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section id="Home" className="hero">
      <div className="content">
        <div className="top">
          <div className="name">
            <h4>Ahmed Ali</h4>
          </div>
          <div className="job">
            <h4>Front End Developer</h4>
          </div>
        </div>
        <div className="bottom">
          <h3>I build modern, responsive web apps</h3>
          <h3>using React & Next.js</h3>
        </div>
      </div>
    </section>
  );
};
