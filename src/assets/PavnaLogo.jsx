// src/assets/PavnaLogo.jsx
import React from 'react';

const PavnaLogo = ({ height = 50, scrolled = false }) => {
  const textColor = scrolled ? '#1a3c6e' : '#c9a84c';
  const subColor = scrolled ? '#666' : '#ffffff';

  return (
    <svg 
      height={height} 
      viewBox="0 0 200 60" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Background (optional - remove for transparent) */}
      {/* <rect width="200" height="60" rx="8" fill="#1a3c6e"/> */}
      
      {/* School Building Icon */}
      <g transform="translate(0, 5)">
        <rect x="5" y="15" width="30" height="35" rx="2" fill={textColor} opacity="0.2"/>
        <rect x="10" y="10" width="20" height="40" rx="1" fill={textColor} opacity="0.3"/>
        <rect x="15" y="20" width="10" height="15" fill={textColor} opacity="0.6"/>
        <polygon points="5,15 20,2 35,15" fill={textColor} opacity="0.8"/>
        <rect x="8" y="25" width="4" height="4" fill={textColor}/>
        <rect x="28" y="25" width="4" height="4" fill={textColor}/>
      </g>
      
      {/* School Name */}
      <text 
        x="50" 
        y="30" 
        fontFamily="Arial, sans-serif" 
        fontSize="22" 
        fontWeight="bold" 
        fill={textColor}
        letterSpacing="2"
      >
        PAVNA
      </text>
      
      {/* Tagline */}
      <text 
        x="50" 
        y="48" 
        fontFamily="Arial, sans-serif" 
        fontSize="10" 
        fill={subColor}
        letterSpacing="3"
        opacity="0.8"
      >
        SCHOOL OF EXCELLENCE
      </text>
    </svg>
  );
};

export default PavnaLogo;