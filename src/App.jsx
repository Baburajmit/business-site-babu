import React, { useEffect } from 'react';
import './styles/globals.css';

import Loader       from './components/Loader/Loader';
import Navbar       from './components/Navbar/Navbar';
import Hero         from './components/Hero/Hero';
import TrustBar     from './components/TrustBar/TrustBar';
import Services     from './components/Services/Services';
import Process      from './components/Process/Process';
import WhyMe        from './components/WhyMe/WhyMe';
import Projects     from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import CTA          from './components/CTA/CTA';
import Footer       from './components/Footer/Footer';
import useFadeUp from './hooks/useFadeUp';

function App() {
  useFadeUp();

  // Add scroll reveal on component mount and after content loads
  useEffect(() => {
    // Force a re-check after a short delay to ensure all elements are rendered
    const timeout = setTimeout(() => {
      const event = new CustomEvent('scroll');
      window.dispatchEvent(event);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyMe />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;