import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', toggleMenu);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        Shaik Yams 
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
          alt="India Flag" 
          width="30" 
          height="20" 
          style={{ marginLeft: '5px', verticalAlign: 'middle' }} 
        />
      </div>

      <button className="menu-toggle">☰</button>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
