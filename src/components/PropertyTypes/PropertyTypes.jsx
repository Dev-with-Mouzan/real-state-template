import React from 'react';
import { propertyTypes } from '../../data/properties';
import './PropertyTypes.css';

const typeImages = {
  villa: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  apartment: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  house: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

const PropertyTypes = () => {
  return (
    <section className="property-types section container">
      <div className="section-header">
        <p className="section-subtitle">Browse By Type</p>
        <h2 className="section-title">Property Types</h2>
      </div>

      <div className="types-grid">
        {propertyTypes.map((type, index) => (
          <div className="type-card" key={index}>
            <img src={typeImages[type.type]} alt={type.label} loading="lazy" />
            <div className="type-overlay">
              <h3 className="type-label">{type.label}</h3>
              <p className="type-count">{type.count} Properties</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
