import React from 'react';
import './CautionTape.css';

/**
 * CautionTape
 *
 * Two animated diagonal caution-tape strips that cross each other,
 * anchored to the bottom of their nearest `position: relative` parent.
 *
 * Each strip uses a wrapper div for the static rotation and an inner
 * div for the scroll animation — this keeps `rotate` out of the
 * keyframe so the browser only composites a translateX, which
 * eliminates the sub-pixel flicker on loop.
 */
export default function CautionTape() {
  return (
    <div className="caution-tapes-wrapper" aria-hidden="true">
      {/* Top tape: tilts upper-left → lower-right, scrolls left */}
      <div className="tape-track tape-track-top">
        <div className="caution-tape tape-top" />
      </div>

      {/* Bottom tape: tilts upper-right → lower-left, scrolls right */}
      <div className="tape-track tape-track-bottom">
        <div className="caution-tape tape-bottom" />
      </div>
    </div>
  );
}
