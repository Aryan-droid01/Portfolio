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
      { label: 'DURATION', value: '6 Months' },
      { label: 'PLATFORM', value: 'Android & iOS (Flutter)' },
      { label: 'SCOPE', value: 'Customer App + Provider App' },
      { label: 'SCREENS DESIGNED', value: '120+' },
      { label: 'OUTCOME', value: '10K+ Downloads' }
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

    nextId: 'agritech-marketplace',
    nextTitle: 'Agritech Marketplace',
    demoUrl: 'https://www.figma.com/proto/cd3buiRvAQmecsDvx8oyYz/Prototype?node-id=6168-4494&viewport=-393%2C-469%2C0.26&t=YERE7HA53urgdApi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6168%3A3191&page-id=6083%3A34',

  },



  'agritech-marketplace': {
    title: 'Agritech Marketplace',
    subtitle: 'MadhuMitra & Horticulture, One Mission for Rural India',
    tagline:
      'Two apps built for the same farming communities, helping beekeepers and fruit growers track what they produce, grow it smarter, and finally sell it themselves.',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Senior Product Designer',
    timeline: '12 Weeks',
    deliverables: 'Product Design — MadhuMitra (Beekeeping) + Horticulture (Fruit Farming)',
    platform: 'Android',

    problem:
      'Beekeepers have always had a working knowledge of their hives, but almost none of it lives anywhere outside their own memory. Migration timing, hive health, how much honey or wax a season actually produced, all of it stayed undocumented, which made it nearly impossible to spot what was actually working and improve on it season over season. And once the honey was ready, there was nowhere to sell it except local middlemen who set the price. Fruit growers faced a parallel version of the same problem from a different angle. They knew their land and their crops, but had no structured way to log what was planted where, follow a cultivation guide built for their specific fruit and soil, or get in front of a buyer without a market visit. In both cases the gap wasn\'t a lack of farming knowledge, it was a lack of any system to capture that knowledge and turn it into either better decisions or a direct sale.',

    solution:
      'MadhuMitra gives a beekeeper a running record of their entire operation, from hive registration and migration tracking to a productivity log that captures honey, wax, and propolis output over time. A built in camera tool lets a farmer photograph a hive, a pest, or a flowering plant and get instant identification and guidance back, and that same capture feeds into a productivity dashboard that turns scattered observations into a clearer picture of which hives are performing and why. Once a season\'s harvest is ready, MadhuMitra lets the beekeeper list it directly in a marketplace built into the same app, turning what used to be a separate trip to a middleman into a continuation of the same workflow. Horticulture mirrors that same philosophy for fruit growers. A farmer registers their plot using the same official land records the government already recognises, gets a cultivation guide specific to their fruit and soil, and tracks pest and nutrition needs as the season progresses. Just like MadhuMitra, Horticulture closes the loop with a built in marketplace, so growing guidance and selling live in the same place instead of being two separate problems a farmer has to solve on their own.',

    blueprint:
      'Both apps share a backbone of OTP login, bilingual onboarding, and a camera first interaction pattern, but each one wears its own identity on top of that shared foundation. MadhuMitra runs on a warm amber that feels appropriate for honey and hives, while Horticulture uses a forest green that reads instantly as crop and cultivation. The productivity dashboard in MadhuMitra was designed to feel less like a spreadsheet and more like a season at a glance, surfacing trends in plain language rather than raw numbers. The marketplace screens in both apps follow the same listing pattern deliberately, so a farmer who lists honey in MadhuMitra would recognise exactly how to list mangoes in Horticulture without having to relearn anything.',

    challenges:
      'The hardest design problem in MadhuMitra was making the AI camera feature feel genuinely useful rather than gimmicky. A farmer pointing their phone at a hive needs information that actually changes what they do next, not a label that just confirms what they already knew, so the recommendation layer had to translate raw identification into a specific next action and quietly log that observation into the productivity dashboard without asking the farmer to do any extra data entry themselves. Designing the marketplace inside both apps raised a different challenge entirely, since neither beekeepers nor fruit growers had ever sold directly to a buyer through an app before, which meant listing a product had to feel as simple as taking a photo and naming a price, with nothing that resembled a complicated seller dashboard. On the Horticulture side, tying crop data to real land records meant the design had to handle the reality that not every farmer\'s paperwork is current or complete, so the flow needed to work for someone with perfect records and someone still catching up equally well.',

    learnings:
      'The biggest realisation across both apps was that farmers don\'t actually want a separate tool for tracking and a separate tool for selling, they want one continuous workflow where what they grow naturally leads into what they sell, and splitting those into two destinations would have meant losing people at the handoff. Building the AI camera feature also reinforced that the most valuable part of an AI tool in this context isn\'t the AI part at all, it\'s the fact that a farmer with no time or patience for data entry ends up with a usable productivity record anyway, just because they took a photo they were already going to take. And designing two visually distinct apps on the same underlying patterns confirmed that consistency doesn\'t mean identical, it means a farmer who learns one app should already half know how to use the other.',

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

    nextId: 'pairfect',
    nextTitle: 'Pairfect',
    demoUrl: 'https://www.figma.com/proto/cd3buiRvAQmecsDvx8oyYz/Prototype?node-id=6185-6342&p=f&viewport=60%2C398%2C0.08&t=OyZ5LCrRhMfPFd0x-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',

  },

  'pairfect': {
    title: 'Pairfect',
    subtitle: 'Your Closet, Finally Making Sense',
    tagline:
      'A styling app that builds outfit combinations from clothes you already own, and shows you what to add next if you want more options.',

    category: 'UX Research, Branding + UX/UI Designing + Frontend Development',
    role: 'Designer & Frontend Developer',
    timeline: '8 Weeks',
    deliverables: 'Product Design + Native Frontend (Kotlin)',
    platform: 'Android (Native, Kotlin)',

    problem:
      'Most people own more clothes than they actually wear, not because the clothes are bad, but because figuring out what goes with what takes more effort than just reaching for the same three outfits on repeat. Standing in front of a full closet and still feeling like you have nothing to wear is a strangely common experience, and it usually comes down to one missing step: nobody ever showed you which pieces in your own wardrobe actually pair well together. Styling apps that try to solve this either ignore your real closet entirely and just push you toward buying new things, or they rely on heavier recommendation systems that need a lot of data and still don\'t explain why one combination works and another doesn\'t. There was no simple, transparent way to look at your own clothes and get a combination you could trust without needing to think about it yourself.',

    solution:
      'Pairfect starts with your actual closet. You add what you own, organised by category, and the app builds outfit combinations using a rule based pairing system, matching tops with bottoms and accessories based on category logic rather than a black box recommendation engine, so every suggestion is something you can immediately understand and trust. Alongside your closet sits an Explore section, which works the opposite direction: instead of styling what you have, it shows you outfit ideas and individual pieces you don\'t own yet, each linking out to where you can actually buy them. The two sections were designed to feel like one continuous loop rather than two separate features, your closet for styling what\'s already yours, Explore for filling in what\'s missing.',

    blueprint:
      'The interface keeps clothing as the visual focus throughout, with minimal chrome around every product image so nothing competes with the actual outfit being shown. Closet items are organised into clear categories with a card based layout, and the same card pattern carries over into Explore, so switching between styling your own clothes and browsing new ones never feels like switching apps. Since the pairing logic itself is rule based, the design leans into making that visible and legible rather than hiding it, an outfit combination should read clearly as top plus bottom plus accessory rather than feeling like an opaque suggestion with no explanation behind it. I designed every screen and then built the entire frontend natively in Kotlin myself, which meant having full control over how outfit cards render, how closet categories scroll, and how the transition between an outfit and its individual pieces feels, details that are easy to spec in a design file but only really come together once you\'re the one wiring up the actual views.',

    challenges:
      'The first real challenge was making closet entry fast enough that people would actually bother doing it, since the whole pairing system is only useful once your wardrobe is in the app, and any friction at that stage means people give up before ever seeing a single outfit suggestion. The second was a tension specific to rule based pairing: category logic alone can technically combine any top with any bottom, so the harder design problem was constraining those combinations enough that suggestions felt intentional rather than random, without needing a full recommendation model to get there. Designing Explore to sit naturally next to a closet built from someone\'s own clothes was its own balance to strike, since it needed to feel like a genuine extension of styling, not an ad slotted into the middle of the app. And because I was also building the Kotlin frontend myself, several decisions that looked simple in the design file, like how an outfit card animates into its expanded view, turned into real engineering problems I had to solve directly rather than hand off to someone else.',

    learnings:
      'Designing and building the same product end to end made the cost of every visual decision much more concrete, since anything that looked good in a static mockup but was expensive to implement had nowhere to hide. Rule based pairing turned out to have a real advantage over a more complex model at this stage: every suggestion is explainable, which matters a lot when you\'re asking someone to trust an app with how they look. The closet and Explore sections also taught a clearer lesson about scope, that styling what you own and discovering what to buy next are genuinely two different jobs, and treating them as one feature would have made both weaker. Building the frontend myself also meant the biggest constraint on what shipped wasn\'t the design vision, it was how much time I had to translate that vision into working Kotlin, which forced a much sharper sense of what actually mattered in version one.',

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

    nextId: 'chayan-karo',
    nextTitle: 'Chayan Karo',
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
        nextTitle={data.nextTitle}
        nextId={data.nextId}
        demoUrl={data.demoUrl}
        onNavigateNext={onNavigateNext}
        onClose={onClose}
      />
    </article>
  );
}