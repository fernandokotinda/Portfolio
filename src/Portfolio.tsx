import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ChevronDown } from 'lucide-react';

function Portfolio() {

  return (
    <>
      <div className="h-screen bg-[url('./imgs/home_fundo.jpg')] bg-cover bg-center flex flex-col">
        <div className="absolute inset-0 bg-black/50 "></div>

        {/* NavBar */}
        <div className="fixed w-full z-100 bg-azulEscuro h-16 flex place-content-center border-b-1 border-beje">

          <div className="flex items-center gap-6 text-lg text-white">
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cinzaClaro">
              Início
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cinzaClaro">
              Sobre Mim
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cinzaClaro">
              Tecnologias
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cinzaClaro">
              Projetos
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-cinzaClaro">
              Contato
            </a>  
          </div>

        </div>

        {/* Conteúdo Central */}
        <div className="relative z-10 text-white flex items-center justify-center flex-col gap-5 h-full">
          <p className="text-gray-300 text-xl">Portfólio</p>
          <h1 className="text-5xl font-semibold">Fernando Kotinda</h1>
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

        <ChevronDown
          size={40}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white animate-bounce"
        />
      </div>
    </>
  )
}

export default Portfolio
