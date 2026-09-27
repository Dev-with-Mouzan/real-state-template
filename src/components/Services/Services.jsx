import React from 'react';
import { Home, DollarSign, TrendingUp, Building } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <Home size={28} />,
    title: 'Buy Property',
    description: 'Find and purchase your dream home with expert guidance every step of the way.'
  },
  {
    icon: <DollarSign size={28} />,
    title: 'Sell Property',
    description: 'Get the best value for your property with our market expertise and marketing.'
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Rent Property',
    description: 'Discover rental options that match your lifestyle and budget perfectly.'
  },
  {
    icon: <Building size={28} />,
    title: 'Property Investment',
    description: 'Smart investment strategies to build your real estate portfolio.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-layout">
          <div className="services-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Comprehensive Real Estate Solutions</h2>
            <p className="services-description">
              From buying to investing, we provide end-to-end real estate services 
              tailored to your unique needs and goals.
            </p>
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
        </div>
      </div>
    </section>
  );
};

export default Services;
