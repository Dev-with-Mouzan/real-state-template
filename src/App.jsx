import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import PropertyListings from './components/PropertyListings/PropertyListings';
import About from './components/About/About';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import PropertyTypes from './components/PropertyTypes/PropertyTypes';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import CTA from './components/CTA/CTA';
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

export default App;
