import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
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
    
    const animationContainer = document.createElement('div');
    animationContainer.className = 'contact-animation-bg-white';
    contactSection.appendChild(animationContainer);
    
    for (let i = 0; i < 10; i++) {
      createFloatingCircle(animationContainer);
    }
    
    for (let i = 0; i < 40; i++) {
      createSparkle(animationContainer);
    }
    
    for (let i = 0; i < 5; i++) {
      createGradientBlob(animationContainer);
    }
    
    createWaveEffect(animationContainer);
    createFloatingEmojis(animationContainer);
    
    return () => {
      if (contactSection.contains(animationContainer)) {
        contactSection.removeChild(animationContainer);
      }
    };
  }, []);

  const createFloatingCircle = (parent) => {
    const circle = document.createElement('div');
    circle.className = 'floating-circle';
    
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.top = `${Math.random() * 100}%`;
    circle.style.animationDuration = `${Math.random() * 8 + 10}s`;
    circle.style.animationDelay = `${Math.random() * 3}s`;
    
    const size = Math.random() * 60 + 40;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    parent.appendChild(circle);
  };

  const createSparkle = (parent) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    
    const size = Math.random() * 4 + 2;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    parent.appendChild(sparkle);
  };

  const createGradientBlob = (parent) => {
    const blob = document.createElement('div');
    blob.className = 'gradient-blob';
    
    blob.style.left = `${Math.random() * 100}%`;
    blob.style.top = `${Math.random() * 100}%`;
    blob.style.animationDuration = `${Math.random() * 10 + 15}s`;
    blob.style.animationDelay = `${Math.random() * 5}s`;
    
    const size = Math.random() * 200 + 150;
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;
    
    parent.appendChild(blob);
  };

  const createWaveEffect = (parent) => {
    const wave = document.createElement('div');
    wave.className = 'wave-effect';
    parent.appendChild(wave);
  };

  const createFloatingEmojis = (parent) => {
    const emojis = ['✨', '💫', '🌟', '⭐', '💝', '🎨'];
    
    emojis.forEach((emoji, index) => {
      const emojiElement = document.createElement('div');
      emojiElement.className = 'floating-emoji';
      emojiElement.textContent = emoji;
      
      emojiElement.style.left = `${(index * 16) + Math.random() * 10}%`;
      emojiElement.style.top = `${Math.random() * 80 + 10}%`;
      emojiElement.style.animationDelay = `${index * 0.6}s`;
      
      parent.appendChild(emojiElement);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    
    setLoading(true);
    
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
          theme: "light",
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        const container = document.querySelector('.contact-container-white');
        if (container) {
          container.classList.add('success-animation-white');
          setTimeout(() => {
            container.classList.remove('success-animation-white');
          }, 2000);
          
          const animationBg = document.querySelector('.contact-animation-bg-white');
          if (animationBg) {
            for (let i = 0; i < 40; i++) {
              createConfetti(animationBg);
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
          theme: "light",
        });
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createConfetti = (parent) => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#f5576c', '#00f2fe'];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    parent.appendChild(confetti);
    
    setTimeout(() => {
      if (parent.contains(confetti)) {
        parent.removeChild(confetti);
      }
    }, 3000);
  };

  return (
    <div className="contact-section-white" ref={contactSectionRef}>
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
        theme="light"
      />
      
      <div className="contact-container-white">
        <div className="header-section-white">
          <div className="decorative-element top-left"></div>
          <div className="decorative-element top-right"></div>
          
          <h2 className="section-title-white">
            <span className="title-main">Let's Connect</span>
            <span className="title-sub">& Create Magic Together</span>
          </h2>
          <p className="section-subtitle-white">
            Have a project in mind? I'd love to hear about it. Send me a message and let's make something incredible.
          </p>
        </div>
        
        <div className="contact-form-white">
          <div className="form-row">
            <div className="form-group-white">
              <div className="input-container">
                <span className="input-icon-white">👤</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input-white"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="form-label-white">Full Name</label>
                <div className="input-border"></div>
              </div>
            </div>
            
            <div className="form-group-white">
              <div className="input-container">
                <span className="input-icon-white">✉️</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input-white"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="form-label-white">Email Address</label>
                <div className="input-border"></div>
              </div>
            </div>
          </div>
          
          <div className="form-group-white">
            <div className="input-container">
              <span className="input-icon-white">💡</span>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input-white"
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="subject" className="form-label-white">Subject (Optional)</label>
              <div className="input-border"></div>
            </div>
          </div>
          
          <div className="form-group-white">
            <div className="input-container">
              <span className="input-icon-white textarea-icon">💬</span>
              <textarea
                id="message"
                name="message"
                className="form-input-white form-textarea-white"
                placeholder=" "
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message" className="form-label-white textarea-label">Your Message</label>
              <div className="input-border"></div>
            </div>
          </div>
          
          <button type="button" onClick={handleSubmit} className="submit-btn-white" disabled={loading}>
            <span className="btn-content-white">
              <span className="btn-text-white">
                {loading ? 'Sending...' : 'Send Message'}
              </span>
              <span className="btn-icon-white">
                {loading ? '⏳' : '🚀'}
              </span>
            </span>
            <div className="btn-glow"></div>
          </button>
        </div>
        
        <div className="contact-footer">
          <div className="footer-item">
            <span className="footer-icon">⚡</span>
            <span className="footer-text">Quick Response</span>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-item">
            <span className="footer-icon">🎯</span>
            <span className="footer-text">Goal Oriented</span>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-item">
            <span className="footer-icon">💼</span>
            <span className="footer-text">Professional</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;