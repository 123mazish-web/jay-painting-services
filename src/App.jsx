import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FaqSection } from './components/FaqSection';
import { CalloutBanner } from './components/CalloutBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { PreFooter } from './components/PreFooter';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

// Sub-pages
import { AboutPage } from './pages/AboutPage';
import { PaintingPage } from './pages/PaintingPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

import { Phone, Calculator } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuoteModal = () => setIsQuoteOpen(true);
  const handleCloseQuoteModal = () => setIsQuoteOpen(false);

  const scrollToServices = () => {
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-main-wrapper">
      {/* Navbar Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenQuoteModal={handleOpenQuoteModal} 
      />

      {/* Main Page Content */}
      <main className="main-content">
        {activePage === 'home' && (
          <>
            <Hero 
              onOpenQuoteModal={handleOpenQuoteModal} 
              onExploreServices={scrollToServices} 
            />
            <AboutSection 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
            <ServicesSection 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
            <FaqSection 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
            <CalloutBanner 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
            <TestimonialsSection />
            <GallerySection 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
            <PreFooter 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage 
            onBackToHome={() => setActivePage('home')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {activePage === 'painting' && (
          <PaintingPage 
            onBackToHome={() => setActivePage('home')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage 
            onBackToHome={() => setActivePage('home')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            onBackToHome={() => setActivePage('home')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenQuoteModal={handleOpenQuoteModal} 
      />

      {/* Interactive Free Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={handleCloseQuoteModal} 
      />

      {/* Floating Quick Action Widget (Bottom Right) */}
      <div className="floating-quick-widget">
        <a href="tel:0410129008" className="widget-btn widget-phone" title="Call Bayat: 0410 129 008">
          <Phone size={20} />
          <span className="widget-label">0410 129 008</span>
        </a>
        <button 
          className="widget-btn widget-quote" 
          onClick={handleOpenQuoteModal} 
          title="Get Free Quote"
        >
          <Calculator size={20} />
          <span className="widget-label">Free Quote</span>
        </button>
      </div>
    </div>
  );
}
