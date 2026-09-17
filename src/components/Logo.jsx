import React from 'react';

export function Logo({ variant = 'default', size = 'normal' }) {
  const isDarkFooter = variant === 'footer';
  
  return (
    <div className={`logo-container ${size === 'large' ? 'logo-lg' : ''}`}>
      <div className="logo-mark">
        <svg viewBox="0 0 240 180" className="logo-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Paint roller stroke effect */}
          <path 
            d="M 30 75 Q 65 38 120 18" 
            fill="none" 
            stroke="#D9232A" 
            strokeWidth="14" 
            strokeLinecap="round" 
          />
          {/* Paint Roller handle */}
          <path 
            d="M 22 88 L 32 75 L 42 85 M 24 86 Q 10 100 16 115 T 32 125" 
            fill="none" 
            stroke="#212121" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          <rect x="26" y="70" width="16" height="8" rx="2" fill="#212121" />

          {/* House Roof & Main Structure */}
          <path 
            d="M 120 18 L 220 85 L 202 85 L 202 165 L 88 165 L 88 85 L 70 85 Z" 
            fill="#D9232A" 
          />

          {/* White Window Frame & 4 Panes */}
          {/* Horizontal Window Bar */}
          <rect x="108" y="75" width="74" height="42" fill="#FFFFFF" rx="2" />
          <line x1="145" y1="75" x2="145" y2="117" stroke="#D9232A" strokeWidth="5" />
          <line x1="108" y1="96" x2="182" y2="96" stroke="#D9232A" strokeWidth="5" />

          {/* Angled White Roof Accent Line */}
          <path d="M 120 32 L 195 85 L 180 85 L 120 44 Z" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>
      
      <div className="logo-text-block">
        <div className={`logo-word-jay ${isDarkFooter ? 'text-white' : ''}`}>
          Jay
        </div>
        <div className="logo-word-painting">
          PAINTING
        </div>
        <div className="logo-word-services">
          Services
        </div>
      </div>
    </div>
  );
}
