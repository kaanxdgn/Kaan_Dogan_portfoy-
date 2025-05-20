import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faInstagram,
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Reference for detecting when contact grid is in view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1.1,  // Increased duration
        delay: 0.2,     // Added delay
        ease: "easeOut"
      }
    }
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1.1,  // Increased duration
        delay: 0.4,     // Added delay
        ease: "easeOut"
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">İletişim</h2>
        <div className="contact-grid" ref={ref}>
          <motion.div 
            className="contact-info glass"
            variants={leftVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3>Sosyal Medya</h3>
            <p>
              Beraber proje yapmak, uygulama geliştirmek, yeni fikirler paylaşmak için iletişime geçebilirsiniz.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <span className="label">Email</span>
                  <a href="kaan.dogaann26@gmail.com">kaan.dogaann26@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <span className="label">Konum</span>
                  <span>Balıkesir, TR</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <span className="label">Phone</span>
                  <a href="tel:+1234567890">+90 (555) xxx xx xx</a>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/kaanxdgn" className="social-link glass">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com" className="social-link glass">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://x.com/?lang=tr" className="social-link glass">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/xkaanxdx?igsh=a3k5ZGcycmtveGJq&utm_source=qr" className="social-link glass">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/@kaandogan26" className="social-link glass">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </motion.div>
          <motion.form 
            className="contact-form glass" 
            onSubmit={handleSubmit}
            variants={rightVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="form-group">
              <label htmlFor="name">İsim Soyisim</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-button gradient-border ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
            </button>
            {submitStatus && (
              <div className={`submit-status ${submitStatus}`}>
                {submitStatus === 'Başarılı' ? 'Mesaj Başarıyla Gönderildi!' : 'Mesaj Gönderilemedi.'}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 