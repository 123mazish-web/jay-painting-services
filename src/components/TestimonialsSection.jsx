import React from 'react';
import { Star, MessageSquareQuote, ShieldCheck, Quote } from 'lucide-react';
import { Logo } from './Logo';

export function TestimonialsSection() {
  const reviews = [
    {
      name: 'Michael Stevenson',
      location: 'Melbourne, VIC',
      rating: 5,
      role: 'Homeowner',
      text: 'Bayat and his team transformed our 4-bedroom home interior in just 3 days! Clean, fast, and impeccably neat lines around all architraves. Highly recommended!',
      featured: false
    },
    {
      name: 'David & Sarah Jenkins',
      location: 'Sydney, NSW',
      rating: 5,
      role: 'Residential Client',
      text: 'Extremely professional painting service. They pressure washed our exterior render, fixed minor plaster cracks, and painted our double-story home to perfection. Worth every dollar!',
      featured: true
    },
    {
      name: 'Robert Thornton',
      location: 'Brisbane, QLD',
      rating: 5,
      role: 'Commercial Facility Manager',
      text: 'Jay Painting Services completed our corporate office repaint over the weekend without disrupting business hours. Honest pricing, premium Dulux paint, and outstanding finish.',
      featured: false
    }
  ];

  return (
    <section className="testimonials-section section-padding bg-light" id="testimonials">
      <div className="container">
        
        <div className="section-header text-center">
          <div className="section-badge center-badge">
            <MessageSquareQuote size={16} className="badge-icon" />
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="section-title">What Our Australian Clients Say</h2>
          <p className="section-subtitle">
            Read real feedback from homeowners and businesses who trust Jay Painting Services.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className={`testimonial-card ${rev.featured ? 'featured-card' : ''}`}
            >
              <div className="quote-icon-top">
                <Quote size={32} />
              </div>

              {/* Star Rating */}
              <div className="star-rating">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {/* Review Text */}
              <p className="testimonial-text">"{rev.text}"</p>

              {/* Client Info */}
              <div className="testimonial-client">
                <h4 className="client-name">{rev.name}</h4>
                <span className="client-meta">{rev.role} • {rev.location}</span>
              </div>

              {/* Card Footer Stamp */}
              <div className="testimonial-stamp">
                <ShieldCheck size={16} />
                <span>Verified Client</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots matching reference */}
        <div className="carousel-dots mt-4">
          <span className="dot" />
          <span className="dot active" />
          <span className="dot" />
        </div>

      </div>
    </section>
  );
}
