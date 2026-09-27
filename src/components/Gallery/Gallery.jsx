import React from 'react';
import { ScaleIn } from '../AnimationWrapper/AnimationWrapper';
import './Gallery.css';

const images = [
  { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Modern Villa' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Luxury Interior' },
  { url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Pool View' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Beach House' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'City Apartment' },
  { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Garden Home' }
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="section-heading">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">Our Properties In Pictures</h2>
          <p className="section-description">Visualize your dream home through our stunning property gallery.</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <ScaleIn key={index} delay={index * 0.1}>
              <div className="gallery-item">
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
