import { useEffect, useState } from 'react';
import murilo_img from '../assets/murilo.png';
import AOS from "aos";
import "aos/dist/aos.css";

export default function MuriloRedirect() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/murilo';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirectNow = () => {
    window.location.href = '/murilo';
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background com blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-[url('../assets/background.png')] "
        aria-hidden="true"
      />
      {/* Camada de cor sobre o fundo */}
      <div 
        className="absolute inset-0 bg-black opacity-40"
        aria-hidden="true"
      />
      
      {/* Efeito de partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white opacity-20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        {/* Avatar do Murilo com efeito */}
        <div 
          className="mb-6 sm:mb-8 relative"
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur-xl animate-pulse"></div>
          <img
            src={murilo_img}
            alt="Murilo Luiz"
            className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Título com gradiente */}
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Redirecionando para o
        </h1>
        
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-white drop-shadow-2xl px-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Portfolio do Murilo
        </h2>

        {/* Descrição */}
        <p 
          className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-sm sm:max-w-md leading-relaxed px-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Você está sendo redirecionado para conhecer os projetos incríveis desenvolvidos por Murilo Luiz.
        </p>

        {/* Contador regressivo estilizado */}
        <div 
          className="mb-6 sm:mb-8 flex flex-col items-center"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-white">{countdown}</span>
            </div>
          </div>
          <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base">Redirecionando em {countdown} segundos...</p>
        </div>

        {/* Botão para redirecionar imediatamente */}
        <button
          onClick={handleRedirectNow}
          className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer mx-4"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <span className="relative z-10">Ir Agora</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Texto de informação adicional */}
        <div 
          className="mt-4 sm:mt-6 px-3 py-2 sm:px-4 bg-black/30 backdrop-blur-sm rounded-full border border-white/20 mx-2"
          data-aos="fade-in"
          data-aos-delay="1200"
        >
          <p className="text-xs sm:text-sm text-white font-medium">
            Construído com <span className="text-red-400 font-semibold">Laravel</span> • <span className="text-blue-400 font-semibold">PHP</span> • <span className="text-orange-400 font-semibold">HTML</span> • <span className="text-cyan-400 font-semibold">CSS</span>
          </p>
        </div>
      </div>

      {/* Efeito de brilho de fundo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
}
