import React, { useEffect } from 'react';
import './CaseStudy.css';

// Structured data for case studies matching the casestudyuidesign.png specifications
const CASE_STUDIES_DATA = {
  'chayan-karo': {
    title: 'Chayan karo',
    tagline: 'Create a unified design system that would serve as the foundation for all Allegion digital products—enabling designers to prototype faster, developers to build consistently, and users to enjoy cohesive experiences across every touchpoint',
    category: 'UX Research, Branding + UX/UI Designing',
    role: 'UI/UX Lead Designer',
    timeline: '8 Weeks',
    deliverables: 'Product Design',
    platform: 'iOS/Android',

    // Section contents matching the design text exactly
    problem: 'Chayan Karo suffered from fragmented design patterns across its various mobile and web touchpoints. Different product teams built UI components in isolation, resulting in a inconsistent user experience, high design debt, and prolonged development cycles. The challenge was to establish a single source of truth—a unified design system—that scales across iOS, Android, and Web platforms.',
    solution: 'We created a centralized, tokens-based design system named "Chayan Karo". By auditing existing UI components, standardizing typographic scales, and defining color variables, we established a consistent components library. This library drastically reduced design-to-development handoff times, unified the brand expression, and provided a cohesive, seamless experience for all end-users.',
    blueprint: 'Built on atomic design principles, the design system utilizes modular design tokens for colors, sizing, and spacing. We implemented a unified typeface scale using SF Pro for digital screens, paired with highly accessible contrast ratios. Every component is fully responsive, supporting interactive states, dark mode, and multi-brand themes.',
    challenges: 'Auditing over 150 distinct screens to identify inconsistencies was a massive manual effort. The biggest challenge was aligning stakeholders and multiple developer groups around a unified system, ensuring active adoption, and managing breaking changes without disrupting live production environments.',
    learnings: 'Building a design system is 20% design and 80% communication. Documenting components thoroughly and creating an interactive playground for developers was key to successful adoption. We also learned that design systems must remain living libraries that evolve continuously with user feedback.',

    fontMain: 'SF PRO',
    colorPalette: [
      { hex: '#DF763D' },
      { hex: '#F69051' },
      { hex: '#F7D6C2' },
      { hex: '#FFEBE0' }
    ],
    nextId: 'love-cupid',
    nextTitle: 'Love Cupid'
  },
  'love-cupid': {
    title: 'Love Cupid',
    tagline: 'Personality-focused matching mechanics and guided dating workflows creating meaningful connections.',
    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Lead UX Researcher & Designer',
    timeline: '10 Weeks',
    deliverables: 'Branding & UX/UI',
    platform: 'iOS Mobile App',

    problem: 'Modern dating apps often prioritize shallow metrics, leading to user fatigue and low match-to-meeting conversion rates. Users seek deeper matching criteria and icebreakers that encourage meaningful conversations.',
    solution: 'Love Cupid introduces guided conversation flows, shared interactive challenges, and matching algorithms based on personality compatibility and communication preferences rather than purely swipe metrics.',
    blueprint: 'Design system built for warm engagements, incorporating friendly typography, fluid custom shape overlays, and telemetry tools showing user compatibility scores in real-time.',
    challenges: 'Structuring interaction friction to prevent user burnout and verify profiles dynamically using gesture-based selfie checks to prevent automated accounts.',
    learnings: 'Continuous user feedback loop showed that safety features, clear pricing structures, and icebreaker games significantly increased user conversation times and date-conversion ratios.',

    fontMain: 'SF PRO',
    colorPalette: [
      { hex: '#FF2E93' },
      { hex: '#050505' },
      { hex: '#242424' },
      { hex: '#FFB300' }
    ],
    nextId: 'agritech-marketplace',
    nextTitle: 'Agritech-Marketplace'
  },
  'agritech-marketplace': {
    title: 'Agritech-Marketplace',
    tagline: 'Connecting farmers directly to wholesale buyers, securing supply chain logistics and crop ledger systems.',
    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Senior Product Designer',
    timeline: '12 Weeks',
    deliverables: 'Responsive Web, Mobile App',
    platform: 'iOS, Android & Web',

    problem: 'Farmers lack direct access to wholesale buyers, forcing them to rely on intermediaries who take high commissions. In addition, logistics coordination and real-time market crop pricing are highly opaque.',
    solution: 'An end-to-end marketplace connecting farmers directly with large wholesale buyers, featuring real-time market price data, built-in logistics coordination tools, and transparent crop grading guides.',
    blueprint: 'High-contrast design system optimized for readability on mid-to-low end mobile displays in bright outdoor lighting conditions, built around crop telemetry green.',
    challenges: 'Integrating rapid-fluctuation index pricing data across multiple regional hubs, and designing highly simplified forms for users with low technical literacy.',
    learnings: 'Offline capabilities are essential for agricultural topographies. Designing resilient local databases and visual indicators for synchronization status created trust and adoption.',

    fontMain: 'SF PRO',
    colorPalette: [
      { hex: '#00E676' },
      { hex: '#080907' },
      { hex: '#2E322A' },
      { hex: '#FF9100' }
    ],
    nextId: 'chayan-karo',
    nextTitle: 'Chayan Karo'
  }
};

export default function CaseStudy({ id, onClose, onNavigateNext, images }) {
  const data = CASE_STUDIES_DATA[id];

  // Scroll to top on load and lock body scroll
  useEffect(() => {
    // Scroll the case-study container to top
    const pageEl = document.querySelector('.case-study-page');
    if (pageEl) {
      pageEl.scrollTop = 0;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [id]);

  if (!data) {
    return (
      <div className="case-study-error">
        <h2>Case Study Not Found</h2>
        <button onClick={onClose} className="back-btn">Back to Home</button>
      </div>
    );
  }

  const projectImage = images[id];

  return (
    <article className="case-study-page">
      {/* Floating Close Button */}
      <button onClick={onClose} className="case-study-close-btn" aria-label="Close Case Study">
        ← BACK TO HOME
      </button>

      {/* Hero Banner Mockup */}
      <div className="case-study-banner">
        {projectImage && (
          <img src={projectImage} alt={data.title} className="banner-img" />
        )}
      </div>

      {/* Title & Description section */}
      <div className="case-study-content-container">
        <header className="case-study-hero-text">
          <h1 className="case-study-title">{data.title}</h1>
          <p className="case-study-tagline">{data.tagline}</p>
        </header>

        {/* Metadata Horizontal strip */}
        <section className="case-study-meta-table">
          <div className="meta-col">
            <span className="meta-label">ROLE</span>
            <span className="meta-value">{data.role}</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">DELIVERABLES</span>
            <span className="meta-value">{data.deliverables}</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">TIMELINE</span>
            <span className="meta-value">{data.timeline}</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">PLATFORM</span>
            <span className="meta-value">{data.platform}</span>
          </div>
        </section>

        {/* #01 THE PROBLEM */}
        <section className="case-study-section">
          <div className="section-bg-num">#01</div>
          <div className="section-content-split">
            <div className="split-left">
              <h2 className="section-heading">THE PROBLEM</h2>
              <p className="section-text">{data.problem}</p>
            </div>
            <div className="split-right">
              <div className="video-placeholder-card">
                <span className="video-placeholder-text">For Video</span>
              </div>
            </div>
          </div>
        </section>

        {/* #02 THE SOLUTION */}
        <section className="case-study-section">
          <div className="section-bg-num">#02</div>
          <div className="section-content-full">
            <h2 className="section-heading">THE SOLUTION</h2>
            <p className="section-text">{data.solution}</p>
            <div className="solution-mockups-row">
              <div className="solution-screenshot-placeholder">
                <span className="screenshot-placeholder-text">Screenshot 1</span>
              </div>
              <div className="solution-screenshot-placeholder">
                <span className="screenshot-placeholder-text">Screenshot 2</span>
              </div>
              <div className="solution-screenshot-placeholder">
                <span className="screenshot-placeholder-text">Screenshot 3</span>
              </div>
              <div className="solution-screenshot-placeholder">
                <span className="screenshot-placeholder-text">Screenshot 4</span>
              </div>
            </div>
          </div>
        </section>

        {/* #03 SYSTEM BLUEPRINT */}
        <section className="case-study-section">
          <div className="section-bg-num">#03</div>
          <div className="section-content-full">
            <h2 className="section-heading">SYSTEM BLUEPRINT</h2>
            <p className="section-text">{data.blueprint}</p>

            <div className="blueprint-details-grid">
              {/* Fonts block */}
              <div className="blueprint-block font-showcase">
                <h3 className="blueprint-subheading">FONTS USED</h3>
                <div className="font-letters-display">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0
                </div>
                <div className="font-weights-display">
                  <span className="font-weight-sample bold">{data.fontMain} Bold</span>
                  <span className="font-weight-sample semibold">{data.fontMain} Semibold</span>
                  <span className="font-weight-sample regular">{data.fontMain} Regular</span>
                </div>
              </div>

              {/* Colors block */}
              <div className="blueprint-block color-showcase">
                <h3 className="blueprint-subheading">COLOUR PALETTE USED</h3>
                <div className="color-swatches-row">
                  {data.colorPalette.map((col, idx) => (
                    <div key={idx} className="color-swatch-item">
                      <div className="color-circle" style={{ backgroundColor: col.hex }}></div>
                      <span className="color-hex">{col.hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* #04 CHALLENGES */}
        <section className="case-study-section">
          <div className="section-bg-num">#04</div>
          <div className="section-content-full">
            <h2 className="section-heading">CHALLENGES</h2>
            <p className="section-text">{data.challenges}</p>
          </div>
        </section>

        {/* #05 LEARNINGS */}
        <section className="case-study-section">
          <div className="section-bg-num">#05</div>
          <div className="section-content-full">
            <h2 className="section-heading">LEARNINGS</h2>
            <p className="section-text">{data.learnings}</p>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="case-study-footer">
          <button onClick={() => onNavigateNext(data.nextId)} className="next-project-btn">
            Next Project: {data.nextTitle} →
          </button>
          <button onClick={onClose} className="back-home-btn">
            Return to Home
          </button>
        </footer>
      </div>
    </article>
  );
}
