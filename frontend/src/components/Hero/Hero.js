import React, { useState, useEffect } from 'react';
import './Hero.css';

const profileImage = (process.env.PUBLIC_URL || '') + '/profile.jpg';
const ROLES = ['Fullstack Developer','React Developer','Node.js Developer','Python Programmer','Problem Solver'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let t;
    if (typing) {
      if (displayed.length < current.length) t = setTimeout(() => setDisplayed(current.slice(0, displayed.length+1)), 80);
      else t = setTimeout(() => setTyping(false), 2000);
    } else {
      if (displayed.length > 0) t = setTimeout(() => setDisplayed(d => d.slice(0,-1)), 40);
      else { setRoleIdx(i => (i+1)%ROLES.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  return (
    <section id="home" className="hero section" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1"/><div className="orb orb-2"/><div className="hero-grid"/>
      </div>
      <div className="container hero-container">
        {/* Photo */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar">
              <img
                src={profileImage}
                alt="Rajesh Athelli"
                className="avatar-photo"
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement.querySelector('.avatar-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <span className="avatar-fallback">RA</span>
            </div>
            <div className="ring ring-1"/><div className="ring ring-2"/>
          </div>
        </div>
        {/* Content */}
        <div className="hero-content">
          <div className="hero-badge"><span className="badge-dot"/>Open to opportunities</div>
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Rajesh <span className="gradient-text">Athelli</span></h1>
          <div className="hero-role" aria-live="polite">
            <span className="role-prefix">&gt;&nbsp;</span>
            <span>{displayed}</span><span className="cursor">|</span>
          </div>
          <p className="hero-desc">Passionate Fullstack Developer with expertise in creating dynamic and responsive web applications. Skilled in HTML, CSS, JavaScript, React.js, Node.js, and Express.js.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={()=>scrollTo('projects')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={()=>scrollTo('contact')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get In Touch
            </button>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/rajeshathelli2005" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/rajesh-athelli-78a542321/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">6+</span><span className="stat-lbl">Projects</span></div>
            <div className="stat-div"/>
            <div className="stat"><span className="stat-num">MERN</span><span className="stat-lbl">Stack</span></div>
            <div className="stat-div"/>
            <div className="stat"><span className="stat-num">BSc</span><span className="stat-lbl">MPCS 2025</span></div>
          </div>
        </div>
      </div>
      <button className="scroll-down" onClick={()=>scrollTo('about')} aria-label="Scroll down">
        <div className="scroll-mouse"><div className="scroll-wheel"/></div>
        <span>Scroll Down</span>
      </button>
    </section>
  );
}
