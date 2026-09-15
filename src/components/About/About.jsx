import React from 'react';
import { CheckCircle } from 'lucide-react';
import './About.css';

const benefits = [
  'Quality Listings',
  'Transparent Process',
  'Expert Guidance',
  '24/7 Customer Support'
];

const About = () => {
  return (
    <section className="about section container" id="about">
      <div className="about-layout">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Modern home interior"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">Built on Trust, Driven by<br />Excellence</h2>
          <p className="about-description">
            Whether you're searching for a family home, a luxury apartment, or a smart investment property,
            our dedicated team is here to guide you every step of the way.
          </p>

          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <CheckCircle size={20} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <button className="btn btn-accent">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
