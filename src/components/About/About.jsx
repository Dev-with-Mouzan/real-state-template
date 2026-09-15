import React from 'react';
import { Award, Users, Home } from 'lucide-react';
import './About.css';

const stats = [
  { icon: <Award size={28} />, value: '15+', label: 'Years Experience' },
  { icon: <Home size={28} />, value: '500+', label: 'Properties Sold' },
  { icon: <Users size={28} />, value: '98%', label: 'Happy Clients' }
];

const About = () => {
  return (
    <section className="about section container" id="about">
      <div className="about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Modern home interior"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="section-title">We Help You Find Your Dream Home</h2>
          <p className="about-description">
            With over 15 years of experience in the real estate market, Hamza Property
            has helped thousands of families find their perfect home. Our dedicated team
            combines local expertise with cutting-edge technology to deliver exceptional
            results for every client.
          </p>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
