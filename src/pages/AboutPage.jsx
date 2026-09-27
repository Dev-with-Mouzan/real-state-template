import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Users, Home, Award, TrendingUp } from 'lucide-react';
import { SlideIn, FadeIn, StaggerContainer, StaggerItem } from '../components/AnimationWrapper/AnimationWrapper';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

const stats = [
  { icon: <Home size={32} />, number: '500+', label: 'Properties Sold' },
  { icon: <Users size={32} />, number: '1200+', label: 'Happy Clients' },
  { icon: <Award size={32} />, number: '15+', label: 'Years Experience' },
  { icon: <TrendingUp size={32} />, number: '50+', label: 'Awards Won' }
];

const values = [
  { title: 'Integrity', description: 'We believe in honest, transparent dealings with every client.' },
  { title: 'Excellence', description: 'We strive for excellence in everything we do.' },
  { title: 'Innovation', description: 'We embrace new technologies to serve you better.' },
  { title: 'Client First', description: 'Your needs and goals are always our top priority.' }
];

const team = [
  { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Michael Chen', role: 'Head of Sales', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Emily Davis', role: 'Property Consultant', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <nav className="detail-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <span className="detail-logo">Hamza<span>Property</span></span>
      </nav>

      <div className="about-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>About Us</h1>
          <p>Your trusted partner in finding the perfect property since 2010</p>
        </motion.div>
      </div>

      <div className="about-container">
        <section className="about-story">
          <div className="about-story-layout">
            <SlideIn direction="left">
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Office" />
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="story-content">
                <span className="section-tag">Our Story</span>
                <h2>We've Been Building Dreams Since 2010</h2>
                <p>
                  Hamza Property was founded with a simple mission: to help people find
                  their dream homes. What started as a small family business has grown
                  into one of the most trusted real estate agencies in the region.
                </p>
                <p>
                  Over the years, we've helped thousands of families, investors, and
                  businesses find the perfect properties. Our commitment to integrity,
                  excellence, and client satisfaction has earned us numerous awards
                  and the trust of our community.
                </p>
              </div>
            </SlideIn>
          </div>
        </section>

        <section className="about-stats">
          <StaggerContainer>
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="about-stat-card">
                  <div className="about-stat-icon">{stat.icon}</div>
                  <div className="about-stat-number">{stat.number}</div>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section className="about-values">
          <FadeIn>
            <div className="section-heading">
              <span className="section-tag">Our Values</span>
              <h2>What We Stand For</h2>
              <p>These core values guide every decision we make and every interaction we have.</p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="values-grid">
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <div className="value-card">
                    <CheckCircle size={28} />
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>

        <section className="about-team">
          <FadeIn>
            <div className="section-heading">
              <span className="section-tag">Our Team</span>
              <h2>Meet The Experts</h2>
              <p>Our dedicated team of professionals is committed to your success.</p>
            </div>
          </FadeIn>
          <StaggerContainer>
            <div className="about-team-grid">
              {team.map((member, index) => (
                <StaggerItem key={index}>
                  <div className="about-team-card">
                    <img src={member.image} alt={member.name} />
                    <div className="about-team-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
