import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="cta-content container">
        <h2 className="cta-title">Ready to Find Your Dream Property?</h2>
        <p className="cta-description">
          Let us help you discover the perfect home that matches your lifestyle
          and budget. Start your journey with Hamza Property today.
        </p>
        <div className="cta-buttons">
          <a href="#properties" className="btn btn-accent">Browse Properties</a>
          <a href="#contact" className="btn btn-outline-light">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
