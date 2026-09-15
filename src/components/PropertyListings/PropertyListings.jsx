import React, { useState } from 'react';
import { properties } from '../../data/properties';
import PropertyCard from './PropertyCard';
import './PropertyListings.css';

const tabs = ['All', 'Villa', 'Apartment', 'House'];

const PropertyListings = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProperties = activeTab === 'All'
    ? properties
    : properties.filter(p => p.type === activeTab.toLowerCase());

  return (
    <section className="property-listings section container" id="properties">
      <div className="section-header">
        <p className="section-subtitle">Our Portfolio</p>
        <h2 className="section-title">Featured Properties</h2>
      </div>

      <div className="property-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="property-grid">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;
