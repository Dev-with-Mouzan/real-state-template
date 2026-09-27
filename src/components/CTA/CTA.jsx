import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <span className="section-tag light">Get Started Today</span>
          <h2 className="cta-title">Ready to Find Your Dream Property?</h2>
          <p className="cta-description">
            Let us help you discover the perfect home that matches your lifestyle 
            and budget. Start your journey with Hamza Property today.
          </p>
          <div className="cta-buttons">
            <a href="#properties" className="cta-btn-primary">Browse Properties</a>
            <a href="#contact" className="cta-btn-secondary">Contact Us</a>
          </div>
        </div>
        <div className="cta-image">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Dream property"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
