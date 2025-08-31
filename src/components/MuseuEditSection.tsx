import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const MuseuEditSection = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
  // Transição de scroll removida para otimização
  }, []);
  return (
  <section ref={sectionRef} id="museu-edit" className="py-12 bg-white dark:bg-[#140F1E] transition-colors duration-300">
      <div className="w-full px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4 font-playfair">Edição Antes e Depois</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-playfair">
            Veja a diferença da edição na foto do museu arrastando a régua abaixo.
          </p>
        </div>
        <BeforeAfterSlider beforeSrc="/Foto_3.JPG" afterSrc="/Foto3_3.JPG" beforeLabel="Antes" afterLabel="Depois" />
      </div>
    </section>
  );
};

export default MuseuEditSection;
