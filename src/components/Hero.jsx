import React from 'react';
import heroBg from '../assets/hero_painting_bg.jpg';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Star } from 'lucide-react';

export function Hero({ onOpenQuoteModal, onExploreServices }) {
  return (
    <section className="hero-section hero-full-bleed">
      {/* Full-width Hero Card Container matching design reference */}
      <div className="hero-card hero-card-wide">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url(${heroBg})` }} 
        />
        <div className="hero-overlay" />

        <div className="container hero-content-container">
          <div className="hero-content">
            {/* Top Sub-Badge */}
            <div className="hero-badge">
              <Award size={16} className="badge-icon" />
              <span>Melbourne's Trusted Painting Specialists</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              We Help You To <br />
              <span className="text-highlight">Paint Your Home</span>
            </h1>

            {/* Subtext */}
            <p className="hero-description">
              Transform your interior and exterior spaces with Jay Painting Services. 
              We deliver high-end finishings, weather-resistant exterior coats, and precision 
              residential and commercial painting across Melbourne and surrounding suburbs.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <button 
                className="btn btn-primary btn-lg" 
                onClick={onOpenQuoteModal}
              >
                <span>Get Free Quote</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn btn-outline-hero btn-lg" 
                onClick={onExploreServices}
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Feature Pills */}
            <div className="hero-features">
              <div className="hero-feature-pill">
                <CheckCircle2 size={16} className="pill-icon" />
                <span>100% Guaranteed Quality</span>
              </div>
              <div className="hero-feature-pill">
                <ShieldCheck size={16} className="pill-icon" />
                <span>Licensed & Fully Insured</span>
              </div>
              <div className="hero-feature-pill">
                <Star size={16} className="pill-icon text-amber" />
                <span>5-Star Rated Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
