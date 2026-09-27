import React, { useState, useEffect, useRef } from 'react';
import { Home, Users, Award, Building } from 'lucide-react';
import './StatsCounter.css';

const stats = [
  { icon: <Home size={32} />, number: 500, suffix: '+', label: 'Properties Sold' },
  { icon: <Users size={32} />, number: 1200, suffix: '+', label: 'Happy Clients' },
  { icon: <Award size={32} />, number: 15, suffix: '+', label: 'Years Experience' },
  { icon: <Building size={32} />, number: 50, suffix: '+', label: 'Cities Covered' }
];

const Counter = ({ number, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = number / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, number]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsCounter = () => {
  return (
    <section className="stats-counter">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <Counter number={stat.number} suffix={stat.suffix} />
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
