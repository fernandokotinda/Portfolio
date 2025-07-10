import React from "react";

interface LinkProps {
  link: string;
  onClick?: () => void;
  text: string;
}

const LinkMenu: React.FC<LinkProps> = ({ link, onClick, text }) => {
  return (
    <a href={link} className="text-white text-lg font-medium hover:text-cinzaClaro transition-colors duration-200" onClick={onClick}>
      {text}
    </a>
  );
};

export default LinkMenu;
