import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (targetId) => {
    const target = targetId === 'top' ? 0 : document.getElementById(targetId)?.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetId === 'top' ? -startPosition : target - startPosition;
    const duration = 1000; // Scroll süresi (ms)
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing fonksiyonu (easeInOutCubic)
      const ease = progress => {
        return progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      };

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-brand">
        <a href="#top" onClick={(e) => { e.preventDefault(); smoothScroll('top'); }} className="gradient-text">
          MKD.
        </a>
      </div>
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-links">
        <a href="#top" onClick={(e) => { e.preventDefault(); smoothScroll('top'); }}>
          <span className="link-number">01.</span>
          Anasayfa
        </a>
        <a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('about'); }}>
          <span className="link-number">02.</span>
          Ben Kimim?
        </a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); smoothScroll('skills'); }}>
          <span className="link-number">03.</span>
          Neler Yapabilirim?
        </a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScroll('projects'); }}>
          <span className="link-number">04.</span>
          Portfolyo
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScroll('contact'); }}>
          <span className="link-number">05.</span>
          İletişim
        </a>
      </div>
    </nav>
  );
}

export default Navbar; 