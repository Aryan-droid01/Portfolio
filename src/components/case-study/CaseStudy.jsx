import React, { useEffect, useRef, useState } from 'react';
import './CaseStudy.css';
import bulletSvg from '../../assets/bullet.svg';
import FuzzyText from '../ui/FuzzyText';
import InfiniteMenu from '../ui/InfiniteMenu';
import IllustrationsPage from './IllustrationsPage';

// Import mockup images for project solutions
import chayanKaroImg from '../../assets/chayan_karo.png';
import loveCupidImg from '../../assets/love_cupid.png';
import agritechMarketplaceImg from '../../assets/agritech_marketplace.png';
import caseStudyUiDesignImg from '../../assets/casestudyuidesign.png';
import chayanKaroWomensDayImg from '../../assets/chayan_karo_womens_day.png';
import pairfectImg from '../../assets/pairfect.png';

// Pairfect
import pairfect1 from '../../assets/mockups/ScreenMockups/Home_Pairfect.svg';
import pairfect2 from '../../assets/mockups/ScreenMockups/Explore_pairfect.svg';
import pairfect3 from '../../assets/mockups/ScreenMockups/Closet_pairfect.svg';
import pairfect4 from '../../assets/mockups/ScreenMockups/Profile_pairfect.svg';

// LoveCupid
import lovecupid1 from '../../assets/mockups/ScreenMockups/lovecupid1.svg';
import lovecupid2 from '../../assets/mockups/ScreenMockups/lovecupid2.svg';
import lovecupid3 from '../../assets/mockups/ScreenMockups/lovecupid3.svg';
import lovecupid4 from '../../assets/mockups/ScreenMockups/lovecupid4.svg';

// Chayan Karo
import chayankaro1 from '../../assets/mockups/ScreenMockups/Chayann Karo.svg';
import chayankaro2 from '../../assets/mockups/ScreenMockups/Chayan karo2.svg';
import chayankaro3 from '../../assets/mockups/ScreenMockups/chayan karo3.svg';
import chayankaro4 from '../../assets/mockups/ScreenMockups/chayan karo3-1.svg';

// Chayan Saathi
import chayansaathi1 from '../../assets/mockups/ScreenMockups/Chayansathi.svg';
import chayansaathi2 from '../../assets/mockups/ScreenMockups/Chayansathi1.svg';
import chayansaathi3 from '../../assets/mockups/ScreenMockups/Chayan sathi2.svg';
import chayansaathi4 from '../../assets/mockups/ScreenMockups/Chayansathi3.svg';

// Agritech (Madhumitra)
import madhumitra1 from '../../assets/mockups/ScreenMockups/madhumitra1.svg';
import madhumitra2 from '../../assets/mockups/ScreenMockups/Mdhumitra2.svg';
import madhumitra3 from '../../assets/mockups/ScreenMockups/madhumitra3.svg';
import madhumitra4 from '../../assets/mockups/ScreenMockups/madhumitra4.svg';

// Horticulture
import horticulture1 from '../../assets/mockups/ScreenMockups/horticulture1.svg';
import horticulture2 from '../../assets/mockups/ScreenMockups/horticulture2.svg';
import horticulture3 from '../../assets/mockups/ScreenMockups/horticulture3.svg';
import horticulture4 from '../../assets/mockups/ScreenMockups/horticulture4.svg';

// Videos
import chayanKaroVideo from '../../assets/Chayan karo.mp4';
import chayanSaathiVideo from '../../assets/Chayan Sathi.mp4';
import madhumitraVideo from '../../assets/Madhumita.mp4';
import horticultureVideo from '../../assets/Horticulture.mp4';
import loveCupidVideo from '../../assets/Lovecupid.mp4';
import pairfectVideo from '../../assets/PAIRFECT.mp4';

// Posts 25
import post001 from '../../assets/posts/Posts/AC (Chayan karo).png';
import post002 from '../../assets/posts/Posts/AC offer promotion(Chayan karo).png';
import post003 from '../../assets/posts/Posts/AC Offer Promotion 2(Chayan karo).png';
import post004 from '../../assets/posts/Posts/AC Post 2(Chayan karo).png';
import post005 from '../../assets/posts/Posts/AC Technician Hiring(Chayan Karo).png';
import post006 from '../../assets/posts/Posts/After Holi Car Wash(Wonder Shine).png';
import post007 from '../../assets/posts/Posts/After Holi Car Wash 2(Wonder Shine).png';
import post008 from '../../assets/posts/Posts/Bathroom Cleaning (Chayan karo).png';
import post009 from '../../assets/posts/Posts/Canopy Back (chayan karo).png';
import post010 from '../../assets/posts/Posts/Canopy Top(Chayan karo).png';
import post011 from '../../assets/posts/Posts/Canopyy Front(Chayan Karo).png';
import post012 from '../../assets/posts/Posts/Carpenter Offer(Chayan karo).png';
import post013 from '../../assets/posts/Posts/Hindi AC Technician Hiring.png';
import post014 from '../../assets/posts/Posts/Holi (Chayan karo).png';
import post015 from '../../assets/posts/Posts/Holi AC offer(Chayan karo).png';
import post016 from '../../assets/posts/Posts/India Winning (Chayan Karo ).png';
import post017 from '../../assets/posts/Posts/Meme Post (Chayan karo).png';
import post018 from '../../assets/posts/Posts/Promotion 1 (Chayan karo).png';
import post019 from '../../assets/posts/Posts/Promotion 2(Chayan karo).png';
import post020 from '../../assets/posts/Posts/Ram Navmi (Chayan karo).png';
import post021 from '../../assets/posts/Posts/Valentines Day Offer(Chayan karo).png';
import post022 from '../../assets/posts/Posts/Vassant panchami(Chayan Karo).png';
import post023 from '../../assets/posts/Posts/Weekend offer(Chayan karo).png';
import post024 from '../../assets/posts/Posts/Women\'s Day(Chayan karo).png';
import post025 from '../../assets/posts/Posts/Your Home’s Best Friend(Tivoli).png';

const CASE_STUDIES_DATA = {
  'chayan-karo': {
    title: 'Chayan Karo',
    subtitle: 'Building Trust With Chayan Karo',
    tagline:
      'A trust-first safety and community platform designed to help users feel secure, connected, and confident through intuitive experiences and accessible digital interactions.',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'UI/UX Lead Designer',
    timeline: '8 Weeks',
    deliverables: 'Product Design',
    platform: 'iOS/Android',

    problem:
      'Women and families often hesitate to use safety and community platforms due to concerns around trust, verification, and usability. Existing solutions felt complicated, lacked transparency, and failed to create confidence during critical moments when users needed assistance.',

    solution:
      'Chayan Karo was designed as a trust-first platform that combines safety features, community engagement, and intuitive user flows. The experience focuses on simplicity, fast access to key actions, clear visual hierarchy, and a seamless onboarding journey that helps users feel confident from their first interaction.',

    blueprint:
      'The design system was built around accessibility, consistency, and emotional reassurance. A structured component library, scalable typography system, warm color palette, and reusable interaction patterns ensured a cohesive experience across every screen while accelerating future product development.',

    challenges:
      'Balancing strong safety messaging without creating fear was a major challenge. The product needed to communicate reliability and security while maintaining an approachable and welcoming experience. Designing for diverse user groups and varying levels of technical familiarity also required extensive iteration.',

    learnings:
      'Trust is built through small design decisions. Clear communication, intuitive navigation, transparent actions, and consistent visual feedback significantly improved user confidence. User testing revealed that simplicity and reassurance were more valuable than adding complex features.',

    fontMain: 'SF PRO',

    colorPalette: [
      { hex: '#E47830' },
      { hex: '#FA9441' },
      { hex: '#FFD9BE' },
      { hex: '#FFEDE0' }
    ],

    hasMultipleApps: true,
    slides: [
      {
        title: "CHAYAN KARO",
        mockups: [
          chayankaro1,
          chayankaro2,
          chayankaro3,
          chayankaro4
        ]
      },
      {
        title: "CHAYAN SAATHI",
        mockups: [
          chayansaathi1,
          chayansaathi2,
          chayansaathi3,
          chayansaathi4
        ]
      }
    ],

    nextId: 'agritech-marketplace',
    nextTitle: 'Agritech Marketplace',
    demoUrl: 'https://www.figma.com/proto/cd3buiRvAQmecsDvx8oyYz/Prototype?node-id=6168-4494&viewport=-393%2C-469%2C0.26&t=YERE7HA53urgdApi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6168%3A3191&page-id=6083%3A34',

  },

  'love-cupid': {
    title: 'Love Cupid',
    subtitle: 'Personality-Focused Matchmaking',
    tagline:
      'A dating experience focused on meaningful connections through personality-driven matching, guided conversations, and compatibility-first interactions.',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Lead UX Researcher & Designer',
    timeline: '10 Weeks',
    deliverables: 'Branding & UX/UI',
    platform: 'iOS Mobile App',

    problem:
      'Many dating applications focus heavily on appearance-based interactions, leading to superficial engagement and low-quality matches. Users struggled to build meaningful connections and often experienced conversation fatigue shortly after matching.',

    solution:
      'Love Cupid introduced personality-driven matchmaking, guided conversations, and compatibility-focused interactions. The platform encourages deeper engagement by helping users discover shared interests and reducing the pressure associated with traditional swipe-based experiences.',

    blueprint:
      'The visual system combines modern dating aesthetics with a warm and approachable personality. Soft gradients, expressive typography, carefully designed interaction states, and compatibility indicators help create an emotionally engaging experience.',

    challenges:
      'Designing engagement systems without overwhelming users required careful balance. The team needed to encourage meaningful interaction while avoiding unnecessary friction during onboarding, profile creation, and matching workflows.',

    learnings:
      'Users value authenticity over volume. Features that encouraged meaningful conversations generated stronger engagement than traditional growth-focused mechanics. Safety, transparency, and thoughtful interaction design played a key role in user retention.',

    fontMain: 'SF PRO',

    colorPalette: [
      { hex: '#F7B89C' },
      { hex: '#E46A35' },
      { hex: '#F4F7F5' },
      { hex: '#000000' }
    ],

    hasMultipleApps: false,
    mockups: [
      lovecupid1,
      lovecupid2,
      lovecupid3,
      lovecupid4
    ],

    nextId: 'pairfect',
    nextTitle: 'Pairfect',
    demoUrl: 'https://www.figma.com/proto/wVw9GNtAHNJOZL5yqhbfN5/Prototype?node-id=1591-917&p=f&viewport=325%2C60%2C0.11&t=7Ag8FHdLiEtLGcvu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1591%3A782&page-id=1534%3A113',


  },

  'agritech-marketplace': {
    title: 'Agritech Marketplace',
    subtitle: 'Connecting Farmers and Wholesale Buyers',
    tagline:
      'A digital marketplace that empowers farmers with direct market access, transparent pricing, and streamlined logistics management.',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Senior Product Designer',
    timeline: '12 Weeks',
    deliverables: 'Responsive Web, Mobile App',
    platform: 'iOS, Android & Web',

    problem:
      'Farmers often face limited access to buyers, inconsistent pricing information, and fragmented logistics processes. The lack of transparency across the agricultural supply chain creates inefficiencies that impact both profitability and trust.',

    solution:
      'The marketplace connects farmers directly with wholesale buyers through a unified digital platform. Real-time pricing, product listings, logistics coordination, and transaction visibility help streamline the entire trading process from listing to delivery.',

    blueprint:
      'The design system prioritizes clarity, readability, and accessibility in outdoor usage environments. Large touch targets, high-contrast interfaces, simplified workflows, and multilingual considerations ensure usability across a wide range of users.',

    challenges:
      'Designing for users with different levels of digital literacy required simplifying complex marketplace workflows without removing essential functionality. Network limitations and rural connectivity challenges also influenced product decisions.',

    learnings:
      'Successful agricultural products require reliability before innovation. Offline-friendly experiences, clear status indicators, and simplified workflows significantly increased user confidence and platform adoption.',

    fontMain: 'SF PRO',

    colorPalette: [
      { hex: '#00E676' },
      { hex: '#080907' },
      { hex: '#2E322A' },
      { hex: '#FF9100' }
    ],

    hasMultipleApps: true,
    slides: [
      {
        title: "MADHUMITRA",
        mockups: [
          madhumitra1,
          madhumitra2,
          madhumitra3,
          madhumitra4
        ]
      },
      {
        title: "HORTICULTURE",
        mockups: [
          horticulture1,
          horticulture2,
          horticulture3,
          horticulture4
        ]
      }
    ],

    nextId: 'love-cupid',
    nextTitle: 'Love Cupid',
    demoUrl: 'https://www.figma.com/proto/cd3buiRvAQmecsDvx8oyYz/Prototype?node-id=6185-6342&p=f&viewport=60%2C398%2C0.08&t=OyZ5LCrRhMfPFd0x-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',

  },

  'pairfect': {
    title: 'Pairfect',
    subtitle: 'Connecting Developers Through Pair Programming',
    tagline:
      'A platform dedicated to matching developers for pair programming sessions, fostering collaboration, and enhancing coding skills through shared experiences.',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Lead Product Designer',
    timeline: '8 Weeks',
    deliverables: 'Web App Design',
    platform: 'Responsive Web',

    problem:
      'Developers often struggle to find compatible partners for pair programming. Existing platforms are either too broad or lack the specific features needed to match developers based on skill level, language preference, and availability.',

    solution:
      'Pairfect provides a streamlined matchmaking system that connects developers based on their technical profiles. The platform includes integrated scheduling, communication tools, and feedback mechanisms to ensure productive and enjoyable pair programming sessions.',

    blueprint:
      'The design system features a clean, minimal interface with a dark mode aesthetic and vibrant pink accents. High contrast typography and intuitive navigation help users quickly find matches and manage their schedules without distraction.',

    challenges:
      'Creating an effective matching algorithm required balancing user preferences with availability. The interface needed to clearly communicate matching criteria while remaining uncluttered and easy to use.',

    learnings:
      'Developers highly value clear communication and structured sessions. Providing tools for scheduling and feedback significantly improved the success rate and satisfaction of pair programming sessions.',

    fontMain: 'SF PRO',

    colorPalette: [
      { hex: '#E2006A' },
      { hex: '#1C1C1F' },
      { hex: '#FFFFFF' },
      { hex: '#333333' }
    ],

    hasMultipleApps: false,
    mockups: [
      pairfect1,
      pairfect2,
      pairfect3,
      pairfect4
    ],

    nextId: 'chayan-karo',
    nextTitle: 'Chayan Karo',
    demoUrl: 'https://www.figma.com/proto/wVw9GNtAHNJOZL5yqhbfN5/Pairfect?page-id=0%3A1&node-id=1094-135&viewport=9869%2C3833%2C0.67&t=MyV4I3h2QueDtwU7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1002%3A2',

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
   HERO VIDEO FRAME
───────────────────────────────────────── */
export const HeroVideoFrame = React.forwardRef(({ image, video, label, className = '' }, ref) => {
  return (
    <div className={`cs-hero-video-frame ${className}`}>
      <div className="media-wrapper">
        {video ? (
          <video ref={ref} src={video} autoPlay loop muted playsInline />
        ) : image ? (
          <img src={image} alt={label || "Mockup"} />
        ) : (
          <span className="cs-phone-frame__label">{label || "For Video"}</span>
        )}
      </div>
    </div>
  );
});

/* ─────────────────────────────────────────
   DUAL VIDEO SHOWCASE
───────────────────────────────────────── */
export function DualVideoShowcase({ id }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontVideoRef = useRef(null);
  const backVideoRef = useRef(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (isFlipped) {
      if (frontVideoRef.current) frontVideoRef.current.pause();
      if (backVideoRef.current) backVideoRef.current.play();
    } else {
      if (frontVideoRef.current) frontVideoRef.current.play();
      if (backVideoRef.current) backVideoRef.current.pause();
    }
  }, [isFlipped]);

  const titles = id === 'chayan-karo' 
    ? ['CHAYAN KARO', 'CHAYAN SAATHI'] 
    : ['MADHUMITRA', 'HORTICULTURE'];

  const videos = id === 'chayan-karo'
    ? [chayanKaroVideo, chayanSaathiVideo]
    : [madhumitraVideo, horticultureVideo];

  const activeTitle = isFlipped ? titles[1] : titles[0];

  return (
    <div className="cs-dual-video-showcase">
      <div className="cs-dual-content">
        <div className="cs-dual-title-wrapper">
          <h3 className="cs-dual-title" key={isFlipped ? 'back' : 'front'}>
            {activeTitle}
          </h3>
        </div>
        
        <div className="cs-flip-scene">
          <div className={`cs-flip-card ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="cs-flip-face cs-flip-face--front">
              <HeroVideoFrame
                ref={frontVideoRef}
                video={videos[0]}
                image={null}
                label={titles[0]}
              />
            </div>
            <div className="cs-flip-face cs-flip-face--back">
              <HeroVideoFrame
                ref={backVideoRef}
                video={videos[1]}
                image={null}
                label={titles[1]}
              />
            </div>
          </div>
        </div>

        <button className="cs-flip-trigger" onClick={handleFlip} aria-label="Flip Card">
          <img src={bulletSvg} className="cs-flip-arrow" alt="Flip Arrow" />
        </button>
        <p className="cs-flip-instruction">
          ↺ Tap arrow below to flip between apps
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   #01 PROBLEM
───────────────────────────────────────── */
export function ProblemSection({ problem, id }) {
  const isMultiApp = id === 'chayan-karo' || id === 'agritech-marketplace';

  let singleVideo = null;
  if (id === 'pairfect') singleVideo = pairfectVideo;
  if (id === 'love-cupid') singleVideo = loveCupidVideo;

  return (
    <SectionShell num="#01" title="THE PROBLEM" modifier="problem">
      <div className="cs-split">
        <div className="cs-split__left">
          <p className="cs-section__body">{problem}</p>
        </div>
        <div className="cs-split__right">
          {isMultiApp ? (
            <DualVideoShowcase id={id} />
          ) : (
            <PhoneFrame video={singleVideo} />
          )}
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   SCREENSHOTS SLIDER COMPONENT
───────────────────────────────────────── */
export function ScreenshotsSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="cs-screenshots-slider">
      <h3 className="cs-screenshots-title" key={activeIndex}>
        {slides[activeIndex].title}
      </h3>
      <div className="cs-screenshots-viewport">
        <div 
          className="cs-screenshots-track" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="cs-screenshots-slide">
              {slide.mockups.map((imgUrl, j) => (
                <PhoneFrame key={j} image={imgUrl} label={`Mockup ${i * 4 + j + 1}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="cs-screenshots-dots">
        {slides.map((_, i) => (
          <button 
            key={i} 
            className={`cs-screenshots-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   STATIC SHOWCASE COMPONENT
───────────────────────────────────────── */
export function StaticShowcase({ mockups }) {
  return (
    <div className="cs-static-showcase">
      <div className="cs-mockups-row">
        {mockups && mockups.map((imgUrl, i) => (
          <PhoneFrame key={i} image={imgUrl} label={`Mockup ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CASE STUDY SHOWCASE ORCHESTRATOR
───────────────────────────────────────── */
export function CaseStudyShowcase({ data }) {
  if (data.hasMultipleApps && data.slides) {
    return <ScreenshotsSlider slides={data.slides} />;
  }
  return <StaticShowcase mockups={data.mockups} />;
}

/* ─────────────────────────────────────────
   #02 SOLUTION
───────────────────────────────────────── */
export function SolutionSection({ solution, data }) {
  return (
    <SectionShell num="#02" title="THE SOLUTION" modifier="solution">
      <p className="cs-section__body">{solution}</p>
      <CaseStudyShowcase data={data} />
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
export function CaseStudyFooter({
  nextTitle,
  nextId,
  demoUrl,
  onNavigateNext,
  onClose
}) {
  return (
    <footer className="cs-footer">
      <div className="cs-footer__inner">

        <button
          onClick={() => onNavigateNext(nextId)}
          className="cs-footer__next-btn"
        >
          Next Project: {nextTitle} →
        </button>

        <div className="cs-footer__right">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-footer__demo-btn"
            >
              View Live Demo ↗
            </a>
          )}

          <button onClick={onClose} className="cs-footer__home-btn">
            Return to Home
          </button>
        </div>

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
      { image: post001, link: '#', title: 'AS-001 — AC Service Campaign', description: 'Seasonal AC service awareness.' },
      { image: post002, link: '#', title: 'AS-002 — AC Offer Campaign', description: 'Promotional AC service offer.' },
      { image: post003, link: '#', title: 'AS-003 — Summer Cooling Campaign', description: 'Affordable cooling solutions.' },
      { image: post004, link: '#', title: 'AS-004 — AC Care Campaign', description: 'Reliable AC maintenance services.' },
      { image: post005, link: '#', title: 'AS-005 — Technician Hiring Drive', description: 'Recruitment campaign for technicians.' },
      { image: post006, link: '#', title: 'AS-006 — Post Holi Car Wash', description: 'Special cleaning campaign after Holi.' },
      { image: post007, link: '#', title: 'AS-007 — Premium Car Wash Campaign', description: 'Professional detailing and wash services.' },
      { image: post008, link: '#', title: 'AS-008 — Bathroom Cleaning Service', description: 'Home hygiene and cleaning promotion.' },
      { image: post009, link: '#', title: 'AS-009 — Canopy Branding Design', description: 'Outdoor branding visual.' },
      { image: post010, link: '#', title: 'AS-010 — Top Canopy Branding', description: 'Top view branding design.' },
      { image: post011, link: '#', title: 'AS-011 — Front Canopy Branding', description: 'Front-facing branding design.' },
      { image: post012, link: '#', title: 'AS-012 — Carpentry Service Campaign', description: 'Woodwork and furniture repair promotion.' },
      { image: post013, link: '#', title: 'AS-013 — Hindi Hiring Campaign', description: 'Regional recruitment campaign.' },
      { image: post014, link: '#', title: 'AS-014 — Holi Festival Creative', description: 'Festive greetings for Holi.' },
      { image: post015, link: '#', title: 'AS-015 — Holi Special Offer', description: 'Seasonal AC promotional offer.' },
      { image: post016, link: '#', title: 'AS-016 — Victory Celebration Post', description: 'National achievement celebration.' },
      { image: post017, link: '#', title: 'AS-017 — Fun Engagement Post', description: 'Interactive social media creative.' },
      { image: post018, link: '#', title: 'AS-018 — Promotional Campaign', description: 'General marketing campaign.' },
      { image: post019, link: '#', title: 'AS-019 — Brand Awareness Campaign', description: 'Building trust and visibility.' },
      { image: post020, link: '#', title: 'AS-020 — Ram Navami Creative', description: 'Festival greeting post.' },
      { image: post021, link: '#', title: 'AS-021 — Valentine\'s Day Campaign', description: 'Seasonal engagement creative.' },
      { image: post022, link: '#', title: 'AS-022 — Vasant Panchami Creative', description: 'Traditional festive campaign.' },
      { image: post023, link: '#', title: 'AS-023 — Weekend Special Campaign', description: 'Weekend promotional offer.' },
      { image: post024, link: '#', title: 'AS-024 — Women\'s Day Campaign', description: 'Celebrating empowerment and resilience.' },
      { image: post025, link: '#', title: 'AS-025 — Customer Trust Campaign', description: 'Strengthening brand credibility.' }
    ];

    return (
      <article className="cs-page" style={{ backgroundColor: '#000', overflow: 'hidden', height: '100vh', width: '100vw' }}>
        <button onClick={onClose} className="cs-posts-close-btn">
          CLOSE <span className="cs-posts-close-x">✕</span>
        </button>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <InfiniteMenu items={postItems} onClose={onClose} />
        </div>
      </article>
    );
  }

  // Intercept 'illustrations' case study
  if (id === 'illustrations') {
    return <IllustrationsPage onClose={onClose} />;
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
      <ProblemSection problem={data.problem} id={id} scrollContainerRef={pageRef} />
      <SolutionSection solution={data.solution} data={data} scrollContainerRef={pageRef} />
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
        demoUrl={data.demoUrl}
        onNavigateNext={onNavigateNext}
        onClose={onClose}
      />
    </article>
  );
}