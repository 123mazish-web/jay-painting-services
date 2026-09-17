import React from 'react';
import tallPainterImg from '../assets/about_tall_painter.jpg';
import exteriorImg from '../assets/exterior_painting.jpg';
import { Paintbrush, Home, Building2, Palette, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export function AboutSection({ onOpenQuoteModal }) {
  const highlights = [
    {
      icon: <Home className="highlight-icon" size={22} />,
      title: 'Interior Painting',
      desc: 'Seamless wall, ceiling, and trim coats with low-VOC eco paints.'
    },
    {
      icon: <Palette className="highlight-icon" size={22} />,
      title: 'Exterior Painting',
      desc: 'Weatherproof UV-shielding formulas designed for Australian climate.'
    },
    {
      icon: <Building2 className="highlight-icon" size={22} />,
      title: 'Commercial Painting',
      desc: 'Durable, high-efficiency coatings for offices, retail & complexes.'
    },
    {
      icon: <ShieldCheck className="highlight-icon" size={22} />,
      title: 'Residential Painting',
      desc: 'Full home makeovers, plaster repairs & precision color matching.'
    }
  ];

  return (
    <section className="about-section section-padding" id="about-us">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Long Tall Image covering the left side nicely */}
          <div className="about-image-column">
            {/* Orange/Red Dot Grid Decorative Element */}
            <div className="dot-grid-accent" />
            
            <div className="about-main-card tall-image-card">
              <img 
                src={tallPainterImg} 
                alt="Jay Painting craftsman painting tall wall" 
                className="about-img-tall" 
              />
              
              {/* Floating 10+ Years Experience Badge */}
              <div className="floating-exp-badge">
                <Award size={24} />
                <div className="exp-text">
                  <span className="exp-num">10+ Years</span>
                  <span className="exp-sub">Quality Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Feature Cards */}
          <div className="about-content-column">
            <div className="section-badge">
              <Paintbrush size={16} className="badge-icon" />
              <span>ABOUT US</span>
            </div>

            <h2 className="section-title">
              Looking for Top Quality Painting & Decorating Services?
            </h2>

            <p className="about-lead-text">
              At <strong>Jay Painting Services</strong>, we bring expertise, precision, and passion to every brush stroke. Led by Bayat, our team delivers premium painting solutions across Australia with zero compromise on quality.
            </p>

            <p className="about-body-text">
              Whether you are refreshing your living room, repainting your home exterior, or upgrading your commercial property, we use top-tier Australian paints, meticulous surface preparation, and clean execution.
            </p>

            {/* 4 Feature Items Grid */}
            <div className="about-features-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">{item.title}</h4>
                    <p className="feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="about-action">
              <button className="btn btn-primary" onClick={onOpenQuoteModal}>
                <span>Get Free Quote</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
