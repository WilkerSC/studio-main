import React from 'react';
import { Instagram, Facebook, Twitter, Camera } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div 
              onClick={scrollToTop}
              className="text-3xl font-bold mb-4 cursor-pointer hover:text-purple-400 transition-colors inline-block"
            >
              STUDIO
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              Fotógrafo profissional especializado em capturar momentos únicos e emocionantes. 
              Cada imagem conta uma história, cada projeto é uma obra de arte.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/lc.filmsx/"
                className="text-gray-300 hover:text-purple-400 transition-colors p-2 bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg"
              >                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 bg-gray-800 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Portfólio', 'Sobre', 'Serviços', 'Contato'].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(['portfolio', 'about', 'services', 'contact'][index]);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 dark:text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>Retratos Profissionais</li>
              <li>Casamentos</li>
              <li>Eventos Familiares</li>
              <li>Fotografia Corporativa</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 STUDIO. Todos os direitos reservados.
          </div>
          <div className="flex items-center text-gray-300 dark:text-gray-400 text-sm">
            <Camera className="w-4 h-4 mr-2" />
            <span>Criado com paixão pela fotografia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;