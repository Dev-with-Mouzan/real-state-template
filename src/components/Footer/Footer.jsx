import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">Hamza<span className="footer-logo-accent">Property</span></span>
            </div>
            <p className="footer-description">
              Your trusted partner in finding the perfect property. 
              We make real estate effortless.
            </p>
            <div className="footer-contact">
              <a href="tel:+1234567890" className="contact-item">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@hamzaproperty.com" className="contact-item">
                <Mail size={16} />
                <span>info@hamzaproperty.com</span>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="contact-item whatsapp">
                <MessageCircle size={16} />
                <span>WhatsApp Us</span>
              </a>
              <a href="#" className="contact-item">
                <MapPin size={16} />
                <span>123 Real Estate Ave, NY</span>
              </a>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="#" aria-label="YouTube"><YoutubeIcon /></a>
            </div>
          </div>

          <div className="footer-links">
            <p className="footer-heading">Quick Links</p>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#properties">Properties</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <p className="footer-heading">Property Types</p>
            <ul>
              <li><a href="#properties">Villas</a></li>
              <li><a href="#properties">Apartments</a></li>
              <li><a href="#properties">Houses</a></li>
              <li><a href="#properties">Offices</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <p className="footer-heading">Stay Connected</p>
            <p>Subscribe to get updates on new properties and market trends.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" aria-label="Email address" />
              <button type="submit" aria-label="Subscribe"><Send size={16} /></button>
            </form>
            <div className="footer-support">
              <p className="footer-heading">Support</p>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Hamza Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
