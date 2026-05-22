import './Experience.css';

const EDUCATION = [
  { id:1, role:"Bachelor's of Science (MPCS)", company:'Masters Degree & PG College (OU)', period:'2022 – 2025', location:'Hyderabad', description:'Completed BSc with Mathematics, Physics, and Computer Science with strong analytical and programming foundations.', achievements:['Specialization in Mathematics, Physics & Computer Science','Built real-world projects using HTML, CSS, JavaScript, React, and Node.js','Active participant in coding competitions and projects'], tech:['HTML','CSS','JavaScript','React','Node.js','Python'], color:'#0ea5e9' },
  { id:2, role:'Intermediate – Board of Intermediate Education', company:'Ujwala Junior College', period:'2020 – 2022', location:'Hyderabad', description:'Completed Intermediate education with a strong academic record in Mathematics and Sciences.', achievements:['Consistent academic excellence throughout','Strong foundation in Mathematics and Sciences'], tech:['Mathematics','Physics','Chemistry'], color:'#8b5cf6' },
  { id:3, role:'SSC – Board of Secondary Education', company:'ZPHS Ananthasagar', period:'2019 – 2020', location:'Ananthasagar', description:'Completed SSC with outstanding academic performance and strong foundation in core subjects.', achievements:['Excellent academic record','Strong foundation in Science and Mathematics'], tech:['Science','Mathematics','English'], color:'#10b981' },
];

const INTERNSHIP = [
  { id:4, role:'Fullstack Developer Intern', company:'Future Interns', period:'2025', location:'Online', description:'Completed a Fullstack Developer internship building dynamic and responsive web applications using the MERN stack.', achievements:['Built full-stack applications using React and Node.js','Worked on real-world projects with responsive design','Gained hands-on experience with MongoDB and Express.js','Delivered 3 production-ready projects during the internship'], tech:['React','Node.js','Express.js','MongoDB','HTML','CSS','JavaScript'], color:'#f59e0b' },
  { id:5, role:'Python Full-Stack Development & Training Program', company:'10000 Coders', period:'Mar 2025 – Sep 2025', location:'Online | Certificate ID: DF3109', description:'Completed an intensive Python Full-Stack Development and training program, gaining hands-on experience in Python-based web development and full-stack technologies.', achievements:['Completed Python Full-Stack Development training program','Gained expertise in Python-based backend development','Worked on full-stack projects combining Python with modern web technologies','Certified by MSME & ISO 9001 certified institution'], tech:['Python','Full-Stack','Web Development','Backend','Frontend'], color:'#f97316' },
];

function TimelineEntry({ item, delay }) {
  return (
    <div className="exp-entry" style={{'--dot-color':item.color, animationDelay:`${delay}s`}}>
      <div className="exp-entry-dot"/>
      <div className="exp-entry-card">
        <span className="exp-entry-period">{item.period}</span>
        <div className="exp-entry-role">{item.role}</div>
        <div className="exp-entry-company" style={{color:item.color}}>{item.company}</div>
        <div className="exp-entry-loc">📍 {item.location}</div>
        <p className="exp-entry-desc">{item.description}</p>
        <div className="exp-entry-achievements">
          {item.achievements.map(a => (
            <div key={a} className="exp-entry-ach">
              <span className="exp-entry-ach-dot" style={{background:item.color}}/>
              {a}
            </div>
          ))}
        </div>
        <div className="exp-entry-tech">
          {item.tech.map(t => <span key={t} className="exp-pill">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience section" aria-labelledby="exp-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// education & experience</span>
          <h2 className="section-title" id="exp-title">My Journey</h2>
          <p className="section-subtitle">Academic background and professional experience that shaped my skills.</p>
        </div>
        <div className="exp-sections">
          <div>
            <div className="exp-section-head">🎓 Education</div>
            <div className="exp-timeline">
              {EDUCATION.map((item,i) => <TimelineEntry key={item.id} item={item} delay={i*.12}/>)}
            </div>
          </div>
          <div>
            <div className="exp-section-head">💼 Internship & Certifications</div>
            <div className="exp-timeline">
              {INTERNSHIP.map((item,i) => <TimelineEntry key={item.id} item={item} delay={i*.12}/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
