import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Cloud, Code, Home, User, Terminal, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when nav item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getIcon = (section) => {
    switch(section) {
      case 'home': return <Home size={18} />;
      case 'about': return <User size={18} />;
      case 'skills': return <Code size={18} />;
      case 'experience': return <Briefcase size={18} />;
      case 'projects': return <Terminal size={18} />;
      case 'contact': return <Mail size={18} />;
      default: return null;
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <Cloud size={24} className="logo-icon" />
            <span className="logo-text">Shaik<span className="logo-accent">Yams</span></span>
            <div className="logo-flag">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                alt="India Flag"
                width="24"
                height="16"
              />
            </div>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {['home', 'about', 'skills', 'experience', 'projects'].map((section) => (
              <li key={section} className={activeSection === section ? 'active' : ''}>
                <Link to={section === 'home' ? '/' : `/${section}`} onClick={closeMenu}>
                  <span className="nav-icon">{getIcon(section)}</span>
                  <span className="nav-text">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                  <span className="nav-indicator"></span>
                </Link>
              </li>
            ))}
            <li className="contact-button">
              <Link to="/contact" onClick={closeMenu}>
                <Mail size={18} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;