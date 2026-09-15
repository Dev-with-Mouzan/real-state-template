import React from 'react';
import { Search, Calendar, FileText, Key } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <Search size={24} />,
    number: '01',
    title: 'Discover & Explore',
    description: 'Browse through our curated portfolio of premium properties.'
  },
  {
    icon: <Calendar size={24} />,
    number: '02',
    title: 'Schedule a Visit',
    description: 'Book viewings at your convenience with our expert agents.'
  },
  {
    icon: <FileText size={24} />,
    number: '03',
    title: 'Make an Offer',
    description: 'Get expert guidance on making competitive offers.'
  },
  {
    icon: <Key size={24} />,
    number: '04',
    title: 'Close the Deal',
    description: 'Complete purchase seamlessly and receive your keys.'
  }
];

const Process = () => {
  return (
    <section className="process section container">
      <div className="process-layout">
        <div className="process-content">
          <p className="section-subtitle">Our Process</p>
          <h2 className="section-title">A Simple Process<br />To Your New Home</h2>
          <p className="process-description">
            From initial search to getting your keys, our streamlined process makes finding your dream home effortless.
          </p>

          <div className="process-steps">
            {steps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <div className="step-info">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="process-image">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Modern home"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
