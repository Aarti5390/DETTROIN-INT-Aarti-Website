import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [counters, setCounters] = useState({
    educators: 0,
    learners: 0,
    parents: 0,
    alumni: 0,
    legacy: 0
  });

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const statsData = [
    { key: 'educators', label: 'Educators', target: 250, suffix: '+' },
    { key: 'learners', label: 'Learners Base', target: 30000, suffix: '+' },
    { key: 'parents', label: 'Happy Parents', target: 20000, suffix: '+' },
    { key: 'alumni', label: 'Alumni Base', target: 6000, suffix: '+' },
    { key: 'legacy', label: 'Years Legacy', target: 28, suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // ms
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

      setCounters({
        educators: Math.floor(easedProgress * 250),
        learners: Math.floor(easedProgress * 30000),
        parents: Math.floor(easedProgress * 20000),
        alumni: Math.floor(easedProgress * 6000),
        legacy: Math.floor(easedProgress * 28),
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-grid">
        {statsData.map((stat) => (
          <div className="stat-item" key={stat.key}>
            <span className="stat-number">
              {stat.key === 'learners' || stat.key === 'parents' || stat.key === 'alumni'
                ? formatNumber(counters[stat.key])
                : counters[stat.key]
              }
              <span className="plus">{stat.suffix}</span>
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;