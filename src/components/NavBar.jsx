import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    if (isHomePage) {
      e.preventDefault();
      setIsOpen(false);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">Hamza<span className="logo-accent">Property</span></span>
        </Link>
        <span className="logo-tagline typing">Real estate agency</span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={(e) => handleNavClick(e, 'home')}>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/" onClick={(e) => handleNavClick(e, 'properties')}>Properties</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to="/contact" className="nav-cta">Get Started</Link>
        <button className="btn-icon mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
