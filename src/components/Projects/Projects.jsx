import React, { useEffect, useRef } from 'react';
import { PROJECTS, CONTACT_LINK } from '../../constants/data';
import './Projects.css';

import gymImg      from '../../assets/GYm3.png';
import restaurantImg from '../../assets/restaurant.png';
import bankImg     from '../../assets/bank1.jpg';
import portfolioImg from '../../assets/portfolio.jpg';

const PROJECT_IMAGES = {
  gym:        gymImg,
  restaurant: restaurantImg,
  bank:       bankImg,
  portfolio:  portfolioImg,
};

const visualThemes = ['visual-gym', 'visual-resto', 'visual-bank', 'visual-portfolio'];

const ProjectMockup = ({ theme, badges, imageKey }) => {
  const img = PROJECT_IMAGES[imageKey];

  return (
    <div className={`project-visual ${theme}`}>
      {img && (
        <div
          className="project-visual-bg"
          style={{ backgroundImage: `url(${img})` }}
        />
      )}
      <span className="visual-floating-badge badge-top-right">{badges[0]}</span>
      <div className="visual-mockup">
        <div className="mockup-bar">
          <div className="mockup-dot" />
          <div className="mockup-dot" />
          <div className="mockup-dot" />
        </div>
        <div className="mockup-body">
          <div className="mockup-line short" />
          <div className="mockup-line medium" />
          <div className="mockup-line full" />
          <div className="mockup-line xshort" />
          <div className="mockup-card-row">
            <div className="mockup-mini-card" />
            <div className="mockup-mini-card" />
          </div>
          <div className="mockup-line medium" />
          <div className="mockup-line short" />
        </div>
      </div>
      <span className="visual-floating-badge badge-bottom-left">{badges[1]}</span>
    </div>
  );
};

const Projects = () => {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="section-header fade-up">
        <div className="section-eyebrow">Portfolio</div>
        <h2>Real Projects, Real Results</h2>
        <p className="section-desc">
          Not just websites — real business impact, measurable growth, and scalable systems.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className={`project-row${i % 2 !== 0 ? ' reverse' : ''}`}
            ref={(el) => (rowRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Content */}
            <div className="project-content">
              <div className="project-number fade-up stagger-1">{project.number}</div>
              <div className="project-emoji-title fade-up stagger-2">
                <span className="project-emoji">{project.emoji}</span>
                <h3>{project.title}</h3>
              </div>
              <div className="project-badges fade-up stagger-3">
                {project.badges.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>
              <p className="project-desc fade-up stagger-3">{project.desc}</p>
              <div className="project-tech-stack fade-up stagger-4">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-action-row fade-up stagger-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-live"
                >
                  View Live ↗
                </a>
                <a
                  href={CONTACT_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  Get This Project →
                </a>
              </div>
            </div>

            <ProjectMockup
              theme={visualThemes[i % visualThemes.length]}
              badges={project.badges}
              imageKey={project.imageKey}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
