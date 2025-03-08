import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    useEffect(() => {
        // Get footer element
        const footer = document.querySelector('.footer');
        if (!footer) return;
        
        // Create sparkles
        const footerBg = document.querySelector('.footer-animation');
        if (footerBg) {
            // Create sparkles with varied sizes
            for (let i = 0; i < 50; i++) {
                createSparkle(footerBg);
            }
        }
        
        function createSparkle(parent) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('footer-sparkle');
            
            // Randomize properties
            const size = Math.random() * 5 + 2; // 2-7px
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
            sparkle.style.animationDelay = `${Math.random() * 5}s`;
            
            parent.appendChild(sparkle);
        }
        
        // Add hover trail effect on footer
        footer.addEventListener('mousemove', createTrail);
        
        function createTrail(e) {
            const trail = document.createElement('div');
            trail.classList.add('trail');
            
            // Position relative to footer
            const rect = footer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            trail.style.left = `${x}px`;
            trail.style.top = `${y}px`;
            
            footer.appendChild(trail);
            
            // Remove trail after animation completes
            setTimeout(() => {
                trail.remove();
            }, 1000);
        }
        
        // Add hover effects to social icons
        const socialIcons = document.querySelectorAll('.social-icons a');
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseover', () => {
                // Create burst effect
                for (let i = 0; i < 10; i++) {
                    createBurst(icon);
                }
            });
        });
        
        function createBurst(element) {
            const burst = document.createElement('div');
            burst.classList.add('trail');
            
            const rect = element.getBoundingClientRect();
            const footerRect = footer.getBoundingClientRect();
            
            // Position at center of icon relative to footer
            const x = (rect.left + rect.width/2) - footerRect.left;
            const y = (rect.top + rect.height/2) - footerRect.top;
            
            burst.style.left = `${x}px`;
            burst.style.top = `${y}px`;
            
            footer.appendChild(burst);
            
            setTimeout(() => {
                burst.remove();
            }, 1000);
        }
        
        // Cleanup function
        return () => {
            footer.removeEventListener('mousemove', createTrail);
            const trails = document.querySelectorAll('.trail');
            trails.forEach(trail => trail.remove());
            
            const sparkles = document.querySelectorAll('.footer-sparkle');
            sparkles.forEach(sparkle => sparkle.remove());
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-animation">
                <div className="floating-element float-1"></div>
                <div className="floating-element float-2"></div>
                <div className="floating-element float-3"></div>
                <div className="floating-element float-4"></div>
                {/* Sparkles will be added here by JavaScript */}
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