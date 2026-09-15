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
    <section className="services section container" id="services">
      <div className="services-layout">
        <div className="services-header">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">Everything You Need<br />Under One Roof</h2>
          <p className="services-description">
            Comprehensive real estate solutions tailored to your needs, from buying to investing.
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
    </section>
  );
};

export default Services;
