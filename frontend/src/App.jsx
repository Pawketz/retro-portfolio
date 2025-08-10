import { useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
