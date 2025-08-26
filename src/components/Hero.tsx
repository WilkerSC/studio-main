import React from 'react';
import { ChevronDown } from 'lucide-react';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 shadow-inner"
        style={{
          backgroundImage: `linear-gradient(rgba(60, 26, 123, 0.4), rgba(0, 0, 0, 0.5)), url('/TesteLuana2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top 45%',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
            <TypingEffect text={"Capturando"} speed={120} className="font-playfair" />
            <span className="block font-thin text-purple-300 drop-shadow-lg">
              <TypingEffect text={"Momentos"} speed={120} className="font-playfair" />
            </span>
            <TypingEffect text={"Eternos"} speed={120} className="font-playfair" />
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            <TypingEffect text={"Fotógrafo profissional especializado em retratos, casamentos e eventos corporativos"} speed={40} className="font-playfair" />
          </p>
          <button 
            onClick={scrollToPortfolio}
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Ver Portfólio
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <ChevronDown className="text-white w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
};

export default Hero;