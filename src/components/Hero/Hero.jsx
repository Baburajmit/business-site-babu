import React from 'react';
import { CONTACT_LINK } from '../../constants/data';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-bg-glow" />
      <div className="hero-grid">
        {/* Left Content */}
        <div className="hero-left-content fade-up stagger-1">
          <div className="hero-tag fade-up stagger-1">Available for New Projects · Limited Slots</div>
          <h1 className="fade-up stagger-2">
            Building Websites That
            <br />
            Help Your Business <em>Grow</em>
          </h1>
          <p className="hero-sub fade-up stagger-3">
            Full Stack Developer specializing in scalable, high-performance web applications
            for businesses, startups, and entrepreneurs across India.
          </p>
          <div className="hero-btns fade-up stagger-4">
            <a href="#projects" className="btn-primary">
              View My Work →
            </a>
            <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn-outline">
              Start Your Project
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="pro-card fade-up stagger-2">
          <div className="pro-header fade-up stagger-3">
            <div>
              <h3>Baburaj M</h3>
              <p>Full Stack Developer</p>
            </div>
            <span className="status-badge">● Available</span>
          </div>

          <div className="tech-stack fade-up stagger-4">
            {['Java', 'Spring Boot', 'Node.js', 'React.js', 'MySQL', 'REST APIs'].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="card-divider" />

          <div className="card-stats fade-up stagger-5">
            <div><h4>10+</h4><p>Projects</p></div>
            <div><h4>100%</h4><p>Satisfaction</p></div>
            <div><h4>7.41</h4><p>CGPA</p></div>
            <div><h4>2+</h4><p>Certs</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
