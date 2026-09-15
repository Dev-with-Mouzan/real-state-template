import React from 'react';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} loading="lazy" />
        <span className="property-badge">{property.badge}</span>
      </div>
      <div className="property-content">
        <h3 className="property-price">${property.price.toLocaleString()}</h3>
        <h4 className="property-title">{property.title}</h4>
        <p className="property-location">
          <MapPin size={16} />
          {property.location}
        </p>
        <div className="property-stats">
          <span><BedDouble size={16} /> {property.beds} Beds</span>
          <span><Bath size={16} /> {property.baths} Baths</span>
          <span><Square size={16} /> {property.sqft.toLocaleString()} sqft</span>
        </div>
        <button className="btn btn-outline property-btn">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
