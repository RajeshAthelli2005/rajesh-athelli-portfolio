import React from 'react';
import './Footer.css';

const NAV = ['home','about','skills','projects','experience','resume','contact'];

export default function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">RA</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-tagline">Building the web, one component at a time.</p>
        <nav className="footer-nav-row" aria-label="Footer navigation">
          {NAV.map(l => (
            <button key={l} onClick={()=>scrollTo(l)} className="footer-link">
              {l.charAt(0).toUpperCase()+l.slice(1)}
            </button>
          ))}
        </nav>
        <div className="footer-socials">
          <a href="https://github.com/rajeshathelli2005" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">GH</a>
          <a href="https://www.linkedin.com/in/rajesh-athelli-78a542321/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">LI</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rajesh Athelli. Built with React &amp; ❤️</p>
        </div>
      </div>
    </footer>
  );
}
