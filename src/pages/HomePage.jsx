import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import PropertyListings from '../components/PropertyListings/PropertyListings';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Process from '../components/Process/Process';
import PropertyTypes from '../components/PropertyTypes/PropertyTypes';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <StatsCounter />
      <PropertyListings />
      <About />
      <Services />
      <Gallery />
      <Process />
      <PropertyTypes />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default HomePage;
