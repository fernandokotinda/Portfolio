import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ChevronDown } from 'lucide-react';

function Home() {
  
  return (
    <>
      <div 
        id="home" 
        className="relative h-screen bg-cover bg-center flex flex-col bg-[url('/home_fundo.jpg')]"
      >
        <div className="absolute inset-0 bg-black/50 z-0 scroll-mt-16"></div>

        {/* Conteúdo Central */}
        <div className="relative z-10 text-white flex items-center justify-center flex-col gap-5 h-full">
          <p className="text-gray-300 text-xl">Portfólio</p>
          <h1 className="text-5xl font-semibold" data-aos="flip-up" data-aos-duration="1500">Fernando Kotinda</h1>
          <h2 className="text-gray-300 text-xl">{"<Desenvolvedor Full-Stack />"}</h2>
          
          <div className="flex items-center gap-5">

            {/* Linha esquerda */}
            <div className="h-px bg-white/50 w-24" />

            {/* Ícones com links */}
            <div className="flex items-center gap-6 text-2xl">
              <a href="https://www.linkedin.com/in/fernando-kotinda/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin size={30} className="text-gray-200 hover:text-blue-400 transition" />
              </a>
              <a href="https://github.com/fernandokotinda" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub size={30} className="text-gray-200 hover:text-gray-400 transition" />
              </a>
              <a href="mailto:fernando.kb077@gmail.com" title="fernando.kb077@gmail.com">
                <FaEnvelope size={30} className="text-gray-200 hover:text-red-400 transition" />
              </a>
            </div>

            {/* Linha direita */}
            <div className="h-px bg-white/50 w-24" />

          </div>

        </div>

          {/* Seta indicando Scroll */}
          <a href="#about">
            <ChevronDown
              size={40}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white animate-bounce z-10 cursor-pointer"
            />
          </a>
      </div>
    </>
  )
}

export default Home;
