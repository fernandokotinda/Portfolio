import React from "react";

interface TagProps {
  color: string;
  text: string;
  textColor?: string;
}

const Tag: React.FC<TagProps> = ({ color, text, textColor }) => {
  return (
    <div
      className={`font-tag p-1.5 rounded-xl w-fit cursor-default ${color} ${textColor}`}
    >
      {text}
    </div>
  );
};

export default Tag;
