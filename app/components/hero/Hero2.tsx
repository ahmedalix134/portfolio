import React from "react";
import "./hero.css";

export const Hero2 = () => {
  function createSpans(text: string) {
    const cleaned = text.replace(/[, ]+/g, "").trim();
    return cleaned
      .split("")
      .map((char, index) => <span key={index}>{char.toUpperCase()}</span>);
  }

  return (
    <section className="hero">
      <div className="content">
        <div className="top">
          <div className="name2">
            <h4>Ahmed Ali</h4>
          </div>

          <div className="job2">
            <h4>Front End Developer</h4>
          </div>
        </div>
        <div className="bottom2">
          <div className="top-bottom flex">
            {createSpans("I build modern and responsive web apps")}
          </div>
          <div className="bottom-bottom flex">
            {createSpans("using React & Next.js")}
          </div>
          {/* <h3>I build modern, responsive web apps</h3> */}
          {/* <h3>using React & Next.js</h3> */}
        </div>
      </div>
    </section>
  );
};
