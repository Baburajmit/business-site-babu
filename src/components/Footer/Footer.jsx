import React from 'react';
import { CONTACT_LINK, GIT_LINK, LINKEDIN_LINK, EMAIL } from '../../constants/data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="footer-container fade-up">
        <div className="footer-left fade-up stagger-1">
          <h3>Baburaj M</h3>
          <p>Full Stack Developer</p>
          <p>📍 Kumbakonam, Tamil Nadu</p>
          <p>
            <a href={`mailto:${EMAIL}`} className="footer-email">
              📧 {EMAIL}
            </a>
          </p>
        </div>
        <div className="footer-links-new fade-up stagger-2">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#process">Process</a>
          <a href={CONTACT_LINK} target="_blank" rel="noreferrer">Contact</a>
        </div>
        <div className="footer-social fade-up stagger-3">
          <a href={GIT_LINK} target="_blank" rel="noreferrer">🌐 GitHub</a>
          <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer">💼 LinkedIn</a>
          <a href={CONTACT_LINK} target="_blank" rel="noreferrer">✉️ Start Project</a>
        </div>
      </div>
      <div className="footer-bottom fade-up stagger-4">
        © 2026 Baburaj M — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
