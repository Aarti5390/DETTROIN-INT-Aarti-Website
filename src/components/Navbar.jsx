// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import PavnaLogo from '../assets/PavnaLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Management', href: '#management' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <PavnaLogo height={50} scrolled={isScrolled} />
        </a>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta">Admissions</a>
        </li>
      </ul>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;