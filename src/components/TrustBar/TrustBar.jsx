import React from 'react';
import { TRUST_ITEMS } from '../../constants/data';
import './TrustBar.css';

const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="trust-inner fade-up stagger-1">
        {TRUST_ITEMS.map((item, i) => (
          <div key={item.title} className={`trust-item fade-up stagger-${i + 1}`}>
            <div className={`trust-icon ${item.color}`}>{item.icon}</div>
            <div>
              <div className="trust-title">{item.title}</div>
              <div className="trust-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
