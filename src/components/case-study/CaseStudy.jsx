import React, { useEffect, useRef } from 'react';
import './CaseStudy.css';
import bulletSvg from '../../assets/bullet.svg';
import FuzzyText from '../ui/FuzzyText';
import InfiniteMenu from '../ui/InfiniteMenu';

// Import mockup images for project solutions
import chayanKaroImg from '../../assets/chayan_karo.png';
import loveCupidImg from '../../assets/love_cupid.png';
import agritechMarketplaceImg from '../../assets/agritech_marketplace.png';
import caseStudyUiDesignImg from '../../assets/casestudyuidesign.png';
import chayanKaroWomensDayImg from '../../assets/chayan_karo_womens_day.png';

// Structured data for case studies
const CASE_STUDIES_DATA = {
  'chayan-karo': {
    title: 'Chayan karo',
    subtitle: 'Building Trust With Chayan Karo',
    tagline: 'Create a unified design system that would serve as the foundation for all Allegion digital products—enabling designers to prototype faster, developers to build consistently, and users to enjoy cohesive experiences across every touchpoint',
    category: 'UX Research, Branding + UX/UI Designing',
    role: 'UI/UX Lead Designer',
    timeline: '8 Weeks',
    deliverables: 'Product Design',
    platform: 'iOS/Android',

    problem: 'DriveCentric (formerly DriveVelocity) underwent a complete rebrand overnight. Despite an existing user base, leadership wanted to overhaul everything from company branding to all web and mobile applications. The challenge was rapidly establishing a new brand identity while translating it into a cohesive application experience, refining existing features, and forging the path forward for how users would perceive both the company and the platform.',
    solution: 'DriveCentric (formerly DriveVelocity) underwent a complete rebrand overnight. Despite an existing user base, leadership wanted to overhaul everything from company branding to all web and mobile applications. The challenge was rapidly establishing a new brand identity while translating it into a cohesive application experience, refining existing features, and forging the path forward for how users would perceive both the company and the platform.',
    blueprint: 'DriveCentric (formerly DriveVelocity) underwent a complete rebrand overnight. Despite an existing user base, leadership wanted to overhaul everything from company branding to all web and mobile applications. The challenge was rapidly establishing a new brand identity while translating it into a cohesive application experience, refining existing features, and forging the path forward for how users would perceive both the company and the platform.',
    challenges: 'DriveCentric (formerly DriveVelocity) underwent a complete rebrand overnight. Despite an existing user base, leadership wanted to overhaul everything from company branding to all web and mobile applications. The challenge was rapidly establishing a new brand identity while translating it into a cohesive application experience, refining existing features, and forging the path forward for how users would perceive both the company and the platform.',
    learnings: 'DriveCentric (formerly DriveVelocity) underwent a complete rebrand overnight. Despite an existing user base, leadership wanted to overhaul everything from company branding to all web and mobile applications. The challenge was rapidly establishing a new brand identity while translating it into a cohesive application experience, refining existing features, and forging the path forward for how users would perceive both the company and the platform.',

    fontMain: 'SF PRO',
    colorPalette: [
      { hex: '#E47830' },
      { hex: '#FA9441' },
      { hex: '#FFD9BE' },
      { hex: '#FFEDE0' }
    ],
    mockups: [
      chayanKaroImg,
      loveCupidImg,
      agritechMarketplaceImg,
      caseStudyUiDesignImg
    ],
    nextId: 'love-cupid',
    nextTitle: 'Love Cupid'
  },
  'love-cupid': {
    title: 'Love Cupid',
    subtitle: 'Personality-Focused Matchmaking',
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
    mockups: [
      loveCupidImg,
      chayanKaroImg,
      agritechMarketplaceImg,
      caseStudyUiDesignImg
    ],
    nextId: 'agritech-marketplace',
    nextTitle: 'Agritech-Marketplace'
  },
  'agritech-marketplace': {
    title: 'Agritech-Marketplace',
    subtitle: 'Connecting Farmers and Wholesale Buyers',
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
    mockups: [
      agritechMarketplaceImg,
      chayanKaroImg,
      loveCupidImg,
      caseStudyUiDesignImg
    ],
    nextId: 'chayan-karo',
    nextTitle: 'Chayan Karo'
  }
};

/* ─────────────────────────────────────────
   HERO
   ───────────────────────────────────────── */
export function CaseStudyHero({ data, projectImage, onClose }) {
  return (
    <section className="cs-hero">
      {/* Gradient + mockup banner */}
      <div className="cs-hero__banner">
        {projectImage && (
          <img src={projectImage} alt={data.title} className="cs-hero__banner-img" />
        )}
        <div className="cs-hero__banner-overlay" />
      </div>

      {/* Text content sits over the banner */}
      <div className="cs-hero__content">
        <button onClick={onClose} className="cs-back-btn" aria-label="Close Case Study">
          <img src={bulletSvg} className="cs-bullet-icon-left" alt="back pointer" /> BACK TO HOME
        </button>

        <h1 className="cs-hero__title">{data.title}</h1>
        {data.subtitle && <h2 className="cs-hero__subtitle">{data.subtitle}</h2>}
        <p className="cs-hero__tagline">{data.tagline}</p>

        {/* Meta strip */}
        <div className="cs-hero__meta">
          <div className="cs-meta-col">
            <span className="cs-meta-label">ROLE</span>
            <span className="cs-meta-value">{data.role}</span>
          </div>
          <div className="cs-meta-col">
            <span className="cs-meta-label">DELIVERABLES</span>
            <span className="cs-meta-value">{data.deliverables}</span>
          </div>
          <div className="cs-meta-col">
            <span className="cs-meta-label">TIMELINE</span>
            <span className="cs-meta-value">{data.timeline}</span>
          </div>
          <div className="cs-meta-col">
            <span className="cs-meta-label">PLATFORM</span>
            <span className="cs-meta-value">{data.platform}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   REUSABLE PHONE FRAME COMPONENT
───────────────────────────────────────── */
export function PhoneFrame({ image, video, children, label, className = '' }) {
  return (
    <div className={`cs-phone-frame ${className}`}>
      <div className="media-wrapper">
        {video ? (
          <video src={video} autoPlay loop muted playsInline />
        ) : image ? (
          <img src={image} alt={label || "Mockup"} />
        ) : children ? (
          children
        ) : (
          <span className="cs-phone-frame__label">{label || "Mockup"}</span>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION WRAPPER — ghost number + content
───────────────────────────────────────── */
function SectionShell({ num, title, modifier, children }) {
  return (
    <section className={`cs-section cs-section--${modifier}`}>
      <div className="cs-section__inner">
        <div className="section-header">
          <div className="section-number">{num}</div>
          <h2 className="section-title">
            <FuzzyText
              fontSize="clamp(2.5rem, 5vw, 4rem)"
              fontWeight={700}
              fontFamily="inherit"
              color="#e2006a"
              baseIntensity={0.15}
              hoverIntensity={0.4}
              fuzzRange={12}
            >
              {title}
            </FuzzyText>
          </h2>
        </div>
        <div className="cs-section__content">
          {children}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   #01 PROBLEM
───────────────────────────────────────── */
export function ProblemSection({ problem }) {
  return (
    <SectionShell num="#01" title="THE PROBLEM" modifier="problem">
      <div className="cs-split">
        <div className="cs-split__left">
          <p className="cs-section__body">{problem}</p>
        </div>
        <div className="cs-split__right">
          <PhoneFrame video={null} label="For Video" />
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   #02 SOLUTION
───────────────────────────────────────── */
export function SolutionSection({ solution, mockups }) {
  return (
    <SectionShell num="#02" title="THE SOLUTION" modifier="solution">
      <p className="cs-section__body">{solution}</p>

      <div className="cs-mockups-row">
        {mockups && mockups.length > 0 ? (
          mockups.map((imgUrl, i) => (
            <PhoneFrame key={i} image={imgUrl} label={`Mockup ${i + 1}`} />
          ))
        ) : (
          [1, 2, 3, 4].map(n => (
            <PhoneFrame key={n} label={`Mockup ${n}`} />
          ))
        )}
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   #03 SYSTEM BLUEPRINT
───────────────────────────────────────── */
export function SystemBlueprintSection({ blueprint, fontMain, colorPalette }) {
  return (
    <SectionShell num="#03" title="SYSTEM BLUEPRINT" modifier="blueprint">
      <p className="cs-section__body">{blueprint}</p>

      {/* Fonts block */}
      <div className="cs-blueprint-block">
        <h3 className="cs-blueprint-block__label">FONTS USED</h3>
        <p className="cs-font-alphabet">
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 0
        </p>
        <div className="cs-font-weights">
          <span className="cs-font-weight cs-font-weight--bold">{fontMain} Bold</span>
          <span className="cs-font-weight cs-font-weight--semibold">{fontMain} Semibold</span>
          <span className="cs-font-weight cs-font-weight--regular">{fontMain} Regular</span>
        </div>
      </div>

      {/* Colors block */}
      <div className="cs-blueprint-block">
        <h3 className="cs-blueprint-block__label">COLOUR PALETTE USED</h3>
        <div className="cs-swatches">
          {colorPalette.map((col, i) => (
            <div key={i} className="cs-swatch">
              <div
                className="cs-swatch__circle"
                style={{ backgroundColor: col.hex }}
              />
              <span className="cs-swatch__hex">{col.hex}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   #04 CHALLENGES
───────────────────────────────────────── */
export function ChallengesSection({ challenges }) {
  return (
    <SectionShell num="#04" title="CHALLENGES" modifier="challenges">
      <p className="cs-section__body">{challenges}</p>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   #05 LEARNINGS
───────────────────────────────────────── */
export function LearningsSection({ learnings }) {
  return (
    <SectionShell num="#05" title="LEARNINGS" modifier="learnings">
      <p className="cs-section__body">{learnings}</p>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
export function CaseStudyFooter({ nextTitle, nextId, onNavigateNext, onClose }) {
  return (
    <footer className="cs-footer">
      <div className="cs-footer__inner">
        <button
          onClick={() => onNavigateNext(nextId)}
          className="cs-footer__next-btn"
        >
          Next Project: {nextTitle} →
        </button>
        <button onClick={onClose} className="cs-footer__home-btn">
          Return to Home
        </button>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   ROOT EXPORT
───────────────────────────────────────── */
export default function CaseStudy({ id, onClose, onNavigateNext, images }) {
  // Intercept 'posts-brand' case study to display WebGL InfiniteMenu
  if (id === 'posts-brand') {
    const postItems = [
      {
        image: chayanKaroWomensDayImg,
        link: 'https://google.com/',
        title: 'Chayan Karo "Women\'s Day"',
        description: 'Social media creative highlighting women empowerment and security features.'
      },
      {
        image: loveCupidImg,
        link: 'https://google.com/',
        title: 'Love Cupid "Valentine\'s Day"',
        description: 'Guided conversation and matching promotion.'
      },
      {
        image: agritechMarketplaceImg,
        link: 'https://google.com/',
        title: 'Agritech "Harvest Festival"',
        description: 'Logistics coordination and crop trading campaign.'
      },
      {
        image: caseStudyUiDesignImg,
        link: 'https://google.com/',
        title: 'Chayan Karo Design Guidelines',
        description: 'Design system core color palette and typography assets.'
      }
    ];

    return (
      <article className="cs-page" style={{ backgroundColor: '#000', overflow: 'hidden', height: '100vh', width: '100vw' }}>
        <button onClick={onClose} className="cs-posts-close-btn">
          CLOSE <span className="cs-posts-close-x">✕</span>
        </button>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <InfiniteMenu items={postItems} />
        </div>
      </article>
    );
  }

  const data = CASE_STUDIES_DATA[id];
  const pageRef = useRef(null);

  useEffect(() => {
    const pageEl = pageRef.current;
    if (pageEl) pageEl.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [id]);

  if (!data) {
    return (
      <div className="cs-error">
        <h2>Case Study Not Found</h2>
        <button onClick={onClose} className="cs-back-btn">
          <img src={bulletSvg} className="cs-bullet-icon-left" alt="back pointer" /> BACK TO HOME
        </button>
      </div>
    );
  }

  const primaryColor = data.colorPalette?.[0]?.hex || '#E47830';
  const secondaryColor = data.colorPalette?.[1]?.hex || '#FA9441';
  const tertiaryColor = data.colorPalette?.[2]?.hex || '#FFD9BE';

  return (
    <article 
      ref={pageRef}
      className="cs-page"
      style={{
        '--cs-primary': primaryColor,
        '--cs-secondary': secondaryColor,
        '--cs-tertiary': tertiaryColor
      }}
    >
      <CaseStudyHero data={data} projectImage={images?.[id]} onClose={onClose} />
      <ProblemSection problem={data.problem} scrollContainerRef={pageRef} />
      <SolutionSection solution={data.solution} mockups={data.mockups} scrollContainerRef={pageRef} />
      <SystemBlueprintSection
        blueprint={data.blueprint}
        fontMain={data.fontMain}
        colorPalette={data.colorPalette}
        scrollContainerRef={pageRef}
      />
      <ChallengesSection challenges={data.challenges} scrollContainerRef={pageRef} />
      <LearningsSection learnings={data.learnings} scrollContainerRef={pageRef} />
      <CaseStudyFooter
        nextTitle={data.nextTitle}
        nextId={data.nextId}
        onNavigateNext={onNavigateNext}
        onClose={onClose}
      />
    </article>
  );
}