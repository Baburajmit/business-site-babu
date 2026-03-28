import React from 'react';
import { PROCESS_STEPS } from '../../constants/data';
import './Process.css';

const Process = () => {
  return (
    <section id="process">
      <div className="section-header fade-up">
        <div className="section-eyebrow">How I Work</div>
        <h2>Simple 4-Step Process</h2>
        <p className="section-desc">
          A clear, transparent workflow — so you always know where your project stands.
        </p>
      </div>
      <div className="process-steps">
        {PROCESS_STEPS.map((step, i) => (
          <div key={step.num} className={`process-step fade-up stagger-${i + 1}`}>
            <div className="step-num fade-up stagger-${i + 1}">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
