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
    // Reference to the contact section
    const contactSection = contactSectionRef.current;
    if (!contactSection) return;
    
    // Create animation container
    const animationContainer = document.createElement('div');
    animationContainer.className = 'contact-animation';
    contactSection.appendChild(animationContainer);
    
    // Create moon
    createMoon(animationContainer);
    
    // Create lamps
    createLamp(animationContainer, '15%', '10%', 1, 0);
    createLamp(animationContainer, '85%', '15%', 0.9, -2);
    createLamp(animationContainer, '75%', '85%', 0.8, -4);
    createLamp(animationContainer, '5%', '80%', 0.7, -6);
    
    // Create stars
    for (let i = 0; i < 40; i++) {
      createStar(animationContainer);
    }
    
    // Create sparkles
    for (let i = 0; i < 30; i++) {
      createSparkle(animationContainer);
    }
    
    // Create initial rocket
    createRocket(animationContainer);
    
    // Create a new rocket every 15 seconds
    const rocketInterval = setInterval(() => {
      createRocket(animationContainer);
    }, 15000);
    
    // Cleanup function
    return () => {
      clearInterval(rocketInterval);
      if (contactSection.contains(animationContainer)) {
        contactSection.removeChild(animationContainer);
      }
    };
  }, []);

  // Function to create moon
  const createMoon = (parent) => {
    const moon = document.createElement('div');
    moon.className = 'contact-moon';
    parent.appendChild(moon);
  };

  // Function to create lamp
  const createLamp = (parent, left, top, scale, delay) => {
    const lamp = document.createElement('div');
    lamp.className = 'contact-lamp';
    lamp.style.left = left;
    lamp.style.top = top;
    lamp.style.transform = `scale(${scale})`;
    lamp.style.animationDelay = `${delay}s`;
    
    // Create lamp chain
    const chain = document.createElement('div');
    chain.className = 'lamp-chain';
    lamp.appendChild(chain);
    
    // Create lamp top
    const lampTop = document.createElement('div');
    lampTop.className = 'lamp-top';
    lamp.appendChild(lampTop);
    
    // Create lamp body
    const lampBody = document.createElement('div');
    lampBody.className = 'lamp-body';
    lamp.appendChild(lampBody);
    
    // Create lamp light
    const lampLight = document.createElement('div');
    lampLight.className = 'lamp-light';
    lampBody.appendChild(lampLight);
    
    parent.appendChild(lamp);
  };

  // Function to create star
  const createStar = (parent) => {
    const star = document.createElement('div');
    star.className = 'contact-star';
    
    // Randomize properties
    const size = Math.random() * 3 + 1; // 1-4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 4 + 3}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    parent.appendChild(star);
  };

  // Function to create sparkle
  const createSparkle = (parent) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'contact-sparkle';
    
    // Randomize properties
    const size = Math.random() * 4 + 2; // 2-6px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    
    parent.appendChild(sparkle);
  };

  // Function to create rocket
  const createRocket = (parent) => {
    const rocket = document.createElement('div');
    rocket.className = 'contact-rocket';
    
    // Random vertical position
    rocket.style.top = `${Math.random() * 50 + 20}%`;
    
    // Create rocket body
    const rocketBody = document.createElement('div');
    rocketBody.className = 'rocket-body';
    
    // Create window
    const rocketWindow = document.createElement('div');
    rocketWindow.className = 'rocket-window';
    rocketBody.appendChild(rocketWindow);
    
    // Create fins
    const leftFin = document.createElement('div');
    leftFin.className = 'rocket-fin left';
    rocketBody.appendChild(leftFin);
    
    const rightFin = document.createElement('div');
    rightFin.className = 'rocket-fin right';
    rocketBody.appendChild(rightFin);
    
    // Create flame
    const flame = document.createElement('div');
    flame.className = 'rocket-flame';
    rocketBody.appendChild(flame);
    
    rocket.appendChild(rocketBody);
    parent.appendChild(rocket);
    
    // Remove rocket after animation completes
    setTimeout(() => {
      if (parent.contains(rocket)) {
        parent.removeChild(rocket);
      }
    }, 15000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setLoading(true);
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_k85n6kh'; 
    const templateId = 'template_wget62i'; 
    const publicKey = 'Yzdg3Mr9jbkLavMsX';
    
    // Create template parameters - these names must match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    // Use sendForm when you want to send the actual form
    // Use send when you want to send custom parameters
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        toast.success('Your message has been sent! We\'ll get back to you soon.');
        console.log('EmailJS success:', result.text);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Create celebration effect
        const contactContainer = document.querySelector('.contact-container');
        if (contactContainer) {
          contactContainer.style.animation = 'success-pulse 1.5s';
          setTimeout(() => {
            contactContainer.style.animation = '';
          }, 1500);
          
          // Create extra sparkles for celebration
          const animationContainer = document.querySelector('.contact-animation');
          if (animationContainer) {
            for (let i = 0; i < 20; i++) {
              createSparkle(animationContainer);
            }
          }
        }
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-section" ref={contactSectionRef}>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group floating-label">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Your Name</label>
              <span className="focus-border"></span>
              <i className="input-icon far fa-user"></i>
            </div>
            
            <div className="form-group floating-label">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email Address</label>
              <span className="focus-border"></span>
              <i className="input-icon far fa-envelope"></i>
            </div>
          </div>
          
          <div className="form-group floating-label">
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder=" "
              value={formData.subject}
              onChange={handleChange}
            />
            <label htmlFor="subject">Subject</label>
            <span className="focus-border"></span>
            <i className="input-icon far fa-sticky-note"></i>
          </div>
          
          <div className="form-group floating-label">
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder=" "
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="message">Your Message</label>
            <span className="focus-border"></span>
            <i className="input-icon far fa-comment-dots"></i>
          </div>
          
          <button type="submit" className="send-button" disabled={loading}>
            <span>
              {loading ? 'Sending...' : 'Send Message'}
              <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;