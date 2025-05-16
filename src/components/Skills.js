import React, { useState, useEffect, useCallback } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJs, 
  faReact, 
  faNodeJs, 
  faHtml5, 
  faCss3Alt, 
  faPython,
  faCuttlefish,
  faApple
} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  // Throttle function to improve performance
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // Memoize the mousemove handler with useCallback
  const handleMouseMove = useCallback(
    throttle((e) => {
      const section = document.querySelector('.skills-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
      // Update cursor position
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    }, 10),
    []
  );

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const handleMouseEnter = () => {
      cursor.classList.add('hover');
      setCursorHover(true);
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
      setCursorHover(false);
    };

    // Mobile check
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    // Only add event listeners on non-mobile devices
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      const skillIcons = document.querySelectorAll('.skill-icon');
      skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', handleMouseEnter);
        icon.addEventListener('mouseleave', handleMouseLeave);
      });
    } else {
      // Hide cursor on mobile
      cursor.style.display = 'none';
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      const skillIcons = document.querySelectorAll('.skill-icon');
      skillIcons.forEach(icon => {
        icon.removeEventListener('mouseenter', handleMouseEnter);
        icon.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.removeChild(cursor);
    };
  }, [handleMouseMove]);

  const skills = [
    { name: 'JavaScript', icon: faJs, color: '#F7DF1E' },
    { name: 'React', icon: faReact, color: '#61DAFB' },
    { name: 'Node.js', icon: faNodeJs, color: '#339933' },
    { name: 'Python', icon: faPython, color: '#3776AB' },
    { name: 'HTML5', icon: faHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: faCss3Alt, color: '#1572B6' },
    { name: 'C#', icon: faCuttlefish, color: '#239120' },
    { name: 'macOS', icon: faApple, color: '#ffffff' },
    { 
      name: 'Photoshop',
      customIcon: true,
      svg: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
      color: '#31A8FF'
    },
    { 
      name: 'Premiere Pro',
      customIcon: true,
      svg: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
      color: '#9999FF'
    }
  ];

  const renderSkillIcon = (skill, index) => (
    <div 
      className="skill-icon" 
      key={index}
      style={{
        '--icon-color': skill.color,
        '--delay': `${index * 0.05}s`
      }}
    >
      <div className="skill-icon-inner">
        {skill.customIcon ? (
          <img src={skill.svg} alt={skill.name} className="custom-icon" />
        ) : (
          <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} />
        )}
        <span>{skill.name}</span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div 
        className="spotlight"
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        }}
      ></div>
      <div className="skills-content">
        <h2 className="section-title">Neler Yapabilirim?</h2>
        <div className="skills-container">
          {skills.map((skill, index) => renderSkillIcon(skill, index))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 