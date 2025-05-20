import VanillaTilt from 'vanilla-tilt';

export const initializeCardTilt = () => {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    // Skip initialization if already initialized
    if (card.vanillaTilt) {
      return;
    }
    
    // Tilt efekti
    VanillaTilt.init(card, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.02,
      gyroscope: true,
      perspective: 1000,
    });

    // Mouse takip efekti
    let bounds = card.getBoundingClientRect();
    let mouseLeaveDelay = null;

    const mouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };
      
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      
      // Hareket miktarını mesafeye göre ayarla
      const maxMove = 10;
      const move = {
        x: (center.x / distance) * maxMove,
        y: (center.y / distance) * maxMove
      };

      // Kartı hareket ettir
      card.style.transform = `
        translate3d(${move.x}px, ${move.y}px, 0)
        scale(1.02)
      `;
    };

    const mouseLeave = () => {
      clearTimeout(mouseLeaveDelay);
      
      // Yumuşak geri dönüş animasyonu
      mouseLeaveDelay = setTimeout(() => {
        card.style.transform = 'translate3d(0, 0, 0)';
      }, 100);
    };

    const mouseEnter = () => {
      clearTimeout(mouseLeaveDelay);
      bounds = card.getBoundingClientRect();
    };

    // Event listener'ları ekle
    card.addEventListener('mouseenter', mouseEnter);
    card.addEventListener('mousemove', mouseMove);
    card.addEventListener('mouseleave', mouseLeave);
  });
}; 