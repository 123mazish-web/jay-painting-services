import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function CalloutBanner({ onOpenQuoteModal }) {
  return (
    <section className="callout-section">
      <div className="container">
        <div className="callout-card">
          <div className="callout-content">
            <h3 className="callout-title">Need Professional Painting Services?</h3>
            <p className="callout-desc">
              Whether it's a single room refresh or a complete residential or commercial property repaint, 
              get an instant free estimate from Bayat today.
            </p>
          </div>

          <div className="callout-actions">
            <a href="tel:0410129008" className="btn btn-callout-phone">
              <Phone size={18} />
              <span>0410 129 008</span>
            </a>
            <button className="btn btn-primary btn-callout-quote" onClick={onOpenQuoteModal}>
              <span>Request Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
