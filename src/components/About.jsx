import React from 'react';
import { FaGraduationCap, FaUsers, FaAward, FaGlobe } from 'react-icons/fa';

const About = () => {
  const features = [
    { icon: <FaGraduationCap />, text: 'World-Class Education' },
    { icon: <FaUsers />, text: 'Expert Faculty' },
    { icon: <FaAward />, text: '28+ Years Legacy' },
    { icon: <FaGlobe />, text: 'Global Standards' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://via.placeholder.com/600x400/1a3c6e/c9a84c?text=Pavna+School+Campus" 
            alt="Pavna School Campus"
          />
        </div>
        <div className="about-content">
          <span className="subtitle">✦ About Us</span>
          <h2>Welcome to Pavna School, Aligarh</h2>
          <p>
            Founded in 1998 by Shri Pawan Jain (Founder, Pavna Group), 
            Pavna School (formerly DPS Aligarh) began as a dream to provide 
            innovative, world-class education, shaping young minds in a 
            supportive environment.
          </p>
          <p>
            We strive to ignite a passion for learning and develop practical 
            skills for a rapidly evolving world. Our cultural tapestry 
            cohesively envelops a nurturing, inclusive community where every 
            student is empowered to achieve their full potential.
          </p>
          <ul className="about-features">
            {features.map((feature, index) => (
              <li key={index}>{feature.icon} {feature.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;