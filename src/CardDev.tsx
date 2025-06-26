import React from 'react';

interface CardDevProps {
  link: string;
  img: string;
  name: string;
}

const CardDev: React.FC<CardDevProps> = ({ link, img, name }) => (
  <a
    href={link}
    className="bg-white/90 min-w-70 rounded-xl shadow flex flex-col items-center p-8 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
  >
    <img src={img} alt={`Foto de ${name}`} className="w-45 h-45 shadow-md shadow-black rounded-full mb-4 object-cover" />
    <p className="text-lg font-semibold text-gray-800">{name}</p>
  </a>
);

export default CardDev; 