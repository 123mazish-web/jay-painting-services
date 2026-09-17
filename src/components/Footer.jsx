import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Globe, Share2 } from 'lucide-react';

export function Footer({ activePage, setActivePage, onOpenQuoteModal }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col col-brand">
            <div className="footer-logo" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
              <Logo variant="footer" />
            </div>
            <p className="footer-bio">
              Jay Painting Services provides high-end interior, exterior, commercial, and residential painting solutions across Australia. Dedicated to quality, durability, and customer satisfaction.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Direct Contact Info (Business Card details) */}
          <div className="footer-col col-contact">
            <h4 className="footer-col-title">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>Australia Wide Services</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon text-red" />
                <a href="tel:0410129008" className="footer-link-bold">0410 129 008 (Bayat)</a>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <a href="mailto:bayat.wassi@yahoo.com.au">bayat.wassi@yahoo.com.au</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="footer-col col-links">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => handleNav('home')}>Home</button></li>
              <li><button onClick={() => handleNav('about')}>About Us</button></li>
              <li><button onClick={() => handleNav('painting')}>Painting</button></li>
              <li><button onClick={() => handleNav('gallery')}>Gallery</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Column 4: Services List */}
          <div className="footer-col col-services">
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-services-list">
              <li><button onClick={onOpenQuoteModal}>Interior Painting</button></li>
              <li><button onClick={onOpenQuoteModal}>Exterior Painting</button></li>
              <li><button onClick={onOpenQuoteModal}>Commercial Painting</button></li>
              <li><button onClick={onOpenQuoteModal}>Residential Painting</button></li>
              <li><button onClick={onOpenQuoteModal}>Free Quote & Inspection</button></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Jay Painting Services. All Rights Reserved.</p>
            
            <p className="footer-credit">
              Website developed by{' '}
              <a 
                href="https://zayedalam.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="developer-link"
              >
                Zayed Alam & Team
              </a>
            </p>

            <div className="footer-bottom-links">
              <span>Licensed & Insured Painter Australia</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
