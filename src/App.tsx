import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import MuseuEditSection from './components/MuseuEditSection';
import About from './components/About';
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
        <Contact />
        <Footer />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}

export default App;