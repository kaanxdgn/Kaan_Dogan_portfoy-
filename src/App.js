import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.skill-icon')) {
        cursor.classList.add('hover');
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        if (index < sections.length - 1) {
          const sectionRect = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          const distanceFromTop = sectionRect.top;
          const isInView = distanceFromTop < viewportHeight * 0.6;
          
          if (isInView) {
            section.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseEnter);
    document.body.addEventListener('mouseout', handleMouseLeave);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseEnter);
      document.body.removeEventListener('mouseout', handleMouseLeave);
      if (cursor.parentNode) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
