import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import MuseuEditSection from './components/MuseuEditSection';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#140F1E] transition-colors duration-300">
        <Header />
        <Hero />
  <Portfolio />
  <MuseuEditSection />
  <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;