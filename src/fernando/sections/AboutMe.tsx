import fotoPerfil from ".././imgs/foto_perfil.jpg"; 

function AboutMe() {

  return (
    <>
      <div id="about" className="min-h-screen bg-[#1e293b] flex items-center justify-center px-10 flex-col lg:flex-row w-full gap-10 lg:gap-20 border-y border-gray-600 relative">
    
          {/* Foto de Perfil */}
          <div
            className="w-40 h-40 md:w-55 md:h-55 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-white shadow-white mt-10 lg:mt-0 relative z-10"
            style={{
              animation: "float 3s ease-in-out infinite",
              boxShadow: "0 0 15px white",
            }}
          >
            <img
              src={fotoPerfil}
              alt="Foto de Fernando Kotinda"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Conteúdo */}
          <div className="text-white space-y-4 lg:w-1/2 max-w-2xl mb-10 lg:mb-0 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-beje" data-aos="zoom-out">Sobre Mim</h2>
            <hr className="border-beje" />
            <p className=" leading-relaxed">
              Olá, me chamo <strong>Fernando Kotinda</strong> e sou <strong>desenvolvedor Web Full-Stack</strong>. Tenho experiência como desenvolvedor de software e atualmente estou focado em aprimorar minhas habilidades técnicas e profissionais para me tornar cada vez mais capacitado na área de tecnologia.
            </p>
            <p className="text-base leading-relaxed">
              Meu objetivo é não apenas evoluir profissionalmente, mas também contribuir ativamente para o sucesso dos projetos e das empresas com as quais colaboro, entregando soluções eficientes e de qualidade.
            </p>
            
            <div className="w-full flex justify-center">
              <a 
                href="https://drive.google.com/file/d/1ynMHkzL9h7HZv0OVbal51_PmF5Ih2Nzh/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full px-4 py-2 bg-[#ABBDD7] text-[#0f172a] font-semibold rounded-xl hover:bg-[#ddeaff] transition duration-300 cursor-pointer shadow-md text-center block"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

      </div>
    </>
  )
}

export default AboutMe;
