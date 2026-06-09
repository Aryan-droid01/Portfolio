import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import CautionTape from '../../components/caution-tape/CautionTape';
import SemiCircleSvg from './Semi circle.svg';
import JackCardSvg from './Jack Card 1.svg';

export default function Hero() {
  const words = ["Designs", "Late Nights", "Ui/Ux", "Binge Watching"];
  const [wordIndex, setWordIndex] = useState(0);
  const [cardActive, setCardActive] = useState(false);

  // Cycle rotating words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Huge background semicircle starting behind content and extending down */}
      <img src={SemiCircleSvg} className="hero-semicircle" alt="Semicircle background" />

      <div className="hero-container">
        <div className="hero-centered-content">
          
          {/* Introductory label */}
          <div className="hero-intro-text">Hello, I am</div>
          
          {/* Name Box with Figma selection border & handles */}
          <div className="hero-name-box figma-select">
            <h1 className="hero-display-name">ARYAN VERMA</h1>
            
            {/* 8 Figma-style handles */}
            <div className="figma-handle top-left"></div>
            <div className="figma-handle top-center"></div>
            <div className="figma-handle top-right"></div>
            <div className="figma-handle bottom-left"></div>
            <div className="figma-handle bottom-center"></div>
            <div className="figma-handle bottom-right"></div>
            <div className="figma-handle mid-left"></div>
            <div className="figma-handle mid-right"></div>
          </div>

          {/* Headline and rotating word (stacked) */}
          <div className="hero-headline-group">
            <div className="hero-accent-lead">A Designer Fueled by</div>
            
            <div className="word-rotator-wrapper">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  className="flickering-word"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="hero-spec-motto">
              {/* "Jack" triggers the 3D flipping card popup */}
              <span
                className="inline-card-trigger"
                onMouseEnter={() => setCardActive(true)}
                onMouseLeave={() => setCardActive(false)}
                onClick={() => setCardActive((p) => !p)}
              >
                <span className="underline-jack">Jack</span>

                {/* Card popover — always shows FRONT face only */}
                <AnimatePresence>
                  {cardActive && (
                    <motion.div
                      className="hover-card-perspective"
                      initial={{ opacity: 0, rotateY: -90, x: '-50%' }}
                      animate={{ opacity: 1, rotateY: 0,  x: '-50%' }}
                      whileHover={{ scale: 2.2, y: -10, x: '-50%', zIndex: 150 }}
                      exit={{ opacity: 0, rotateY: 90, x: '-50%' }}
                      transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <motion.div
                        className="jack-card"
                        animate={{ rotateY: 0 }}
                        transition={{ duration: 0.45 }}
                      >
                        {/* CARD FRONT - JACK ♠ */}
                        <div className="card-face card-front">
                          <img src={JackCardSvg} alt="Jack Card Front" className="jack-card-img" />
                        </div>

                        {/* CARD BACK - Custom Skills */}
                        <div className="card-face card-back">
                          <div className="card-back-frame">
                            <span className="back-decor-tag">LOADOUT</span>
                            
                            <ul className="back-skills-list">
                              <li>UI/UX Designer</li>
                              <li>Android Developer</li>
                              <li>Jetpack Compose</li>
                            </ul>

                            <div className="back-footer">SYSTEM_OK</div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>{' '}
              of All trade Master Of <strong>Some</strong>
            </div>

            <p className="hero-quote">
              "Probably Redesigning Something in my head right now"
            </p>
          </div>

        </div>
      </div>

      {/* Layered Cyberpunk Caution Tapes at the bottom of the section */}
      <CautionTape />
    </section>
  );
}
