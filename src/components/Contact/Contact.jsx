import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    const serviceId = 'service_k85n6kh'; const templateId = 'template_wget62i'; const publicKey = 'Yzdg3Mr9jbkLavMsX';
    
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
    <div className="contact-section">
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

export default ContactForm;