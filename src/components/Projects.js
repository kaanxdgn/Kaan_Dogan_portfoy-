import React, { useEffect } from 'react';
import './Projects.css';
import { initializeCardTilt } from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  useEffect(() => {
    initializeCardTilt();
  }, []);

  const projects = [
    {
      title: 'Soru Bankası Uygulaması',
      description: 'Basit arayüzlü soru bankası oluşturma uygulaması',
      image: '/birinci.png',
      tags: ['Python', 'QtDesigner','PySide6'],
      demoLink: '#',
      githubLink: 'https://github.com/kaanxdgn/sorubankas-'
    },
    {
      title: 'Metin Düzenleyici',
      description: 'Basit bir metin düzenleme uygulaması',
      image: '/ikinci.png',
      tags: ['Python', 'QtDesigner','Pyside6'],
      demoLink: '#',
      githubLink: 'https://github.com/kaanxdgn/Kelime_islemci'
    },
    {
      title: 'Sporcu Kayıt Sistemi',
      description: 'Merkezi sporcu kayıt ve işlem uygulaması',
      image: '/ucuncu.png',
      tags: ['Python', 'PyQt5','SQLite','PySide6'],
      demoLink: '#',
      githubLink: 'https://github.com/kaanxdgn/sporcukayituygulamasi'
    },
    {
      title: 'Uzaktan Kumandalı Otonom Bot',
      description: 'Uzaktan kumandalı arduino ile yapılmış deniz aracı',
      image: '/dorduncu.png',
      tags: ['Arduino'],
      demoLink: '#',
      
    },
    {
      title: 'Otomatik yangın aracı',
      description: 'Kendisi yangın algılayıp söndüren enerjisini güneş paneliyle güneşten alan yangın aracı',
      image: '/besinci.png',
      tags: ['Arduino'],
      demoLink: '#',
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2 className="section-title">Projelerim</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a href={project.githubLink} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 