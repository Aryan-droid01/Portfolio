import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import chainSvg from './chain.svg';
import lobeSvg from './Lobe.svg';
import './ChainOverlay.css';
import { 
  playChainPullStep, 
  playChainReleaseClick, 
  playPowerOn, 
  playChainRattle 
} from '../../utils/audioManager';

export default function ChainOverlay({ onRevealComplete }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isFlyingAway, setIsFlyingAway] = useState(false);
  
  const timeRef = useRef(0);
  const chainGroupRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const mouseActiveRef = useRef(false);

  // 11 nodes for high fidelity Verlet rope simulation (10 segments)
  const nodesRef = useRef([
    { x: 0, y: 0, px: 0, py: 0 },
    { x: 0, y: 32, px: 0, py: 32 },
    { x: 0, y: 64, px: 0, py: 64 },
    { x: 0, y: 96, px: 0, py: 96 },
    { x: 0, y: 128, px: 0, py: 128 },
    { x: 0, y: 160, px: 0, py: 160 },
    { x: 0, y: 192, px: 0, py: 192 },
    { x: 0, y: 224, px: 0, py: 224 },
    { x: 0, y: 256, px: 0, py: 256 },
    { x: 0, y: 288, px: 0, py: 288 },
    { x: 0, y: 320, px: 0, py: 320 }
  ]);

  // Lobe horizontal offset from center (0) and vertical offset from top (320)
  const lobeX = useMotionValue(0);
  const lobeY = useMotionValue(320);

  // Draggable proxy targets (initially at equilibrium)
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(320);

  // Track mouse coordinates for the magnetic cursor assist
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      mouseActiveRef.current = true;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track movement to play metal chain link slide step
  const lastYRef = useRef(320);
  useEffect(() => {
    const unsubscribe = lobeY.on('change', (latestY) => {
      const diff = Math.abs(latestY - lastYRef.current);
      if (diff > 10) {
        playChainPullStep();
        lastYRef.current = latestY;
      }
    });
    return () => unsubscribe();
  }, []);

  const maxDragYRef = useRef(320);

  const onDragStart = () => {
    setIsDragging(true);
    maxDragYRef.current = nodesRef.current[10].y;
    dragX.set(nodesRef.current[10].x);
    dragY.set(nodesRef.current[10].y);
  };

  const onDragEnd = () => {
    setIsDragging(false);
    
    // Add a natural lateral velocity kick on release to trigger the pendulum sway
    nodesRef.current[10].px -= (Math.random() > 0.5 ? 1 : -1) * (2.2 + Math.random() * 2.8);

    // If pulled past threshold (425px, i.e., >105px of pull), trigger light activation on release
    if (maxDragYRef.current > 390 && !isFlyingAway) {
      setIsFlyingAway(true);
      playChainReleaseClick();
      setTimeout(() => {
        playPowerOn();
      }, 100);
    } else {
      dragX.set(nodesRef.current[10].x);
      dragY.set(nodesRef.current[10].y);
    }
  };

  // Frame loop for physics simulation and SVG rendering
  useAnimationFrame((time) => {
    if (isFlyingAway) return;

    timeRef.current += 1;

    const nodes = nodesRef.current;
    const numNodes = nodes.length;

    // Apply gravity and Verlet integration
    const damping = isDragging ? 0.84 : 0.991;
    // Slow, organic wind breeze sway on X (amplitude is tiny, 2-3 degrees max)
    const wind = Math.sin(timeRef.current * 0.011) * 0.013;

    for (let j = 1; j < numNodes; j++) {
      const node = nodes[j];
      const tempX = node.x;
      const tempY = node.y;

      // Calculate velocity
      const vx = (node.x - node.px) * damping;
      const vy = (node.y - node.py) * damping;

      node.px = tempX;
      node.py = tempY;

      node.x += vx + wind;
      node.y += vy + 0.35; // gravityY = 0.35
    }

    // Drag behavior on bottom Node (Node 10)
    if (isDragging) {
      const tx = dragX.get();
      const ty = dragY.get();
      // Lock bottom node directly to the drag proxy position to prevent lag
      nodes[10].x = tx;
      nodes[10].y = ty;
      
      // Record max drag Y
      maxDragYRef.current = Math.max(maxDragYRef.current, nodes[10].y);
    } else {
      // Stable magnetic cursor assist when NOT dragging (within 150px of resting position)
      if (mouseActiveRef.current) {
        const relMouseX = mousePosRef.current.x - window.innerWidth / 2;
        const relMouseY = mousePosRef.current.y;

        // Calculate vector from resting position (0, 320) to mouse
        const rx = relMouseX - 0;
        const ry = relMouseY - 320;
        const rDist = Math.sqrt(rx * rx + ry * ry) || 1;

        if (rDist < 150) {
          const force = (150 - rDist) / 150; // 0 to 1
          const maxDeflection = 24; // cap deflection at 24px max for subtlety
          const targetX = (rx / rDist) * force * maxDeflection;
          
          const targetY = 320 + (ry / rDist) * force * maxDeflection;

          // Smooth interpolation for heavy feel
          const k_attract = 0.08;
          nodes[10].x += (targetX - nodes[10].x) * k_attract;
          nodes[10].y += (targetY - nodes[10].y) * k_attract;
        }
      }

      // Continuously sync the draggable proxy with the physics node while idle/swinging
      // This ensures the invisible hitbox is always perfectly centered over the visual knob!
      dragX.set(nodes[10].x);
      dragY.set(nodes[10].y);
    }

    // Constraints solver: 18 iterations for high stiffness/rigidity (avoids rubber stretching)
    for (let iter = 0; iter < 18; iter++) {
      // Node 0 is fixed at top center (0, 0)
      nodes[0].x = 0;
      nodes[0].y = 0;

      // Node 10 is fixed at the drag position when dragging
      if (isDragging) {
        nodes[10].x = dragX.get();
        nodes[10].y = dragY.get();
      }

      for (let j = 0; j < numNodes - 1; j++) {
        const A = nodes[j];
        const B = nodes[j + 1];
        const dx = B.x - A.x;
        const dy = B.y - A.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const rest = 32;
        const diff = rest - dist;
        const stiffness = isDragging ? 0.95 : 0.995;
        const percent = (diff / dist) * 0.5 * stiffness;
        const ox = dx * percent;
        const oy = dy * percent;

        if (j === 0) {
          // Node 0 is fixed, only Node 1 moves
          B.x += ox * 2;
          B.y += oy * 2;
        } else if (j === numNodes - 2 && isDragging) {
          // Node 10 is fixed when dragging, only Node 9 moves
          A.x -= ox * 2;
          A.y -= oy * 2;
        } else {
          A.x -= ox;
          A.y -= oy;
          B.x += ox;
          B.y += oy;
        }
      }
    }

    // Enforce limits to prevent out of bounds
    if (nodes[10].y < 150) {
      nodes[10].y = 150;
      nodes[10].py = 150;
    }

    // Subtle rattle sound during pendulum swing oscillation
    if (!isDragging && !isFlyingAway) {
      const vx = nodes[10].x - nodes[10].px;
      const vy = nodes[10].y - nodes[10].py;
      const speed = Math.sqrt(vx * vx + vy * vy);
      if (speed > 0.15 && Math.random() < speed * 0.35) {
        playChainRattle(Math.min(1.0, speed * 0.3));
      }
    }

    // Update MotionValues for DOM rendering
    lobeX.set(nodes[10].x);
    lobeY.set(nodes[10].y);

    // Update chain SVG rendering using Verlet nodes (30 larger beads total)
    if (chainGroupRef.current) {
      const children = chainGroupRef.current.children;
      const startX = window.innerWidth / 2;
      const totalLinks = children.length; // 30
      const linksPerSegment = totalLinks / (numNodes - 1); // 3 beads per segment

      let linkIdx = 0;
      for (let j = 0; j < numNodes - 1; j++) {
        const A = nodes[j];
        const B = nodes[j + 1];

        const dx = B.x - A.x;
        const dy = B.y - A.y;
        const segAngle = (Math.atan2(dy, dx) * 180) / Math.PI - 90;

        for (let k = 0; k < linksPerSegment; k++) {
          if (linkIdx >= totalLinks) break;

          const t = k / linksPerSegment;
          const lx = startX + A.x + t * dx;
          const ly = A.y + t * dy;

          const img = children[linkIdx];
          img.setAttribute('x', String(lx - 3.75)); // center the 7.5px wide bead
          img.setAttribute('y', String(ly - 6.75)); // center the 13.5px tall bead
          img.setAttribute('transform', `rotate(${segAngle}, ${lx}, ${ly})`);

          linkIdx++;
        }
      }
    }
  });

  // Keep text vertically aligned with the middle of the bulb
  const labelY = useTransform(lobeY, (yVal) => yVal + 33);

  // Fly away animation configs
  const flyAwayVariants = {
    idle: { y: 0, rotate: 0, opacity: 1 },
    fly: {
      y: -window.innerHeight - 200,
      rotate: -10,
      opacity: 0,
      transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0] }
    }
  };

  // 30 larger beads for a realistic, less-dense industrial ball chain
  const linksArray = Array.from({ length: 30 });

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
        {/* Full-screen SVG for chain link rendering (pointer-events: none) */}
        <svg className="chain-svg-canvas" style={{ pointerEvents: 'none' }}>
          <g ref={chainGroupRef} style={{ pointerEvents: 'none' }}>
            {linksArray.map((_, i) => (
              <image key={i} href={chainSvg} width="7.5" height="13.5" style={{ pointerEvents: 'none' }} />
            ))}
          </g>
        </svg>

        {/* Visible Lobe handle rendered using the physics-based lobeX/lobeY (pointer-events: none) */}
        <motion.div
          style={{
            position: 'absolute',
            left: 'calc(50% - 19px)',
            top: 0,
            x: lobeX,
            y: lobeY,
            pointerEvents: 'none',
            zIndex: 9
          }}
          className="lobe-handle-box"
        >
          <img src={lobeSvg} alt="Pull Lobe" className="lobe-graphic" draggable="false" style={{ pointerEvents: 'none' }} />
        </motion.div>

        {/* Generous invisible draggable proxy container (180px width, 180px height) */}
        <motion.div
          drag
          dragConstraints={{
            top: 300,
            bottom: 550,
            left: -180,
            right: 180
          }}
          dragElastic={0.15}
          dragMomentum={false}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          style={{
            position: 'absolute',
            left: 'calc(50% - 90px)',
            top: -45,
            x: dragX,
            y: dragY,
            width: 180,
            height: 180,
            cursor: isDragging ? 'grabbing' : 'grab',
            zIndex: 10,
            background: 'rgba(0,0,0,0.001)',
            pointerEvents: 'auto'
          }}
        />

        {/* Pull instruction tag positioned to the left of the lobe (pointer-events: none) */}
        <motion.div
          className="pull-label-tag"
          style={{
            position: 'absolute',
            right: 'calc(50% + 24px)',
            top: 0,
            x: lobeX,
            y: labelY,
            zIndex: 6,
            pointerEvents: 'none'
          }}
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="pull-tag-text" style={{ pointerEvents: 'none' }}>Pull To Reveal —</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
