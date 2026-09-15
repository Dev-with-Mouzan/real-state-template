import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="cta-container container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Find Your<br />Dream Property?</h2>
          <p className="cta-description">
            Let us help you discover the perfect home that matches your lifestyle
            and budget. Start your journey with Hamza Property today.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-accent">Contact Us</a>
            <a href="#properties" className="btn btn-outline-light">Browse Properties</a>
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
