import React from 'react';
import { TESTIMONIALS } from '../../constants/data';
import './Testimonials.css';

const TestiCard = ({ t }) => (
  <div className="testi-card">
    <span className="testi-quote">"</span>
    <div className="stars">★★★★★</div>
    <p className="testi-text">{t.text}</p>
    <div className="testi-author">
      <div className={`testi-avatar ${t.color}`}>{t.initials}</div>
      <div>
        <div className="testi-name">{t.name}</div>
        <div className="testi-role">{t.role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials">
      <div className="section-header fade-up">
        <div className="section-eyebrow fade-up stagger-1">Client Reviews</div>
        <h2 className="fade-up stagger-2">What Clients Say About Me</h2>
        <p className="section-desc fade-up stagger-3">
          Trusted by business owners, founders, and entrepreneurs across India.
        </p>
      </div>

      <div className="testimonials-wrapper fade-up stagger-3">
        <div className="testimonials-scroll">
          {doubled.map((t, i) => (
            <TestiCard key={`${t.initials}-${i}`} t={t} />
          ))}
        </div>
        <div className="testimonial-hint fade-up stagger-4">
          <span>←</span> Hover to pause <span>→</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
