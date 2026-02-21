"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, ISourceOptions } from "tsparticles-engine";

const skills = [
  { name: "react" },
  { name: "nextjs" },
  { name: "css" },
  { name: "javascript" },
  { name: "typescript" },
  { name: "github" },
  { name: "html" },
  { name: "bootstrap" },
  { name: "tailwind" },
  { name: "vscode" },
  { name: "postman" },
];

export default function SkillsParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },

    background: {
      color: "#060606", // أخضر داكن عصري زي الصورة
    },

    fpsLimit: 60,

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 160,
          links: {
            opacity: 0.6,
          },
        },
      },
    },

    particles: {
      number: {
        value: 120, // شبكة كثيفة
        density: { enable: true, area: 800 },
      },

      color: {
        value: "#8ff9ff",
      },

      shape: {
        type: ["image"],
        image: skills.map((skill) => ({
          src: `/${skill.name}.png`,
          width: 40,
          height: 40,
        })),
      },

      size: {
        value: 10,
      },

      opacity: {
        value: 0.6,
      },

      links: {
        enable: true,
        distance: 120,
        color: "#6ee7ff",
        opacity: 0.2,
        width: 1,
      },

      move: {
        enable: true,
        speed: 0.6,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        position: "absolute",
        zIndex: 0,
      }}
    >
      <Particles
        id="skills-particles"
        className="h-full "
        init={particlesInit}
        options={options}
      />
    </div>
  );
}
