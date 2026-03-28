import React, { useState, useEffect } from 'react';
import { NAV_LINKS, CONTACT_LINK } from '../../constants/data';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav-new${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          BuildX <span>Studio</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          href={CONTACT_LINK}
          target="_blank"
          rel="noreferrer"
          className="nav-btn nav-btn-desktop"
        >
          Contact us
        </a>

        {/* Hamburger Button (mobile) */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={CONTACT_LINK}
              target="_blank"
              rel="noreferrer"
              className="nav-mobile-btn"
              onClick={closeMenu}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
