import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Square, ArrowLeft, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { properties } from '../data/properties';
import Footer from '../components/Footer/Footer';
import './PropertyDetailPage.css';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="not-found">
        <h1>Property not found</h1>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    );
  }

  const features = [
    'Modern Architecture',
    'Central Air Conditioning',
    'Hardwood Floors',
    'Smart Home System',
    'Private Garden',
    'Security System',
    'Parking Space',
    'Ocean View'
  ];

  return (
    <div className="property-detail-page">
      <nav className="detail-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Properties</span>
        </Link>
        <span className="detail-logo">Hamza<span>Property</span></span>
      </nav>

      <motion.div
        className="detail-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={property.image} alt={property.title} />
      </motion.div>

      <div className="detail-container">
        <div className="detail-layout">
          <motion.div
            className="detail-main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="detail-header">
              <span className="detail-badge">{property.badge}</span>
              <h1 className="detail-title">{property.title}</h1>
              <p className="detail-location">
                <MapPin size={18} />
                {property.location}
              </p>
            </div>

            <div className="detail-stats">
              <div className="stat-box">
                <BedDouble size={24} />
                <div>
                  <span className="stat-value">{property.beds}</span>
                  <span className="stat-label">Bedrooms</span>
                </div>
              </div>
              <div className="stat-box">
                <Bath size={24} />
                <div>
                  <span className="stat-value">{property.baths}</span>
                  <span className="stat-label">Bathrooms</span>
                </div>
              </div>
              <div className="stat-box">
                <Square size={24} />
                <div>
                  <span className="stat-value">{property.sqft.toLocaleString()}</span>
                  <span className="stat-label">Square Feet</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h2>Description</h2>
              <p>
                This stunning property offers the perfect blend of luxury and comfort.
                Featuring modern architecture with premium finishes throughout, this home
                is designed for sophisticated living. The open floor plan creates a seamless
                flow between living spaces, while large windows flood the interior with
                natural light.
              </p>
              <p>
                The gourmet kitchen features top-of-the-line appliances, custom cabinetry,
                and a spacious island perfect for entertaining. The master suite offers a
                private retreat with a spa-like bathroom and walk-in closet.
              </p>
            </div>

            <div className="detail-section">
              <h2>Features & Amenities</h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <CheckCircle size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h2>Property Location</h2>
              <div className="location-map">
                <div className="map-placeholder">
                  <MapPin size={48} />
                  <p>{property.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="detail-sidebar"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="sidebar-card">
              <div className="sidebar-price">${property.price.toLocaleString()}</div>
              <a href="tel:+1234567890" className="sidebar-btn primary">
                <Phone size={18} />
                Call Agent
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="sidebar-btn whatsapp">
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a href="mailto:info@hamzaproperty.com" className="sidebar-btn secondary">
                Email Inquiry
              </a>
            </div>

            <div className="sidebar-card">
              <h3>Schedule a Viewing</h3>
              <form className="viewing-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <input type="date" />
                <button type="submit">Book Viewing</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
