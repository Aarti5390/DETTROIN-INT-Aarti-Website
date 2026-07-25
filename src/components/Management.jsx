// src/components/Management.jsx
import React from 'react';
import { FaUserTie, FaUserGraduate, FaUserMd } from 'react-icons/fa';
import { images } from '../assets/images';

const Management = () => {
  const managementData = [
    { name: 'Shri Pawan Jain', role: 'Founder, Pavna Group', icon: <FaUserTie /> },
    { name: 'Dr. Ritu Jain', role: 'Director, Academics', icon: <FaUserGraduate /> },
    { name: 'Mr. Anil Sharma', role: 'Principal', icon: <FaUserTie /> },
    { name: 'Ms. Priya Singh', role: 'Head of Operations', icon: <FaUserMd /> },
  ];

  return (
    <section id="management" className="management">
      <div className="section-header">
        <span className="subtitle">✦ Leadership</span>
        <h2>School Board of Management</h2>
        <p>Guiding Pavna School towards excellence</p>
      </div>
      <div className="management-grid">
        {managementData.map((member, index) => (
          <div className="guest-card" key={index}>
            <div className="guest-icon">{member.icon}</div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Management;