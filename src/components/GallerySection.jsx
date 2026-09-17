import React, { useState } from 'react';
import jay1 from '../assets/jay1.jpeg';
import jay2 from '../assets/jay2.jpeg';
import jay3 from '../assets/jay3.jpeg';
import jay4 from '../assets/jay4.jpeg';
import jay5 from '../assets/jay5.jpeg';
import jay6 from '../assets/jay6.jpeg';
import jay7 from '../assets/jay7.jpg';
import jay8 from '../assets/jay8.jpg';
import jay9 from '../assets/jay9.jpg';
import { Camera, Maximize2, X } from 'lucide-react';

export function GallerySection({ onOpenQuoteModal }) {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    { id: 1, src: jay1, alt: 'Jay Painting Project 1' },
    { id: 2, src: jay2, alt: 'Jay Painting Project 2' },
    { id: 3, src: jay3, alt: 'Jay Painting Project 3' },
    { id: 4, src: jay4, alt: 'Jay Painting Project 4' },
    { id: 5, src: jay5, alt: 'Jay Painting Project 5' },
    { id: 6, src: jay6, alt: 'Jay Painting Project 6' },
    { id: 7, src: jay7, alt: 'Jay Painting Project 7 - Navy Dining Room' },
    { id: 8, src: jay8, alt: 'Jay Painting Project 8 - Luxury Exterior' },
    { id: 9, src: jay9, alt: 'Jay Painting Project 9 - Detail Trim Work' }
  ];

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge center-badge">
            <Camera size={16} className="badge-icon" />
            <span>OUR WORK</span>
          </div>
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-subtitle">
            Browse high-quality finishings and painting transformations completed by Jay Painting Services.
          </p>
        </div>

        {/* Clean Image Grid Slots (9 Images in 3x3 layout) */}
        <div className="image-slots-grid image-slots-6">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="image-slot-item"
              onClick={() => setActiveImage(img.src)}
            >
              <img src={img.src} alt={img.alt} className="slot-img" />
              <div className="image-slot-overlay">
                <button className="btn-expand-image">
                  <Maximize2 size={20} />
                  <span>View Full Image</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Full Image Viewing */}
      {activeImage && (
        <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveImage(null)}>
              <X size={24} />
            </button>
            <img src={activeImage} alt="Expanded Jay Painting Project" className="lightbox-img" />
            <div className="lightbox-footer">
              <button className="btn btn-primary" onClick={() => { setActiveImage(null); onOpenQuoteModal(); }}>
                Get Free Quote For Similar Project
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
