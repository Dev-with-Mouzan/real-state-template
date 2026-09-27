import React from 'react';
import { Globe, ExternalLink, Share2 } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../AnimationWrapper/AnimationWrapper';
import './Team.css';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Emily Davis',
    role: 'Property Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'David Wilson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="section-heading">
          <span className="section-tag">Our Team</span>
          <h2 className="section-title">Meet The Experts Behind Our Success</h2>
          <p className="section-description">Our dedicated team of professionals is committed to finding you the perfect property.</p>
        </div>

        <StaggerContainer staggerDelay={0.1}>
          <div className="team-grid">
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <div className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                    <div className="team-social">
                      <a href="#"><Globe size={18} /></a>
                      <a href="#"><ExternalLink size={18} /></a>
                      <a href="#"><Share2 size={18} /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
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

export default Team;
