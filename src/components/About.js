import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">Ben Kimim?</h2>
        <div className="about-text">
          <div className="text-content glass">
            <p>
              Küçük yaşlardan beri bilgisayar ve teknoloji ile iç içe geçmişimdir.C# python JavaScript Java HTML CSS dillerini MATLAB ve QtDesigner uygulamalarını temel seviyede bilmekteyim.
            </p>
            <p>
              Bunların dışında kendim hobi olarak Photoshop,Premiere Pro gibi editörleri amatör seviyede kullanıyorum.Fusion360 ile 3D tasarımlar yapıyorum.QtDesigner uygulaması ile python tabanlı frontend geliştiriyorum.
              Ayrıca hobi olarak resim çizmeyi matematik ve geometri ile uğraşmaktan keyif alıyorum.Tabi tüm bunları yaparken bir taraftan da bilek güreşi sporuyla ilgileniyorum.
            </p>
          </div>
          <div className="experience-cards">
            <div className="exp-card glass">
              <span className="exp-number gradient-text">Öğrenim</span>
              <span className="exp-label">2.Sınıf Bilgisayar Mühendisliği Öğrencisi</span>
             </div>
            <div className="exp-card glass">
              <span className="exp-number gradient-text">Okul</span>
              <span className="exp-label">Balıkesir Üniversitesi</span>
            </div>
            <div className="exp-card glass">
              <span className="exp-number gradient-text">Deneyim</span>
              <span className="exp-label">Temel Düzey</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 