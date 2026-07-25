import React from 'react';
import { 
  FaRobot, 
  FaMusic, 
  FaRunning, 
  FaBrain, 
  FaHeart, 
  FaHome,
  FaTheaterMasks,
  FaMicrophone,
  FaLeaf,
  FaPaintBrush,
  FaFlask,
  FaBasketballBall
} from 'react-icons/fa';

const Offerings = () => {
  const offeringsData = [
    {
      icon: <FaRobot />,
      title: 'AI & Robotics',
      description: 'Design, build, and program intelligent systems through project-based challenges and competitions.'
    },
    {
      icon: <FaTheaterMasks />,
      title: 'Holistic Co-Curricular',
      description: 'Music, robotics, environmental science, drama, debate - developing confidence and new interests.'
    },
    {
      icon: <FaRunning />,
      title: 'State-of-the-Art Sports',
      description: 'Cricket, football, swimming, basketball, tennis, and indoor gym with skilled coaching.'
    },
    {
      icon: <FaBrain />,
      title: 'Holistic Development',
      description: 'Emotional intelligence, life skills, and community responsibility alongside academics.'
    },
    {
      icon: <FaHeart />,
      title: 'SEEL Learning',
      description: 'Social, Emotional, and Experiential Learning framework for personal excellence.'
    },
    {
      icon: <FaHome />,
      title: 'Boarding Life',
      description: 'Home-like environment fostering independence, discipline, and meaningful friendships.'
    }
  ];

  return (
    <section id="offerings" className="offerings">
      <div className="offerings-header">
        <span className="subtitle">✦ Our Programs</span>
        <h2>Offering Global-Standard Learning</h2>
        <p>A quick insight into our students' learning path</p>
      </div>
      <div className="offerings-grid">
        {offeringsData.map((offering, index) => (
          <div className="offering-card" key={index}>
            <div className="offering-icon">{offering.icon}</div>
            <h3>{offering.title}</h3>
            <p>{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;