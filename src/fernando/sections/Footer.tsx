import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="bg-[#0d1321] text-white pt-10 border-t border-gray-800">
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-semibold mb-2">Fernando Kotinda</h2>
        <p className="max-w-xl text-gray-300 mb-6 text-sm">
          Este é meu portfólio! Fique à vontade para entrar em contato para dúvidas, sugestões ou oportunidades, será um prazer conversar com você!
        </p>
        <div className="flex gap-5 mb-6">
          <a href="https://www.linkedin.com/in/fernando-kotinda/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={28} className="hover:text-blue-400 transition" />
          </a>
          <a href="https://github.com/fernandokotinda" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={28} className="hover:text-gray-400 transition" />
          </a>
          <a href="mailto:fernando.kb077@gmail.com" title="E-mail">
            <FaEnvelope size={28} className="hover:text-red-400 transition" />
          </a>
        </div>
        <nav className="flex gap-6 text-sm mb-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">Sobre</a>
          <a href="#technologies" className="hover:underline">Tecnologias</a>
          <a href="#projects" className="hover:underline">Projetos</a>
        </nav>
      </div>
      <div className="border-t bg-azulEscuro border-gray-700 mt-4 py-3 flex flex-col md:flex-row items-center justify-center px-4 text-sm text-gray-400">
        <span>Desenvolvido por <strong>©<em>FernandoKotinda</em></strong></span>
      </div>
    </footer>
  );
}

export default Footer;
