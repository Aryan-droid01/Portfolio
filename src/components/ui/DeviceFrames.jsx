import React, { forwardRef } from 'react';
import './DeviceFrames.css';

export const IPhone16Frame = forwardRef(({ image, video, children, label, className = '' }, ref) => {
  return (
    <div className={`device-frame iphone-16-frame ${className}`}>
      <div className="iphone-hardware">
        <div className="dynamic-island">
          <div className="camera"></div>
          <div className="sensor"></div>
        </div>
        <div className="iphone-power-button"></div>
        <div className="iphone-volume-up"></div>
        <div className="iphone-volume-down"></div>
        <div className="iphone-action-button"></div>
      </div>
      <div className="device-screen">
        {video ? (
          <video ref={ref} src={video} autoPlay loop muted playsInline />
        ) : image ? (
          <img src={image} alt={label || "Mockup"} />
        ) : children ? (
          children
        ) : (
          <span className="device-label">{label || "Mockup"}</span>
        )}
      </div>
      <div className="glass-reflection"></div>
    </div>
  );
});

export const SamsungS26Frame = forwardRef(({ image, video, children, label, className = '' }, ref) => {
  return (
    <div className={`device-frame samsung-s26-frame ${className}`}>
      <div className="samsung-hardware">
        <div className="punch-hole-camera"></div>
        <div className="samsung-power-button"></div>
        <div className="samsung-volume"></div>
      </div>
      <div className="device-screen">
        {video ? (
          <video ref={ref} src={video} autoPlay loop muted playsInline />
        ) : image ? (
          <img src={image} alt={label || "Mockup"} />
        ) : children ? (
          children
        ) : (
          <span className="device-label">{label || "Mockup"}</span>
        )}
      </div>
      <div className="glass-reflection"></div>
    </div>
  );
});
