import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TreatmentDetail } from './components/TreatmentDetail';
import { ServiceDetail } from './data/servicesData';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const handleNavigate = (href: string) => {
    // If on detail page and clicking nav, go back to home first then scroll
    if (selectedService) {
      setSelectedService(null);
      // Allow state update to render Home first, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        <AnimatePresence mode="wait">
          {selectedService ? (
            <TreatmentDetail 
              key="detail" 
              service={selectedService} 
              onBack={() => setSelectedService(null)} 
            />
          ) : (
            <div key="landing">
              <Hero />
              <Services onSelectService={setSelectedService} />
              <About />
              <BeforeAfter />
              <Testimonials />
              <Contact />
            </div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;