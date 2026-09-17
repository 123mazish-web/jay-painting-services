import React from 'react';
import { SubPageBanner } from '../components/SubPageBanner';
import { GallerySection } from '../components/GallerySection';
import { CalloutBanner } from '../components/CalloutBanner';

export function GalleryPage({ onBackToHome, onOpenQuoteModal }) {
  return (
    <div className="page-wrapper">
      <SubPageBanner 
        title="Project Gallery" 
        subtitle="View our before-and-after painting transformations, residential finishes, and commercial painting highlights." 
        onBackToHome={onBackToHome}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      <GallerySection onOpenQuoteModal={onOpenQuoteModal} />

      {/* Placeholder container */}
      <div className="container py-12">
        <div className="placeholder-subpage-card">
          <div className="placeholder-content">
            <h3>More Project Galleries Coming Soon</h3>
            <p>Our photo album of recently completed house repaints and commercial projects across Australia is currently being updated.</p>
            <button className="btn btn-primary mt-4" onClick={onOpenQuoteModal}>
              Request Sample Project Photos
            </button>
          </div>
        </div>
      </div>

      <CalloutBanner onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
