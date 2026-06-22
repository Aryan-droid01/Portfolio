import React, { useEffect, useRef, useState } from 'react';
import './CaseStudy.css';
import bulletSvg from '../../assets/bullet.svg';
import FuzzyText from '../ui/FuzzyText';
import InfiniteMenu from '../ui/InfiniteMenu';
import IllustrationsPage from './IllustrationsPage';
import Navbar from '../layout/navbar/Navbar';
import { IPhone16Frame, SamsungS26Frame } from '../ui/DeviceFrames';

// Import mockup images for project solutions
import chayanKaroImg from '../../assets/chayan_karo.png';
import agritechMarketplaceImg from '../../assets/agritech_marketplace.png';
import caseStudyUiDesignImg from '../../assets/casestudyuidesign.png';
import chayanKaroWomensDayImg from '../../assets/chayan_karo_womens_day.png';
import pairfectImg from '../../assets/pairfect.png';

// Pairfect
import pairfect1 from '../../assets/mockups/ScreenMockups/Home_Pairfect.svg';
import pairfect2 from '../../assets/mockups/ScreenMockups/Explore_pairfect.svg';
import pairfect3 from '../../assets/mockups/ScreenMockups/Closet_pairfect.svg';
import pairfect4 from '../../assets/mockups/ScreenMockups/Profile_pairfect.svg';



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
    subtitle: 'Transforming a WhatsApp-based home service business into a two-sided marketplace ecosystem with 10K+ downloads.',
    tagline: '',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Lead UX / Product Designer',
    timeline: '6 Months',
    deliverables: 'Customer App + Provider App',
    platform: 'Android & iOS (Flutter)',
    metrics: [
      { label: 'ROLE', value: 'Lead UX / Product Designer' },
      { label: 'SCOPE', value: 'Customer App + Provider App' },
      { label: 'TIMELINE', value: '6 Months' },
      { label: 'PLATFORM', value: 'Android & iOS (Flutter)' }
    ],

    problem: (
      <>
        <p>Before Chayan Karo existed as a product, it existed as a phone number. Customers discovered the business through word of mouth and booked services over WhatsApp. As the business expanded into salon services, cleaning, and AC servicing, there was no visibility into provider availability, no structured discovery or booking flow, and no provider-side infrastructure.</p>
        <br/>
        <p>The challenge wasn't simply designing an app. It was designing two products with different needs that had to launch together, depend on each other, and still feel like one business. Customers needed speed and confidence, while providers needed predictable work and a system that wouldn't make their day harder.</p>
      </>
    ),

    solution: (
      <>
        <p>Over six months, I designed both applications from scratch — the customer-facing Chayan Karo and the provider-facing Chayan Saathi — across more than 120 screens. Every major flow, interaction pattern, and booking lifecycle had to be designed from the ground up.</p>
        <br/>
        <p>My role extended beyond interface design. I conducted usability sessions, collaborated closely with Flutter developers, stayed involved during QA, and worked directly with the client to translate business requirements into product decisions.</p>
        <br/>
        <p>Inspired by marketplace products like Urban Company, the goal was not to copy existing patterns but to adapt them to a business with a smaller provider network, heavier reliance on cash transactions, and providers with varying levels of digital literacy.</p>
        <br/>
        <p>The result was a live two-sided marketplace that crossed 10,000 downloads on the Play Store, validating the product's ability to support a growing customer and provider ecosystem.</p>
      </>
    ),

    blueprint: (
      <>
        <h3>Designing for Confidence</h3>
        <br/>
        <p>Showing more information doesn't necessarily create more trust. Provider cards were designed to surface only the signals needed to answer one question:</p>
        <br/>
        <p>“Can I trust this person?”</p>
        <br/>
        <p>Confidence came from clarity, not density.</p>
        <br/><hr/><br/>
        <h3>Designing for Reliability</h3>
        <br/>
        <p>Provider availability became one of the most important controls in the ecosystem. Every booking and job offer depended on that state being accurate, which gave the availability toggle outsized importance despite its visual simplicity.</p>
        <br/><hr/><br/>
        <h3>One System, Two Products</h3>
        <br/>
        <p>Approximately 50–60% of the infrastructure was shared between both applications, including buttons, cards, bottom sheets, inputs, and navigation patterns.</p>
        <br/>
        <p>The goal wasn't simply efficiency, but ensuring that both products felt like parts of the same ecosystem.</p>
        <br/><hr/><br/>
        <h3>Booking Lifecycle</h3>
        <br/>
        <p>Customer</p>
        <br/>
        <p>Discover → Search → Service Detail → Cart → Checkout → Booking → Rating</p>
        <br/>
        <p>Provider</p>
        <br/>
        <p>Registration → KYC → Zone Selection → Availability → Job Acceptance → Completion → Earnings</p>
        <br/>
        <p>The real work lived in the connective tissue between both journeys, ensuring that actions on one side remained synchronized with expectations on the other.</p>
      </>
    ),

    challenges: (
      <>
        <p>Almost every decision that simplified the customer experience made the provider experience more complex, and vice versa. The challenge wasn't eliminating trade-offs but deciding whose needs should take priority at different moments.</p>
        <br/>
        <p>Provider onboarding, KYC, and earnings weren't simply interface problems. Many providers had limited digital familiarity, which meant designing experiences that prioritized understanding over feature density.</p>
        <br/>
        <p>Requirements evolved throughout development. A seemingly small decision, replacing plugin icons with custom iconography, eventually touched nearly every screen and reinforced how quickly minor choices can become structural at scale.</p>
      </>
    ),

    learnings: (
      <>
        <p>Usability sessions with real users revealed friction that internal reviews never surfaced. Most of the improvements came from observing hesitation, confusion, and unexpected behavior rather than predicting them.</p>
        <br/>
        <p>These insights led to simpler onboarding, clearer button labels, improved card layouts, reduced visual clutter, and more intuitive navigation.</p>
        <br/>
        <p>Given another six months, I would continue simplifying the checkout journey and revisit parts of provider onboarding and earnings to make them even easier for users with little experience managing financial information digitally.</p>
        <br/>
        <h3>Screens are the visible part. The system is the actual work.</h3>
      </>
    ),

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

    nextId: 'pairfect',
    nextTitle: 'Pairfect',
    demoUrl: 'https://www.figma.com/proto/cd3buiRvAQmecsDvx8oyYz/Prototype?node-id=6168-4494&viewport=-393%2C-469%2C0.26&t=YERE7HA53urgdApi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6168%3A3191&page-id=6083%3A34',

  },



  'agritech-marketplace': {
    title: 'Krishi Ecosystem',
    subtitle: 'Designing digital infrastructure for underserved farming communities in Uttar Pradesh.',
    tagline: 'A unified ecosystem consisting of two applications — MadhuMitra for beekeepers and Horticulture for fruit growers — built around a shared philosophy of accessibility, trust, and practical field usage.',

    category: 'Product Design',
    role: 'Product Designer',
    timeline: '3 Months',
    deliverables: 'MadhuMitra + Horticulture',
    platform: 'Android + iOS',
    metrics: [
      { label: 'ROLE', value: 'Product Designer' },
      { label: 'SCOPE', value: 'MadhuMitra + Horticulture' },
      { label: 'TIMELINE', value: '3 Months' },
      { label: 'PLATFORM', value: 'Android + iOS' }
    ],

    problem: (
      <>
        <p>Agriculture in rural Uttar Pradesh runs on fragmented knowledge — local experts, WhatsApp groups, and personal experience, none of it centralized and all of it changing with seasons, weather, and pest cycles. Identifying a pest or planning bee migration looks simple on paper, but often depends on expertise that isn't available the moment it is needed.</p>
        <br/>
        <p>Beekeepers and fruit growers face different day-to-day problems, but both needed the same thing: tools that fit naturally into existing workflows rather than forcing users to adopt new habits. Add varying digital literacy and inconsistent internet access, and the real challenge becomes not what information to deliver, but how to deliver it without introducing another layer of complexity.</p>
        <br/>
        <p>The opportunity wasn't to digitize agriculture. It was to make agricultural knowledge and services more accessible.</p>
      </>
    ),

    solution: (
      <>
        <p>I designed two applications for the same client, serving two different agricultural domains.</p>
        <br/>
        <p>MadhuMitra helps beekeepers manage apiaries, monitor bee health, track migration, and identify flora. Horticulture helps fruit growers with cultivation guidance, pest management, and access to services like insurance and government schemes.</p>
        <br/>
        <p>Although the domains differ, the philosophy remains the same. Both products prioritize accessibility over feature density, replacing unnecessary complexity with patterns users already understand. Bilingual onboarding, OTP login, voice support, and camera-first interactions all serve the same purpose: removing barriers instead of adding functionality for its own sake.</p>
        <br/>
        <p>The result is two products that feel distinct in purpose and consistent in experience — separate products connected by a shared philosophy.</p>
      </>
    ),

    blueprint: (
      <>
        <h3>Designing for Low Literacy</h3>
        <br/>
        <p>The goal wasn't to teach users technology. It was to design technology around the users we had.</p>
        <br/>
        <p>Both applications rely on bilingual onboarding, OTP authentication, and straightforward information hierarchy. Recognition was prioritized over memorization wherever possible.</p>
        <br/>
        <p>Accessibility wasn't a feature layered on top. It became the foundation.</p>
        <br/><hr/><br/>
        <h3>Camera Before Forms</h3>
        <br/>
        <p>Typing isn't always the easiest interaction, especially in the field.</p>
        <br/>
        <p>Photo-based workflows allowed users to identify plants and pests through a more natural interaction:</p>
        <br/>
        <p>Take Picture<br/>↓<br/>Get Information<br/>↓<br/>Act Accordingly</p>
        <br/>
        <p>Reducing manual input made the experience feel less like software and more like a tool designed for field conditions.</p>
        <br/><hr/><br/>
        <h3>One Ecosystem, Two Domains</h3>
        <br/>
        <p>Authentication, profile setup, support, maps, calendars, and navigation patterns remained consistent across both applications.</p>
        <br/>
        <p>That consistency wasn't a shortcut. It created familiarity for users and reduced complexity for the client.</p>
        <br/>
        <p>MadhuMitra and Horticulture don't look like siblings by accident. They share a skeleton.</p>
        <br/><hr/><br/>
        <h3>Designing for the Future</h3>
        <br/>
        <p>Geofencing, location mapping, community support, and government scheme integration were designed with long-term extensibility in mind.</p>
        <br/>
        <p>Several decisions intentionally created infrastructure that could support future services beyond the initial scope.</p>
      </>
    ),

    challenges: (
      <>
        <p>Agriculture contains more domain complexity than most users should ever have to see directly. Land records, crop cycles, pest behavior, nutrition timing, migration planning, and government schemes all carry terminology that experts understand but everyday users may not.</p>
        <br/>
        <p>The challenge wasn't deciding what information existed. It was deciding how much information users actually needed in front of them at any given moment.</p>
        <br/>
        <p>Connectivity shaped just as many decisions. Reliable internet couldn't be assumed, which meant the experience had to remain useful under imperfect conditions.</p>
        <br/>
        <p>The harder balancing act was running two products simultaneously. MadhuMitra and Horticulture solve different problems, but they needed to feel like family — consistent without becoming identical. That required deliberate decisions about which patterns stayed shared and which needed to adapt to their respective domains.</p>
      </>
    ),

    learnings: (
      <>
        <p>The most sophisticated products aren't always built for sophisticated users.</p>
        <br/>
        <p>Good design here meant removing barriers rather than adding capability, and many of the decisions that mattered most weren't visual at all. They were decisions about language, familiarity, and trust.</p>
        <br/>
        <p>Designing for underserved users taught me that simplicity isn't the absence of complexity. It's knowing exactly which complexity users should never have to touch.</p>
        <br/>
        <p>Looking back, the bigger opportunity lies in treating these products as one platform rather than two applications that happen to share patterns. Shared infrastructure could support a unified farmer profile, centralized support, and entirely new services.</p>
        <br/>
        <h3>Good design isn't about adding more. It's about removing barriers.</h3>
      </>
    ),

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

    nextId: 'close',
    nextTitle: 'VIEW ALL PROJECTS',
    demoUrl: 'https://www.figma.com/proto/cd3buiRvAQmecsDvx8oyYz/Prototype?node-id=6185-6342&p=f&viewport=60%2C398%2C0.08&t=OyZ5LCrRhMfPFd0x-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',

  },

  'pairfect': {
    title: 'Pairfect',
    subtitle: 'Reinventing outfit discovery through end-to-end design and development.',
    tagline:
      'A personal project exploring wardrobe organization and outfit discovery, where design and implementation evolved together through a continuous feedback loop rather than a traditional handoff.',

    category: 'Product Design + Android Development',
    role: 'Product Designer + Android Developer',
    timeline: '3 Months',
    deliverables: 'End-to-End Product Ownership\nDesign + Native Android Development',
    platform: 'Android\nKotlin · Jetpack Compose',
    metrics: [
      { label: 'ROLE', value: 'Product Designer + Android Developer' },
      { label: 'SCOPE', value: <>End-to-End Product Ownership<br/>Design + Native Android Development</> },
      { label: 'TIMELINE', value: '3 Months' },
      { label: 'PLATFORM', value: <>Android<br/>Kotlin &middot; Jetpack Compose</> }
    ],

    problem: (
      <>
        <p>Pairfect started as a personal exploration, not a market gap. I kept noticing the same pattern in my own wardrobe — clothes I owned but rarely wore, outfits I defaulted to out of habit rather than choice, and no real system for putting things together beyond memory. Most wardrobe apps I looked at solved cataloging, not discovery: they're good at storing what you own, less good at helping you actually decide what to wear.</p>
        <br/>
        <p>That gap was interesting to design for. But the bigger draw was the chance to own the whole thing myself — not just the interface, but the decisions underneath it, all the way through to shipped code.</p>
      </>
    ),

    solution: (
      <>
        <p>I designed and built Pairfect myself, with no handoff between the two. I started with information architecture and flows, then built a component system in Figma, then translated those components into Kotlin and Jetpack Compose.</p>
        <br/>
        <p>But the direction of influence wasn't one-way. Implementation constraints regularly pushed back on design decisions — a layout that worked in Figma sometimes had to be rethought once it had to behave correctly across real states in Compose. Just as often, a design decision shaped how a component got built, because I wasn't designing for a developer to interpret later — I was designing for myself to implement next.</p>
        <br/>
        <p>That loop, design informing code and code informing design, ran continuously instead of in two separate phases.</p>
      </>
    ),

    blueprint: (
      <>
        <h3>Designing for Exploration</h3>
        <br/>
        <p>The goal wasn't to help people store clothes more neatly. It was to help them discover combinations they wouldn't have put together on their own. The real design problem was choice paralysis — too many items, too many possible pairings.</p>
        <br/>
        <p>Confidence came from narrowing that down, not from adding more ways to organize.</p>
        <br/><hr/><br/>
        <h3>One Source of Truth</h3>
        <br/>
        <p>Figma components mapped directly onto reusable Compose components. Design and development were treated as one system, not two disciplines connected by a handoff file.</p>
        <br/>
        <p>A change to a component meant one change, not a redesign followed by a separate re-implementation.</p>
        <br/><hr/><br/>
        <h3>Material Design 3</h3>
        <br/>
        <p>Building on Material Design 3 instead of a fully custom system was a deliberate trade-off. It provided accessibility, consistency, and scalability without spending effort reinventing baseline interaction patterns.</p>
        <br/>
        <p>That effort went toward the actual problem instead: outfit discovery.</p>
        <br/><hr/><br/>
        <h3>Architecture</h3>
        <br/>
        <p>UI<br/>↓<br/>ViewModel<br/>↓<br/>Repository<br/>↓<br/>Data Layer</p>
        <br/>
        <p>MVVM kept the UI layer focused on displaying state rather than managing it, making the app easier to extend and easier to debug as it grew.</p>
      </>
    ),

    challenges: (
      <>
        <p>Owning both design and development meant there was no one else to hand a hard problem to. An idea that looked clean in Figma had to survive being turned into maintainable code by the same person who designed it — and not every idea did.</p>
        <br/>
        <p>Components built to look elegant in a single static frame sometimes became harder to manage once they had to support multiple real states and variants, which meant going back and simplifying decisions I'd already settled on.</p>
        <br/>
        <p>The harder balance was between flexibility and simplicity. A component built to handle every case becomes difficult to reason about; one built only for the common case breaks the first time a real use case doesn't fit it.</p>
        <br/>
        <p>Every one of those trade-offs was mine to make, with no second team to catch what I missed.</p>
      </>
    ),

    learnings: (
      <>
        <p>Pairfect taught me that design doesn't stop when development begins — they're different expressions of the same system, and treating them as separate stages is where a lot of products lose coherence.</p>
        <br/>
        <p>Building the interface myself gave me a much sharper sense of what scalability, state management, and maintainability actually cost, not just what they mean in theory.</p>
        <br/>
        <p>If I revisited Pairfect, I'd push further on smarter outfit recommendations, deeper personalization, and a more expansive approach to wardrobe organization. But the core lesson would stay the same.</p>
        <br/>
        <h3>Designing is thinking. Shipping is proving.</h3>
      </>
    ),

    fontMain: 'SF PRO',
    colorPalette: [
      { hex: '#070707' },
      { hex: '#EFEEE7' },
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

    nextId: 'agritech-marketplace',
    nextTitle: 'Krishi Ecosystem',
    demoUrl: 'https://www.figma.com/proto/wVw9GNtAHNJOZL5yqhbfN5/Pairfect?page-id=0%3A1&node-id=1094-135&viewport=9869%2C3833%2C0.67&t=MyV4I3h2QueDtwU7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1002%3A2',

  }
};
/* ─────────────────────────────────────────
   HERO
   ───────────────────────────────────────── */
export function CaseStudyHero({ data, projectImage }) {
  return (
    <section className="cs-hero">
      {/* Gradient + mockup banner */}
      <div className="cs-hero__banner">
        {projectImage && (
          <img src={projectImage} alt={data.title} className="cs-hero__banner-img" />
        )}
        <div className="cs-hero__banner-overlay" />
      </div>

      <div className="cs-hero__content">

        <h1 className="cs-hero__title">{data.title}</h1>
        {data.subtitle && <h2 className="cs-hero__subtitle">{data.subtitle}</h2>}
        <p className="cs-hero__tagline">{data.tagline}</p>

        {/* Meta strip */}
        <div className="cs-hero__meta">
          {data.metrics ? (
            data.metrics.map((m, i) => (
              <div className="cs-meta-col" key={i}>
                <span className="cs-meta-label">{m.label}</span>
                <span className="cs-meta-value">{m.value}</span>
              </div>
            ))
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────
   SECTION WRAPPER — ghost number + content
───────────────────────────────────────── */
function SectionShell({ num, title, modifier, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`cs-section cs-section--${modifier}`} ref={ref}>
      <div className="cs-section__inner" style={{ minHeight: '600px' }}>
        {isVisible && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}



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
              <IPhone16Frame
                ref={frontVideoRef}
                video={videos[0]}
                label={titles[0]}
              />
            </div>
            <div className="cs-flip-face cs-flip-face--back">
              <IPhone16Frame
                ref={backVideoRef}
                video={videos[1]}
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
          {typeof problem === 'string' ? <p className="cs-section__body">{problem}</p> : <div className="cs-section__body">{problem}</div>}
        </div>
        <div className="cs-split__right">
          {isMultiApp ? (
            <DualVideoShowcase id={id} />
          ) : id === 'pairfect' ? (
            <SamsungS26Frame video={singleVideo} />
          ) : (
            <IPhone16Frame video={singleVideo} />
          )}
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   SCREENSHOT IMAGE COMPONENT
───────────────────────────────────────── */
export function ScreenshotImage({ image, label }) {
  return (
    <div className="cs-screenshot-wrapper">
      <img src={image} alt={label || "Screenshot"} />
    </div>
  );
}

/* ─────────────────────────────────────────
   SCREENSHOTS MULTI-APP COMPONENT
───────────────────────────────────────── */
export function ScreenshotsSlider({ slides, id }) {
  if (!slides || slides.length === 0) return null;

  return (
    <div className="cs-screenshots-multi">
      {slides.map((slide, i) => (
        <div key={i} className="cs-screenshots-group">
          <h3 className="cs-screenshots-title">
            {slide.title}
          </h3>
          <div className="cs-mockups-row">
            {slide.mockups.map((imgUrl, j) => (
              <ScreenshotImage key={j} image={imgUrl} label={`Mockup ${i * 4 + j + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   STATIC SHOWCASE COMPONENT
───────────────────────────────────────── */
export function StaticShowcase({ mockups, id }) {
  return (
    <div className="cs-static-showcase">
      <div className="cs-mockups-row">
        {mockups && mockups.map((imgUrl, i) => (
          <ScreenshotImage key={i} image={imgUrl} label={`Mockup ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CASE STUDY SHOWCASE ORCHESTRATOR
───────────────────────────────────────── */
export function CaseStudyShowcase({ data, id }) {
  if (data.hasMultipleApps && data.slides) {
    return <ScreenshotsSlider slides={data.slides} id={id} />;
  }
  return <StaticShowcase mockups={data.mockups} id={id} />;
}

/* ─────────────────────────────────────────
   #02 SOLUTION
───────────────────────────────────────── */
export function SolutionSection({ solution, data, id }) {
  return (
    <SectionShell num="#02" title="THE SOLUTION" modifier="solution">
      {typeof solution === 'string' ? <p className="cs-section__body">{solution}</p> : <div className="cs-section__body">{solution}</div>}
      <CaseStudyShowcase data={data} id={id} />
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   #03 SYSTEM BLUEPRINT
───────────────────────────────────────── */
export function SystemBlueprintSection({ blueprint }) {
  return (
    <SectionShell num="#03" title="SYSTEM BLUEPRINT" modifier="blueprint">
      {typeof blueprint === 'string' ? <p className="cs-section__body">{blueprint}</p> : <div className="cs-section__body">{blueprint}</div>}
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   #04 CHALLENGES
───────────────────────────────────────── */
export function ChallengesSection({ challenges }) {
  return (
    <SectionShell num="#04" title="CHALLENGES" modifier="challenges">
      {typeof challenges === 'string' ? <p className="cs-section__body">{challenges}</p> : <div className="cs-section__body">{challenges}</div>}
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   #05 LEARNINGS
───────────────────────────────────────── */
export function LearningsSection({ learnings }) {
  return (
    <SectionShell num="#05" title="LEARNINGS" modifier="learnings">
      {typeof learnings === 'string' ? <p className="cs-section__body">{learnings}</p> : <div className="cs-section__body">{learnings}</div>}
    </SectionShell>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
export function CaseStudyFooter({
  id,
  nextTitle,
  nextId,
  demoUrl,
  onNavigateNext,
  onClose
}) {
  return (
    <footer className="cs-footer">
      <div className="cs-footer__inner">

        {nextId === 'close' ? (
          <button
            onClick={onClose}
            className={`cs-footer__next-btn ${id === 'pairfect' ? 'pairfect-accent' : ''}`}
          >
            {nextTitle} →
          </button>
        ) : (
          <button
            onClick={() => onNavigateNext(nextId)}
            className={`cs-footer__next-btn ${id === 'pairfect' ? 'pairfect-accent' : ''}`}
          >
            Next Project: {nextTitle} →
          </button>
        )}

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
export default function CaseStudy({ id, onClose, onNavigateNext, images, onNavigate }) {
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
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <InfiniteMenu items={postItems} onClose={onClose} />
        </div>
      </article>
    );
  }

  if (id === 'illustrations') {
    return <IllustrationsPage onClose={onClose} onNavigate={onNavigate} />;
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
      <Navbar onNavigate={onNavigate} scrollContainerRef={pageRef} />
      <CaseStudyHero data={data} projectImage={images?.[id]} />
      <ProblemSection problem={data.problem} id={id} scrollContainerRef={pageRef} />
      <SolutionSection solution={data.solution} data={data} id={id} scrollContainerRef={pageRef} />
      <SystemBlueprintSection
        blueprint={data.blueprint}
        fontMain={data.fontMain}
        colorPalette={data.colorPalette}
        scrollContainerRef={pageRef}
      />
      <ChallengesSection challenges={data.challenges} scrollContainerRef={pageRef} />
      <LearningsSection learnings={data.learnings} scrollContainerRef={pageRef} />
      <CaseStudyFooter
        id={id}
        nextTitle={data.nextTitle}
        nextId={data.nextId}
        demoUrl={data.demoUrl}
        onNavigateNext={onNavigateNext}
        onClose={onClose}
      />
    </article>
  );
}