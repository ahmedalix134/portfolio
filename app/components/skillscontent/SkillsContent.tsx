import React from "react";
import "./skillscontent.css";
const SkillsContent = () => {
  return (
    <div className="relative w-full z-[1] flex justify-center px-4">
      <div
        className="w-full max-w-5xl 
                  bg-white/5 
                  backdrop-blur-xl 
                  border border-cyan-400/20 
                  rounded-3xl 
                  p-10
                  grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Languages */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="neon-title text-2xl font-semibold tracking-wide">
            Languages
          </h3>

          <ul className="space-y-4">
            {[
              { name: "JavaScript", icon: "/javascript.png" },
              { name: "TypeScript", icon: "/typescript.png" },
              { name: "HTML", icon: "/html.png" },
              { name: "CSS", icon: "/css.png" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 justify-center md:justify-start neon-item transition duration-300 hover:scale-105"
              >
                <img src={item.icon} className="w-5 h-5 neon-icon" alt="" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Frameworks */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="neon-title text-2xl font-semibold tracking-wide">
            Frameworks
          </h3>

          <ul className="space-y-4">
            {[
              { name: "React", icon: "/react.png" },
              { name: "Next.js", icon: "/nextjs.png" },
              { name: "Bootstrap", icon: "/bootstrap.png" },
              { name: "Tailwind", icon: "/tailwind.png" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 justify-center md:justify-start neon-item transition duration-300 hover:scale-105"
              >
                <img src={item.icon} className="w-5 h-5 neon-icon" alt="" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="neon-title text-2xl font-semibold tracking-wide">
            Tools
          </h3>

          <ul className="space-y-4">
            {[
              { name: "GitHub", icon: "/github.png" },
              { name: "VS Code", icon: "/vscode.png" },
              { name: "Postman", icon: "/postman.png" },
            ].map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 justify-center md:justify-start neon-item transition duration-300 hover:scale-105"
              >
                <img src={item.icon} className="w-5 h-5 neon-icon" alt="" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
