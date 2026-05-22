import React from 'react';
import './About.css';

const HIGHLIGHTS = [
  { icon:'🎓', label:'Education',   value:'BSc (MPCS) – Masters Degree & PG College (OU)' },
  { icon:'📍', label:'Location',    value:'Hyderabad, Telangana' },
  { icon:'🌐', label:'Languages',   value:'Telugu, English' },
  { icon:'🤝', label:'Soft Skills', value:'Teamwork · Leadership · Communication' },
];

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// about me</span>
          <h2 className="section-title" id="about-title">Who I Am</h2>
          <p className="section-subtitle">A passionate developer who loves turning complex problems into elegant solutions.</p>
        </div>
        <div className="about-bio">
          <p>Hi! I'm <strong>Rajesh Athelli</strong>, a passionate Fullstack Developer with expertise in creating dynamic and responsive web applications. I'm skilled in React.js, Node.js, Express.js, and JavaScript — and I love building interactive, beautiful user interfaces.</p>
          <p>One of my favourite technologies is React.js, particularly within the MERN stack. I'm passionate about turning ideas into reality through code and design, and I'm actively looking for opportunities to contribute and grow in the IT industry.</p>
        </div>
        <div className="about-highlights">
          {HIGHLIGHTS.map(h => (
            <div key={h.label} className="highlight-item">
              <span className="highlight-icon" aria-hidden="true">{h.icon}</span>
              <span className="highlight-label">{h.label}</span>
              <span className="highlight-value">{h.value}</span>
            </div>
          ))}
        </div>
        <div className="about-bottom">
          <div className="fun-facts">
            {[['🚀','Always learning'],['🌍','Remote-friendly'],['💡','Problem solver']].map(([icon,text]) => (
              <div key={text} className="fun-fact"><span>{icon}</span><span>{text}</span></div>
            ))}
          </div>
          <div className="about-actions">
            <a href="https://1drv.ms/w/c/5ec3754b93610c5c/IQAHJpKipQ29Q6UdgbrlZR3QAVGbRManiPTb3A-tRHSgNmM?e=W6ZETY" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
            <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Let's Talk</button>
          </div>
        </div>
      </div>
    </section>
  );
}
