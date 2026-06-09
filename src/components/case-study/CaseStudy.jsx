import React, { useEffect } from 'react';
import './CaseStudy.css';
import CautionTape from '../caution-tape/CautionTape';

// Mock data for case studies
const CASE_STUDIES_DATA = {
  'chayan-karo': {
    title: 'Chayan Karo',
    category: 'UX Research,Branding + UX/UI Designing',
    role: 'Lead UI/UX Designer',
    timeline: '8 Weeks (2025)',
    deliverables: 'Mobile App, Design System, Branding',
    platform: 'iOS & Android',
    problem: 'Finding local services in India is fragmented and lacks trust. Customers face inconsistent service quality, opaque pricing, and long wait times, while service providers struggle with irregular demand and inefficient booking workflows.',
    solution: 'A unified service marketplace that streamlines provider discovery, schedules bookings dynamically, and secures payments. It enables customers to customize packages with transparent pricing, and providers to manage schedules easily.',
    metrics: [
      { label: 'Booking Speed', value: '45% Faster' },
      { label: 'User Retention', value: '92% Score' },
      { label: 'Demand Match', value: '2.5x Increase' }
    ],
    nextId: 'love-cupid',
    nextTitle: 'Love Cupid'
  },
  'love-cupid': {
    title: 'Love Cupid',
    category: 'UX Research,Branding + UX/UI Designing',
    role: 'Lead UX Researcher & Designer',
    timeline: '10 Weeks (2025)',
    deliverables: 'Mobile App, User Journeys, High-Fidelity Mockups',
    platform: 'iOS Mobile App',
    problem: 'Modern dating apps often prioritize shallow metrics, leading to user fatigue and low match-to-meeting conversion rates. Users seek deeper matching criteria and icebreakers that encourage meaningful conversations.',
    solution: 'Love Cupid introduces guided conversation flows, shared interactive challenges, and matching algorithms based on personality compatibility and communication preferences rather than purely swipe metrics.',
    metrics: [
      { label: 'Conversations Started', value: '+65% Increase' },
      { label: 'Match Conversion', value: '88% Higher' },
      { label: 'App Fatigue', value: '-30% Decrease' }
    ],
    nextId: 'agritech-marketplace',
    nextTitle: 'Agritech-Marketplace'
  },
  'agritech-marketplace': {
    title: 'Agritech-Marketplace',
    category: 'UX Research,Branding + UX/UI Designing',
    role: 'Senior Product Designer',
    timeline: '12 Weeks (2025)',
    deliverables: 'Responsive Web, Mobile App, Vendor Portal',
    platform: 'iOS, Android & Web',
    problem: 'Farmers lack direct access to wholesale buyers, forcing them to rely on intermediaries who take high commissions. In addition, logistics coordination and real-time market crop pricing are highly opaque.',
    solution: 'An end-to-end marketplace connecting farmers directly with large wholesale buyers, featuring real-time market price data, built-in logistics coordination tools, and transparent crop grading guides.',
    metrics: [
      { label: 'Farmer Income', value: '+30% Gain' },
      { label: 'Logistics Costs', value: '20% Lower' },
      { label: 'Price Transparency', value: '99% Accuracy' }
    ],
    nextId: 'chayan-karo',
    nextTitle: 'Chayan Karo'
  }
};

export default function CaseStudy({ id, onClose, onNavigateNext, images }) {
  const data = CASE_STUDIES_DATA[id];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!data) {
    return (
      <div className="case-study-error">
        <h2>Case Study Not Found</h2>
        <button onClick={onClose} className="back-btn">Back to Home</button>
      </div>
    );
  }

  // Get matching image
  const projectImage = images[id];

  return (
    <article className="case-study-page">
      {/* Header / Nav */}
      <header className="case-study-header">
        <button onClick={onClose} className="case-study-back-link">
          <span className="arrow">←</span> Back to Home
        </button>
      </header>

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="hero-content">
          <span className="case-study-category">{data.category}</span>
          <h1 className="case-study-title">{data.title}</h1>
          
          <div className="case-study-mockup-wrapper">
            {projectImage && (
              <img src={projectImage} alt={data.title} className="case-study-mockup-img" />
            )}
          </div>
        </div>
      </section>

      {/* Info Overview Grid */}
      <section className="case-study-overview">
        <div className="overview-container">
          <div className="overview-item">
            <span className="overview-label">ROLE</span>
            <span className="overview-value">{data.role}</span>
          </div>
          <div className="overview-item">
            <span className="overview-label">TIMELINE</span>
            <span className="overview-value">{data.timeline}</span>
          </div>
          <div className="overview-item">
            <span className="overview-label">DELIVERABLES</span>
            <span className="overview-value">{data.deliverables}</span>
          </div>
          <div className="overview-item">
            <span className="overview-label">PLATFORM</span>
            <span className="overview-value">{data.platform}</span>
          </div>
        </div>
      </section>

      <div className="case-study-divider">
        <CautionTape />
      </div>

      {/* Problem & Solution */}
      <section className="case-study-problem-solution">
        <div className="problemsolution-container">
          <div className="problemsolution-block">
            <h2 className="block-title">THE PROBLEM</h2>
            <p className="block-text">{data.problem}</p>
          </div>
          <div className="problemsolution-block">
            <h2 className="block-title">THE SOLUTION</h2>
            <p className="block-text">{data.solution}</p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="case-study-process">
        <div className="process-container">
          <h2 className="process-section-title">DESIGN PROCESS</h2>
          <div className="process-steps">
            <div className="process-step-card">
              <span className="step-num">01</span>
              <h3 className="step-title">UX Research</h3>
              <p className="step-desc">Competitor audits, user surveys, and persona building to clarify target workflows.</p>
            </div>
            <div className="process-step-card">
              <span className="step-num">02</span>
              <h3 className="step-title">Wireframing</h3>
              <p className="step-desc">High-fidelity layout sketching and navigation structure mapping.</p>
            </div>
            <div className="process-step-card">
              <span className="step-num">03</span>
              <h3 className="step-title">Visual Design</h3>
              <p className="step-desc">Matte-black theme integration, high-contrast states, and layout balancing.</p>
            </div>
            <div className="process-step-card">
              <span className="step-num">04</span>
              <h3 className="step-title">Prototyping</h3>
              <p className="step-desc">Interactive mockup compilation, flow validation, and responsive grid checks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="case-study-metrics">
        <div className="metrics-container">
          <h2 className="metrics-section-title">PROJECT IMPACT</h2>
          <div className="metrics-grid">
            {data.metrics.map((m, idx) => (
              <div key={idx} className="metric-card">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="case-study-footer-cta">
        <CautionTape />
        <div className="footer-cta-content">
          <button onClick={() => onNavigateNext(data.nextId)} className="next-case-study-btn">
            View Next Project: {data.nextTitle} <span className="arrow">→</span>
          </button>
          <button onClick={onClose} className="return-home-link">
            Return to Homepage
          </button>
        </div>
      </footer>
    </article>
  );
}
