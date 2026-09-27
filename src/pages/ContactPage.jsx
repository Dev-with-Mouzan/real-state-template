import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { SlideIn, FadeIn } from '../components/AnimationWrapper/AnimationWrapper';
import Footer from '../components/Footer/Footer';
import './ContactPage.css';

const contactInfo = [
  { icon: <Phone size={24} />, title: 'Phone', details: ['+1 (234) 567-890', '+1 (234) 567-891'], link: 'tel:+1234567890' },
  { icon: <Mail size={24} />, title: 'Email', details: ['info@hamzaproperty.com', 'sales@hamzaproperty.com'], link: 'mailto:info@hamzaproperty.com' },
  { icon: <MapPin size={24} />, title: 'Address', details: ['123 Real Estate Avenue', 'New York, NY 10001'], link: '#' },
  { icon: <MessageCircle size={24} />, title: 'WhatsApp', details: ['+1 (234) 567-890', 'Chat with us anytime'], link: 'https://wa.me/1234567890' },
  { icon: <Clock size={24} />, title: 'Working Hours', details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM'], link: '#' }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <nav className="detail-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <span className="detail-logo">Hamza<span>Property</span></span>
      </nav>

      <div className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact Us</h1>
          <p>Get in touch with our team. We'd love to hear from you.</p>
        </motion.div>
      </div>

      <div className="contact-container">
        <section className="contact-info-section">
          <FadeIn>
            <div className="section-heading">
              <span className="section-tag">Get In Touch</span>
              <h2>We're Here To Help</h2>
              <p>Reach out to us through any of the following channels.</p>
            </div>
          </FadeIn>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <SlideIn key={index} delay={index * 0.1}>
                <a href={info.link} className="contact-info-card" target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </a>
              </SlideIn>
            ))}
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-layout">
            <SlideIn direction="left">
              <div className="contact-form-info">
                <span className="section-tag">Send A Message</span>
                <h2>Let's Start A Conversation</h2>
                <p>
                  Have a question or want to schedule a viewing? Fill out the form
                  and our team will get back to you within 24 hours.
                </p>
                <div className="form-features">
                  <div className="form-feature">
                    <Phone size={20} />
                    <span>24/7 Phone Support</span>
                  </div>
                  <div className="form-feature">
                    <MessageCircle size={20} />
                    <span>Instant WhatsApp Reply</span>
                  </div>
                  <div className="form-feature">
                    <Mail size={20} />
                    <span>Email Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Property Buying</option>
                      <option value="selling">Property Selling</option>
                      <option value="renting">Property Renting</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={submitted}>
                  {submitted ? 'Message Sent!' : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </SlideIn>
          </div>
        </section>

        <section className="contact-map">
          <FadeIn>
            <div className="map-container">
              <div className="map-placeholder">
                <MapPin size={48} />
                <h3>123 Real Estate Avenue</h3>
                <p>New York, NY 10001</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-btn">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
