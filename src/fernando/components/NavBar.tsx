import { useState } from "react";
import LinkMenu from "./LinkMenu";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Hamburger para mobile */}
      <div className="md:hidden fixed top-3 left-3 z-[103]">
        <button
          className={`flex flex-col gap-1.5 w-13 h-13 bg-white/20 rounded-full justify-center items-center focus:outline-none ${open ? "z-[102]" : ""}`}
          onClick={handleToggle}
          aria-label="Abrir menu"
        >
          <span className={`block w-7 h-1 z-103 rounded bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-3" : ""}`}></span>
          <span className={`block w-7 h-1 z-103 rounded bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-1 z-103 rounded bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Drawer lateral */}
      <nav
        className={`fixed top-0 left-0 h-full w-screen max-w-full overflow-x-hidden bg-azulEscuro z-[102] p-8 pt-20 flex flex-col gap-10 shadow-lg transition-transform duration-300 md:hidden justify-center items-center ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Links centralizados */}
        <div className="flex flex-col gap-10 flex-1 justify-center items-center">
          <LinkMenu link="#home" text="Início" onClick={handleClose} />
          <LinkMenu link="#about" text="Sobre Mim" onClick={handleClose} />
          <LinkMenu link="#technologies" text="Tecnologias" onClick={handleClose} />
          <LinkMenu link="#projects" text="Projetos" onClick={handleClose} />
          <LinkMenu link="#footer" text="Contato" onClick={handleClose} />
        </div>

        {/* Rodapé fixo no fim */}
        <div className="flex flex-col items-center gap-7 ">
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
          <span className="text-gray-500 text-sm">
            Desenvolvido por <strong>©<em>FernandoKotinda</em></strong>
          </span>
        </div>
      </nav>

      {/* Menu horizontal para desktop/tablet */}
      <div className="hidden md:fixed md:w-full md:z-100 md:bg-azulEscuro md:h-16 md:flex md:place-content-center md:border-b-1 md:border-beje">
        <div className="hidden md:flex items-center gap-10">
          <LinkMenu link="#home" text="Início" />
          <LinkMenu link="#about" text="Sobre Mim" />
          <LinkMenu link="#technologies" text="Tecnologias" />
          <LinkMenu link="#projects" text="Projetos" />
          <LinkMenu link="#footer" text="Contato" />
        </div>
      </div>

    </>
  );
}

export default NavBar;
