import TechnologyCard from "../components/TechnologyCard";
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  tsIcon,
  reactIcon,
  nextIcon,
  bootstrapIcon,
  sassIcon,
  tailwindIcon,
  phpIcon,
  nodeIcon,
  mysqlIcon,
  expressIcon,
  postgresql,
  sqlServer,
  ingles,
  office,
  jest,
  git,
  gitHub,
  powerBI,
  apiRest,
  figma,
} from "../imgs";

const Technologies = () => {
  return (
    <div id="technologies" className="min-h-screen bg-[#0f172a] flex items-center justify-center flex-col w-full py-16 px-4 space-y-10 border-b border-gray-800 relative">
      
      <h2 className="text-4xl font-bold text-white relative z-10">Tecnologias</h2>
      <p className="text-white text-center max-w-xl relative z-10">
        Minhas principais competências incluem:
      </p>

      {/* Front-end */}
      <div className="max-w-3xl flex flex-col items-center relative z-10">
        <h3 className="text-white text-xl mb-4 w-full text-left pl-2">Front-end:</h3>
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-wrap justify-center gap-4">
            <TechnologyCard name="HTML" icon={htmlIcon} />
            <TechnologyCard name="CSS" icon={cssIcon} />
            <TechnologyCard name="JavaScript" icon={jsIcon} />
            <TechnologyCard name="TypeScript" icon={tsIcon} />
            <TechnologyCard name="React" icon={reactIcon} />
            <TechnologyCard name="Next.js" icon={nextIcon} />
            <TechnologyCard name="Sass" icon={sassIcon} />
            <TechnologyCard name="Bootstrap" icon={bootstrapIcon} />
            <TechnologyCard name="TailwindCSS" icon={tailwindIcon} />
          </div>
        </div>
      </div>

      {/* Back-end + Banco de Dados */}
      <div className="mt-5 px-2 max-w-3xl md:w-2xl lg:w-3xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 lg:gap-0">
          {/* Back-end */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl mb-4">Back-end:</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <TechnologyCard name="Node.js" icon={nodeIcon} />
              <TechnologyCard name="Express.js" icon={expressIcon} />
              <TechnologyCard name="PHP" icon={phpIcon} />
            </div>
          </div>

          {/* Banco de Dados */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl mb-4">Banco de Dados:</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <TechnologyCard name="MySQL" icon={mysqlIcon} />
              <TechnologyCard name="PostgreSQL" icon={postgresql} />
              <TechnologyCard name="SQL Server" icon={sqlServer} />
            </div>
          </div>
        </div>
      </div>

      {/* Outros */}
      <div className="max-w-3xl flex flex-col items-center relative z-10">
        <h3 className="text-white text-xl mb-4 w-full text-left pl-2">Outros:</h3>
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-wrap justify-center gap-4">
            <TechnologyCard name="API REST" icon={apiRest} />
            <TechnologyCard name="Jest" icon={jest} />
            <TechnologyCard name="Git" icon={git} />
            <TechnologyCard name="GitHub" icon={gitHub} />
            <TechnologyCard name="Power BI" icon={powerBI} />
            <TechnologyCard name="Figma" icon={figma} />
            <TechnologyCard name="Pacote Office" icon={office} />
            <TechnologyCard name="Inglês" icon={ingles} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Technologies;
