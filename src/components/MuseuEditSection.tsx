import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

const MuseuEditSection = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px) scale(1)';
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('animate-fade-in-up');
        } else {
          (entry.target as HTMLElement).classList.remove('animate-fade-in-up');
          (entry.target as HTMLElement).style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
          (entry.target as HTMLElement).style.opacity = '0';
          (entry.target as HTMLElement).style.transform = 'translateY(24px) scale(1)';
        }
      });
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
  <section ref={sectionRef} id="museu-edit" className="py-12 bg-white dark:bg-[#140F1E] transition-colors duration-300 opacity-0">
      <div className="w-full px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4 font-playfair">Edição Antes e Depois</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-playfair">
            Veja a diferença da edição na foto do museu arrastando a régua abaixo.
          </p>
        </div>
        <BeforeAfterSlider beforeSrc="/ImagemMuseu.JPG" afterSrc="/Museu.jpeg" beforeLabel="Antes" afterLabel="Depois" />
      </div>
    </section>
  );
};

export default MuseuEditSection;
