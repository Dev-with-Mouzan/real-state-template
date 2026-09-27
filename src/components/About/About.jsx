import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SlideIn } from '../AnimationWrapper/AnimationWrapper';
import './About.css';

const benefits = [
  'Over 15 years of industry experience',
  'Personalized service tailored to your needs',
  'Transparent process with no hidden fees',
  'Award-winning customer satisfaction'
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-layout">
          <SlideIn direction="left">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern home interior"
                loading="lazy"
              />
            </div>
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <div className="about-content">
              <span className="section-tag">About Us</span>
              <h2 className="section-title">Your Trusted Partner In Real Estate</h2>
              <p className="about-description">
                With over 15 years of experience in the real estate industry, we have helped
                thousands of families find their dream homes. Our commitment to excellence
                and customer satisfaction sets us apart.
              </p>

              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <CheckCircle size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="about-btn">Get In Touch →</a>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default About;
