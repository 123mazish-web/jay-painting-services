import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export function PreFooter({ onOpenQuoteModal }) {
  return (
    <section className="prefooter-section">
      <div className="container">
        <div className="prefooter-card">
          <div className="prefooter-text">
            <h2>Jay Painting & Decorating</h2>
            <p>Exceptional Service • Fixed Price Quotes • Guaranteed Craftsmanship</p>
          </div>
          <div className="prefooter-actions">
            <a href="tel:0410129008" className="btn btn-prefooter-phone">
              <Phone size={18} />
              <span>0410 129 008</span>
            </a>
            <button className="btn btn-primary btn-lg" onClick={onOpenQuoteModal}>
              <span>Get Quote Now</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
