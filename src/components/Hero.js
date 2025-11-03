import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);
  const greetingRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const text = "Merhaba, benim adım";
    const greetingElement = greetingRef.current;
    let index = 0;

    const typeText = () => {
      if (index < text.length) {
        greetingElement.textContent = text.slice(0, index + 1) + '|';
        index++;
        setTimeout(typeText, 100); // Her harf için 100ms bekle
      } else {
        greetingElement.textContent = text;
        // Cursor yanıp sönme efekti
        let showCursor = true;
        setInterval(() => {
          greetingElement.textContent = text + (showCursor ? '|' : '');
          showCursor = !showCursor;
        }, 500);
      }
    };

    typeText();
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>
      <div className="hero-content">
        <p ref={greetingRef} className="hero-greeting"></p>
        <h1 className="hero-title">
          <span className="gradient-text">Muhammet Kaan Doğan</span>
        </h1>
        <h2 className="hero-subtitle">Bilgisayar Mühendisliği Öğrencisi</h2>
        <p className="hero-description">
          Balıkesir Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.Yazılım geliştirmek algoritma kurmaktan keyif alıyorum.
        </p>
        <div className="hero-buttons">
          <button className="gradient-border glass" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            İletişime Geç
          </button>
        </div>
      </div>
      <div className="profile-photo-container">
        <div className="profile-photo-wrapper">
          <img 
            src="/profile-photo.png"
            alt="Profile" 
            className="profile-photo" 
          />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <p>Aşağı kaydır</p>
      </div>
    </section>
  );
}

export default Hero; 