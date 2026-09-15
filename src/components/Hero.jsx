import React from 'react';
import { MapPin, Home, DollarSign, Search } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Better Homes, Brighter Futures</p>
        <h1 className="hero-title">
          Find Your<br />
          <span className="text-accent">Dream Property</span><br />
          With Anti
        </h1>
        <p className="hero-description">
          We make property effortless. Discover modern homes, premium locations, and trusted real estate solutions all in one place.
        </p>
      </div>

      <div className="search-bar-wrapper">
        <div className="search-bar glass">
          <div className="search-field">
            <div className="field-icon">
              <MapPin size={20} />
            </div>
            <div className="field-content">
              <label>Location</label>
              <select>
                <option>Select Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>London</option>
              </select>
            </div>
          </div>
          
          <div className="search-divider"></div>

          <div className="search-field">
            <div className="field-icon">
              <Home size={20} />
            </div>
            <div className="field-content">
              <label>Property Type</label>
              <select>
                <option>Any Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>
          </div>

          <div className="search-divider"></div>

          <div className="search-field">
            <div className="field-icon">
              <DollarSign size={20} />
            </div>
            <div className="field-content">
              <label>Price Range</label>
              <select>
                <option>Any Price</option>
                <option>$100k - $500k</option>
                <option>$500k - $1M</option>
                <option>$1M+</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary search-btn">
            <Search size={20} />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
