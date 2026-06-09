import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import chainSvg from './chain.svg';
import lobeSvg from './Lobe.svg';
import './ChainOverlay.css';

export default function ChainOverlay({ onRevealComplete }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isFlyingAway, setIsFlyingAway] = useState(false);
  
  const timeRef = useRef(0);
  const chainGroupRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const mouseActiveRef = useRef(false);

  // Lobe horizontal offset from center (0) and vertical offset from top (320)
  const lobeX = useMotionValue(0);
  const lobeY = useMotionValue(320);

  // Clean mechanical click synthesizer using Web Audio API
  const playClickSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Sharp high-frequency mechanical snap
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(850, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);
      gain1.gain.setValueAtTime(0.35, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.04);

      // Low-frequency resonance drop
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(220, ctx.currentTime + 0.01);
      osc2.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.07);
      gain2.gain.setValueAtTime(0.25, ctx.currentTime + 0.01);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.07);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.01);
      osc2.stop(ctx.currentTime + 0.07);
    } catch (e) {
      console.warn('Audio click context block:', e);
    }
  };

  // Track mouse coordinates for the magnetic attraction
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      mouseActiveRef.current = true;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Monitor the lobe vertical position to trigger click immediately upon crossing threshold
  useEffect(() => {
    const unsubscribe = lobeY.on('change', (latestY) => {
      if (latestY > 470 && !isFlyingAway) {
        setIsFlyingAway(true);
        playClickSound();
      }
    });
    return () => unsubscribe();
  }, [isFlyingAway]);

  // Frame loop for idle sway, cursor magnetic attraction, and SVG rendering
  useAnimationFrame((time) => {
    if (isFlyingAway) return;

    timeRef.current += 1;

    // Calculate heavy sway and soft attraction if not dragging
    if (!isDragging) {
      // Extremely subtle sway (maximum ±4 degrees equivalent amplitude)
      const swayX = Math.sin(timeRef.current * 0.01) * 4;
      const swayY = 320 + Math.cos(timeRef.current * 0.018) * 1.2;

      let targetX = swayX;
      let targetY = swayY;

      if (mouseActiveRef.current) {
        const relMouseX = mousePosRef.current.x - window.innerWidth / 2;
        const relMouseY = mousePosRef.current.y;
        
        const dx = relMouseX - lobeX.get();
        const dy = relMouseY - lobeY.get();
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Soft magnetic attraction if within 80px
        if (dist < 80) {
          const force = (80 - dist) / 80;
          targetX = swayX + dx * force * 0.45;
          targetY = swayY + dy * force * 0.45;
        }
      }

      // Smooth interpolation for heavy feel
      const curX = lobeX.get();
      const curY = lobeY.get();
      lobeX.set(curX + (targetX - curX) * 0.07);
      lobeY.set(curY + (targetY - curY) * 0.07);
    }

    // Direct DOM manipulation of chain segments in SVG for peak performance
    if (chainGroupRef.current) {
      const children = chainGroupRef.current.children;
      const startX = window.innerWidth / 2;
      const startY = 0;
      const endX = startX + lobeX.get();
      const endY = lobeY.get();

      const dx = endX - startX;
      const dy = endY - startY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Chain sag gets tighter (approaching straight line) as it stretches
      const sag = Math.max(0, 15 - (dist - 300) * 0.1);
      const swayVal = Math.sin(timeRef.current * 0.01) * 3;
      const ctrlX = (startX + endX) / 2 + (isDragging ? 0 : swayVal);
      const ctrlY = endY / 2 + (isDragging ? 0 : sag);

      const n = children.length;
      for (let i = 0; i < n; i++) {
        const t = i / n;

        // Quadratic Bezier coordinates
        const lx = (1 - t) ** 2 * startX + 2 * (1 - t) * t * ctrlX + t ** 2 * endX;
        const ly = (1 - t) ** 2 * startY + 2 * (1 - t) * t * ctrlY + t ** 2 * endY;

        // Curve tangent vector
        const tdx = 2 * (1 - t) * (ctrlX - startX) + 2 * t * (endX - ctrlX);
        const tdy = 2 * (1 - t) * (ctrlY - startY) + 2 * t * (endY - ctrlY);
        const angle = (Math.atan2(tdy, tdx) * 180) / Math.PI - 90;

        const img = children[i];
        img.setAttribute('x', String(lx - 2)); // Centering offset for bead (width 4)
        img.setAttribute('y', String(ly - 4.5)); // Centering offset for bead (height 9)
        img.setAttribute('transform', `rotate(${angle}, ${lx}, ${ly})`);
      }
    }
  });

  // Pull label positions offset relative to the lobe position (always stays locked to the lobe)
  const labelX = useTransform(lobeX, (xVal) => xVal + 30);
  const labelY = useTransform(lobeY, (yVal) => yVal + 8);

  // Fly away animation configs (unified single object)
  const flyAwayVariants = {
    idle: { y: 0, rotate: 0, opacity: 1 },
    fly: {
      y: -window.innerHeight - 200,
      rotate: -10,
      opacity: 0,
      transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0] }
    }
  };

  // 55 links for dense beaded chain look (spacing = 7 equivalent density)
  const linksArray = Array.from({ length: 55 });

  return (
    <div className="chain-overlay-container">
      <div className="shroud-overlay"></div>

      <motion.div
        className="chain-overlay-inner"
        variants={flyAwayVariants}
        animate={isFlyingAway ? 'fly' : 'idle'}
        onAnimationComplete={(definition) => {
          if (definition === 'fly') {
            onRevealComplete();
          }
        }}
      >
        {/* Full-screen SVG for chain link rendering */}
        <svg className="chain-svg-canvas">
          <g ref={chainGroupRef}>
            {linksArray.map((_, i) => (
              <image key={i} href={chainSvg} width="4" height="9" />
            ))}
          </g>
        </svg>

        {/* Lobe handle (interactive Framer Motion Draggable) */}
        <motion.div
          drag
          dragConstraints={{
            top: 150,
            bottom: 550,
            left: -180,
            right: 180
          }}
          dragElastic={0.15}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            x: lobeX,
            y: lobeY,
            translateX: '-50%',
            translateY: 0,
            cursor: isDragging ? 'grabbing' : 'grab',
            zIndex: 10
          }}
          className="lobe-handle-box"
        >
          <img src={lobeSvg} alt="Pull Lobe" className="lobe-graphic" draggable="false" />
        </motion.div>

        {/* Pull instruction tag following the lobe precisely */}
        <motion.div
          className="pull-label-tag"
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            x: labelX,
            y: labelY,
            translateX: 0,
            translateY: '-50%',
            zIndex: 6
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="pull-line-connector"></span>
          <span className="pull-tag-text">PULL TO REVEAL</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
