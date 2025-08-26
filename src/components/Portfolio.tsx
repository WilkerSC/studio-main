import React, { useState } from 'react';
import { X } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', category: 'portrait',  title: 'Retrato Elegante' },
    { id: 2, src: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', category: 'wedding',   title: 'Momento Único' },
    { id: 3, src: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', category: 'portrait',  title: 'Expressão Natural' },
    { id: 4, src: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', category: 'corporate', title: 'Profissionalismo' },
    { id: 5, src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop', category: 'wedding',   title: 'Celebração' },
    { id: 6, src: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', category: 'portrait',  title: 'Intimidade' },
    { id: 7, src: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop', category: 'corporate', title: 'Liderança' },
    { id: 8, src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',  category: 'wedding',   title: 'Romance' }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'portrait', label: 'Retratos' },
    { id: 'wedding', label: 'Casamentos' },
    { id: 'corporate', label: 'Corporativo' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-8 xl:gap-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
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
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              <img src={selectedImage} alt="Portfolio Image" className="w-full h-auto max-h-[80vh] object-contain rounded-2xl" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white hover:text-purple-400 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
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
