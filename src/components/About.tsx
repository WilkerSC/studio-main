import React from 'react';
import { Camera, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Camera className="w-8 h-8" />, number: '500+', label: 'Projetos Realizados' },
    { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Prêmios Conquistados' },
    { icon: <Users className="w-8 h-8" />, number: '1000+', label: 'Clientes Satisfeitos' },
    { icon: <Heart className="w-8 h-8" />, number: '10+', label: 'Anos de Experiência' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#140F1E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl">
              <img
                src="/SobreMim.jpeg"
                alt="Sobre o fotógrafo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-600 rounded-lg shadow-xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Sobre Mim
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Sou um fotógrafo profissional apaixonado por capturar a essência única de cada momento. 
                Com mais de uma década de experiência, especializei-me em retratos íntimos, 
                casamentos emocionantes e eventos corporativos sofisticados.
              </p>
              <p>
                Minha abordagem vai além da técnica impecável – busco criar uma conexão genuína 
                com cada cliente, resultando em imagens que contam histórias autênticas e 
                despertam emoções verdadeiras.
              </p>
              <p>
                Cada projeto é uma oportunidade de transformar momentos efêmeros em memórias 
                eternas, utilizando a luz, composição e timing perfeito para criar arte visual 
                que transcende o tempo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-[0_22px_48px_-12px_rgba(147,51,234,0.55)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="text-purple-600 dark:text-purple-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-light text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;