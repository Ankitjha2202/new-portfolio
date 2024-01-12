import Image from "next/image";
import React from "react";
import { FaGithub } from 'react-icons/fa';

interface Props {
  src: string;
  title: string;
  description: string;
  githubLink?: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition duration-300 hover:shadow-xl">
      <div className="w-full h-64 relative">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 text-gray-500 hover:text-gray-300 transition duration-300"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
