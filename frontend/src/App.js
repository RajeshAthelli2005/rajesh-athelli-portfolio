import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function Loader() {
  return (
    <div style={{
      position:'fixed',inset:0,background:'#f0f9ff',
      display:'flex',alignItems:'center',justifyContent:'center',
      zIndex:9999,flexDirection:'column',gap:'20px'
    }}>
      {/* Avatar with spinning rings */}
      <div style={{position:'relative',width:130,height:130,display:'flex',alignItems:'center',justifyContent:'center'}}>
        {/* Outer spinning ring */}
        <div style={{
          position:'absolute',width:130,height:130,borderRadius:'50%',
          border:'2px solid transparent',
          borderTopColor:'#0ea5e9',borderRightColor:'#8b5cf6',
          animation:'spinRing 1.5s linear infinite'
        }}/>
        {/* Inner spinning ring */}
        <div style={{
          position:'absolute',width:108,height:108,borderRadius:'50%',
          border:'2px dashed #bae6fd',
          animation:'spinRing 3s linear infinite reverse'
        }}/>
        {/* Photo / Fallback */}
        <div style={{
          width:90,height:90,borderRadius:'50%',overflow:'hidden',
          background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
          border:'3px solid white',
          boxShadow:'0 8px 30px rgba(14,165,233,0.4)',
          display:'flex',alignItems:'center',justifyContent:'center',
          animation:'floatAvatar 2s ease-in-out infinite',
          position:'relative',zIndex:2
        }}>
          <img
            src="/profile.jpg"
            alt="Rajesh Athelli"
            style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',borderRadius:'50%'}}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span style={{
            display:'none',width:'100%',height:'100%',
            alignItems:'center',justifyContent:'center',
            fontSize:'1.8rem',fontWeight:800,color:'white'
          }}>RA</span>
        </div>
      </div>

      {/* Name */}
      <div style={{textAlign:'center'}}>
        <h2 style={{
          fontFamily:'Plus Jakarta Sans,sans-serif',fontSize:'1.5rem',fontWeight:800,
          color:'#0c1a2e',letterSpacing:'-0.02em',marginBottom:4
        }}>
          Rajesh{' '}
          <span style={{
            background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'
          }}>Athelli</span>
        </h2>
        <p style={{fontFamily:'Space Mono,monospace',fontSize:'0.75rem',color:'#64748b',letterSpacing:'0.06em'}}>
          Fullstack Developer
        </p>
      </div>

      {/* Progress bar */}
      <div style={{width:200,height:4,background:'#bae6fd',borderRadius:2,overflow:'hidden'}}>
        <div style={{
          height:'100%',background:'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
          borderRadius:2,animation:'loadBar 1.6s ease forwards'
        }}/>
      </div>
      <p style={{fontFamily:'Space Mono,monospace',fontSize:'0.75rem',color:'#94a3b8',letterSpacing:'0.08em'}}>
        Loading portfolio...
      </p>

      <style>{`
        @keyframes loadBar    { from{width:0} to{width:100%} }
        @keyframes spinRing   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes floatAvatar{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      `}</style>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1800); return () => clearTimeout(t); }, []);
  if (loading) return <Loader />;
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
