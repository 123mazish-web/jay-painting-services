import React from 'react';
import { SubPageBanner } from '../components/SubPageBanner';
import { AboutSection } from '../components/AboutSection';
import { CalloutBanner } from '../components/CalloutBanner';

export function AboutPage({ onBackToHome, onOpenQuoteModal }) {
  return (
    <div className="page-wrapper">
      <SubPageBanner 
        title="About Us" 
        subtitle="Learn more about Jay Painting Services, our commitment to quality craftsmanship across Australia, and our expert painting team." 
        onBackToHome={onBackToHome}
        onOpenQuoteModal={onOpenQuoteModal}
      />
      
      {/* We include the rich About section here as well */}
      <AboutSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* Subpage placeholder container for custom about content expansion */}
      <div className="container py-12">
        <div className="placeholder-subpage-card">
          <div className="placeholder-content">
            <h3>More Details Coming Soon</h3>
            <p>We are currently updating our company history, team profiles, and Australian regional coverage maps for this section.</p>
            <button className="btn btn-primary mt-4" onClick={onOpenQuoteModal}>
              Contact Bayat Today
            </button>
          </div>
        </div>
      </div>

      <CalloutBanner onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
