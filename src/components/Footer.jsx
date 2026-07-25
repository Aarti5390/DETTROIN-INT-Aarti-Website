// src/components/Footer.jsx
import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';
import { images } from '../assets/images';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-grid">
        <div>
          <h3>Pavna School</h3>
          <img 
            src={images.logo} 
            alt="Pavna School Logo" 
            style={{ height: '40px', marginBottom: '1rem' }}
          />
          <p>
            Founded in 1998, Pavna School (formerly DPS Aligarh) is dedicated 
            to providing innovative, world-class education and shaping young 
            minds in a supportive environment.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="#" style={{ color: 'white', opacity: 0.7, fontSize: '1.5rem' }}>
              <FaFacebook />
            </a>
            <a href="#" style={{ color: 'white', opacity: 0.7, fontSize: '1.5rem' }}>
              <FaTwitter />
            </a>
            <a href="#" style={{ color: 'white', opacity: 0.7, fontSize: '1.5rem' }}>
              <FaInstagram />
            </a>
            <a href="#" style={{ color: 'white', opacity: 0.7, fontSize: '1.5rem' }}>
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#offerings">Offerings</a></li>
            <li><a href="#management">Management</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3>Programs</h3>
          <ul className="footer-links">
            <li><a href="#">AI & Robotics</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Boarding</a></li>
            <li><a href="#">Co-Curricular</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <FaMapMarkerAlt /> Aligarh, Uttar Pradesh
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <FaPhone /> +91-XXX-XXX-XXXX
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <FaEnvelope /> info@pavnaschool.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Pavna School, Aligarh. All Rights Reserved. 
          Designed with ❤️ for the Dettroin Internship.
        </p>
      </div>
    </footer>
  );
};

export default Footer;