import React, { useState, useEffect } from 'react';
import './Loader.css';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 2;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 600);
      }
    }, 70 + Math.random() * 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-hud-info">
          <span>SYS_BOOT: BALLISTIC_CORE_OS_v4.16</span>
          <span className="hud-pulse">● DIALOGS_OK</span>
        </div>
        
        <div className="loader-percentage">
          {progress}%
        </div>
        
        <div className="loader-hud-log">
          <span>{progress < 30 ? 'LOADING BALLISTICS DATABASE...' : progress < 70 ? 'CALIBRATING LASER APERTURE...' : progress < 100 ? 'ARMING SYSTEM INTERFACES...' : 'BOOT SEQUENCE COMPLETED'}</span>
        </div>

        <div className="loader-progress-track">
          <div 
            className="loader-progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
