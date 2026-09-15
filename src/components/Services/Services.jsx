import React from 'react';
import { Home, DollarSign, TrendingUp } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <Home size={32} />,
    title: 'Property Management',
    description: 'Complete property management services including maintenance, tenant screening, and rent collection.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Mortgages Loan',
    description: 'Expert guidance on mortgage options and competitive rates to help you finance your dream home.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Property Valuation',
    description: 'Accurate property valuations using market data and professional assessment techniques.'
  }
];

const Services = () => {
  return (
    <section className="services section container" id="services">
      <div className="section-header">
        <p className="section-subtitle">What We Offer</p>
        <h2 className="section-title">Our Services</h2>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
