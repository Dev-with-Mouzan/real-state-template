import React from 'react';
import { Menu } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Hamza<span className="logo-accent">Property</span></span>
        <span className="logo-tagline">Real Estate Agency</span>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#properties">Properties</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">News</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-actions">
        <button className="btn-icon mobile-menu">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
