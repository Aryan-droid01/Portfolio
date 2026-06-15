import React, { useEffect } from 'react';
import TiltedCard from '../ui/TiltedCard';
import LightRays from '../ui/LightRays';
import FuzzyText from '../ui/FuzzyText';
import './IllustrationsPage.css';
import bulletSvg from '../../assets/bullet.svg';
// We'll use the user's provided spotify image since we don't have the skull image in assets, 
// or maybe chayanKaroWomensDayImg just to have an image. Let's use the external image.
const skullPlaceholder = "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58";

export default function IllustrationsPage({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <article className="illustrations-page">
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
            fontSize="72px"
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
            imageSrc={skullPlaceholder}
            altText="Illustration 1"
            captionText="Illustration 1"
            containerHeight="525px"
            containerWidth="400px"
            imageHeight="525px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="tilted-card-badge">
                SKULL // 01
              </div>
            }
          />

          <TiltedCard
            imageSrc={skullPlaceholder}
            altText="Illustration 2"
            captionText="Illustration 2"
            containerHeight="525px"
            containerWidth="400px"
            imageHeight="525px"
            imageWidth="400px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="tilted-card-badge">
                SKULL // 02
              </div>
            }
          />
      </div>

      <button onClick={onClose} className="illustrations-close-btn">
        Return To Home <img src={bulletSvg} className="bullet-icon-right" alt="back pointer" />
      </button>
    </article>
  );
}
