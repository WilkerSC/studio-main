import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  // Ref para grid de imagens
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { id: 1, src: '/Coraline.jpeg', category: 'portrait',  title: 'Retrato Elegante' },
    { id: 2, src: '/Flor.jpeg', category: 'wedding',   title: 'Momento Único' },
    { id: 3, src: '/Fonte.jpeg', category: 'portrait',  title: 'Expressão Natural' },
    { id: 4, src: '/Foto_Luana.jpeg', category: 'corporate', title: 'Profissionalismo' },
    { id: 5, src: '/Museu.jpeg', category: 'wedding',   title: 'Celebração' },
    { id: 6, src: '/Pinheiro.jpeg', category: 'portrait',  title: 'Intimidade' },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'portrait', label: 'Retratos' },
    { id: 'wedding', label: 'Casamentos' },
    { id: 'corporate', label: 'Corporativo' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
    useEffect(() => {
      const grid = gridRef?.current;
      if (!grid) return;
      const children = Array.from(grid.children);
      // Inicialmente, todos invisíveis
      children.forEach((child) => {
        (child as HTMLElement).style.opacity = '0';
        (child as HTMLElement).style.transform = 'translateY(24px) scale(1)';
      });
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
      children.forEach((child) => {
        observer.observe(child);
      });
      return () => observer.disconnect();
    }, [filteredImages]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-[#181622] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">Portfólio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uma seleção cuidadosa dos meus trabalhos mais marcantes
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 drop-shadow-sm">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-purple-600 text-white shadow-purple-500/25'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* GRID grande */}
  <div ref={gridRef} className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-8 xl:gap-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => {
                setSelectedImage(image.src);
                setSelectedIndex(filteredImages.findIndex(img => img.src === image.src));
              }}
              className="group relative overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-700 cursor-pointer
                         shadow-xl ring-1 ring-black/5 dark:ring-white/10
                         transition-all duration-300 hover:-translate-y-1
                         hover:ring-2 hover:ring-purple-500/60
                         hover:shadow-[0_22px_48px_-12px_rgba(147,51,234,0.55)]"
            >
              <div className="aspect-[3/4] w-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                  draggable={false}
                  onContextMenu={e => e.preventDefault()}
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="pointer-events-none absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.title}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="relative w-full max-w-6xl max-h-[90vh] shadow-2xl rounded-2xl overflow-hidden flex items-center justify-center">
              {/* Left Arrow */}
              {selectedIndex !== null && selectedIndex > 0 && (
                <button
                  onClick={() => {
                    const prevIndex = selectedIndex - 1;
                    setSelectedImage(filteredImages[prevIndex].src);
                    setSelectedIndex(prevIndex);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-purple-700/60 transition-colors z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={40} />
                </button>
              )}
              {/* Right Arrow */}
              {selectedIndex !== null && selectedIndex < filteredImages.length - 1 && (
                <button
                  onClick={() => {
                    const nextIndex = selectedIndex + 1;
                    setSelectedImage(filteredImages[nextIndex].src);
                    setSelectedIndex(nextIndex);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-purple-700/60 transition-colors z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={40} />
                </button>
              )}
              <img src={selectedImage} alt="Portfolio Image" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
              <button
                onClick={() => { setSelectedImage(null); setSelectedIndex(null); }}
                className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
                aria-label="Fechar"
              >
                <X size={40} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;