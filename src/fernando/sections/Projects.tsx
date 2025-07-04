import bioverde from '../imgs/bioverde.jpg'
import restaurante from '../imgs/layout_restaurante.png'
import pizzaria from '../imgs/pizzaria.png'
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Tag from '../components/Tag'
import ProjectButton from '../components/ProjectButton'

function Projects() {
  
  return (
    <div 
      id="projects" 
      className="relative min-h-screen bg-cover bg-center bg-fixed flex flex-col bg-[url('/fundo-azul.jpg')] scroll-mt-16"
    >
      <div className="absolute inset-0 bg-black/15 z-0 scroll-mt-16"></div>

      <div className="relative z-10 m-20 text-white flex items-center justify-center flex-col gap-7 h-full">
        <h2 className="text-4xl font-bold text-white" data-aos="zoom-out">Projetos</h2>
        <p className="text-gray-100 text-center max-w-xl">
        Nesta seção, apresento alguns dos projetos que desenvolvi, destacando minhas habilidades em desenvolvimento Full-Stack.
        </p>
        
        <hr className="w-3/5 border-white" />

        <div className="w-6xl flex flex-col items-center mt-10">

          {/* BioVerde */}
          <div className="w-full h-full flex justify-center items-center gap-15">
            <div data-aos="fade-right" className='w-[1500px]'>
              <img 
                src={bioverde} 
                alt="Foto do projeto BioVerde" 
                className="w-[500px] h-full object-cover rounded shadow-project hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-4">

              {/* Descrição do projeto */}
              <h3 className="text-2xl font-semibold">BioVerde - Sistema de Gestão 🌾🌱</h3>
              <p className="text-white max-w-xl text-base">
              O BioVerde é um sistema desenvolvido com o objetivo de otimizar e aprimorar a qualidade dos produtos agrícolas e do gerenciamento de produtos em estoque. 
              </p>
              <p>
              Através dele, será possível implementar automações tecnológicas e realizar um monitoramento preciso do cultivo e plantio, com um <strong>controle de estoque em tempo real</strong>, trazendo inovação e eficiência para o setor agrícola.
              </p>

              {/* Tags com tecnologias utilizadas */}
              <div className="flex flex-col gap-1 mb-3">
                <p className="mb-1">As tecnologias utilizadas foram:</p>
                <div className="flex flex-wrap gap-3 max-w-xl">
                  <Tag color="bg-orange-600" text="HTML" /> 
                  <Tag color="bg-yellow-500" text="JavaScript" textColor="text-black" />
                  <Tag color="bg-blue-700" text="Typescript" />
                  <Tag color="bg-blue-900" text="React" />
                  <Tag color="bg-cyan-600" text="TailwindCSS" />
                  <Tag color="bg-purple-800" text="PHP" />
                  <Tag color="bg-orange-400" text="MySQL" textColor="text-black" />
                </div>
              </div>

              {/* Botões de acesso ao projeto */}
              <div className="flex gap-4">
                <ProjectButton 
                  link="https://github.com/muriloLuix/BioVerde"
                  colorButton="bg-indigo-900"
                  colorHover="bg-[#221f5d]"
                  text="Ver no GitHub"
                  icon={<FaGithub className="ml-2 text-lg" size={20}/>}
                />
                <ProjectButton 
                  link="#"
                  colorButton="bg-blue-900"
                  colorHover="bg-[#162b69]"
                  text="Ver Projeto"
                  icon={<FiArrowRight className="ml-1 text-lg" size={20} />}
                />
              </div>
              
            </div>
          </div>
          
          <hr className="w-full border-white m-15" />

          {/* Layout para Restaurante */}
          <div className="w-full h-full flex justify-center items-center gap-15">
            <div className="flex flex-col gap-4">

              {/* Descrição do projeto */}
              <h3 className="text-2xl font-semibold">Layout de Site para Restaurante 🧆🍝</h3>
              <p className="text-white max-w-xl text-base">
              Este é um projeto de <strong>layout de site</strong> que desenvolvi especialmente para <strong>restaurantes</strong>, ele está disponível como base para venda ou personalização, com foco em uma apresentação moderna, funcional e totalmente adaptável às necessidades de cada estabelecimento. 
              </p>
              <p>
              O objetivo foi criar uma estrutura visual que valorize o cardápio, facilite o contato com o cliente e transmita a identidade do restaurante de forma elegante e profissional.
              </p>

              {/* Tags com tecnologias utilizadas */}
              <div className="flex flex-col gap-1 mb-3">
                <p className="mb-1">As tecnologias utilizadas foram:</p>
                <div className="flex flex-wrap gap-3 max-w-xl">
                  <Tag color="bg-orange-600" text="HTML" /> 
                  <Tag color="bg-blue-500" text="CSS" />
                  <Tag color="bg-yellow-500" text="JavaScript" textColor="text-black" />
                  <Tag color="bg-fuchsia-600" text="SCSS" />
                  <Tag color="bg-indigo-700" text="Bootstrap" />
                </div>
              </div>

              {/* Botões de acesso ao projeto */}
              <div className="flex gap-4">
                <ProjectButton 
                  link="https://github.com/fernandokotinda/Layout_para_Restaurante"
                  colorButton="bg-indigo-900"
                  colorHover="bg-[#221f5d]"
                  text="Ver no GitHub"
                  icon={<FaGithub className="ml-2 text-lg" size={20}/>}
                />
                <ProjectButton 
                  link="https://fernandokotinda.github.io/Layout_para_Restaurante/"
                  colorButton="bg-blue-900"
                  colorHover="bg-[#162b69]"
                  text="Ver Projeto"
                  icon={<FiArrowRight className="ml-1 text-lg" size={20} />}
                />
              </div>
              
            </div>
            <div data-aos="fade-left" className='w-[1200px]'>
              <img 
                src={restaurante} 
                alt="Foto do projeto do Layout para Restaurante" 
                className="h-full object-cover rounded shadow-project hover:scale-110 transition-all duration-300"     
              />
            </div>
          </div>

          <hr className="w-full border-white m-15" />

          {/* Site para uma pizzaria */}
          <div className="w-full h-full flex justify-center items-center gap-15">
            <div data-aos="fade-right" className='w-[800px]'>
              <img
                src={pizzaria}
                alt="Foto do projeto da pizzaria"
                className="h-full object-cover rounded shadow-project hover:scale-110 transition-all duration-300"
               />
            </div>
            <div className="flex flex-col gap-4">

              {/* Descrição do projeto */}
              <h3 className="text-2xl font-semibold">Site para uma Pizzaria 🍕🥤</h3>
              <p className="text-white max-w-xl text-base">
              Este projeto foi desenvolvido como um modelo de <strong>site para pizzarias</strong>, com foco em praticidade, visual atrativo e experiência do usuário. A proposta é oferecer uma solução moderna e funcional para pizzarias que desejam apresentar seu cardápio de forma profissional.
              </p>
              <p> 
                Ela contém um <strong>Sistema de pedidos online</strong>, onde o cliente pode montar seu pedido e enviar via WhatsApp ou formulário.
              </p>
              {/* Tags com tecnologias utilizadas */}
              <div className="flex flex-col gap-1 mb-3">
                <p className="mb-1">As tecnologias utilizadas foram:</p>
                <div className="flex flex-wrap gap-3 max-w-xl">
                  <Tag color="bg-orange-600" text="HTML" /> 
                  <Tag color="bg-blue-500" text="CSS" />
                  <Tag color="bg-yellow-500" text="JavaScript" textColor="text-black" />
                </div>
              </div>

              {/* Botões de acesso ao projeto */}
              <div className="flex gap-4">
                <ProjectButton 
                  link="https://github.com/fernandokotinda/Site-Pizzaria"
                  colorButton="bg-indigo-900"
                  colorHover="bg-[#221f5d]"
                  text="Ver no GitHub"
                  icon={<FaGithub className="ml-2 text-lg" size={20}/>}
                />
                <ProjectButton 
                  link="https://fernandokotinda.github.io/Site-Pizzaria/"
                  colorButton="bg-blue-900"
                  colorHover="bg-[#162b69]"
                  text="Ver Projeto"
                  icon={<FiArrowRight className="ml-1 text-lg" size={20} />}
                />
              </div>
              
            </div>  
          </div>

        </div> 
      </div>
    </div>
  )
}

export default Projects;
