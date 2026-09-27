import React from 'react';
import { ShieldCheck, DollarSign, Headphones, Lock } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './AnimationWrapper/AnimationWrapper';
import './Features.css';

const featuresData = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Trusted & Verified',
    description: 'Every property is thoroughly vetted and verified for your peace of mind.'
  },
  {
    icon: <DollarSign size={32} strokeWidth={1.5} />,
    title: 'Best Price Guarantee',
    description: 'We ensure you get the most competitive prices in the market.'
  },
  {
    icon: <Headphones size={32} strokeWidth={1.5} />,
    title: 'Expert Support',
    description: 'Our dedicated team is available 24/7 to assist you.'
  },
  {
    icon: <Lock size={32} strokeWidth={1.5} />,
    title: 'Secure Transactions',
    description: 'Safe, transparent, and hassle-free property transactions.'
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-heading">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Built on Trust, Driven by Excellence</h2>
        </div>
        <StaggerContainer staggerDelay={0.1}>
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;
