import React, { useEffect, useRef } from 'react';

import TiltedCard from '../ui/TiltedCard';
import LightRays from '../ui/LightRays';
import FuzzyText from '../ui/FuzzyText';
import './IllustrationsPage.css';
import bulletSvg from '../../assets/bullet.svg';
import illustration1 from '../../assets/Illustration/Illustration 1.svg';
import illustration2 from '../../assets/Illustration/Illustration 2.svg';

export default function IllustrationsPage({ onClose, onNavigate }) {
  const pageRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <article ref={pageRef} className="illustrations-page">
      <div className="illustrations-light-rays">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      
      <header className="illustrations-header">
        <h1 className="illustrations-title">
          <FuzzyText
            fontSize="clamp(2.5rem, 8vw, 4.5rem)"
            fontWeight={800}
            fontFamily="'Instrument Sans', sans-serif"
            color="#ffffff"
            baseIntensity={0.15}
            hoverIntensity={0.4}
            fuzzRange={12}
          >
            ILLUSTRATIONS
          </FuzzyText>
        </h1>
        <p className="illustrations-subtitle">These are all the illustrations i have created</p>
      </header>

      <div className="illustrations-gallery">
          <TiltedCard
            imageSrc={illustration1}
            altText="Illustration 1"
            captionText="Illustration 1"
            containerHeight="auto"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="tilted-card-badge">
                AS-01
              </div>
            }
          />

          <TiltedCard
            imageSrc={illustration2}
            altText="Illustration 2"
            captionText="Illustration 2"
            containerHeight="auto"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="tilted-card-badge">
                AS-02
              </div>
            }
          />
      </div>

      <button className="illustrations-floating-btn" onClick={onClose}>
        Return To Home
        <img src={bulletSvg} alt="Arrow" className="bullet-icon-right" />
      </button>
    </article>
  );
}
