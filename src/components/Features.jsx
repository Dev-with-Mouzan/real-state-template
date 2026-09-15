import React from 'react';
import { ShieldCheck, BadgeDollarSign, Headphones, Lock } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Trusted & Verified',
    description: 'All properties are vetted and guaranteed secure.'
  },
  {
    icon: <BadgeDollarSign size={32} />,
    title: 'Best Price Guarantee',
    description: 'Get the best deals in the market.'
  },
  {
    icon: <Headphones size={32} />,
    title: 'Expert Support',
    description: 'Available 24/7 to help you out.'
  },
  {
    icon: <Lock size={32} />,
    title: 'Secure Transactions',
    description: 'Safe, transparent & hassle-free process.'
  }
];

const Features = () => {
  return (
    <section className="features section container">
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
