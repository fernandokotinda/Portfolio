import React from 'react';
import { Link } from "react-router-dom";

interface CardDevProps {
  link: string;
  img: string;
  name: string;
}

const CardDev: React.FC<CardDevProps> = ({ link, img, name }) => (
  <Link
    to={link}
    className="bg-white/90 w-50  md:min-w-70 md:h-auto rounded-xl shadow flex flex-col items-center gap-2 p-5 md:p-8 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
  >
    <img src={img} alt={`Foto de ${name}`} className="w-30 h-30 md:w-45 md:h-45 shadow-md shadow-black rounded-full mb-4 object-cover" />
    <p className="text-sm md:text-lg font-semibold text-gray-800">{name}</p>
  </Link>
);

export default CardDev; 