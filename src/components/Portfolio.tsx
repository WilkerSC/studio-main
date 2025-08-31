import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  // Ref para grid de imagens
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    
    { id: 9, src: '/Foto_5.JPG', category: 'portrait' },
    { id: 7, src: '/Cachorro2..JPG', category: 'portrait' },
    { id: 10, src: '/Foto_6.JPG', category: 'portrait' },
    { id: 12, src: '/Foto1_1.JPG', category: 'portrait' },
    { id: 11, src: '/Foto_7.JPG', category: 'portrait' },
    { id: 26, src: '/IMG_2067.JPG', category: 'portrait' },
  ];


  const filteredImages = images;
  // Transição de scroll removida para otimização

  // Ativa navegação por teclado no lightbox
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && selectedIndex !== null && selectedIndex > 0) {
        const prevIndex = selectedIndex - 1;
        setSelectedImage(filteredImages[prevIndex].src);
        setSelectedIndex(prevIndex);
      }
      if (e.key === 'ArrowRight' && selectedIndex !== null && selectedIndex < filteredImages.length - 1) {
        const nextIndex = selectedIndex + 1;
        setSelectedImage(filteredImages[nextIndex].src);
        setSelectedIndex(nextIndex);
      }
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setSelectedIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, filteredImages]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-[#181622] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-900 dark:text-white mb-4">Portfólio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uma seleção cuidadosa dos meus trabalhos mais marcantes
          </p>
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
                         transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_22px_48px_-12px_rgba(147,51,234,0.55)]"
            >
              <div className="aspect-[3/4] w-full">
                <img
                  src={image.src}
                  
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-300 group-hover:scale-110"
                  draggable={false}
                  onContextMenu={e => e.preventDefault()}
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:shadow-[0_0_32px_8px_rgba(147,51,234,0.35)] group-hover:bg-purple-700/10 transition-all duration-300" />
              <div className="pointer-events-none absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-lg">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-8 backdrop-blur-sm">
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Left Arrow - posição fixa */}
              {selectedIndex !== null && selectedIndex > 0 && (
                <button
                  onClick={() => {
                    const prevIndex = selectedIndex - 1;
                    setSelectedImage(filteredImages[prevIndex].src);
                    setSelectedIndex(prevIndex);
                  }}
                  className="fixed left-12 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-purple-700/60 transition-colors z-50"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={40} />
                </button>
              )}
              {/* Right Arrow - posição fixa */}
              {selectedIndex !== null && selectedIndex < filteredImages.length - 1 && (
                <button
                  onClick={() => {
                    const nextIndex = selectedIndex + 1;
                    setSelectedImage(filteredImages[nextIndex].src);
                    setSelectedIndex(nextIndex);
                  }}
                  className="fixed right-12 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-purple-700/60 transition-colors z-50"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={40} />
                </button>
              )}
              <img src={selectedImage} alt="Portfolio Image" style={{ width: 'auto', height: 'auto', maxWidth: '100vw', maxHeight: '90vh' }} />
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