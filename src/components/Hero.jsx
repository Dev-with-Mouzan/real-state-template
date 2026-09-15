import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Real Estate Agency</span>
        <h1 className="hero-title">
          Find the Property<br />
          for Rent or <span className="text-accent">Sale.</span>
        </h1>
        <p className="hero-description">
          We deal with different kinds of properties. No matter what you need
          - a house, an apartment or garage - you'll find a good option on our
          site. Thousands of offers and the best prices are guaranteed.
        </p>
        <div className="hero-buttons">
          <a href="#properties" className="btn-hero-primary">
            Browse Properties
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-hero-secondary">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
