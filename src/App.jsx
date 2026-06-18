import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader from './components/loader/Loader';
import ChainOverlay from './components/chain-overlay/ChainOverlay';
import FlickerLayer from './components/chain-overlay/FlickerLayer';
import Navbar from './components/layout/navbar/Navbar';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import CaseStudy from './components/case-study/CaseStudy';
import DotGrid from './components/dot-grid/DotGrid';
import TargetCursor from './components/target-cursor/TargetCursor';
import { preloadAudio } from './utils/audioManager';


// Import project mockup assets
import chayanKaroImg from './assets/mockups/Chayan Karo_hero.svg';
import loveCupidImg from './assets/mockups/Lovecupid_hero.svg';
import agritechMarketplaceImg from './assets/mockups/Agritech_hero.svg';
import pairfectImg from './assets/mockups/Pairfect_Hero.svg';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showChain, setShowChain] = useState(true);
  const [showFlicker, setShowFlicker] = useState(false);
  const [siteVisible, setSiteVisible] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(() => {
    if (typeof window === 'undefined') return null;
    const path = window.location.pathname;
    if (path === '/posts') return 'posts-brand';
    if (path === '/illustrations') return 'illustrations';
    if (path.startsWith('/case-study/')) return path.replace('/case-study/', '');
    return null;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/posts') setCurrentCaseStudy('posts-brand');
      else if (path === '/illustrations') setCurrentCaseStudy('illustrations');
      else if (path.startsWith('/case-study/')) setCurrentCaseStudy(path.replace('/case-study/', ''));
      else setCurrentCaseStudy(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path) => {
    React.startTransition(() => {
      if (path === '/') {
        setCurrentCaseStudy(null);
        window.history.pushState({}, '', '/');
      } else if (path === '/posts') {
        setCurrentCaseStudy('posts-brand');
        window.history.pushState({}, '', '/posts');
      } else if (path === '/illustrations') {
        setCurrentCaseStudy('illustrations');
        window.history.pushState({}, '', '/illustrations');
      } else if (path.startsWith('/case-study/')) {
        setCurrentCaseStudy(path.replace('/case-study/', ''));
        window.history.pushState({}, '', path);
      } else if (path.startsWith('#')) {
        setCurrentCaseStudy(null);
        window.history.pushState({}, '', '/');
        setTimeout(() => {
          const id = path.substring(1);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    });
  };

  const handleSetCaseStudy = (id) => {
    React.startTransition(() => {
      setCurrentCaseStudy(id);
      if (id === null) {
        window.history.pushState({}, '', '/');
      } else if (id === 'posts-brand') {
        window.history.pushState({}, '', '/posts');
      } else if (id === 'illustrations') {
        window.history.pushState({}, '', '/illustrations');
      } else {
        window.history.pushState({}, '', `/case-study/${id}`);
      }
    });
  };

  useEffect(() => {
    preloadAudio();
  }, []);

  const projectImages = {
    'chayan-karo': chayanKaroImg,
    'love-cupid': loveCupidImg,
    'agritech-marketplace': agritechMarketplaceImg,
    'pairfect': pairfectImg
  };

  const handleReveal = () => {
    setShowChain(false);
    setShowFlicker(true);
    setSiteVisible(true);
    
    // Deactivate flicker layer after CRT animation completes (0.5s)
    setTimeout(() => {
      setShowFlicker(false);
    }, 500);
  };

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && showChain && (
        <ChainOverlay onRevealComplete={handleReveal} />
      )}

      {showFlicker && <FlickerLayer />}

      {!loading && (
        <TargetCursor
          targetSelector="a, button, input, textarea, select, [role='button'], .inline-card-trigger, .project-panel-card, .project-card-secondary, .skill-card-compact, .contact-card-item, .nav-link, .chain-handle"
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
      )}

      {/* Dotted Background Grid - Rendered globally at viewport level to bypass containing blocks */}
      {siteVisible && !currentCaseStudy && (
        <div className="landing-background">
          <DotGrid
            dotSize={3}
            gap={24}
            baseColor="#333333"
            activeColor="#BC0058"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      )}

      {siteVisible && !currentCaseStudy && <Navbar onNavigate={handleNavigate} />}

      {/* Main website wrapper (revealed when pulled) */}
      <motion.div 
        className="app-wrapper"
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
        animate={siteVisible ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          pointerEvents: siteVisible && !currentCaseStudy ? 'auto' : 'none',
          display: siteVisible && !currentCaseStudy ? 'block' : 'none' 
        }}
      >
        <main style={{ position: 'relative' }}>
          <Hero isRevealed={siteVisible} />
          <Projects onViewCaseStudy={handleSetCaseStudy} />
          <About />
          <Contact />
        </main>
      </motion.div>

      {currentCaseStudy && (
        <CaseStudy 
          id={currentCaseStudy} 
          onClose={() => handleSetCaseStudy(null)} 
          onNavigateNext={(nextId) => handleSetCaseStudy(nextId)}
          onNavigate={handleNavigate}
          images={projectImages}
        />
      )}
    </>
  );
}
