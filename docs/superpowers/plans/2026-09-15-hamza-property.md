# Hamza Property Real Estate Template - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, minimalist luxury real estate website template with 12 sections, responsive design, and easy customization.

**Architecture:** Component-based React application with self-contained CSS per component. Data files separate content from presentation for easy buyer customization.

**Tech Stack:** React 19, Vite 8, Vanilla CSS, lucide-react, Google Fonts (Outfit + Inter)

**Spec:** `docs/superpowers/specs/2026-09-15-hamza-property-design.md`

## Global Constraints

- CSS variables defined in `index.css` for all colors, fonts, shadows, radii, transitions
- Components use scoped CSS files (ComponentName.css)
- All images use Unsplash placeholder URLs
- Responsive breakpoints: 576px (mobile), 992px (tablet)
- Semantic HTML for SEO
- No external UI libraries - vanilla CSS only

---

## File Structure Overview

```
src/
├── components/
│   ├── NavBar/NavBar.jsx, NavBar.css
│   ├── Hero/Hero.jsx, Hero.css
│   ├── Features/Features.jsx, Features.css
│   ├── PropertyListings/PropertyListings.jsx, PropertyListings.css, PropertyCard.jsx
│   ├── About/About.jsx, About.css
│   ├── Services/Services.jsx, Services.css
│   ├── Process/Process.jsx, Process.css
│   ├── PropertyTypes/PropertyTypes.jsx, PropertyTypes.css
│   ├── Testimonials/Testimonials.jsx, Testimonials.css
│   ├── Blog/Blog.jsx, Blog.css
│   ├── CTA/CTA.jsx, CTA.css
│   └── Footer/Footer.jsx, Footer.css
├── data/
│   ├── properties.js
│   ├── testimonials.js
│   └── blog.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

### Task 1: Create Data Files

**Files:**
- Create: `src/data/properties.js`
- Create: `src/data/testimonials.js`
- Create: `src/data/blog.js`

**Interfaces:**
- Produces: `properties` array, `testimonials` array, `blogPosts` array used by downstream components

- [ ] **Step 1: Create properties.js**

```javascript
export const properties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    type: "villa",
    price: 1250000,
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "For Sale"
  },
  {
    id: 2,
    title: "Luxury Apartment Downtown",
    type: "apartment",
    price: 850000,
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "For Sale"
  },
  {
    id: 3,
    title: "Family Home with Garden",
    type: "house",
    price: 650000,
    location: "Pasadena, CA",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "For Sale"
  },
  {
    id: 4,
    title: "Penthouse Suite",
    type: "apartment",
    price: 2100000,
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "For Sale"
  },
  {
    id: 5,
    title: "Countryside Estate",
    type: "villa",
    price: 1800000,
    location: "Greenwich, CT",
    beds: 6,
    baths: 5,
    sqft: 5500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "For Sale"
  },
  {
    id: 6,
    title: "Urban Loft Space",
    type: "house",
    price: 420000,
    location: "Brooklyn, NY",
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "For Sale"
  }
];

export const propertyTypes = [
  { type: "villa", label: "Villas", count: 12 },
  { type: "apartment", label: "Apartments", count: 24 },
  { type: "house", label: "Houses", count: 18 },
  { type: "office", label: "Offices", count: 8 }
];
```

- [ ] **Step 2: Create testimonials.js**

```javascript
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    quote: "Hamza Property made finding our dream home effortless. The team was professional, responsive, and truly understood what we were looking for. We couldn't be happier with our new home!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Investor",
    quote: "As an investor, I need reliable data and quick turns. Hamza Property consistently provides excellent opportunities and market insights. Their expertise is unmatched in the industry.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-Time Buyer",
    quote: "I was nervous about buying my first home, but the Hamza Property team guided me through every step. They were patient, knowledgeable, and made the entire process stress-free.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];
```

- [ ] **Step 3: Create blog.js**

```javascript
export const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers",
    date: "Sep 10, 2026",
    excerpt: "Buying your first home is exciting but can be overwhelming. Here are ten essential tips to help you navigate the process with confidence and make informed decisions.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Real Estate Market Trends 2026",
    date: "Sep 5, 2026",
    excerpt: "The housing market continues to evolve. Discover the key trends shaping real estate this year and what they mean for buyers and sellers alike.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "How to Stage Your Home for Sale",
    date: "Aug 28, 2026",
    excerpt: "Staging your home can significantly impact its selling price and time on the market. Learn professional staging secrets that attract buyers.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];
```

- [ ] **Step 4: Verify files exist**

Run: `ls src/data/`
Expected: `properties.js  testimonials.js  blog.js`

---

### Task 2: Update NavBar Brand

**Files:**
- Modify: `src/components/NavBar.jsx:10`

**Interfaces:**
- Consumes: None
- Produces: Updated NavBar with correct brand name

- [ ] **Step 1: Change brand name from "Anti" to "Hamza Property"**

In `src/components/NavBar.jsx`, line 10, change:
```jsx
<span className="logo-text">Anti</span>
```
to:
```jsx
<span className="logo-text">Hamza Property</span>
```

- [ ] **Step 2: Update logo text size for longer name**

In `src/components/NavBar.css`, update `.logo-text`:
```css
.logo-text {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  white-space: nowrap;
}
```

- [ ] **Step 3: Verify in browser**

Run: `npm run dev`
Expected: NavBar shows "Hamza Property" with Building2 icon

---

### Task 3: Build PropertyListings Component

**Files:**
- Create: `src/components/PropertyListings/PropertyListings.jsx`
- Create: `src/components/PropertyListings/PropertyListings.css`
- Create: `src/components/PropertyListings/PropertyCard.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `properties` from `src/data/properties.js`
- Produces: PropertyListings section rendered in App

- [ ] **Step 1: Create PropertyCard.jsx**

```jsx
import React from 'react';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} loading="lazy" />
        <span className="property-badge">{property.badge}</span>
      </div>
      <div className="property-content">
        <h3 className="property-price">${property.price.toLocaleString()}</h3>
        <h4 className="property-title">{property.title}</h4>
        <p className="property-location">
          <MapPin size={16} />
          {property.location}
        </p>
        <div className="property-stats">
          <span><BedDouble size={16} /> {property.beds} Beds</span>
          <span><Bath size={16} /> {property.baths} Baths</span>
          <span><Square size={16} /> {property.sqft.toLocaleString()} sqft</span>
        </div>
        <button className="btn btn-outline property-btn">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
```

- [ ] **Step 2: Create PropertyListings.jsx**

```jsx
import React, { useState } from 'react';
import { properties } from '../../data/properties';
import PropertyCard from './PropertyCard';
import './PropertyListings.css';

const tabs = ['All', 'Villa', 'Apartment', 'House'];

const PropertyListings = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProperties = activeTab === 'All'
    ? properties
    : properties.filter(p => p.type === activeTab.toLowerCase());

  return (
    <section className="property-listings section container" id="properties">
      <div className="section-header">
        <p className="section-subtitle">Our Portfolio</p>
        <h2 className="section-title">Featured Properties</h2>
      </div>

      <div className="property-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="property-grid">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;
```

- [ ] **Step 3: Create PropertyListings.css**

```css
.property-listings {
  padding-top: 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-subtitle {
  color: var(--color-accent);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.section-title {
  font-size: 2.5rem;
  color: var(--color-primary);
}

.property-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 10px 24px;
  border-radius: var(--radius-full);
  font-weight: 500;
  color: var(--color-text-muted);
  background-color: var(--color-bg-card);
  border: 1px solid var(--color-border);
  transition: var(--transition-normal);
}

.tab-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.tab-btn.active {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border-color: var(--color-primary);
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.property-card {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition-normal);
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.property-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.property-card:hover .property-image img {
  transform: scale(1.05);
}

.property-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: var(--color-accent);
  color: var(--color-text-light);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 500;
}

.property-content {
  padding: 24px;
}

.property-price {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 8px;
  font-family: var(--font-heading);
}

.property-title {
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 500;
}

.property-location {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.property-stats {
  display: flex;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
  margin-bottom: 20px;
}

.property-stats span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.property-btn {
  width: 100%;
}

@media (max-width: 992px) {
  .property-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .property-grid {
    grid-template-columns: 1fr;
  }
  .section-title {
    font-size: 2rem;
  }
}
```

- [ ] **Step 4: Add to App.jsx**

In `src/App.jsx`, add import and component:
```jsx
import PropertyListings from './components/PropertyListings/PropertyListings';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
    </>
  );
}
```

- [ ] **Step 5: Verify in browser**

Run: `npm run dev`
Expected: Property cards display with tabs filtering works

---

### Task 4: Build About Component

**Files:**
- Create: `src/components/About/About.jsx`
- Create: `src/components/About/About.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: None
- Produces: About section rendered in App

- [ ] **Step 1: Create About.jsx**

```jsx
import React from 'react';
import { Award, Users, Home } from 'lucide-react';
import './About.css';

const stats = [
  { icon: <Award size={28} />, value: '15+', label: 'Years Experience' },
  { icon: <Home size={28} />, value: '500+', label: 'Properties Sold' },
  { icon: <Users size={28} />, value: '98%', label: 'Happy Clients' }
];

const About = () => {
  return (
    <section className="about section container" id="about">
      <div className="about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Modern home interior"
            loading="lazy"
          />
        </div>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="section-title">We Help You Find Your Dream Home</h2>
          <p className="about-description">
            With over 15 years of experience in the real estate market, Hamza Property
            has helped thousands of families find their perfect home. Our dedicated team
            combines local expertise with cutting-edge technology to deliver exceptional
            results for every client.
          </p>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Step 2: Create About.css**

```css
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.about-content .section-subtitle {
  text-align: left;
}

.about-content .section-title {
  text-align: left;
  margin-bottom: 24px;
}

.about-description {
  color: var(--color-text-muted);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 40px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.stat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: rgba(25, 167, 142, 0.1);
  color: var(--color-accent);
  border-radius: 50%;
  margin-bottom: 12px;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
  font-family: var(--font-heading);
}

.stat-label {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .about-image img {
    height: 350px;
  }
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import About from './components/About/About';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: Split layout with image left, stats right

---

### Task 5: Build Services Component

**Files:**
- Create: `src/components/Services/Services.jsx`
- Create: `src/components/Services/Services.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: None
- Produces: Services section rendered in App

- [ ] **Step 1: Create Services.jsx**

```jsx
import React from 'react';
import { Home, DollarSign, TrendingUp } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <Home size={32} />,
    title: 'Property Management',
    description: 'Complete property management services including maintenance, tenant screening, and rent collection.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Mortgages Loan',
    description: 'Expert guidance on mortgage options and competitive rates to help you finance your dream home.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Property Valuation',
    description: 'Accurate property valuations using market data and professional assessment techniques.'
  }
];

const Services = () => {
  return (
    <section className="services section container" id="services">
      <div className="section-header">
        <p className="section-subtitle">What We Offer</p>
        <h2 className="section-title">Our Services</h2>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
```

- [ ] **Step 2: Create Services.css**

```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  text-align: center;
  padding: 40px 32px;
  background-color: var(--color-bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: var(--transition-normal);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
  border-color: rgba(25, 167, 142, 0.2);
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: rgba(25, 167, 142, 0.1);
  color: var(--color-accent);
  border-radius: 50%;
  margin-bottom: 24px;
  transition: var(--transition-normal);
}

.service-card:hover .service-icon {
  background-color: var(--color-accent);
  color: var(--color-text-light);
}

.service-title {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.service-description {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
}

@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
      <Services />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: 3 service cards in a row with hover effects

---

### Task 6: Build Process Component

**Files:**
- Create: `src/components/Process/Process.jsx`
- Create: `src/components/Process/Process.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: None
- Produces: Process section rendered in App

- [ ] **Step 1: Create Process.jsx**

```jsx
import React from 'react';
import { Search, Calendar, Key } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: <Search size={28} />,
    number: '01',
    title: 'Find Properties',
    description: 'Browse our extensive portfolio and use smart filters to find properties that match your criteria.'
  },
  {
    icon: <Calendar size={28} />,
    number: '02',
    title: 'Schedule Visit',
    description: 'Book property viewings at your convenience. Our agents will arrange everything for you.'
  },
  {
    icon: <Key size={28} />,
    number: '03',
    title: 'Get Keys',
    description: 'Complete the purchase process and receive the keys to your new home.'
  }
];

const Process = () => {
  return (
    <section className="process section container">
      <div className="section-header">
        <p className="section-subtitle">How It Works</p>
        <h2 className="section-title">Simple Steps to Your New Home</h2>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="step-icon-wrapper">
              <div className="step-icon">{step.icon}</div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
```

- [ ] **Step 2: Create Process.css**

```css
.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  position: relative;
}

.process-step {
  text-align: center;
  position: relative;
}

.step-icon-wrapper {
  position: relative;
  margin-bottom: 24px;
}

.step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border-radius: 50%;
  position: relative;
  z-index: 2;
}

.step-connector {
  position: absolute;
  top: 50%;
  left: calc(50% + 40px);
  width: calc(100% - 0px);
  height: 2px;
  background-color: var(--color-border);
  z-index: 1;
}

.step-number {
  font-size: 3rem;
  font-weight: 700;
  color: rgba(25, 167, 142, 0.1);
  font-family: var(--font-heading);
  line-height: 1;
  margin-bottom: 8px;
}

.step-title {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.step-description {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 280px;
  margin: 0 auto;
}

@media (max-width: 992px) {
  .process-grid {
    gap: 32px;
  }
  .step-connector {
    display: none;
  }
}

@media (max-width: 576px) {
  .process-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import Process from './components/Process/Process';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
      <Services />
      <Process />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: 3-step timeline with connecting lines

---

### Task 7: Build PropertyTypes Component

**Files:**
- Create: `src/components/PropertyTypes/PropertyTypes.jsx`
- Create: `src/components/PropertyTypes/PropertyTypes.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `propertyTypes` from `src/data/properties.js`
- Produces: PropertyTypes section rendered in App

- [ ] **Step 1: Create PropertyTypes.jsx**

```jsx
import React from 'react';
import { propertyTypes } from '../../data/properties';
import './PropertyTypes.css';

const typeImages = {
  villa: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  apartment: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  house: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
};

const PropertyTypes = () => {
  return (
    <section className="property-types section container">
      <div className="section-header">
        <p className="section-subtitle">Browse By Type</p>
        <h2 className="section-title">Property Types</h2>
      </div>

      <div className="types-grid">
        {propertyTypes.map((type, index) => (
          <div className="type-card" key={index}>
            <img src={typeImages[type.type]} alt={type.label} loading="lazy" />
            <div className="type-overlay">
              <h3 className="type-label">{type.label}</h3>
              <p className="type-count">{type.count} Properties</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
```

- [ ] **Step 2: Create PropertyTypes.css**

```css
.types-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.type-card {
  position: relative;
  height: 280px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
}

.type-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.type-card:hover img {
  transform: scale(1.1);
}

.type-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(13, 58, 51, 0.85) 0%, rgba(13, 58, 51, 0.2) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  transition: var(--transition-normal);
}

.type-card:hover .type-overlay {
  background: linear-gradient(to top, rgba(13, 58, 51, 0.95) 0%, rgba(13, 58, 51, 0.4) 100%);
}

.type-label {
  color: var(--color-text-light);
  font-size: 1.4rem;
  margin-bottom: 4px;
}

.type-count {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .types-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .types-grid {
    grid-template-columns: 1fr;
  }
  .type-card {
    height: 200px;
  }
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import PropertyTypes from './components/PropertyTypes/PropertyTypes';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
      <Services />
      <Process />
      <PropertyTypes />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: 4 category cards with image backgrounds and overlay text

---

### Task 8: Build Testimonials Component

**Files:**
- Create: `src/components/Testimonials/Testimonials.jsx`
- Create: `src/components/Testimonials/Testimonials.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `testimonials` from `src/data/testimonials.js`
- Produces: Testimonials section rendered in App

- [ ] **Step 1: Create Testimonials.jsx**

```jsx
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
```

- [ ] **Step 2: Create Testimonials.css**

```css
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background-color: var(--color-bg-card);
  padding: 32px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: var(--transition-normal);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.quote-icon {
  color: var(--color-accent);
  margin-bottom: 20px;
  opacity: 0.8;
}

.testimonial-quote {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-rating {
  display: flex;
  gap: 4px;
  color: #f59e0b;
  margin-bottom: 24px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.testimonial-author img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.author-role {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

@media (max-width: 992px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
      <Services />
      <Process />
      <PropertyTypes />
      <Testimonials />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: 3 testimonial cards with quotes, ratings, and avatars

---

### Task 9: Build Blog Component

**Files:**
- Create: `src/components/Blog/Blog.jsx`
- Create: `src/components/Blog/Blog.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: `blogPosts` from `src/data/blog.js`
- Produces: Blog section rendered in App

- [ ] **Step 1: Create Blog.jsx**

```jsx
import React from 'react';
import { blogPosts } from '../../data/blog';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog section container" id="blog">
      <div className="section-header">
        <p className="section-subtitle">Latest News</p>
        <h2 className="section-title">Our Blog</h2>
      </div>

      <div className="blog-grid">
        {blogPosts.map(post => (
          <article className="blog-card" key={post.id}>
            <div className="blog-image">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-content">
              <span className="blog-date">{post.date}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="blog-link">Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
```

- [ ] **Step 2: Create Blog.css**

```css
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition-normal);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.blog-image {
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 24px;
}

.blog-date {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  margin-bottom: 8px;
  display: block;
}

.blog-title {
  font-size: 1.15rem;
  margin-bottom: 12px;
  line-height: 1.4;
}

.blog-excerpt {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 16px;
}

.blog-link {
  color: var(--color-accent);
  font-weight: 500;
  transition: var(--transition-normal);
}

.blog-link:hover {
  color: var(--color-accent-hover);
}

@media (max-width: 992px) {
  .blog-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import Blog from './components/Blog/Blog';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
      <Services />
      <Process />
      <PropertyTypes />
      <Testimonials />
      <Blog />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: 3 blog cards with images and hover effects

---

### Task 10: Build CTA Component

**Files:**
- Create: `src/components/CTA/CTA.jsx`
- Create: `src/components/CTA/CTA.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: None
- Produces: CTA section rendered in App

- [ ] **Step 1: Create CTA.jsx**

```jsx
import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="cta-content container">
        <h2 className="cta-title">Ready to Find Your Dream Property?</h2>
        <p className="cta-description">
          Let us help you discover the perfect home that matches your lifestyle
          and budget. Start your journey with Hamza Property today.
        </p>
        <div className="cta-buttons">
          <a href="#properties" className="btn btn-accent">Browse Properties</a>
          <a href="#contact" className="btn btn-outline-light">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
```

- [ ] **Step 2: Create CTA.css**

```css
.cta {
  background-color: var(--color-bg-dark);
  text-align: center;
}

.cta-content {
  max-width: 650px;
}

.cta-title {
  color: var(--color-text-light);
  font-size: 2.25rem;
  margin-bottom: 20px;
}

.cta-description {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 36px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-outline-light {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: var(--color-text-light);
  background-color: transparent;
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: var(--color-text-light);
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import CTA from './components/CTA/CTA';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
      <Services />
      <Process />
      <PropertyTypes />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: Dark section with centered text and two buttons

---

### Task 11: Build Footer Component

**Files:**
- Create: `src/components/Footer/Footer.jsx`
- Create: `src/components/Footer/Footer.css`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: None
- Produces: Footer section rendered in App

- [ ] **Step 1: Create Footer.jsx**

```jsx
import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Building2 size={28} />
              <span>Hamza Property</span>
            </div>
            <p className="footer-description">
              Your trusted partner in finding the perfect property.
              We make real estate effortless.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on new properties and market trends.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" aria-label="Email address" />
              <button type="submit" aria-label="Subscribe"><Send size={18} /></button>
            </form>
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
```

- [ ] **Step 2: Create Footer.css**

```css
.footer {
  background-color: var(--color-bg-dark);
  padding: 80px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 48px;
  padding-bottom: 64px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-light);
  margin-bottom: 20px;
}

.footer-logo span {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
}

.footer-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  transition: var(--transition-normal);
}

.footer-social a:hover {
  background-color: var(--color-accent);
  color: var(--color-text-light);
}

.footer-links h4,
.footer-newsletter h4 {
  color: var(--color-text-light);
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  transition: var(--transition-normal);
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-newsletter p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  gap: 8px;
}

.newsletter-form input {
  flex: 1;
  padding: 12px 16px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--color-text-light);
  font-size: 0.95rem;
  outline: none;
  transition: var(--transition-normal);
}

.newsletter-form input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.newsletter-form input:focus {
  border-color: var(--color-accent);
}

.newsletter-form button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-accent);
  color: var(--color-text-light);
  transition: var(--transition-normal);
}

.newsletter-form button:hover {
  background-color: var(--color-accent-hover);
}

.footer-bottom {
  padding: 24px 0;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

- [ ] **Step 3: Add to App.jsx**

```jsx
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <PropertyListings />
      <About />
      <Services />
      <Process />
      <PropertyTypes />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

Run: `npm run dev`
Expected: Dark footer with 4 columns, newsletter form, social icons

---

### Task 12: Final Polish & SEO

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: All components
- Produces: Polished template ready for sale

- [ ] **Step 1: Update index.html with SEO meta tags**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Hamza Property - Find your dream home with our premium real estate services. Browse luxury properties, apartments, and villas in top locations." />
    <meta name="keywords" content="real estate, property, homes for sale, apartments, villas, luxury real estate" />
    <meta property="og:title" content="Hamza Property - Find Your Dream Home" />
    <meta property="og:description" content="Premium real estate services. Browse luxury properties in top locations." />
    <meta property="og:type" content="website" />
    <title>Hamza Property - Find Your Dream Home</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Add smooth scroll behavior to index.css**

Add to `src/index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Run lint check**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 4: Build for production**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 5: Final visual verification**

Run: `npm run preview`
Check all sections render correctly, responsive layout works, hover effects are smooth

---

## Summary

| Task | Component | Status |
|------|-----------|--------|
| 1 | Data Files | [ ] |
| 2 | NavBar Update | [ ] |
| 3 | PropertyListings | [ ] |
| 4 | About | [ ] |
| 5 | Services | [ ] |
| 6 | Process | [ ] |
| 7 | PropertyTypes | [ ] |
| 8 | Testimonials | [ ] |
| 9 | Blog | [ ] |
| 10 | CTA | [ ] |
| 11 | Footer | [ ] |
| 12 | Final Polish | [ ] |

**Total Files Created:** 22 (11 components x 2 files each + 3 data files + App.jsx update + index.html update + index.css update)
