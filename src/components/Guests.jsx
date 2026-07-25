import React from 'react';
import { FaUser, FaStar } from 'react-icons/fa';

const Guests = () => {
  const guestsData = [
    { name: 'Dr. A.P.J. Abdul Kalam', title: 'Former President', icon: <FaUser /> },
    { name: 'Sudha Murthy', title: 'Author & Philanthropist', icon: <FaUser /> },
    { name: 'Kapil Dev', title: 'Cricketing Legend', icon: <FaUser /> },
    { name: 'Indra Nooyi', title: 'Business Executive', icon: <FaUser /> },
    { name: 'Rajnath Singh', title: 'Defence Minister of India', icon: <FaUser /> },
    { name: 'Kiran Bedi', title: 'Former IPS Officer', icon: <FaUser /> },
    { name: 'M.S. Dhoni', title: 'Former Captain, Indian Cricket Team', icon: <FaUser /> },
    { name: 'Saina Nehwal', title: 'Olympic Medalist', icon: <FaUser /> },
    { name: 'Mary Kom', title: 'Olympic Medalist', icon: <FaUser /> },
    { name: 'Lal Krishna Advani', title: 'Former Deputy PM of India', icon: <FaUser /> },
    { name: 'Sushil Kumar', title: 'Olympic Medalist Wrestler', icon: <FaUser /> },
    { name: 'Dhanraj Pillay', title: 'Former Captain, Indian Hockey', icon: <FaUser /> },
  ];

  return (
    <section id="guests" className="guests">
      <div className="section-header">
        <span className="subtitle">✦ Distinguished Visitors</span>
        <h2>Guests at Pavna School Legacy</h2>
        <p>Inspiring students to learn, grow and lead</p>
      </div>
      <div className="guests-grid">
        {guestsData.map((guest, index) => (
          <div className="guest-card" key={index}>
            <div className="guest-icon">{guest.icon}</div>
            <h4>{guest.name}</h4>
            <p>{guest.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guests;