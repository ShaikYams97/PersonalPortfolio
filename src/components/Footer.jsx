import React from 'react'; 
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';   

const Footer = () => {   
  return (     
    <footer className="footer">       
      <div className="footer-animation">
        <div className="floating-element float-1"></div>
        <div className="floating-element float-2"></div>
        <div className="floating-element float-3"></div>
        <div className="floating-element float-4"></div>
      </div>
      
      <div className="footer-content">         
        <div className="footer-section">           
          <h3>Address</h3>           
          <p>Nellore, Andhra Pradesh, India</p>         
        </div>         
        <div className="footer-section">           
          <h3>Contact</h3>           
          <p>             
            <FaEnvelope /> <a href="mailto:shaikowais47@gmail.com">shaikowais47@gmail.com</a>           
          </p>           
          <p>             
            <FaPhone /> <a href="tel:+918309574762">+91 8309574762</a>           
          </p>         
        </div>         
        <div className="footer-section">           
          <h3>Follow Me</h3>           
          <div className="social-icons">             
            <a href="https://github.com/ShaikYams97" target="_blank" rel="noopener noreferrer">               
              <FaGithub />             
            </a>             
            <a href="https://www.linkedin.com/in/shaik-yams-194097334/" target="_blank" rel="noopener noreferrer">               
              <FaLinkedin />             
            </a>             
            <a href="https://x.com/YamsShaik" target="_blank" rel="noopener noreferrer">               
              <FaTwitter />             
            </a>           
          </div>         
        </div>       
      </div>     
    </footer>   
  ); 
};  

export default Footer;