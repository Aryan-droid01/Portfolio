import React from 'react';
import './FlickerLayer.css';

export default function FlickerLayer() {
  return (
    <div className="flicker-layer-container">
      {/* Scanline CRT overlay for the cinematic old monitor effect */}
      <div className="flicker-scanlines"></div>
      <div className="flicker-screen-flash"></div>
    </div>
  );
}
