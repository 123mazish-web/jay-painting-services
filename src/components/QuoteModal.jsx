import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, Send, Calculator, ShieldCheck } from 'lucide-react';

export function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Interior',
    propertyType: 'Residential',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="quote-modal-overlay" onClick={resetForm}>
      <div className="quote-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="quote-modal-close" onClick={resetForm}>
          <X size={22} />
        </button>

        {submitted ? (
          <div className="quote-success-state">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={48} className="text-red" />
            </div>
            <h3 className="success-title">Quote Request Received!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Bayat from Jay Painting Services will review your project details and contact you shortly at <strong>{formData.phone || formData.email}</strong>.
            </p>
            <div className="success-contact-box">
              <p>For urgent inquiries, feel free to call directly:</p>
              <a href="tel:0410129008" className="btn btn-primary btn-sm mt-2">
                <Phone size={16} />
                <span>Call Bayat: 0410 129 008</span>
              </a>
            </div>
            <button className="btn btn-outline-quote w-full mt-4" onClick={resetForm}>
              Close Window
            </button>
          </div>
        ) : (
          <div className="quote-modal-body">
            <div className="modal-header-block">
              <div className="modal-badge-row">
                <Calculator size={16} />
                <span>Fast Free Quote</span>
              </div>
              <h2>Get a Free Painting Quote</h2>
              <p>Fill in your details below and Bayat will provide an accurate, fixed-price estimate.</p>
            </div>

            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. John Smith" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
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
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com.au" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Service Required</label>
                  <select 
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="Interior">Interior Painting</option>
                    <option value="Exterior">Exterior Painting</option>
                    <option value="Commercial">Commercial Painting</option>
                    <option value="Residential">Residential Painting</option>
                    <option value="Full House">Full House Repaint</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Project Details / Requirements</label>
                <textarea 
                  rows="3" 
                  placeholder="Tell us about the property, rooms, wall conditions, or special requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="modal-security-note">
                <ShieldCheck size={16} />
                <span>100% Free & No Obligation • Fast Turnaround</span>
              </div>

              <button type="submit" className="btn btn-primary w-full btn-lg">
                <span>Submit Quote Request</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
