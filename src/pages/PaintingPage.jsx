import React from 'react';
import { SubPageBanner } from '../components/SubPageBanner';
import { CalloutBanner } from '../components/CalloutBanner';
import painterImg from '../assets/painter_at_work.jpg';
import exteriorImg from '../assets/exterior_painting.jpg';
import commercialImg from '../assets/commercial_painting.jpg';
import heroBg from '../assets/hero_painting_bg.jpg';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function PaintingPage({ onBackToHome, onOpenQuoteModal }) {
  const serviceRows = [
    {
      id: 'interior',
      title: 'Interior Painting Services',
      subtitle: 'Flawless Internal Finishes for Homes & Offices',
      badge: 'Popular Service',
      image: painterImg,
      imgPosition: 'left',
      desc: 'Our interior painting team transforms your living rooms, bedrooms, kitchens, and hallways with precision craftsmanship. We use top-tier Australian low-VOC, odorless acrylic paints that create healthy, vibrant indoor environments.',
      features: [
        'Complete wall, ceiling, and architrave prep & sanding',
        'Plaster repair, crack filling & primer sealing',
        'Low-VOC, hypoallergenic & washable paint finishes',
        'Dust-free surface sanding & furniture drop-sheet protection'
      ]
    },
    {
      id: 'exterior',
      title: 'Exterior Painting Services',
      subtitle: 'Weatherproof UV Shield for Melbourne Homes',
      badge: '10-Yr Weather Guarantee',
      image: exteriorImg,
      imgPosition: 'right',
      desc: 'Protect your property exterior against extreme Australian sun, coastal air, and heavy rain. We restore render, timber weatherboards, eaves, brickwork, and roofs using high-durability UV shielding coatings.',
      features: [
        'High-pressure washing & mold treatment',
        'UV-resistant & elastic anti-crack membrane coatings',
        'Timber deck restoration, fence staining & sealing',
        'Roof restoration, gutter coating & fascia detailing'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Painting Services',
      subtitle: 'Fast Turnaround with Zero Interruption',
      badge: 'After-Hours Availability',
      image: commercialImg,
      imgPosition: 'left',
      desc: 'We provide heavy-duty commercial painting for offices, retail stores, shopping centers, warehouses, and strata complexes. Our flexible scheduling ensures your business operates seamlessly during repaints.',
      features: [
        'Scuff-resistant & heavy-duty industrial coatings',
        'After-hours & weekend project execution',
        'Fully licensed, insured, and safety-compliant team',
        'Fixed-price corporate painting packages'
      ]
    },
    {
      id: 'residential',
      title: 'Residential Full-House Makeovers',
      subtitle: 'Whole-House Paint Transformations',
      badge: 'Complete Home Solution',
      image: heroBg,
      imgPosition: 'right',
      desc: 'Elevate your property value and aesthetic appeal with a total residential makeover. From initial color consultation and sample testing to final handover, Bayat and our team deliver unmatched quality.',
      features: [
        'Free professional color consultation & sample test patches',
        'Integrated interior & exterior repaint packages',
        'Meticulous surface restoration & fine detail trim work',
        'Final quality walkthrough & 100% satisfaction guarantee'
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <SubPageBanner 
        title="Our Painting Services" 
        subtitle="Professional interior, exterior, commercial, and residential painting solutions tailored for Melbourne properties." 
        onBackToHome={onBackToHome}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      {/* Alternating Zig-Zag Service Rows Section */}
      <section className="section-padding alternating-services-section">
        <div className="container">
          
          <div className="alternating-rows-stack">
            {serviceRows.map((row) => (
              <div 
                key={row.id} 
                className={`service-zigzag-row ${row.imgPosition === 'right' ? 'row-img-right' : 'row-img-left'}`}
              >
                {/* Image Column */}
                <div className="zigzag-image-col">
                  <div className="zigzag-img-wrapper">
                    <img src={row.image} alt={row.title} className="zigzag-img" />
                    <span className="zigzag-badge">{row.badge}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="zigzag-content-col">
                  <div className="zigzag-content-inner">
                    <span className="zigzag-sub-tag">{row.subtitle}</span>
                    <h2 className="zigzag-title">{row.title}</h2>
                    <p className="zigzag-desc">{row.desc}</p>

                    <ul className="zigzag-features-list">
                      {row.features.map((feat, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={18} className="text-red flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="zigzag-action">
                      <button className="btn btn-primary btn-lg zigzag-btn" onClick={onOpenQuoteModal}>
                        <span>Request Free Quote</span>
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CalloutBanner onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
}
