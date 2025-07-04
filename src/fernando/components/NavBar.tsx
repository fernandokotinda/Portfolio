function NavBar() {

  return (
    <>
        <div className="fixed w-full z-100 bg-azulEscuro h-16 flex place-content-center border-b-1 border-beje">

            <div className="flex items-center gap-10 text-lg text-white">
                <a href="#home" className="transition-colors duration-300 hover:text-cinzaClaro">
                    Início
                </a>
                <a href="#about" className="transition-colors duration-300 hover:text-cinzaClaro">
                    Sobre Mim
                </a>
                <a href="#technologies" className="transition-colors duration-300 hover:text-cinzaClaro">
                    Tecnologias
                </a>
                <a href="#projects" className="transition-colors duration-300 hover:text-cinzaClaro">
                    Projetos
                </a>
                <a href="#contact" className="transition-colors duration-300 hover:text-cinzaClaro">
                    Contato
                </a>
            </div>

        </div>
    </>
  )
}

export default NavBar;
