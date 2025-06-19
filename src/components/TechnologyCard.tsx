import React from "react";

interface TechnologyCardProps {
  name: string;
  icon: string; 
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, icon }) => {
  return (
    <div 
      className="bg-[#1d2d44] w-32 h-32 flex flex-col items-center justify-center rounded-md shadow-md  border-b-4 border-[#cbd5e1] hover:scale-105  transition duration-300"
      data-aos="fade-up"
    >
      <img src={icon} alt={name} className="w-10 h-10 mb-2 object-contain" />
      <span className="text-white text-sm font-medium">{name}</span>
    </div>
  );
};

export default TechnologyCard;
;
