import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | transmitting | success | error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('transmitting');
    
    // Simulate tactical uplink transit
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  const contacts = [
    { name: 'EMAIL', value: 'aryanverma@ballistic.dev', link: 'mailto:aryanverma@ballistic.dev', tag: 'EMAIL' },
    { name: 'LINKEDIN', value: 'linkedin.com/in/aryanverma', link: 'https://linkedin.com', tag: 'LINKEDIN' },
    { name: 'BEHANCE', value: 'behance.net/aryanverma', link: 'https://behance.net', tag: 'BEHANCE' },
    { name: 'GITHUB', value: 'github.com/aryanverma', link: 'https://github.com', tag: 'GITHUB' },
    { name: 'INSTAGRAM', value: 'instagram.com/aryanverma', link: 'https://instagram.com', tag: 'INSTAGRAM' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-section-header">
          <h2 className="contact-section-title">CONNECT WITH ME</h2>
        </div>

        <div className="contact-grid">
          {/* Left: CONNECT WITH ME stack of compact cards */}
          <div className="contact-info-panel">
            <div className="contact-cards-stack">
              {contacts.map((c, idx) => (
                <a 
                  key={idx} 
                  href={c.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-card-item"
                >
                  <div className="contact-card-body">
                    <span className="contact-card-title">{c.name}</span>
                    <span className="contact-card-value">{c.value}</span>
                  </div>
                  <div className="contact-card-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Uplink Gateway Form inside a large panel */}
          <div className="contact-form-panel">
            <div className="contact-form-wrapper">
              <h3 className="form-panel-title">Uplink Gateway</h3>
              
              <form onSubmit={handleTransmit} className="uplink-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">IDENTITY (NAME)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="ENTER FULL NAME"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">RETRIEVAL NODE (EMAIL)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="ENTER EMAIL ADDRESS"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">TRANSMISSION DATA (MESSAGE)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="WRITE TRANSMISSION LOG..."
                    className="form-textarea"
                    rows="5"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`transmit-btn ${status}`}
                  disabled={status === 'transmitting'}
                >
                  {status === 'idle' && 'TRANSMIT CODES'}
                  {status === 'transmitting' && 'UPLINK IN PROGRESS...'}
                  {status === 'success' && 'TRANSMISSION RECEIVED'}
                  {status === 'error' && 'CONNECTION FAILED'}
                </button>

                {status === 'success' && (
                  <div className="uplink-status-banner success">
                    <span>● SECURE LINK CREATED. TRANSMISSION ARCHIVED. RESPONDING SHORTLY.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        @2026 LOREM IPSUM ASSSHEUIOWIBABXBIOE
      </div>
    </section>
  );
}
