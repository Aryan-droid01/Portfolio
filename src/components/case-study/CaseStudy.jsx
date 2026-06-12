import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './CaseStudy.css';
import CautionTape from '../caution-tape/CautionTape';

// Procedural HUD Screen component to render real-time tactical UI elements instead of static empty images.
function HUDScreen({ type, project, caption }) {
  let accent = '#FF5500'; // default tactical orange
  if (project === 'love-cupid') accent = '#FF2E93'; // Deep Pink/Red
  if (project === 'agritech-marketplace') accent = '#00E676'; // Emerald/Green

  // Render SVG graphics dynamically for each screen type
  const renderScreenContent = () => {
    switch (type) {
      case 'home':
        return (
          <div className="hud-screen-home">
            <div className="hud-status-bar">
              <span>SYS.LOC: [28.61, 77.20]</span>
              <span className="hud-pulse">● LIVE</span>
            </div>
            <div className="hud-map-grid">
              <svg viewBox="0 0 100 100" className="hud-svg-map">
                {/* Map streets grid */}
                <line x1="0" y1="20" x2="100" y2="20" stroke={accent} strokeWidth="0.25" opacity="0.3" />
                <line x1="0" y1="50" x2="100" y2="50" stroke={accent} strokeWidth="0.25" opacity="0.3" />
                <line x1="0" y1="80" x2="100" y2="80" stroke={accent} strokeWidth="0.25" opacity="0.3" />
                <line x1="30" y1="0" x2="30" y2="100" stroke={accent} strokeWidth="0.25" opacity="0.3" />
                <line x1="70" y1="0" x2="70" y2="100" stroke={accent} strokeWidth="0.25" opacity="0.3" />
                {/* Search area radar ring */}
                <circle cx="50" cy="50" r="25" fill="none" stroke={accent} strokeWidth="0.5" strokeDasharray="3,3" />
                <circle cx="50" cy="50" r="12" fill="none" stroke={accent} strokeWidth="0.75" />
                {/* User location pin */}
                <circle cx="50" cy="50" r="2" fill={accent} className="hud-ping-dot" />
                {/* Provider location dots */}
                <circle cx="35" cy="30" r="1.5" fill="#fff" opacity="0.8" />
                <circle cx="65" cy="70" r="1.5" fill="#fff" opacity="0.8" />
                <circle cx="75" cy="40" r="1.5" fill="#fff" opacity="0.8" />
              </svg>
            </div>
            <div className="hud-bottom-status">
              <span className="hud-console-text">SEARCHING FOR NEAREST AGENTS...</span>
            </div>
          </div>
        );
      case 'categories':
        const getCategories = () => {
          if (project === 'love-cupid') return ['SPARK MATCH', 'GROUP QUEST', 'LIVE CHAT', 'COMPAT_QA'];
          if (project === 'agritech-marketplace') return ['CROP INDEX', 'LOGISTICS', 'SOIL AUDIT', 'WHOLESALE'];
          return ['ELECTRICIAN', 'PLUMBER', 'CLEANER', 'CARPENTER'];
        };
        return (
          <div className="hud-screen-categories">
            <div className="hud-grid-4">
              {getCategories().map((cat, idx) => (
                <div key={idx} className="hud-cat-card">
                  <div className="hud-cat-bracket"></div>
                  <span className="hud-cat-num">0{idx + 1}</span>
                  <span className="hud-cat-title">{cat}</span>
                  <span className="hud-cat-sub">ACTIVE // 99%</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'booking flow':
        return (
          <div className="hud-screen-booking">
            <div className="hud-timeline">
              <div className="hud-timeline-node active">
                <span className="node-dot"></span>
                <span className="node-lbl">INIT</span>
              </div>
              <div className="hud-timeline-line active"></div>
              <div className="hud-timeline-node active">
                <span className="node-dot"></span>
                <span className="node-lbl">MATCH</span>
              </div>
              <div className="hud-timeline-line"></div>
              <div className="hud-timeline-node">
                <span className="node-dot"></span>
                <span className="node-lbl">DISPATCH</span>
              </div>
            </div>
            <div className="hud-booking-card">
              <div className="hud-booking-row"><span>ID:</span> <span>CS-9402</span></div>
              <div className="hud-booking-row"><span>ETA:</span> <span>18 MIN</span></div>
              <div className="hud-booking-row"><span>RATE:</span> <span>FIXED EST</span></div>
            </div>
            <div className="hud-action-bar">
              <div className="hud-btn-glow" style={{ backgroundColor: `${accent}22`, border: `1px solid ${accent}` }}>
                CONFIRM CONTRACT
              </div>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="hud-screen-payment">
            <div className="hud-receipt">
              <div className="receipt-row"><span>LEDGER_ITEM</span> <span>VAL</span></div>
              <div className="receipt-row sub"><span>BASE ESCROW</span> <span>$42.00</span></div>
              <div className="receipt-row sub"><span>GAS/NODE FEE</span> <span>$1.85</span></div>
              <div className="receipt-divider"></div>
              <div className="receipt-row total"><span>NET PAYMENT</span> <span>$43.85</span></div>
            </div>
            <div className="hud-qr-wrapper">
              <svg viewBox="0 0 40 40" className="hud-qr-code" stroke={accent} strokeWidth="1">
                {/* Simulated QR Code blocks */}
                <rect x="2" y="2" width="10" height="10" fill="none" />
                <rect x="4" y="4" width="6" height="6" fill={accent} />
                <rect x="28" y="2" width="10" height="10" fill="none" />
                <rect x="30" y="4" width="6" height="6" fill={accent} />
                <rect x="2" y="28" width="10" height="10" fill="none" />
                <rect x="4" y="30" width="6" height="6" fill={accent} />
                {/* Random blocks */}
                <rect x="16" y="6" width="4" height="4" fill={accent} />
                <rect x="22" y="10" width="4" height="4" fill={accent} />
                <rect x="14" y="18" width="8" height="4" fill={accent} />
                <rect x="26" y="22" width="6" height="4" fill={accent} />
                <rect x="18" y="28" width="4" height="8" fill={accent} />
              </svg>
            </div>
            <div className="hud-sig">SYS_SIG: SHA-256 SECURE</div>
          </div>
        );
      case 'provider dashboard':
        return (
          <div className="hud-screen-dashboard">
            <div className="hud-dash-stats">
              <div className="dash-stat"><span>DEMAND</span> <span className="val glow-text">98%</span></div>
              <div className="dash-stat"><span>JOBS</span> <span className="val">24</span></div>
            </div>
            <div className="hud-chart-container">
              <svg viewBox="0 0 100 40" className="hud-chart">
                {/* Horizontal reference lines */}
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                {/* Chart Path */}
                <path d="M 0 35 Q 15 28 30 18 T 60 12 T 80 28 T 100 5" fill="none" stroke={accent} strokeWidth="1.5" />
                <path d="M 0 35 Q 15 28 30 18 T 60 12 T 80 28 T 100 5 L 100 40 L 0 40 Z" fill={`url(#chart-grad-${type})`} opacity="0.1" />
                <defs>
                  <linearGradient id={`chart-grad-${type}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={accent} />
                    <stop offset="100%" stopColor={accent} stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="hud-dash-footer">SYS_STATUS: READY // AUTO_ACCEPT ON</div>
          </div>
        );
      case 'job details':
        return (
          <div className="hud-screen-job">
            <div className="hud-job-header">
              <span className="hud-job-id">JOB_ID: #409-TR</span>
              <span className="hud-job-status active">DISPATCHED</span>
            </div>
            <div className="hud-job-meta">
              <div className="meta-row"><span>CLIENT:</span> <span>ANONYMOUS</span></div>
              <div className="meta-row"><span>DEST:</span> <span>ZONE-04 // PLOT-B</span></div>
              <div className="meta-row"><span>TASK:</span> <span>EMERGENCY_REPAIR</span></div>
            </div>
            <div className="hud-job-checklist">
              <div className="chk-item checked"><span>[X]</span> Navigation coordinates locked</div>
              <div className="chk-item checked"><span>[X]</span> Escrow contract deposited</div>
              <div className="chk-item blink-text"><span>[-]</span> Dispatcher on route (1.2km)</div>
            </div>
          </div>
        );
      case 'earnings':
        const getEarningValue = () => {
          if (project === 'love-cupid') return '$1,240.00';
          if (project === 'agritech-marketplace') return '$8,940.50';
          return '₹42,850.00';
        };
        return (
          <div className="hud-screen-earnings">
            <span className="hud-earnings-lbl">ACCUMULATED LEDGER BALANCE</span>
            <span className="hud-earnings-val glow-text">{getEarningValue()}</span>
            <div className="hud-earnings-bars">
              <svg viewBox="0 0 100 25" className="hud-bars-svg">
                {/* Vertical bars */}
                <rect x="5" y="10" width="8" height="15" fill={accent} opacity="0.4" />
                <rect x="18" y="5" width="8" height="20" fill={accent} opacity="0.6" />
                <rect x="31" y="8" width="8" height="17" fill={accent} opacity="0.5" />
                <rect x="44" y="2" width="8" height="23" fill={accent} />
                <rect x="57" y="12" width="8" height="13" fill={accent} opacity="0.3" />
                <rect x="70" y="6" width="8" height="19" fill={accent} opacity="0.7" />
                <rect x="83" y="4" width="8" height="21" fill={accent} opacity="0.9" />
              </svg>
            </div>
            <div className="hud-earnings-footer">LAST SETTLEMENT: 4H AGO</div>
          </div>
        );
      case 'profile':
        return (
          <div className="hud-screen-profile">
            <div className="hud-profile-grid">
              <div className="profile-radar-avatar">
                <svg viewBox="0 0 40 40" className="hud-avatar-radar">
                  <circle cx="20" cy="20" r="18" fill="none" stroke={accent} strokeWidth="0.5" strokeDasharray="2,2" />
                  <circle cx="20" cy="20" r="12" fill="none" stroke={accent} strokeWidth="0.5" />
                  <line x1="20" y1="0" x2="20" y2="40" stroke={accent} strokeWidth="0.5" opacity="0.4" />
                  <line x1="0" y1="20" x2="40" y2="20" stroke={accent} strokeWidth="0.5" opacity="0.4" />
                  <circle cx="20" cy="20" r="4" fill="none" stroke={accent} strokeWidth="1" />
                  <path d="M 20 20 L 32 8" stroke={accent} strokeWidth="1" className="radar-sweep-line" />
                </svg>
              </div>
              <div className="profile-info-text">
                <span className="profile-name">AGENT_01 // L1</span>
                <span className="profile-verified" style={{ color: accent }}>✓ IDENTITY SECURE</span>
                <span className="profile-score">SCORE: 98.4%</span>
              </div>
            </div>
            <div className="profile-console-log">
              <span>SEC_ROLE: COMPLIANCE_AUTH</span>
              <span>TOKEN_ID: x83F...91A</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hud-device-wrapper" style={{ '--accent-color': accent }}>
      {/* HUD Header Decal */}
      <div className="hud-device-header">
        <div className="hud-dots">
          <span className="hud-dot"></span>
          <span className="hud-dot"></span>
          <span className="hud-dot"></span>
        </div>
        <div className="hud-url-bar">{type.toUpperCase()} // SYS.0x8D</div>
      </div>
      
      {/* Device Body */}
      <div className="hud-device-body">
        {/* Overlay grid lines & CRT scanlines */}
        <div className="hud-screen-grid-mesh"></div>
        <div className="hud-screen-scanline"></div>
        
        {/* Content */}
        <div className="hud-device-inner">
          {renderScreenContent()}
        </div>
      </div>
      <div className="hud-device-caption">{caption}</div>
    </div>
  );
}

// Structured data for case studies including the tactical redesign content
const CASE_STUDIES_DATA = {
  'chayan-karo': {
    title: 'Chayan Karo',
    tagline: 'DECENTRALIZED LOCAL SERVICE MARKETPLACE & BOOKING ENGINE',
    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Lead UI/UX Designer',
    timeline: '8 Weeks (2025)',
    deliverables: 'Mobile App, Design System, Branding',
    platform: 'iOS & Android',
    
    // Problem section contents
    problem: 'Finding local services in India is fragmented and lacks trust. Customers face inconsistent service quality, opaque pricing, and long wait times, while service providers struggle with irregular demand and inefficient booking workflows.',
    problemPoints: [
      'Fragile trust infrastructure leading to offline payment disputes and safety concerns.',
      'Unstructured pricing schemes with hidden commissions extracted by intermediaries.',
      'Poor logistical load balancing causing service delays and provider idle times.'
    ],
    
    // Solution section contents
    solution: 'A unified service marketplace that streamlines provider discovery, schedules bookings dynamically, and secures payments. It enables customers to customize packages with transparent pricing, and providers to manage schedules easily.',
    
    // Design System Blueprint details
    blueprintTitle: 'INTERFACE DOCTRINE',
    fontMain: 'SF Pro Text',
    colorPalette: [
      { name: 'TACTICAL ORANGE', hex: '#FF5500', role: 'Primary Alert & Actions' },
      { name: 'VOID BLACK', hex: '#070707', role: 'Main Canvas Background' },
      { name: 'STEEL RESIDUE', hex: '#1E1E1E', role: 'Interactive Cards & Borders' },
      { name: 'TELEMETRY GREEN', hex: '#00FF66', role: 'Live status indicators' }
    ],

    // Operational challenges
    challenges: [
      {
        title: 'TRUST MATRIX INTEGRATION',
        desc: 'Verifying provider skills and background history in a decentralized environment without creating registration friction.'
      },
      {
        title: 'REAL-TIME DISPATCH GEOLOC',
        desc: 'Tracking dynamic routing and travel times inside dense, high-interference urban topologies.'
      },
      {
        title: 'OFFLINE STATE RESILIENCY',
        desc: 'Maintaining booking states and transaction signatures during periods of poor mobile network connectivity.'
      }
    ],

    nextId: 'love-cupid',
    nextTitle: 'Love Cupid'
  },
  'love-cupid': {
    title: 'Love Cupid',
    tagline: 'GUIDED INTERACTIVE MATCHING MECHANISM & DATING APP',
    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Lead UX Researcher & Designer',
    timeline: '10 Weeks (2025)',
    deliverables: 'Mobile App, User Journeys, High-Fidelity Mockups',
    platform: 'iOS Mobile App',
    
    // Problem section contents
    problem: 'Modern dating apps often prioritize shallow metrics, leading to user fatigue and low match-to-meeting conversion rates. Users seek deeper matching criteria and icebreakers that encourage meaningful conversations.',
    problemPoints: [
      'Low friction swiping structures causing emotional detachment and fast burnout.',
      'Conversational dead-ends due to a lack of interactive icebreakers and prompts.',
      'Inaccurate matching metrics resulting in low date-conversion conversion rates.'
    ],
    
    // Solution section contents
    solution: 'Love Cupid introduces guided conversation flows, shared interactive challenges, and matching algorithms based on personality compatibility and communication preferences rather than purely swipe metrics.',
    
    // Design System Blueprint details
    blueprintTitle: 'MATCHING SYNDICATE',
    fontMain: 'SF Pro Display',
    colorPalette: [
      { name: 'DEEP PASSION', hex: '#FF2E93', role: 'Primary Match Actions & Branding' },
      { name: 'OBSIDIAN CANVAS', hex: '#050505', role: 'Primary Layout Base' },
      { name: 'STEEL GREY', hex: '#242424', role: 'Interactive borders' },
      { name: 'AMBER PULSE', hex: '#FFB300', role: 'User compatibility ratings' }
    ],

    // Operational challenges
    challenges: [
      {
        title: 'SWIPE FATIGUE MITIGATION',
        desc: 'Structuring interaction friction to prevent user burnout and encourage intentional matching profiles.'
      },
      {
        title: 'COMPATIBILITY WEIGHTS',
        desc: 'Balancing mathematical personality compatibility score models with user-selected filters.'
      },
      {
        title: 'PROFILE VERIFICATION SYSTEMS',
        desc: 'Preventing catfishing and bot profiles through dynamic, gesture-based visual verification checks.'
      }
    ],

    nextId: 'agritech-marketplace',
    nextTitle: 'Agritech-Marketplace'
  },
  'agritech-marketplace': {
    title: 'Agritech-Marketplace',
    tagline: 'END-TO-END FARMER SUPPLY CHAIN & DIRECT WHOLESALE LEDGER',
    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Senior Product Designer',
    timeline: '12 Weeks (2025)',
    deliverables: 'Responsive Web, Mobile App, Vendor Portal',
    platform: 'iOS, Android & Web',
    
    // Problem section contents
    problem: 'Farmers lack direct access to wholesale buyers, forcing them to rely on intermediaries who take high commissions. In addition, logistics coordination and real-time market crop pricing are highly opaque.',
    problemPoints: [
      'Middleman exploitation resulting in depressed farmer profits and artificially inflated retail costs.',
      'Opaque crop appraisal values due to a lack of localized commodity pricing indexes.',
      'Fragmented cold-chain logistics causing heavy crop spoilage during long transit.'
    ],
    
    // Solution section contents
    solution: 'An end-to-end marketplace connecting farmers directly with large wholesale buyers, featuring real-time market price data, built-in logistics coordination tools, and transparent crop grading guides.',
    
    // Design System Blueprint details
    blueprintTitle: 'AGRI-LEDGER SYSTEM',
    fontMain: 'SF Pro Rounded',
    colorPalette: [
      { name: 'EMERALD LEAF', hex: '#00E676', role: 'Ledger Credits & Profit Indicators' },
      { name: 'DARK EARTH', hex: '#080907', role: 'Primary System Canvas' },
      { name: 'SILICON VEIN', hex: '#2E322A', role: 'Card Borders & Grids' },
      { name: 'GLOWING AMBER', hex: '#FF9100', role: 'Critical warnings & logistic statuses' }
    ],

    // Operational challenges
    challenges: [
      {
        title: 'MARKET VOLATILITY ALERTS',
        desc: 'Integrating rapid-fluctuation index prices across multiple regional wholesale hubs.'
      },
      {
        title: 'COLD-CHAIN COUPLING',
        desc: 'Coupling dynamic dispatcher bookings with fragile transit requirements for fresh crops.'
      },
      {
        title: 'INTERFACE ACCESSIBILITY',
        desc: 'Designing simplified transactional layouts for farmers with low-end devices and varying literacy.'
      }
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

  // Framer Motion Animation Variants
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 0.05, 
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <article className="case-study-page">
      {/* Decorative Scanline, Noise Grid overlays */}
      <div className="global-scanline"></div>
      <div className="global-grid-mesh"></div>
      <div className="global-noise-layer"></div>

      {/* Navigation Header */}
      <header className="case-study-header">
        <button onClick={onClose} className="case-study-back-link">
          <span className="arrow">←</span> RETURN_TO_BASE_
        </button>
        <div className="hud-sys-version">PORTFOLIO_OS // BUILD_2026.06.11</div>
      </header>

      {/* Hero Section */}
      <section className="case-study-hero">
        <div className="hero-content">
          <span className="case-study-category">{data.category}</span>
          <h1 className="case-study-title glow-text">{data.title}</h1>
          <p className="hero-tagline-desc">{data.tagline}</p>
          
          <div className="case-study-mockup-frame">
            <div className="frame-crosshair top-left-ch"></div>
            <div className="frame-crosshair top-right-ch"></div>
            <div className="frame-crosshair bottom-left-ch"></div>
            <div className="frame-crosshair bottom-right-ch"></div>
            <div className="frame-grid-overlay"></div>
            {projectImage && (
              <img src={projectImage} alt={data.title} className="case-study-mockup-img" />
            )}
          </div>
        </div>
      </section>

      {/* Info Overview Grid */}
      <section className="case-study-overview">
        <div className="overview-container">
          <div className="overview-item-card">
            <div className="card-accent-line"></div>
            <span className="overview-label">ROLE_SPECIFICATION</span>
            <span className="overview-value">{data.role}</span>
          </div>
          <div className="overview-item-card">
            <div className="card-accent-line"></div>
            <span className="overview-label">MISSION_TIMELINE</span>
            <span className="overview-value">{data.timeline}</span>
          </div>
          <div className="overview-item-card">
            <div className="card-accent-line"></div>
            <span className="overview-label">DELIVERABLES_LOG</span>
            <span className="overview-value">{data.deliverables}</span>
          </div>
          <div className="overview-item-card">
            <div className="card-accent-line"></div>
            <span className="overview-label">TARGET_PLATFORMS</span>
            <span className="overview-value">{data.platform}</span>
          </div>
        </div>
      </section>

      {/* #01 THE PROBLEM */}
      <motion.section 
        className="case-study-section case-study-problem"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <motion.div className="giant-bg-number" variants={numberVariants}>#01</motion.div>
        <div className="problemsolution-container">
          <div className="problemsolution-block left-column">
            <span className="section-hud-label">// SECTION_01</span>
            <h2 className="block-title">THE PROBLEM</h2>
            <p className="block-text">{data.problem}</p>
            
            <div className="problem-points-list">
              {data.problemPoints.map((pt, idx) => (
                <div key={idx} className="problem-point-item">
                  <span className="bullet-bracket">[!]</span>
                  <p className="point-text">{pt}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="right-column">
            <div className="mission-video-card">
              <div className="video-card-header">
                <span className="rec-dot"></span>
                <span className="video-title">MISSION RECORDING</span>
                <span className="video-timecode">00:14:52:09</span>
              </div>
              <div className="video-card-body">
                <div className="video-noise"></div>
                <div className="video-scanlines"></div>
                <div className="video-grid"></div>
                
                {/* Simulated HUD elements inside video overlay */}
                <div className="video-hud-overlay">
                  <div className="scope-crosshair"></div>
                  <div className="telemetry-bar left">
                    <span>ALT: 420m</span>
                    <span>HDG: 104°</span>
                    <span>SIGNAL: SECURE</span>
                  </div>
                  <div className="telemetry-bar right">
                    <span>FPS: 60.00</span>
                    <span>AUDIO: AUTO</span>
                    <span>BITRATE: 4.8MB/S</span>
                  </div>
                </div>

                <div className="video-play-btn-glow">
                  <button className="video-play-btn">
                    <svg viewBox="0 0 24 24" className="play-icon">
                      <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* #02 THE SOLUTION */}
      <motion.section 
        className="case-study-section case-study-solution"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <motion.div className="giant-bg-number" variants={numberVariants}>#02</motion.div>
        
        <div className="solution-section-header">
          <span className="section-hud-label">// SECTION_02</span>
          <h2 className="block-title">THE SOLUTION</h2>
          <p className="solution-intro-text">{data.solution}</p>
        </div>

        {/* Cinematic overlapping staggered gallery */}
        <div className="cinematic-staggered-gallery">
          <div className="gallery-track">
            {/* Small overlapping card (Left) */}
            <div className="gallery-card size-small align-left">
              <div className="card-hud-decal">REF: SPEC_SML // GRID_A</div>
              <HUDScreen type="categories" project={id} caption="Structured taxonomy with high-contrast categories." />
            </div>

            {/* Large center primary card */}
            <div className="gallery-card size-large align-center">
              <div className="card-hud-decal">PRIMARY MOCKUP SCREEN</div>
              <div className="tactical-screenshot-frame">
                <div className="screenshot-bracket top-left-b"></div>
                <div className="screenshot-bracket top-right-b"></div>
                <div className="screenshot-bracket bottom-left-b"></div>
                <div className="screenshot-bracket bottom-right-b"></div>
                {projectImage ? (
                  <img src={projectImage} alt="Primary solution visual" className="gallery-image" />
                ) : (
                  <HUDScreen type="home" project={id} />
                )}
              </div>
              <div className="gallery-caption">Fig. 2.1 — End-to-end interface system running native modules.</div>
            </div>

            {/* Medium overlapping card (Right) */}
            <div className="gallery-card size-medium align-right">
              <div className="card-hud-decal">REF: SPEC_MED // GRID_B</div>
              <HUDScreen type="provider dashboard" project={id} caption="Telemetry and real-time dashboard data visualization." />
            </div>
          </div>
        </div>
      </motion.section>

      {/* #03 KEY SCREENS (Bento Grid) */}
      <motion.section 
        className="case-study-section case-study-key-screens"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <motion.div className="giant-bg-number" variants={numberVariants}>#03</motion.div>
        
        <div className="key-screens-header">
          <span className="section-hud-label">// SECTION_03</span>
          <h2 className="block-title">KEY SCREENS</h2>
          <p className="section-sub-desc">A deep dive into the system blueprints, mapping core application views.</p>
        </div>

        {/* Bento Grid layout occupying significant screen estate */}
        <div className="key-screens-bento-grid">
          {/* Card 1: HOME (Medium/Vertical) */}
          <div className="bento-card span-col-2 span-row-2">
            <div className="bento-bracket"></div>
            <HUDScreen type="home" project={id} caption="HOME: Core exploration view featuring dynamic map coordinates and provider locator vectors." />
          </div>

          {/* Card 2: CATEGORIES (Small) */}
          <div className="bento-card span-col-1 span-row-1">
            <div className="bento-bracket"></div>
            <HUDScreen type="categories" project={id} caption="CATEGORIES: Dynamic index classification." />
          </div>

          {/* Card 3: BOOKING FLOW (Medium/Horizontal) */}
          <div className="bento-card span-col-2 span-row-1">
            <div className="bento-bracket"></div>
            <HUDScreen type="booking flow" project={id} caption="BOOKING: Step-by-step transaction state machine and dynamic scheduling grid." />
          </div>

          {/* Card 4: PAYMENT (Small) */}
          <div className="bento-card span-col-1 span-row-2">
            <div className="bento-bracket"></div>
            <HUDScreen type="payment" project={id} caption="PAYMENT: Escrow settlement logs and encrypted wallet QR validation." />
          </div>

          {/* Card 5: PROVIDER DASHBOARD (Large) */}
          <div className="bento-card span-col-2 span-row-2">
            <div className="bento-bracket"></div>
            <HUDScreen type="provider dashboard" project={id} caption="DASHBOARD: Live provider dashboard including analytics line graphs and contract acceptance protocols." />
          </div>

          {/* Card 6: JOB DETAILS (Small) */}
          <div className="bento-card span-col-1 span-row-1">
            <div className="bento-bracket"></div>
            <HUDScreen type="job details" project={id} caption="JOB DETAILS: Telemetry mapping checklist." />
          </div>

          {/* Card 7: EARNINGS (Small) */}
          <div className="bento-card span-col-1 span-row-1">
            <div className="bento-bracket"></div>
            <HUDScreen type="earnings" project={id} caption="EARNINGS: Financial analytics and weekly payouts ledger." />
          </div>

          {/* Card 8: PROFILE (Small) */}
          <div className="bento-card span-col-1 span-row-1">
            <div className="bento-bracket"></div>
            <HUDScreen type="profile" project={id} caption="PROFILE: Operator verification matrices." />
          </div>
        </div>
      </motion.section>

      {/* #04 SYSTEM BLUEPRINT */}
      <motion.section 
        className="case-study-section case-study-blueprint"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <motion.div className="giant-bg-number" variants={numberVariants}>#04</motion.div>
        
        <div className="blueprint-header">
          <span className="section-hud-label">// SECTION_04</span>
          <h2 className="block-title">{data.blueprintTitle}</h2>
          <p className="section-sub-desc">Visual specifications and design architecture guidelines applied across systems.</p>
        </div>

        <div className="blueprint-showcase-container">
          {/* FONT SHOWCASE */}
          <div className="blueprint-card font-showcase-card">
            <div className="blueprint-card-header">
              <span className="spec-label">TYPEFACE_SPECIFICATION</span>
              <span className="spec-font-name">{data.fontMain}</span>
            </div>
            <div className="blueprint-card-body font-display-grid">
              <div className="font-alphabet-block">
                <span className="font-letters">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                <span className="font-numbers">0123456789</span>
              </div>
              <div className="font-weights-block">
                <div className="weight-item font-bold">
                  <span className="weight-lbl">SF Pro Bold</span>
                  <span className="weight-sample">SYSTEM TELEMETRY BLOCK</span>
                </div>
                <div className="weight-item font-semibold">
                  <span className="weight-lbl">SF Pro Semibold</span>
                  <span className="weight-sample">Secondary status and reading lines</span>
                </div>
                <div className="weight-item font-regular">
                  <span className="weight-lbl">SF Pro Regular</span>
                  <span className="weight-sample">Core description paragraphs and terminal logs</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLOR PALETTE */}
          <div className="blueprint-card color-showcase-card">
            <div className="blueprint-card-header">
              <span className="spec-label">COLOR_SYSTEM_LEDGER</span>
              <span className="spec-total-chips">04 MODULES FOUND</span>
            </div>
            <div className="blueprint-card-body color-grid">
              {data.colorPalette.map((col, idx) => (
                <div key={idx} className="color-swatch-card">
                  <div className="swatch-glowing-circle" style={{ backgroundColor: col.hex, boxShadow: `0 0 16px ${col.hex}33` }}>
                    <div className="inner-dark-core"></div>
                  </div>
                  <div className="swatch-details">
                    <span className="swatch-hex">{col.hex}</span>
                    <span className="swatch-name">{col.name}</span>
                    <span className="swatch-role">{col.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* #05 OPERATIONAL CHALLENGES */}
      <motion.section 
        className="case-study-section case-study-challenges"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <motion.div className="giant-bg-number" variants={numberVariants}>#05</motion.div>
        
        <div className="challenges-header">
          <span className="section-hud-label">// SECTION_05</span>
          <h2 className="block-title">OPERATIONAL CHALLENGES</h2>
          <p className="section-sub-desc">Critical friction points resolved during design and structural implementation.</p>
        </div>

        <div className="challenges-grid-3">
          {data.challenges.map((c, idx) => (
            <div key={idx} className="challenge-hud-card">
              <div className="card-header-accent">
                <span className="card-num-indicator">LOG_0{idx + 1}</span>
                <span className="card-radar-pulse"></span>
              </div>
              <div className="challenge-card-body">
                <h3 className="challenge-title">{c.title}</h3>
                <p className="challenge-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* #06 AFTER ACTION REPORT */}
      <motion.section 
        className="case-study-section case-study-learnings"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <motion.div className="giant-bg-number" variants={numberVariants}>#06</motion.div>
        
        <div className="learnings-header">
          <span className="section-hud-label">// SECTION_06</span>
          <h2 className="block-title">AFTER ACTION REPORT</h2>
          <p className="section-sub-desc">Synthesized insights gained during execution debriefing cycles.</p>
        </div>

        <div className="learnings-grid-3">
          {/* Card 1 */}
          <div className="learning-hud-card">
            <div className="learning-icon-box">
              <svg viewBox="0 0 24 24" className="hud-svg-icon">
                <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="learning-title">LOCALIZATION IS ARCHITECTURE</h3>
            <p className="learning-desc">Software must adapt to native micro-behaviors, local payment rails, and regional user trust patterns to succeed.</p>
          </div>

          {/* Card 2 */}
          <div className="learning-hud-card">
            <div className="learning-icon-box">
              <svg viewBox="0 0 24 24" className="hud-svg-icon">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="learning-title">QA IMPROVES DESIGN</h3>
            <p className="learning-desc">Continuous edge-case testing and telemetry refine UI friction points that normal design cycles overlook.</p>
          </div>

          {/* Card 3 */}
          <div className="learning-hud-card">
            <div className="learning-icon-box">
              <svg viewBox="0 0 24 24" className="hud-svg-icon">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="learning-title">TRUST DRIVES ADOPTION</h3>
            <p className="learning-desc">Security transparency, verified ratings, and escrow guarantees convert reluctant prospects into loyal users.</p>
          </div>
        </div>
      </motion.section>

      {/* Footer CTA & Project Navigation */}
      <footer className="case-study-footer-cta">
        <CautionTape />
        <div className="footer-cta-content">
          <span className="next-mission-label">// NEXT MISSION SEQUENCE //</span>
          <button onClick={() => onNavigateNext(data.nextId)} className="next-case-study-btn glow-button">
            INITIATE PROTOCOL: {data.nextTitle.toUpperCase()} <span className="arrow">→</span>
          </button>
          <button onClick={onClose} className="return-home-link">
            ABORT MISSION AND RETURN TO MAIN DIRECTORY
          </button>
        </div>
      </footer>
    </article>
  );
}
