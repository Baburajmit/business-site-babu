import React from 'react';
import { WHY_ITEMS } from '../../constants/data';
import './WhyMe.css';

const WhyMe = () => {
  return (
    <section id="why">
      <div className="why-grid">
        <div>
          <div className="section-header fade-up" style={{ marginBottom: '2rem' }}>
            <div className="section-eyebrow">Why Choose Me</div>
            <h2>Developer Who Thinks Like a Business Owner</h2>
          </div>
          <div className="why-list">
            {WHY_ITEMS.map((item, i) => (
              <div key={item.title} className={`why-item fade-up stagger-${(i % 4) + 1}`}>
                <div className="why-check">✓</div>
                <div>
                  <div className="why-title">{item.title}</div>
                  <div className="why-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-visual fade-up stagger-2">
          <div className="why-big-num fade-up stagger-3">10+</div>
          <div className="why-big-label fade-up stagger-4">Projects Delivered Successfully</div>
          <div className="why-mini-stats">
            <div className="wmini fade-up stagger-4">
              <div className="wmini-num">100%</div>
              <div className="wmini-label">Satisfaction</div>
            </div>
            <div className="wmini fade-up stagger-5">
              <div className="wmini-num">Java</div>
              <div className="wmini-label">Primary Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
