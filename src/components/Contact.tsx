import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = contactRef.current;
    if (!el) return;
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      content: 'São Paulo, SP - Brasil\nAtendimento em todo território nacional'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      content: '+55 (11) 99999-9999\nWhatsApp disponível'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contato@studio.com.br\nResposta em até 24h'
    }
  ];

  return (
  <section id="contact" className="py-20 bg-white dark:bg-[#140F1E] transition-colors duration-300">
      <div ref={contactRef} className="max-w-7xl mx-auto px-6 lg:px-8 opacity-0">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
            Contato
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pronto para criar algo incrível juntos? Entre em contato para conversarmos sobre seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">
              Vamos conversar
            </h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="text-purple-600 dark:text-purple-400 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg shadow-md">
                <div className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Mensagem enviada com sucesso!</span>
                </div>
                <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                  Entraremos em contato em breve.
                </p>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="portrait">Retratos Profissionais</option>
                  <option value="wedding">Casamentos</option>
                  <option value="family">Eventos Familiares</option>
                  <option value="corporate">Corporativo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Conte-me mais sobre seu projeto, datas, localização e suas expectativas..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-vertical bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-purple-500 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;