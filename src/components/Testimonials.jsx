// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { images } from '../assets/images';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Class X Student',
      text: 'Pavna School has transformed my child\'s academic journey. The teachers are dedicated, and the holistic approach to education is truly commendable.',
      rating: 5
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Alumni (Batch 2015)',
      text: 'My time at Pavna School laid the foundation for my successful career. The values and skills I learned here are invaluable.',
      rating: 5
    },
    {
      name: 'Mr. Amit Singh',
      role: 'Parent of Class V Student',
      text: 'The sports facilities and co-curricular activities at Pavna are outstanding. My child has developed confidence and leadership skills.',
      rating: 4
    },
    {
      name: 'Ms. Neha Gupta',
      role: 'Teacher (10+ years)',
      text: 'Being part of Pavna School for over a decade has been a rewarding experience. The supportive environment and focus on innovation make it special.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials" style={{
      padding: '5rem 5%',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8d5a3 100%)'
    }}>
      <div className="section-header animate-on-scroll">
        <span className="subtitle">✦ Testimonials</span>
        <h2>What People Say</h2>
        <p>Hear from our parents, alumni, and teachers about their Pavna School experience</p>
      </div>

      <div className="testimonials-container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
      }}>
        <div className="testimonial-card animate-on-scroll" style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          position: 'relative',
          transition: 'all 0.5s ease',
        }}>
          <FaQuoteLeft style={{
            fontSize: '3rem',
            color: 'rgba(201, 168, 76, 0.2)',
            position: 'absolute',
            top: '1.5rem',
            right: '2rem',
          }} />
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                color={i < testimonials[currentIndex].rating ? '#c9a84c' : '#e0e4ea'}
                size={20}
              />
            ))}
          </div>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#3a4254',
            marginBottom: '1.5rem',
            fontStyle: 'italic',
          }}>
            "{testimonials[currentIndex].text}"
          </p>
          
          <div>
            <h4 style={{ color: '#1a3c6e', fontSize: '1.1rem' }}>
              {testimonials[currentIndex].name}
            </h4>
            <p style={{ color: '#7a8294', fontSize: '0.9rem' }}>
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
        }}>
          <button 
            onClick={prevSlide}
            style={{
              padding: '0.8rem 1.2rem',
              borderRadius: '50%',
              border: '2px solid #c9a84c',
              background: 'white',
              color: '#1a3c6e',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c9a84c';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#1a3c6e';
            }}
          >
            <FaChevronLeft />
          </button>
          
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {testimonials.map((_, index) => (
              <span
                key={index}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: index === currentIndex ? '#c9a84c' : '#e0e4ea',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            style={{
              padding: '0.8rem 1.2rem',
              borderRadius: '50%',
              border: '2px solid #c9a84c',
              background: 'white',
              color: '#1a3c6e',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c9a84c';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#1a3c6e';
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;