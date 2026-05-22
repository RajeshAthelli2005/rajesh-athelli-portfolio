import './Skills.css';

const BAR_SKILLS = [
  { label:'🎨 Frontend', skills:[
    {name:'HTML5',level:90,color:'#e34f26'},{name:'CSS3',level:85,color:'#1572b6'},
    {name:'JavaScript',level:82,color:'#d4a800'},{name:'React',level:80,color:'#0ea5e9'},
    {name:'Bootstrap',level:82,color:'#7952b3'},
  ]},
  { label:'⚙️ Backend', skills:[
    {name:'Node.js',level:78,color:'#16a34a'},{name:'Express.js',level:75,color:'#64748b'},
    {name:'MongoDB',level:76,color:'#4db33d'},{name:'MySQL',level:72,color:'#00758f'},
    {name:'REST APIs',level:78,color:'#0891b2'},
  ]},
];

const BADGE_SKILLS = [
  {name:'HTML5',icon:'🌐',color:'#e34f26'},{name:'CSS3',icon:'🎨',color:'#1572b6'},
  {name:'JavaScript',icon:'⚡',color:'#d4a800'},{name:'React',icon:'⚛️',color:'#0ea5e9'},
  {name:'Bootstrap',icon:'🅱️',color:'#7952b3'},{name:'Node.js',icon:'🟢',color:'#16a34a'},
  {name:'Express.js',icon:'🚂',color:'#64748b'},{name:'MongoDB',icon:'🍃',color:'#4db33d'},
  {name:'MySQL',icon:'🐬',color:'#00758f'},{name:'Python',icon:'🐍',color:'#3776ab'},
  {name:'Git',icon:'🔀',color:'#f05032'},{name:'REST APIs',icon:'🔗',color:'#0891b2'},
];

export default function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// skills</span>
          <h2 className="section-title" id="skills-title">Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with to build modern, scalable applications.</p>
        </div>
        <div className="skills-layout">
          <div className="skills-left">
            {BAR_SKILLS.map(group => (
              <div key={group.label} className="skill-group">
                <div className="skill-group-label">{group.label}</div>
                {group.skills.map(s => (
                  <div key={s.name} className="skill-row">
                    <div className="skill-row-header">
                      <span className="skill-row-name">{s.name}</span>
                      <span className="skill-row-pct">{s.level}%</span>
                    </div>
                    <div className="skill-bar-track" role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.name}: ${s.level}%`}>
                      <div className="skill-bar-fill" style={{'--w':`${s.level}%`,'--c':s.color}}/>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="skills-right">
            <div className="skills-right-title">🛠️ All Technologies</div>
            <div className="skill-badges">
              {BADGE_SKILLS.map(s => (
                <div key={s.name} className="skill-badge" style={{'--c':s.color}} title={s.name}>
                  <div className="skill-badge-icon" style={{background:`${s.color}18`,border:`1px solid ${s.color}30`}}>
                    <span role="img" aria-label={s.name}>{s.icon}</span>
                  </div>
                  <span className="skill-badge-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tech-cloud" aria-label="All technologies">
          {['HTML5','CSS3','Bootstrap','JavaScript','React','Node.js','Express.js','Python','MongoDB','MySQL','Git','Arduino IDE'].map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
