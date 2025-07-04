import fotoPerfil from ".././imgs/foto_perfil.jpg"; 

function AboutMe() {

  return (
    <>
      <div id="about" className="min-h-screen bg-[#1e293b] flex items-center justify-center px-10 flex-col md:flex-row w-full gap-20 scroll-mt-16 border-y border-gray-600">
    
          {/* Foto de Perfil */}
          <div
            className="w-72 h-72 rounded-full object-cover border-2 border-white shadow-white"
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
          <div className="text-white space-y-4 md:w-1/2">
            <h2 className="text-4xl font-bold text-beje" data-aos="zoom-out">Sobre Mim</h2>
            <hr className="border-beje" />
            <p className=" leading-relaxed">
              Olá, me chamo <strong>Fernando Kotinda</strong> e sou <strong>desenvolvedor Web Full-Stack</strong>. Tenho experiência como desenvolvedor de software e atualmente estou focado em aprimorar minhas habilidades técnicas e profissionais para me tornar cada vez mais capacitado na área de tecnologia.
            </p>
            <p className="text-base leading-relaxed">
              Meu objetivo é não apenas evoluir profissionalmente, mas também contribuir ativamente para o sucesso dos projetos e das empresas com as quais colaboro, entregando soluções eficientes e de qualidade.
            </p>
            
            <div className="w-full flex justify-center">
              <button className="mt-2 w-full px-4 py-2 bg-[#ABBDD7] text-[#0f172a] font-semibold rounded-xl hover:bg-[#ddeaff] transition duration-300 cursor-pointer shadow-md">
                Baixar Currículo
              </button>

            </div>
          </div>

      </div>
    </>
  )
}

export default AboutMe;
