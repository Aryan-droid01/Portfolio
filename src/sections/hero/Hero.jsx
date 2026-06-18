import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import CautionTape from '../../components/caution-tape/CautionTape';
import FuzzyText from '../../components/ui/FuzzyText';
import SemiCircleSvg from './semi-circle.svg';
import JackCardSvg from './Jack Card 1.svg';
import RotatingText from '../../components/rotating-text/RotatingText';
import { playBulbFlickerSound, playTypewriterKey, playQuoteWhoosh } from '../../utils/audioManager';

export default function Hero({ isRevealed }) {
  const words = ["Curiosity", "Late Nights", "Bad Wifi", "One More Tweak"];
  const [cardActive, setCardActive] = useState(false);

  const nameText = "ARYAN VERMA";
  const [typedName, setTypedName] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Start typing after bulb flicker finishes (1.5s) and isRevealed is true
  useEffect(() => {
    if (!isRevealed) return;

    // Play bulb flicker sound immediately when revealed
    playBulbFlickerSound();

    // Play quote sound after 3 seconds
    const quoteSoundTimeout = setTimeout(() => {
      playQuoteWhoosh();
    }, 3000);

    const startTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 1500);

    return () => {
      clearTimeout(quoteSoundTimeout);
      clearTimeout(startTimeout);
    };
  }, [isRevealed]);

  // Character by character typing effect
  useEffect(() => {
    if (!startTyping) return;

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= nameText.length) {
        setTypedName(nameText.slice(0, currentIdx));

        // Play click sound for each character
        if (currentIdx > 0 && currentIdx <= nameText.length) {
          playTypewriterKey();
        }
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsTypingFinished(true);
      }
    }, 110); // ~110ms per character

    return () => clearInterval(interval);
  }, [startTyping]);



  return (
    <section id="home" className={`hero-section ${isRevealed ? 'revealed' : ''}`}>
      {/* Dark background semicircle framing the hero section
      <img
        src={SemiCircleSvg}
        className="hero-semicircle"
        alt="Hero Background Semicircle"
      />
      */}

      <div className="hero-container">
        <div className="hero-centered-content hero-reveal">

          {/* Introductory label */}
          <div className="hero-intro-text">Hi, I'm</div>

          {/* Name Box with Figma selection border & handles */}
          <div className="hero-name-box figma-select">
            <h1 className="hero-display-name">
              {typedName}
              <span className={`hero-cursor ${isTypingFinished ? 'blinking' : ''}`}>|</span>
            </h1>

            {/* 4 corner Figma-style handles */}
            <div className="figma-handle top-left"></div>
            <div className="figma-handle top-right"></div>
            <div className="figma-handle bottom-left"></div>
            <div className="figma-handle bottom-right"></div>
          </div>

          {/* Headline and rotating word (stacked) */}
          <div className="hero-headline-group">
            <div className="hero-accent-lead">A Designer Driven by</div>

            <div className="word-rotator-wrapper">
              {isTypingFinished && (
                <RotatingText
                  texts={words}
                  mainClassName="flickering-word"
                  staggerFrom="last"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              )}
            </div>

            <div className="hero-spec-motto">
              {/* "Jack of All Trade" triggers the 3D flipping card popup */}
              <span
                className="inline-card-trigger"
                onMouseEnter={() => setCardActive(true)}
                onMouseLeave={() => setCardActive(false)}
                onClick={() => setCardActive((p) => !p)}
              >
                <span className="underline-jack">Jack of All Trade</span>

                {/* Card popover — always shows FRONT face only */}
                <AnimatePresence>
                  {cardActive && (
                    <motion.div
                      className="hover-card-perspective"
                      initial={{ opacity: 0, rotateY: -90, x: '-50%' }}
                      animate={{ opacity: 1, rotateY: 0, x: '-50%' }}
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
                              <li>Frontend Developer</li>
                            </ul>

                            <div className="back-footer">SYSTEM_OK</div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>{' '}
              Master Of <strong>Some</strong>
            </div>

            <div className="hero-quote-lines" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <FuzzyText
                fontSize="clamp(18px, 4vw, 36px)"
                fontWeight="italic bold"
                fontFamily="inherit"
                color="#ffffff"
                baseIntensity={0.15}
                hoverIntensity={0.4}
                fuzzRange={10}
              >
                "Probably Redesigning Something
              </FuzzyText>
              <FuzzyText
                fontSize="clamp(18px, 4vw, 36px)"
                fontWeight="italic bold"
                fontFamily="inherit"
                color="#ffffff"
                baseIntensity={0.15}
                hoverIntensity={0.4}
                fuzzRange={10}
              >
                in my head right now"
              </FuzzyText>
            </div>
          </div>

        </div>
      </div>

      {/* Layered Cyberpunk Caution Tapes at the bottom of the section */}
      <CautionTape />
    </section>
  );
}
