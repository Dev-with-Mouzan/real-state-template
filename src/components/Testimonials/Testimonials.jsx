import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials section container">
      <div className="section-header">
        <p className="section-subtitle">Testimonials</p>
        <h2 className="section-title">What Our Clients Say</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <Quote className="quote-icon" size={32} />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <div className="testimonial-author">
              <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
              <div>
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
