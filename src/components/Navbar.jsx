import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        Shaik Yams
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="India Flag"
          width="30"
          height="20"
          style={{ marginLeft: '10px', verticalAlign: 'middle' }}
        />
      </div>

      {/* Hamburger Menu */}
      <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Me</Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
        </li>
        <li>
          <Link to="/experience" onClick={() => setIsMenuOpen(false)}>Experience</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
        </li>
        <li className="nav-item-highlight">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;