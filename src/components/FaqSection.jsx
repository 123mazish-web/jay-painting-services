import React, { useState } from 'react';
import painterImg from '../assets/painter_at_work.jpg';
import heroBg from '../assets/hero_painting_bg.jpg';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, CheckCircle, PhoneCall } from 'lucide-react';

export function FaqSection({ onOpenQuoteModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are some benefits of hiring professional painters?',
      a: 'Hiring professional painters ensures superior surface preparation, flawless line precision, access to trade-grade weather-resistant paints, and long-lasting durability. We handle complex scaffolding, drop sheet protection, and save you valuable time while guaranteeing a 100% professional result.'
    },
    {
      q: 'What types of painting services do you provide?',
      a: 'Jay Painting Services provides interior painting, exterior weatherproof painting, commercial property repaints, residential renovation painting, plaster repair, timber deck staining, roof restoration, and custom color consulting across Australia.'
    },
    {
      q: 'How much does a painting project cost in Australia?',
      a: 'Costs depend on total surface area, ceiling height, condition of walls, and paint specifications. We offer 100% free, detailed, fixed-price quotes with no hidden fees so you know exact costs before work commences.'
    },
    {
      q: 'How do you prepare surfaces before painting?',
      a: 'Preparation is the secret to a flawless finish! We pressure-wash exterior surfaces, scrape flaking paint, patch wall cracks and gouges with high-grade plaster filler, sand smooth, and apply specialized primer sealers before applying top coats.'
    },
    {
      q: 'Are your quotes free and non-obligatory?',
      a: 'Yes! All our quotes are 100% free and carry zero obligation. Bayat and our team will inspect your property or review your plans and provide an itemized fixed quote.'
    },
    {
      q: 'What paint brands do you use?',
      a: 'We use premium, high-durability Australian paints such as Dulux, Taubmans, Haymes Paint, and Wattyl. We also offer low-VOC, hypoallergenic, and odorless interior paint options.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        
        <div className="faq-grid">
          
          {/* Left Column: FAQ Accordion matching reference */}
          <div className="faq-content-column">
            <div className="section-badge">
              <HelpCircle size={16} className="badge-icon" />
              <span>FAQ</span>
            </div>

            <h2 className="section-title text-left">
              Frequently Asked Questions
            </h2>
            <p className="faq-intro-text">
              Have questions about our painting process, pricing, or timelines? Here are answers to common client questions.
            </p>

            <div className="accordion">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`accordion-item ${openIndex === idx ? 'open' : ''}`}
                >
                  <button 
                    className="accordion-header"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span className="accordion-title">{faq.q}</span>
                    <span className="accordion-icon-toggle">
                      {openIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {openIndex === idx && (
                    <div className="accordion-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Creative Image Montage matching reference */}
          <div className="faq-visual-column">
            <div className="faq-montage-wrapper">
              <div className="montage-card card-top">
                <img src={painterImg} alt="Painter detailing wall" />
              </div>
              <div className="montage-card card-bottom">
                <img src={heroBg} alt="Finished interior residence" />
              </div>
              
              {/* Floating Free Quote Badge matching reference */}
              <div className="floating-quote-card">
                <div className="fq-icon-box">
                  <ShieldCheck size={28} />
                </div>
                <div className="fq-text">
                  <span className="fq-title">Free On-Site Quote</span>
                  <span className="fq-sub">Call Bayat: 0410 129 008</span>
                </div>
                <button className="btn btn-sm btn-primary mt-2" onClick={onOpenQuoteModal}>
                  Get Quote
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
