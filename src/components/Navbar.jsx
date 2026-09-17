import React, { useState } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Clock, Menu, X, ArrowRight } from 'lucide-react';

export function Navbar({ activePage, setActivePage, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'painting', label: 'Painting' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      {/* Top Banner Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-info-item">
              <MapPin size={15} className="top-icon" />
              <span>Serving Melbourne, VIC & Surrounding Suburbs</span>
            </span>
            <span className="top-divider">|</span>
            <span className="top-info-item">
              <Clock size={15} className="top-icon" />
              <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
            </span>
          </div>

          <div className="top-bar-right">
            <a href="tel:0410129008" className="top-info-link highlight-phone">
              <Phone size={15} className="top-icon" />
              <span><strong>0410 129 008</strong> (Bayat)</span>
            </a>
            <span className="top-divider">|</span>
            <a href="mailto:bayat.wassi@yahoo.com.au" className="top-info-link">
              <Mail size={15} className="top-icon" />
              <span>bayat.wassi@yahoo.com.au</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-navbar">
        <div className="container navbar-inner">
          {/* Logo */}
          <div className="navbar-brand" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            <Logo />
          </div>

          {/* Desktop Links */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <button
                    className={`nav-link ${activePage === link.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                    {activePage === link.id && <span className="active-dot" />}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Area */}
          <div className="navbar-actions">
            <button 
              className="btn btn-primary btn-quote desktop-only-quote" 
              onClick={onOpenQuoteModal}
            >
              <span>Free Quote</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-drawer-content">
            <div className="mobile-drawer-header">
              <Logo size="small" />
              <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>
            
            <nav className="mobile-nav">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={`mobile-nav-link ${activePage === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  <span>{link.label}</span>
                  {activePage === link.id && <span className="mobile-active-badge">Active</span>}
                </button>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <button 
                className="btn btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
              >
                <span>Request Free Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
