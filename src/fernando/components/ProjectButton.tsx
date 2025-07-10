import React from "react";

interface ProjectButtonProps {
  link: string;
  colorButton: string;
  colorHover: string; 
  text: string;
  icon: React.ReactNode;
  isModal?: boolean;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ link, colorButton, colorHover, text, icon, isModal }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={
        `${colorButton} hover:${colorHover} ${isModal ? "w-[50%]" : "w-full"} font-medium text-white px-4 py-2 rounded-md shadow-link border-1 border-gray-500 cursor-pointer flex items-center justify-center transition-all duration-300`
      }
    >
      {text}
      {icon}
    </a>
  );
};

export default ProjectButton; 