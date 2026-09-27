import React, { useState } from 'react';
import { properties } from '../../data/properties';
import PropertyCard from './PropertyCard';
import { FadeIn } from '../AnimationWrapper/AnimationWrapper';
import './PropertyListings.css';

const tabs = ['All', 'Villa', 'Apartment', 'House'];

const PropertyListings = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProperties = activeTab === 'All'
    ? properties
    : properties.filter(p => p.type === activeTab.toLowerCase());

  return (
    <section className="property-listings" id="properties">
      <div className="property-listings-container">
        <FadeIn>
          <div className="section-heading">
            <span className="section-tag">Our Portfolio</span>
            <h2 className="section-title">Premium Properties For A Better Lifestyle</h2>
            <p className="section-description">Explore our curated collection of luxury homes, apartments, and villas designed for modern living.</p>
          </div>
        </FadeIn>

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

        <FadeIn delay={0.2}>
          <div className="property-grid">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PropertyListings;
