"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";

function NavBar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="nav-container">
      <nav className={"nav-left"}>
        <ul>
          <li onClick={() => scrollToSection("Home")}>
            <span>Home</span>
          </li>
          <li onClick={() => scrollToSection("Experience")}>
            <span>Experience</span>
          </li>
          <li onClick={() => scrollToSection("Skills")}>
            <span>Skills</span>
          </li>
        </ul>
      </nav>

      <nav className={"nav-right"}>
        <ul>
          <li onClick={() => scrollToSection("Contact")}>
            <span>Contact</span>
          </li>
          <li onClick={() => scrollToSection("About")}>
            <span>About</span>
          </li>
          <li>
            <span>
              <a href="/Ahmed_Ali_Resumee.pdf" target="_blank">
                CV
              </a>
            </span>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;
