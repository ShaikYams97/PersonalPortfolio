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
            
            // Create stars
            for (let i = 0; i < 30; i++) {
                createStar(footerBg);
            }
            
            // Create moon
            createMoon(footerBg);
            
            // Create Ramadan lamp
            createRamadanLamp(footerBg);
            
            // Create rocket
            createRocket(footerBg);
        }
        
        function createSparkle(parent) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('footer-sparkle');
            
            // Randomize properties
            const size = Math.random() * 4 + 2; // 2-6px
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            sparkle.style.left = `${Math.random() * 100}%`;
            sparkle.style.top = `${Math.random() * 100}%`;
            sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
            sparkle.style.animationDelay = `${Math.random() * 5}s`;
            
            parent.appendChild(sparkle);
        }
        
        function createStar(parent) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Randomize properties
            const size = Math.random() * 3 + 1; // 1-4px
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 70}%`; // Keep stars in upper area
            star.style.animationDuration = `${Math.random() * 4 + 3}s`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            
            parent.appendChild(star);
        }
        
        function createMoon(parent) {
            const moon = document.createElement('div');
            moon.classList.add('moon');
            parent.appendChild(moon);
        }
        
        function createRamadanLamp(parent) {
            // Create lamp container
            const lamp = document.createElement('div');
            lamp.classList.add('ramadan-lamp');
            
            // Create lamp chain
            const chain = document.createElement('div');
            chain.classList.add('lamp-chain');
            lamp.appendChild(chain);
            
            // Create lamp top
            const lampTop = document.createElement('div');
            lampTop.classList.add('lamp-top');
            lamp.appendChild(lampTop);
            
            // Create lamp body
            const lampBody = document.createElement('div');
            lampBody.classList.add('lamp-body');
            lamp.appendChild(lampBody);
            
            // Create lamp light
            const lampLight = document.createElement('div');
            lampLight.classList.add('lamp-light');
            lampBody.appendChild(lampLight);
            
            parent.appendChild(lamp);
            
            // Create more lamps in different positions
            const lamp2 = lamp.cloneNode(true);
            lamp2.style.left = "30%";
            lamp2.style.top = "15%";
            lamp2.style.transform = "scale(0.85)";
            lamp2.style.animationDelay = "-2s";
            parent.appendChild(lamp2);
            
            const lamp3 = lamp.cloneNode(true);
            lamp3.style.left = "65%";
            lamp3.style.top = "25%";
            lamp3.style.transform = "scale(0.75)";
            lamp3.style.animationDelay = "-4s";
            parent.appendChild(lamp3);
        }
        
        function createRocket(parent) {
            // Create rocket every 20 seconds
            const createNewRocket = () => {
                const rocket = document.createElement('div');
                rocket.classList.add('rocket');
                
                // Random vertical position
                rocket.style.top = `${Math.random() * 50 + 20}%`;
                
                // Create rocket body
                const rocketBody = document.createElement('div');
                rocketBody.classList.add('rocket-body');
                
                // Create window
                const rocketWindow = document.createElement('div');
                rocketWindow.classList.add('rocket-window');
                rocketBody.appendChild(rocketWindow);
                
                // Create fins
                const leftFin = document.createElement('div');
                leftFin.classList.add('rocket-fin', 'left');
                rocketBody.appendChild(leftFin);
                
                const rightFin = document.createElement('div');
                rightFin.classList.add('rocket-fin', 'right');
                rocketBody.appendChild(rightFin);
                
                // Create flame
                const flame = document.createElement('div');
                flame.classList.add('rocket-flame');
                rocketBody.appendChild(flame);
                
                rocket.appendChild(rocketBody);
                parent.appendChild(rocket);
                
                // Remove rocket after animation completes
                setTimeout(() => {
                    rocket.remove();
                }, 15000);
            };
            
            // Create initial rocket
            createNewRocket();
            
            // Create new rocket every 20 seconds
            setInterval(createNewRocket, 20000);
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
            
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => star.remove());
            
            const moons = document.querySelectorAll('.moon');
            moons.forEach(moon => moon.remove());
            
            const lamps = document.querySelectorAll('.ramadan-lamp');
            lamps.forEach(lamp => lamp.remove());
            
            const rockets = document.querySelectorAll('.rocket');
            rockets.forEach(rocket => rocket.remove());
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-animation">
                {/* Elements will be added dynamically via JavaScript */}
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