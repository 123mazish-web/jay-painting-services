import React, { useState } from 'react';
import painterImg from '../assets/painter_at_work.jpg';
import exteriorImg from '../assets/exterior_painting.jpg';
import commercialImg from '../assets/commercial_painting.jpg';
import heroBg from '../assets/hero_painting_bg.jpg';
import { PaintRoller, CheckCircle2, ArrowRight, X, Maximize2 } from 'lucide-react';

export function ServicesSection({ onOpenQuoteModal }) {
  const [activeModalService, setActiveModalService] = useState(null);

  const services = [
    {
      id: 'interior',
      title: 'Interior Painting',
      category: 'Residential & Commercial',
      image: painterImg,
      badge: 'Popular',
      shortDesc: 'Smooth internal walls, ceilings, and architrave paint finishing.',
      features: ['Low-VOC & Odorless Eco Paints', 'Plaster & Wall Preparation', 'Trim & Architrave Precision Detail'],
      details: 'Our interior painting service transforms your living space into a fresh, vibrant home. We protect all floors and furniture with heavy-duty drop sheets, repair wall imperfections, sand down rough surfaces, and apply top-tier Australian acrylic paints for lasting elegance.'
    },
    {
      id: 'exterior',
      title: 'Exterior Painting',
      category: 'Weatherproof Shield',
      image: exteriorImg,
      badge: 'Recommended',
      shortDesc: 'Weather-resistant exterior walls, render, timber deck, and roof coatings.',
      features: ['10-Year Weatherproof Guarantee', 'Pressure Wash & Mold Prep', 'Timber Decking & Fence Staining'],
      details: 'Protect your home exterior against harsh weather elements. We clean, pressure-wash, prime, and coat brickwork, timber cladding, render, and weatherboards with premium outdoor UV-resistant formulas.'
    },
    {
      id: 'commercial',
      title: 'Commercial Painting',
      category: 'Business & Industrial',
      image: commercialImg,
      badge: 'High Durability',
      shortDesc: 'Flexible scheduling for offices, retail stores, warehouses, and complexes.',
      features: ['Weekend & After-Hours Scheduling', 'Heavy-Duty Anti-Scuff Coatings', 'Fully Compliant & Insured Work'],
      details: 'We understand business operations require rapid turnaround without compromising work environments. Jay Painting Services offers tailored commercial painting packages with flexible execution hours.'
    },
    {
      id: 'residential',
      title: 'Residential Painting',
      category: 'Full Home Makeovers',
      image: heroBg,
      badge: 'Full Service',
      shortDesc: 'Complete home repaints from initial color choice to final inspection.',
      features: ['Free Color Sampling & Advice', 'Complete House Repaint Packages', 'Detailed Handover Walkthrough'],
      details: 'Elevate your property value and living experience with our full-house residential repaint services. We work closely with homeowners to pick harmonious color palettes that elevate architectural features.'
    }
  ];

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge center-badge">
            <PaintRoller size={16} className="badge-icon" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="section-title">Professional Painting Solutions</h2>
          <p className="section-subtitle">
            Tailored painting services delivered across Melbourne with meticulous craftsmanship, 
            premium materials, and fixed-price transparency.
          </p>
        </div>

        {/* Services Cards Grid with Larger Prominent Images & Minimal Text */}
        <div className="services-grid services-large-img-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card service-card-prominent"
              onClick={() => setActiveModalService(service)}
            >
              {/* Prominent Large Image Slot */}
              <div className="service-image-container prominent-img-container">
                <img src={service.image} alt={service.title} className="service-card-img" />
                <span className="service-card-badge">{service.badge}</span>
                
                <div className="prominent-hover-overlay">
                  <Maximize2 size={22} />
                  <span>Click for Full Details</span>
                </div>
              </div>

              {/* Reduced Minimal Text Body: Title & Short 1-line Description */}
              <div className="service-card-body minimal-card-body">
                <h3 className="service-card-title minimal-title">{service.title}</h3>
                <p className="service-card-desc minimal-desc">{service.shortDesc}</p>

                <div className="minimal-card-action">
                  <span className="minimal-action-link">
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Details Pop-up Modal */}
      {activeModalService && (
        <div className="modal-backdrop" onClick={() => setActiveModalService(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalService(null)}>
              <X size={20} />
            </button>
            <div className="modal-header">
              <span className="modal-badge">{activeModalService.category}</span>
              <h3 className="modal-title">{activeModalService.title}</h3>
            </div>
            <div className="modal-body">
              <img src={activeModalService.image} alt={activeModalService.title} className="modal-img" />
              <p className="modal-desc-main">{activeModalService.details}</p>
              
              <h4 className="modal-subheading">Key Highlights & Inclusions:</h4>
              <ul className="modal-feature-list">
                {activeModalService.features.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} className="text-red" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-primary w-full"
                onClick={() => {
                  setActiveModalService(null);
                  onOpenQuoteModal();
                }}
              >
                <span>Request Quote for {activeModalService.title}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
