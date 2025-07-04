import React from "react";

interface ProjectButtonProps {
  link: string;
  colorButton: string;
  colorHover: string; 
  text: string;
  icon: React.ReactNode;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ link, colorButton, colorHover, text, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={
        `${colorButton} hover:${colorHover} font-medium text-white px-4 py-2 rounded-md w-1/2 shadow-link border-1 border-gray-500 cursor-pointer flex items-center justify-center transition-all duration-300`
      }
    >
      {text}
      {icon}
    </a>
  );
};

export default ProjectButton; 