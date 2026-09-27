import React from 'react';
import { Search, Calendar, FileText, Key } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <Search size={24} />,
    number: '01',
    title: 'Discover & Explore',
    description: 'Browse through our curated portfolio of premium properties that match your criteria.'
  },
  {
    icon: <Calendar size={24} />,
    number: '02',
    title: 'Schedule a Visit',
    description: 'Book viewings at your convenience with our expert agents who know every detail.'
  },
  {
    icon: <FileText size={24} />,
    number: '03',
    title: 'Make an Offer',
    description: 'Get expert guidance on making competitive offers and negotiating the best deal.'
  },
  {
    icon: <Key size={24} />,
    number: '04',
    title: 'Close the Deal',
    description: 'Complete your purchase seamlessly and receive the keys to your new home.'
  }
];

const Process = () => {
  return (
    <section className="process" id="process">
      <div className="process-container">
        <div className="process-layout">
          <div className="process-content">
            <span className="section-tag light">How It Works</span>
            <h2 className="section-title light">A Simple Process To Your New Home</h2>
            <p className="process-description">
              From initial search to getting your keys, our streamlined process makes 
              finding your dream home effortless and enjoyable.
            </p>

            <div className="process-steps">
              {steps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-info">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="process-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern home"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
