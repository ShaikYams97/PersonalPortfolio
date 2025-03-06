import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_k85n6kh', // Replace with your EmailJS Service ID
      'template_wget62i', // Replace with your EmailJS Template ID
      form.current,
      'zwrgWe1NNWU4o1hiQ' // Replace with your EmailJS User ID
    ) 
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!', {
            position: 'top-center',
            duration: 3000,
            style: {
              background: '#28a745',
              color: '#fff',
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            },
          });
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send the message. Please try again.', {
            position: 'top-center',
            duration: 3000,
            style: {
              background: '#dc3545',
              color: '#fff',
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            },
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="send-button">
          <span>Send Message</span>
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default Contact;