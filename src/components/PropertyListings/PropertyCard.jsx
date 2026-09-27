import React, { useState } from 'react';
import { MapPin, BedDouble, Bath, Square, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Link to={`/property/${property.id}`} className="property-card-link">
        <div className="property-card">
          <div className="property-image">
            <img src={property.image} alt={property.title} loading="lazy" />
            <span className="property-badge">{property.badge}</span>
          </div>
          <div className="property-content">
            <h3 className="property-price">${property.price.toLocaleString()}</h3>
            <h4 className="property-title">{property.title}</h4>
            <p className="property-location">
              <MapPin size={14} />
              {property.location}
            </p>
            <div className="property-stats">
              <span><BedDouble size={14} /> {property.beds} Beds</span>
              <span><Bath size={14} /> {property.baths} Baths</span>
              <span><Square size={14} /> {property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </Link>

      {showModal && (
        <div className="property-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="property-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <div className="modal-image">
              <img src={property.image} alt={property.title} />
              <span className="property-badge">{property.badge}</span>
            </div>
            <div className="modal-content">
              <h2 className="modal-price">${property.price.toLocaleString()}</h2>
              <h3 className="modal-title">{property.title}</h3>
              <p className="modal-location">
                <MapPin size={16} />
                {property.location}
              </p>
              <div className="modal-stats">
                <div className="stat-box">
                  <BedDouble size={20} />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="stat-box">
                  <Bath size={20} />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="stat-box">
                  <Square size={20} />
                  <span>{property.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
              <p className="modal-description">
                This beautiful property features modern amenities, spacious rooms,
                and a prime location. Perfect for families looking for their dream home.
              </p>
              <div className="modal-actions">
                <Link to={`/property/${property.id}`} className="modal-btn primary">View Full Details</Link>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="modal-btn secondary">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
