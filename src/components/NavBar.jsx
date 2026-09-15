import React from 'react';
import { Building2, Search, User, Menu } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar container glass">
      <div className="navbar-logo">
        <Building2 className="logo-icon" size={32} />
        <span className="logo-text">Anti</span>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#properties">Properties</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-actions">
        <button className="btn-icon">
          <Search size={20} />
        </button>
        <button className="btn btn-primary">
          <User size={18} />
          Sign in
        </button>
        <button className="btn-icon mobile-menu">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
