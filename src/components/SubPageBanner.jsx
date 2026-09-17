import React from 'react';
import { ArrowLeft, ArrowRight, Paintbrush } from 'lucide-react';

export function SubPageBanner({ title, subtitle, onBackToHome, onOpenQuoteModal }) {
  return (
    <section className="subpage-banner">
      <div className="container">
        <div className="subpage-banner-card">
          <div className="subpage-badge">
            <Paintbrush size={16} />
            <span>Jay Painting Services Australia</span>
          </div>
          <h1 className="subpage-title">{title}</h1>
          <p className="subpage-subtitle">{subtitle}</p>

          <div className="subpage-actions">
            <button className="btn btn-outline-hero" onClick={onBackToHome}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            <button className="btn btn-primary" onClick={onOpenQuoteModal}>
              <span>Get Free Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
