import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const contactSectionRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const contactSection = contactSectionRef.current;
    if (!contactSection) return;
    
    // Create animation container
    const animationContainer = document.createElement('div');
    animationContainer.className = 'contact-animation-bg';
    contactSection.appendChild(animationContainer);
    
    // Create floating geometric shapes
    for (let i = 0; i < 8; i++) {
      createFloatingShape(animationContainer);
    }
    
    // Create particle system
    for (let i = 0; i < 50; i++) {
      createParticle(animationContainer);
    }
    
    // Create glowing orbs
    for (let i = 0; i < 6; i++) {
      createGlowingOrb(animationContainer);
    }
    
    // Create energy waves
    createEnergyWave(animationContainer);
    
    // Create floating icons
    createFloatingIcons(animationContainer);
    
    // Cleanup function
    return () => {
      if (contactSection.contains(animationContainer)) {
        contactSection.removeChild(animationContainer);
      }
    };
  }, []);

  // Create floating geometric shapes
  const createFloatingShape = (parent) => {
    const shapes = ['triangle', 'square', 'pentagon', 'hexagon'];
    const shape = document.createElement('div');
    shape.className = `floating-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
    
    // Random positioning and animation
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.animationDuration = `${Math.random() * 10 + 15}s`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    
    const size = Math.random() * 40 + 20;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    
    parent.appendChild(shape);
  };

  // Create particle system
  const createParticle = (parent) => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 8 + 6}s`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    parent.appendChild(particle);
  };

  // Create glowing orbs
  const createGlowingOrb = (parent) => {
    const orb = document.createElement('div');
    orb.className = 'glowing-orb';
    
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.animationDuration = `${Math.random() * 6 + 8}s`;
    orb.style.animationDelay = `${Math.random() * 4}s`;
    
    const size = Math.random() * 60 + 30;
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    
    parent.appendChild(orb);
  };

  // Create energy wave
  const createEnergyWave = (parent) => {
    const wave = document.createElement('div');
    wave.className = 'energy-wave';
    parent.appendChild(wave);
  };

  // Create floating icons
  const createFloatingIcons = (parent) => {
    const icons = ['💼', '🚀', '💡', '⚡', '🎯', '✨'];
    
    icons.forEach((icon, index) => {
      const iconElement = document.createElement('div');
      iconElement.className = 'floating-icon';
      iconElement.textContent = icon;
      
      iconElement.style.left = `${(index * 15) + Math.random() * 10}%`;
      iconElement.style.top = `${Math.random() * 80 + 10}%`;
      iconElement.style.animationDelay = `${index * 0.5}s`;
      
      parent.appendChild(iconElement);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }
    
    setLoading(true);
    
    // Replace with your EmailJS credentials
    const serviceId = 'service_k85n6kh'; 
    const templateId = 'template_wget62i'; 
    const publicKey = 'Yzdg3Mr9jbkLavMsX';
    
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        toast.success('🎉 Message sent successfully! We\'ll be in touch soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Success animation
        const container = document.querySelector('.contact-container');
        if (container) {
          container.classList.add('success-animation');
          setTimeout(() => {
            container.classList.remove('success-animation');
          }, 2000);
          
          // Create celebration particles
          const animationBg = document.querySelector('.contact-animation-bg');
          if (animationBg) {
            for (let i = 0; i < 30; i++) {
              createCelebrationParticle(animationBg);
            }
          }
        }
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again!', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createCelebrationParticle = (parent) => {
    const particle = document.createElement('div');
    particle.className = 'celebration-particle';
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    parent.appendChild(particle);
    
    setTimeout(() => {
      if (parent.contains(particle)) {
        parent.removeChild(particle);
      }
    }, 3000);
  };

  return (
    <div className="contact-section" ref={contactSectionRef}>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <div className="contact-container">
        <div className="header-section">
          <h2 className="section-title">
            <span className="title-gradient">Let's Create</span>
            <span className="title-accent">Something Amazing</span>
          </h2>
          <p className="section-subtitle">
            Ready to bring your vision to life? Drop us a message and let's start building the future together.
          </p>
        </div>
        
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="input-decoration">
                  <span className="input-icon">👤</span>
                </div>
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="input-decoration">
                  <span className="input-icon">📧</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="subject" className="form-label">Subject</label>
              <div className="input-decoration">
                <span className="input-icon">💡</span>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <div className="input-wrapper">
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder=" "
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message" className="form-label">Your Message</label>
              <div className="input-decoration">
                <span className="input-icon">💬</span>
              </div>
            </div>
          </div>
          
          <button type="submit" className="submit-btn" disabled={loading}>
            <span className="btn-content">
              <span className="btn-text">
                {loading ? 'Sending...' : 'Send Message'}
              </span>
              <span className="btn-icon">
                {loading ? '⏳' : '🚀'}
              </span>
            </span>
            <div className="btn-ripple"></div>
          </button>
        </form>
        
        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon">⚡</span>
            <span className="info-text">Lightning fast response</span>
          </div>
          <div className="info-item">
            <span className="info-icon">🎯</span>
            <span className="info-text">Tailored solutions</span>
          </div>
          <div className="info-item">
            <span className="info-icon">🤝</span>
            <span className="info-text">Partnership focused</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;