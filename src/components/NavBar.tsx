function NavBar() {

  return (
    <>
        <div className="fixed w-full z-100 bg-azulEscuro h-16 flex place-content-center border-b-1 border-beje">

            <div className="flex items-center gap-10 text-lg text-white">
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
    </>
  )
}

export default NavBar;
