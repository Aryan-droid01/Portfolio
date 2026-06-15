import React, { useEffect } from 'react';
import TiltedCard from '../ui/TiltedCard';
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
      <header className="illustrations-header">
        <h1 className="illustrations-title">ILLUSTRATIONS</h1>
        <p className="illustrations-subtitle">These are all the illustrations i have created</p>
      </header>

      <div className="illustrations-gallery">
        <div className="illustration-item">
          <TiltedCard
            imageSrc={skullPlaceholder}
            altText="Illustration 1"
            captionText="Illustration 1"
            containerHeight="400px"
            containerWidth="350px"
            imageHeight="400px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="tilted-card-badge">
                AS-001
              </div>
            }
          />
        </div>

        <div className="illustration-item">
          <TiltedCard
            imageSrc={skullPlaceholder}
            altText="Illustration 2"
            captionText="Illustration 2"
            containerHeight="400px"
            containerWidth="350px"
            imageHeight="400px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="tilted-card-badge">
                AS-002
              </div>
            }
          />
        </div>
      </div>

      <button onClick={onClose} className="illustrations-close-btn">
        Return To Home <img src={bulletSvg} className="bullet-icon-right" alt="back pointer" />
      </button>
    </article>
  );
}
