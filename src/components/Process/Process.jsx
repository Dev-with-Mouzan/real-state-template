import React from 'react';
import { Search, Calendar, Key } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <Search size={28} />,
    number: '01',
    title: 'Find Properties',
    description: 'Browse our extensive portfolio and use smart filters to find properties that match your criteria.'
  },
  {
    icon: <Calendar size={28} />,
    number: '02',
    title: 'Schedule Visit',
    description: 'Book property viewings at your convenience. Our agents will arrange everything for you.'
  },
  {
    icon: <Key size={28} />,
    number: '03',
    title: 'Get Keys',
    description: 'Complete the purchase process and receive the keys to your new home.'
  }
];

const Process = () => {
  return (
    <section className="process section container">
      <div className="section-header">
        <p className="section-subtitle">How It Works</p>
        <h2 className="section-title">Simple Steps to Your New Home</h2>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="step-icon-wrapper">
              <div className="step-icon">{step.icon}</div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
