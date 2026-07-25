
import React, { useEffect, useRef } from 'react';
import { FaArrowRight, FaPlay, FaChevronDown } from 'react-icons/fa';
import { images } from '../assets/images';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    
    const container = heroRef.current;
    if (!container) return;

    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: rgba(201, 168, 76, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particle-float ${Math.random() * 10 + 10}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        pointer-events: none;
      `;
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <section 
      id="home" 
      className="hero"
      ref={heroRef}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.85), rgba(26, 60, 110, 0.8)), url(${images.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
    
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(201, 168, 76, 0.05), rgba(26, 60, 110, 0.1))',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 15s ease-in-out infinite',
      }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <span className="hero-badge animate-on-scroll">
          ✦ EST. 1998 • 28+ Years of Excellence
        </span>
        
        <h1 className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          Nurturing Future Leaders Through <br />
          <span className="gradient-text">Holistic Education</span>
        </h1>
        
        <p className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
          Pavna School, Aligarh - Where excellence meets innovation. 
          Join us in shaping young minds for a brighter tomorrow.
        </p>
        
        <div className="hero-buttons animate-on-scroll" style={{ animationDelay: '0.6s' }}>
          <a href="#about" className="btn-primary glow-gold">
            Discover More <FaArrowRight style={{ marginLeft: '8px' }} />
          </a>
          <a href="#offerings" className="btn-secondary">
            <FaPlay style={{ marginRight: '8px' }} /> Our Programs
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" style={{ marginTop: '4rem' }}>
          <a href="#stats" style={{ color: 'white', opacity: 0.6, textDecoration: 'none' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Scroll to Explore
              </span>
              <FaChevronDown style={{ 
                animation: 'scroll-bounce 2s ease-in-out infinite' 
              }} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;