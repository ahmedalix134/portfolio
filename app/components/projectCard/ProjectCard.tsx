import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  image: StaticImageData;
  challenge: string;
  solution: string;
  tech: string;
  result: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  challenge,
  solution,
  tech,
  result,
}) => {
  return (
    <div className="relative group rounded-2xl p-[1px] overflow-hidden">
      <div
        className="absolute inset-0 bg-[conic-gradient(from_0deg,#6366f1,#a855f7,#ec4899,#6366f1)] 
                      animate-spin-slow opacity-70 group-hover:opacity-100 transition duration-500"
      />

      <div
        className="relative bg-[#0f172a] rounded-2xl p-6 h-full text-gray-300 
                      backdrop-blur-xl"
      >
        {/* Image */}
        <div className="relative h-52 w-full rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Content */}
        <div className="mt-5 space-y-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>

          <div className="h-[2px] w-14 bg-indigo-500 rounded-full" />

          <p>
            <span className="font-semibold text-white">Challenge:</span>{" "}
            {challenge}
          </p>

          <p>
            <span className="font-semibold text-white">Solution:</span>{" "}
            {solution}
          </p>

          <p>
            <span className="font-semibold text-white">Tech:</span> {tech}
          </p>

          <p>
            <span className="font-semibold text-white">Result:</span> {result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
