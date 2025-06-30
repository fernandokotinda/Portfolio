import murilo_img from './assets/murilo.png';
import fernando_img from './assets/fernando.jpg';
import CardDev from './components/CardDev';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ChoosePortfolio() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background com blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-[url('./assets/background.png')] "
        aria-hidden="true"
      />
      {/* Camada de cor sobre o fundo */}
      <div 
        className="absolute inset-0 bg-black opacity-30"
        aria-hidden="true"
      />
      {/* Conteúdo acima do blur */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-semibold mb-13 text-white drop-shadow-lg text-center" data-aos="zoom-out">
          Escolha de quem você quer visualizar o Portfólio
        </h1>
        <div className="flex gap-20" data-aos="fade-up">
          <CardDev
          link="/murilo"
          img={murilo_img}
          name="Murilo Luiz"
          />
          <CardDev
            link="/fernando"
            img={fernando_img}
            name="Fernando Kotinda"
          />
        </div>
      </div>
    </div>
  );
}

export default ChoosePortfolio;
