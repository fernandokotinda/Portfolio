import React from "react";
import TechnologyCard from "../components/TechnologyCard";
import htmlIcon from "../imgs/html.png";        // substitua pelos seus ícones reais
import cssIcon from "../imgs/css.png";
import jsIcon from "../imgs/javascript.png";
import tsIcon from "../imgs/typescript.png";
import reactIcon from "../imgs/react.png";
import nextIcon from "../imgs/nextjs.png";
import bootstrapIcon from "../imgs/bootstrap.png";
import sassIcon from "../imgs/sass.png";
import tailwindIcon from "../imgs/tailwind.png";
import phpIcon from "../imgs/php.png";
import nodeIcon from "../imgs/node.png";
import mysqlIcon from "../imgs/mysql.png";
import sqlServerIcon from "../imgs/sql_server.png";

const Technologies = () => {
  return (
    <div id="technologies" className="min-h-screen bg-[#0f172a] flex items-center justify-center flex-col w-full py-16 px-4 space-y-10 scroll-mt-16">
      <h2 className="text-4xl font-bold text-white">Tecnologias</h2>
      <p className="text-white text-center max-w-xl">
        Minhas principais competências incluem:
      </p>

      {/* Front-end */}
      <div className="w-3xl flex flex-col items-center">
        <h3 className="text-white text-xl mb-4 w-full text-left pl-2">Front-end:</h3>
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex flex-wrap justify-center gap-4">
            <TechnologyCard name="HTML" icon={htmlIcon} />
            <TechnologyCard name="CSS" icon={cssIcon} />
            <TechnologyCard name="JavaScript" icon={jsIcon} />
            <TechnologyCard name="TypeScript" icon={tsIcon} />
            <TechnologyCard name="React" icon={reactIcon} />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <TechnologyCard name="Next.js" icon={nextIcon} />
            <TechnologyCard name="Sass" icon={sassIcon} />
            <TechnologyCard name="Bootstrap" icon={bootstrapIcon} />
            <TechnologyCard name="TailwindCSS" icon={tailwindIcon} />
          </div>
        </div>
      </div>

      {/* Back-end + Banco de Dados */}
      <div className="w-3xl mt-8 px-2">
        <div className="flex flex-row justify-between gap-12">
          {/* Back-end */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl mb-4">Back-end:</h3>
            <div className="flex flex-wrap gap-4">
              <TechnologyCard name="Node.js" icon={nodeIcon} />
              <TechnologyCard name="PHP" icon={phpIcon} />
            </div>
          </div>

          {/* Banco de Dados */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl mb-4">Banco de Dados:</h3>
            <div className="flex flex-wrap gap-4">
              <TechnologyCard name="MySQL" icon={mysqlIcon} />
              <TechnologyCard name="SQL Server" icon={sqlServerIcon} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Technologies;
