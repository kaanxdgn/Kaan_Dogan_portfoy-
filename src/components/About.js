import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  // Reference to detect when cards are in view
  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Reference to detect when text content is in view
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants for cards
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // Even cards from left, odd from right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,  // Increased duration
        ease: "easeOut"
      }
    }
  };

  // Animation variant for text content
  const textVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.0,  // Increased duration
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">Ben Kimim?</h2>
        <div className="about-text">
          <motion.div 
            className="text-content glass"
            ref={textRef}
            variants={textVariant}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
          >
            <p>
              Küçük yaşlardan beri bilgisayar ve teknoloji ile iç içe geçmişimdir.C# python JavaScript Java HTML CSS dillerini MATLAB ve QtDesigner uygulamalarını temel seviyede bilmekteyim.
            </p>
            <p>
              Bunların dışında kendim hobi olarak Photoshop,Premiere Pro gibi editörleri amatör seviyede kullanıyorum.Fusion360 ile 3D tasarımlar yapıyorum.QtDesigner uygulaması ile python tabanlı frontend geliştiriyorum.
              Ayrıca hobi olarak resim çizmeyi matematik ve geometri ile uğraşmaktan keyif alıyorum.Tabi tüm bunları yaparken bir taraftan da bilek güreşi sporuyla ilgileniyorum.
            </p>
          </motion.div>
          <div className="experience-cards" ref={cardsRef}>
            <motion.div 
              className="exp-card glass"
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}  // Increased delay
            >
              <span className="exp-number gradient-text">Öğrenim</span>
              <span className="exp-label">2.Sınıf Bilgisayar Mühendisliği Öğrencisi</span>
            </motion.div>
            <motion.div 
              className="exp-card glass"
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}  // Increased delay
            >
              <span className="exp-number gradient-text">Okul</span>
              <span className="exp-label">Balıkesir Üniversitesi</span>
            </motion.div>
            <motion.div 
              className="exp-card glass"
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              transition={{ delay: 0.9 }}  // Increased delay
            >
              <span className="exp-number gradient-text">Deneyim</span>
              <span className="exp-label">Temel Düzey</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 