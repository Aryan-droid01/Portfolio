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
    subtitle: 'Designing Trust at the Doorstep',
    tagline:
      'A home services app that puts the choice of who enters your home back in your hands, backed by a companion app that turns gig workers into a trusted, growing workforce.',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'Lead UX / Product Designer',
    timeline: 'Oct 2025 – Mar 2026',
    deliverables: 'Product Design — Customer App + Provider App',
    platform: 'Android · iOS (Flutter)',

    problem:
      'Most home service apps solve discovery but not trust. You tap "book a plumber" and a name and photo simply appear at your door, decided by the system, not by you. There is no moment in that flow where you actually choose who you are letting into your home. Customers had no visibility into a provider\'s rating, experience, or track record before booking, no transparent pricing before committing, and no real recourse when a cancellation or refund went wrong. This was never really a UI gap. It was a decision authority gap. The app was making a call that should have belonged to the user, and stripping out the one variable that matters most in a home services transaction: who. On the provider side, the same lack of structure showed up as an unpredictable job pipeline and no formal way to build a reputation that followed them between gigs.',

    solution:
      'The core product decision was to put provider selection back in the customer\'s control. Instead of auto assigning a technician, Chayan Karo surfaces a list of available providers for the selected service and time slot, each with a photo, rating, and experience, and lets the customer pick one, or choose to let the system match someone if they don\'t have a preference. That single decision reframes the entire booking flow. It stops being "request a service and hope" and becomes "compare and decide," which is closer to the mental model people already trust from food delivery and cab booking. Every booking closes the loop with a 4 digit PIN the provider has to show at the door, turning a one off transaction into a small ritual both sides understand without needing to read anything. On the other side of the same system, Chayan Saathi gives providers the structure to earn that visibility: one tap to go online, jobs that arrive by zone instead of randomly, and a rating that builds over time instead of being assigned to them on day one.',

    blueprint:
      'Provider choice only works as a feature if comparing providers is fast, so the real design problem became how to show enough information to decide confidently without turning a three minute booking into a research project. The answer was a compact provider card showing photo, rating, years of experience, and price for the selected service, repeated as a scrollable list, with the system matched option pinned at the top for anyone who just wants speed. A single brand orange carries every interactive state across the app, from enabled buttons to the selected provider to the active tab, so the decision of who you picked stays visually unambiguous even at a glance. The provider app mirrors the same visual language but is built for a different job. An availability toggle sits at the top of the dashboard as the single most important control on the screen, because for a gig worker, that toggle is the difference between earning and not earning that day.',

    challenges:
      'Letting customers choose their own provider introduced a problem most auto assign apps never have to deal with: what happens when the provider you picked goes offline between selection and payment. A provider could appear available when chosen, then quietly toggle off thirty to sixty seconds later while the customer was still completing payment, breaking the one promise the whole feature was built on. The fix was to re check availability at the moment payment is initiated rather than only at selection, and if the provider had gone offline, swap in an alternative selection screen instead of a dead end error. The second hard problem was making payment itself feel safe in a market where most customers had never paid for anything online. Cash had to be designed as an equally respected option next to Razorpay, not a fallback for people who "couldn\'t" pay digitally, so neither method ever reads as the lesser choice. A third, quieter problem was protecting new providers from the cold start trap that choice based booking creates. A provider with zero completed jobs showing a 0.0 rating next to seasoned providers with four and five stars would mean customers always pick around them, so new providers simply show no rating yet rather than a number that looks like a red flag.',

    learnings:
      'The biggest lesson was that giving users a choice creates obligations the product didn\'t have before. Once you let someone pick a specific provider, you\'ve implicitly promised that provider will actually show up, and that\'s a much harder promise to keep than "someone will show up." That one decision is what pulled in the real time availability check, the PIN verification ritual, and the rating suppression logic for new providers, none of which would have been necessary under a simpler auto assign model. It reinforced something worth remembering on every project since: the most differentiating feature in a product is rarely the one that\'s hardest to build technically. It\'s the one that needs the most supporting design work to actually feel trustworthy.',

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
    subtitle: 'Swipe Right, Match Vibe',
    tagline:
      'A dating app for people too busy to waste time on shallow swiping, built around personality first profiles and conversations that actually go somewhere.',

    category: 'UX Research, Branding + UX/UI Designing',
    role: 'UI/UX Designer',
    timeline: '4 Weeks',
    deliverables: 'Product Design, User Experience, High Fidelity Interface',
    platform: 'iOS & Android',

    problem:
      'Most dating apps optimise for volume, not quality, which leaves people endlessly swiping through profiles that all start to look the same. For someone with a packed schedule and not much patience left at the end of the day, that kind of app becomes another chore rather than something they actually want to open. The deeper issue is that a profile built from a handful of photos and a one line bio doesn\'t give anyone enough to judge actual compatibility, so most conversations stall out within the first few messages because there was never much shared ground to build on in the first place. Trust was another quiet problem sitting underneath all of this, since most people had no real way to tell who on the other end of a match was actually who they said they were.',

    solution:
      'LoveCupid was built around a simple idea: give people enough real context about each other that a conversation has somewhere to go before it even starts. Profiles lean into personality and interests rather than just photos, and the matching logic looks at compatibility signals instead of treating every swipe as equally meaningful. The onboarding flow was kept light on purpose, asking just enough to make a good first match without turning sign up into a personality test someone has to sit through before they can even see who else is on the app. Conversations get a gentle nudge in the right direction too, with built in conversation starters that take the pressure off opening a chat with a stranger, which is usually the exact moment most matches go quiet and never recover.',

    blueprint:
      'The visual system runs on warm coral tones over soft, almost paper like backgrounds, which gives the whole app a friendlier feel than the colder, high contrast look most dating apps default to. Components are rounded throughout and the layouts use generous whitespace, so nothing ever feels cramped even on screens with a lot of profile information. Typography sticks to SF Compact Rounded across both bold and regular weights, partly for the soft, friendly letterforms that suit a dating app and partly because it holds up consistently across both iOS and Android without ever looking like it was designed for one platform and ported to the other. The full journey moves through auth, onboarding, discovery, matching, messaging, and profile as one connected loop, with each step designed to lower the friction of getting to the next one.',

    challenges:
      'The hardest balance to strike was keeping the app familiar enough for anyone who has used a swipe based dating app before, while still introducing deeper profile information without making day one feel like filling out a form. That meant compressing what would normally be a long personality questionnaire into short, almost game like interactions that didn\'t feel like work. A related challenge showed up after a match happened rather than before it: getting two strangers from "you matched" to an actual conversation required interactive prompts that nudged the first message along, since that early silence is exactly where most matches quietly die. Profile depth also had to be handled carefully, since asking for everything upfront would have scared people off, so the design needed to let people build out their profile gradually over time without ever making an incomplete profile feel broken or unfinished. None of this was small in isolation, but doing it consistently across more than thirty screens without the experience drifting in tone was its own ongoing discipline.',

    learnings:
      'The clearest lesson from this project was that cutting friction matters more than adding features, since the biggest engagement gains came from removing steps rather than introducing new ones. A warmer visual identity also did more for perceived trust than any messaging ever could, which made it obvious that color and tone aren\'t just decoration in a product like this, they\'re doing real emotional work. Letting people reveal more about themselves gradually instead of all at once kept profile quality high without scaring anyone off during onboarding, and the small, almost invisible interactions, like a conversation starter appearing at exactly the right moment, ended up mattering more to the overall feel of the app than any single big feature did.',

    fontMain: 'SF Compact Rounded',


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

    nextId: 'love-cupid',
    nextTitle: 'Love Cupid',
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
          <p className="cs-section__body">{problem}</p>
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
   SCREENSHOTS SLIDER COMPONENT
───────────────────────────────────────── */
export function ScreenshotsSlider({ slides, id }) {
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
                <ScreenshotImage key={j} image={imgUrl} label={`Mockup ${i * 4 + j + 1}`} />
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
      <p className="cs-section__body">{solution}</p>
      <CaseStudyShowcase data={data} id={id} />
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
        <Navbar onNavigate={onNavigate} />
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