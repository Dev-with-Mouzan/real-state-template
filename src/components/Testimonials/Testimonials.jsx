import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { StaggerContainer, StaggerItem } from '../AnimationWrapper/AnimationWrapper';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-heading">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say About Us</h2>
          <p className="section-description">Hear from satisfied homeowners who found their dream properties with us.</p>
        </div>

        <StaggerContainer staggerDelay={0.15}>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <StaggerItem key={testimonial.id}>
                <div className="testimonial-card">
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
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Testimonials;
