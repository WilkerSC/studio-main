import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;