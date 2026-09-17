import React, { useState } from 'react';
import { SubPageBanner } from '../components/SubPageBanner';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function ContactPage({ onBackToHome, onOpenQuoteModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <SubPageBanner 
        title="Contact Us" 
        subtitle="Get in touch with Bayat for a free quote, site inspection, or inquiries regarding our painting services in Melbourne, VIC." 
        onBackToHome={onBackToHome}
        onOpenQuoteModal={onOpenQuoteModal}
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Contact Info Cards */}
            <div className="contact-info-column">
              <h2 className="section-title text-left">Get In Touch</h2>
              <p className="contact-intro">
                Have questions or ready to schedule your free quote? Call Bayat directly or send us a message below.
              </p>

              <div className="contact-cards-stack">
                <div className="contact-card">
                  <div className="contact-card-icon red-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-card-text">
                    <h4>Direct Phone (Bayat)</h4>
                    <a href="tel:0410129008" className="contact-val highlight-val">0410 129 008</a>
                    <p className="contact-sub text-slate">Available Mon - Sat, 7am - 6pm</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-card-text">
                    <h4>Email Address</h4>
                    <a href="mailto:bayat.wassi@yahoo.com.au" className="contact-val">bayat.wassi@yahoo.com.au</a>
                    <p className="contact-sub text-slate">Fast email response within 24 hours</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-card-text">
                    <h4>Service Coverage</h4>
                    <p className="contact-val">Melbourne, VIC & Surrounding Suburbs</p>
                    <p className="contact-sub text-slate">Interior, Exterior, Commercial & Residential</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-card-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-card-text">
                    <h4>Working Hours</h4>
                    <p className="contact-val">Mon - Sat: 7:00 AM - 6:00 PM</p>
                    <p className="contact-sub text-slate">Sunday: Emergency / By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form / Confirmation */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success-state text-center py-8">
                    <div className="success-icon-wrapper mb-4">
                      <CheckCircle2 size={54} className="text-red mx-auto" />
                    </div>
                    <h3>Message Sent Successfully!</h3>
                    <p className="my-3">
                      Thank you <strong>{formData.name}</strong>. Bayat will get back to you shortly regarding your inquiry.
                    </p>
                    <a href="tel:0410129008" className="btn btn-primary mt-4">
                      <Phone size={16} />
                      <span>Call 0410 129 008 Now</span>
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="form-card-title">Send Us a Direct Message</h3>
                    <p className="form-card-sub">Fill out the form and we will reply promptly.</p>
                    
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Full name" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="form-group-row">
                        <div className="form-group">
                          <label>Phone Number *</label>
                          <input 
                            type="tel" 
                            required 
                            placeholder="04XX XXX XXX" 
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label>Email Address</label>
                          <input 
                            type="email" 
                            placeholder="your@email.com.au" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Subject / Service Needed</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Interior House Painting Quote" 
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Your Message</label>
                        <textarea 
                          rows="4" 
                          placeholder="Describe your painting project or question..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <button type="submit" className="btn btn-primary w-full btn-lg">
                        <span>Send Message</span>
                        <Send size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
