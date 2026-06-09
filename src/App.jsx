import React, { useState } from 'react';
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

// Import project mockup assets
import chayanKaroImg from './assets/chayan_karo.png';
import loveCupidImg from './assets/love_cupid.png';
import agritechMarketplaceImg from './assets/agritech_marketplace.png';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showChain, setShowChain] = useState(true);
  const [showFlicker, setShowFlicker] = useState(false);
  const [siteVisible, setSiteVisible] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState(null);

  const projectImages = {
    'chayan-karo': chayanKaroImg,
    'love-cupid': loveCupidImg,
    'agritech-marketplace': agritechMarketplaceImg
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

      {/* Main website wrapper (revealed when pulled) */}
      <motion.div 
        className="app-wrapper"
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
        animate={siteVisible ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          pointerEvents: siteVisible ? 'auto' : 'none',
          display: siteVisible ? 'block' : 'none' 
        }}
      >
        {currentCaseStudy ? (
          <CaseStudy 
            id={currentCaseStudy} 
            onClose={() => setCurrentCaseStudy(null)} 
            onNavigateNext={(nextId) => setCurrentCaseStudy(nextId)}
            images={projectImages}
          />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <Projects onViewCaseStudy={setCurrentCaseStudy} />
              <About />
              <Contact />
            </main>
          </>
        )}
      </motion.div>
    </>
  );
}
