import React, { useEffect, useRef } from 'react';
import { Camera, Users, Building, Heart } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = servicesRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('animate-fade-in-up');
            } else {
              (entry.target as HTMLElement).classList.remove('animate-fade-in-up');
              (entry.target as HTMLElement).style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
            }
      });
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const services = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Retratos Profissionais',
      description: 'Sessões de retratos personalizadas que capturam sua personalidade única com elegância e sofisticação.',
      features: ['Sessão em estúdio ou externa', 'Retoque profissional', 'Entrega em alta resolução'],
      price: 'A partir de R$ 800'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Casamentos',
      description: 'Cobertura completa do seu grande dia, desde os preparativos até a festa, preservando cada emoção.',
      features: ['Cobertura completa do evento', 'Album premium incluso', 'Sessão pré-wedding'],
      price: 'A partir de R$ 3.500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Eventos Familiares',
      description: 'Momentos especiais em família capturados com naturalidade e carinho para guardar para sempre.',
      features: ['Cobertura de até 4h', 'Galeria online privada', 'Fotos editadas'],
      price: 'A partir de R$ 1.200'
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Corporativo',
      description: 'Fotografia corporativa que transmite profissionalismo e fortalece a identidade da sua empresa.',
      features: ['Retratos executivos', 'Eventos corporativos', 'Fotos para LinkedIn'],
      price: 'A partir de R$ 1.500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-[#140F1E] transition-colors duration-300">
      <div ref={servicesRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Serviços
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-playfair">
            Soluções personalizadas para cada necessidade, sempre com a mais alta qualidade
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl hover:shadow-[0_22px_48px_-12px_rgba(147,51,234,0.55)] transition-all duration-300 transform hover:-translate-y-1 group border dark:border-gray-700"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-center font-playfair">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 border-t dark:border-gray-700 pt-4">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Interessado em algum dos serviços? Vamos conversar sobre seu projeto!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;