import { useState } from 'react';
import './Contact.css';

const CONTACT_INFO = [
  { icon:'📧', label:'Email',    value:'rajeshathelli2005@gmail.com',    href:'mailto:rajeshathelli2005@gmail.com' },
  { icon:'💼', label:'LinkedIn', value:'linkedin.com/in/rajesh-athelli-78a542321', href:'https://www.linkedin.com/in/rajesh-athelli-78a542321/' },
  { icon:'🐙', label:'GitHub',   value:'github.com/rajeshathelli2005',   href:'https://github.com/rajeshathelli2005' },
  { icon:'📍', label:'Location', value:'Hyderabad, Telangana, India',    href:null },
];

const INIT = { name:'', email:'', subject:'', message:'' };

export default function Contact() {
  const [form, setForm]     = useState(INIT);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject);
    window.location.href = `mailto:rajeshathelli2005@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm(INIT);
  };

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// contact</span>
          <h2 className="section-title" id="contact-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>
        <div className="contact-icons-row">
          {CONTACT_INFO.map(c => (
            c.href
              ? <a key={c.label} href={c.href} className="contact-icon-card" target={c.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer">
                  <span className="contact-icon-emoji">{c.icon}</span>
                  <span className="contact-icon-label">{c.label}</span>
                  <span className="contact-icon-value">{c.value}</span>
                </a>
              : <div key={c.label} className="contact-icon-card">
                  <span className="contact-icon-emoji">{c.icon}</span>
                  <span className="contact-icon-label">{c.label}</span>
                  <span className="contact-icon-value">{c.value}</span>
                </div>
          ))}
        </div>
        <div className="contact-avail">
          <div className="availability"><span className="avail-dot"/>Open to internships &amp; opportunities</div>
        </div>
        <div className="contact-form-wrapper">
          {status === 'success' ? (
            <div className="form-success" role="alert">
              <div className="success-icon">✅</div>
              <h3>Opening Email Client!</h3>
              <p>Your default email app will open with the message pre-filled. Just hit Send!</p>
              <button className="btn btn-outline" onClick={()=>setStatus('idle')}>Send Another</button>
            </div>
          ) : (
            <>
              <div className="contact-form-title">Send a Message</div>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name <span>*</span></label>
                    <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} className={errors.name?'error':''} aria-invalid={!!errors.name}/>
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} className={errors.email?'error':''} aria-invalid={!!errors.email}/>
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject <span>*</span></label>
                  <input id="subject" name="subject" type="text" placeholder="Project inquiry / Job opportunity" value={form.subject} onChange={handleChange} className={errors.subject?'error':''} aria-invalid={!!errors.subject}/>
                  {errors.subject && <span className="field-error">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea id="message" name="message" rows={6} placeholder="Tell me about your project or idea..." value={form.message} onChange={handleChange} className={errors.message?'error':''} aria-invalid={!!errors.message}/>
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
