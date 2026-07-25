import React, { useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Offerings from './components/Offerings';
import Management from './components/Management';
import Guests from './components/Guests';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Offerings />
      <Management />
      <Guests />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;