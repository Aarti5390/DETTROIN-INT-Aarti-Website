import React from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-badge">✦ EST. 1998</span>
        <h1>
          Nurturing Future Leaders Through <br />
          <span>Holistic Education</span>
        </h1>
        <p>
          Pavna School, Aligarh - Where excellence meets innovation. 
          Join us in shaping young minds for a brighter tomorrow.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn-primary">
            Discover More <FaArrowRight style={{ marginLeft: '8px' }} />
          </a>
          <a href="#offerings" className="btn-secondary">
            <FaPlay style={{ marginRight: '8px' }} /> Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;