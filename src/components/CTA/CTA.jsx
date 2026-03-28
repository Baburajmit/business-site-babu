import React from 'react';
import { CONTACT_LINK, EMAIL } from '../../constants/data';
import './CTA.css';

const CTA = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-container fade-up">
        <div className="cta-content">
          <h2 className="fade-up stagger-1">🚀 Let's Build Something Amazing</h2>
          <p className="fade-up stagger-2">
            Turn your idea into a high-performing product. I help businesses launch fast,
            scale better, and grow smarter.
          </p>
          <div className="cta-buttons fade-up stagger-3">
            <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-primary-new">
              📧 Start Your Project
            </a>
            <a href={`mailto:${EMAIL}?subject=Project Inquiry&body=Name:%0D%0ABudget:%0D%0ARequirement:`} target="_blank" rel="noreferrer" className="btn-secondary-new">
              💬 Contact Me
            </a>
          </div>
        </div>
        <div className="cta-stats">
          <div className="stat-box fade-up stagger-2"><h3>10+</h3><p>Projects</p></div>
          <div className="stat-box fade-up stagger-3"><h3>100%</h3><p>Satisfaction</p></div>
          <div className="stat-box fade-up stagger-4"><h3>Fast</h3><p>Delivery</p></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
