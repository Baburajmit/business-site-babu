import React from 'react';
import { SERVICES, CONTACT_LINK } from '../../constants/data';
import './Services.css';

const ServiceCard = ({ service, index }) => (
  <div className={`flip-card-container fade-up stagger-${(index % 3) + 1}`}>
    <div className="flip-card">
      {/* Front */}
      <div className="flip-card-front">
        <span className="service-icon">{service.icon}</span>
        <div>
          <div className="service-title">{service.title}</div>
          <div className="service-desc">{service.desc}</div>
          <div className="service-tags">
            {service.tags.map((tag) => (
              <span key={tag} className="stag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="flip-card-back">
        <div className="back-content">
          <div className="back-title">{service.backTitle}</div>
          <ul className="back-features">
            {service.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="price-section">
            <span className="price-amount-back">{service.price}</span>
            <span className="price-period-back">onwards</span>
          </div>
        </div>
        <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="flip-btn">
          Start Project →
        </a>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services">
      <div className="section-header fade-up">
        <div className="section-eyebrow">What I Do</div>
        <h2>Services Built for Modern Businesses</h2>
        <p className="section-desc">
          From a simple landing page to a complete backend system — I build solutions that work for your goals.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Services;
