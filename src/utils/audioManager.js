let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function preloadAudio() {
  try {
    getAudioContext();
  } catch (e) {
    console.warn('Audio Context preload blocked:', e);
  }
}

// 1. Metal chain links sliding (subtle rattling step)
export function playChainPullStep() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const freqs = [1500, 2200, 3100, 4400];
  freqs.forEach((f) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f + Math.random() * 150, now);
    
    gain.gain.setValueAtTime(0.008, now); // soft link rattle
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.02);
  });
}

// 1.5 Subtle rattle for swinging chain oscillation
export function playChainRattle(volume = 1) {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(3400 + Math.random() * 800, now);
  
  gain.gain.setValueAtTime(0.002 * volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.008);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(now);
  osc.stop(now + 0.01);
}

// 2. Latch click/release of the chain
export function playChainReleaseClick() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  // Lobe heavy metal snap
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = 'triangle';
  osc1.frequency.setValueAtTime(550, now);
  osc1.frequency.exponentialRampToValueAtTime(70, now + 0.05);
  gain1.gain.setValueAtTime(0.2, now);
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.start(now);
  osc1.stop(now + 0.06);

  // Lobe metallic resonance ring
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(2400, now);
  osc2.frequency.exponentialRampToValueAtTime(800, now + 0.03);
  gain2.gain.setValueAtTime(0.08, now);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(now);
  osc2.stop(now + 0.04);
}

// 3. Electrical power hum starting up right after release
export function playPowerOn() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  // Contact pop
  const oscSpark = ctx.createOscillator();
  const gainSpark = ctx.createGain();
  oscSpark.type = 'sawtooth';
  oscSpark.frequency.setValueAtTime(100, now);
  oscSpark.frequency.linearRampToValueAtTime(45, now + 0.12);
  gainSpark.gain.setValueAtTime(0.12, now);
  gainSpark.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
  
  const lowpass = ctx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.setValueAtTime(180, now);
  
  oscSpark.connect(lowpass);
  lowpass.connect(gainSpark);
  gainSpark.connect(ctx.destination);
  
  oscSpark.start(now);
  oscSpark.stop(now + 0.12);

  // Electrical hum (50Hz hum)
  const humOsc = ctx.createOscillator();
  const humGain = ctx.createGain();
  humOsc.type = 'triangle';
  humOsc.frequency.setValueAtTime(50, now);
  
  humGain.gain.setValueAtTime(0.1, now);
  humGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
  
  humOsc.connect(humGain);
  humGain.connect(ctx.destination);
  
  humOsc.start(now);
  humOsc.stop(now + 0.35);
}

// 4. Fluorescent bulb flicker sound (electrical buzzes, tube sparks)
export function playBulbFlickerSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  const playFlickerSegment = (time, duration, gainVal, pitch = 60) => {
    // Electrical hum buzz
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(pitch, time);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, time);
    
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(gainVal, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(time);
    osc.stop(time + duration);

    // Crackle impulse noises (vintage electrical contact jitter)
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    if (bufferSize > 0) {
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        if (Math.random() < 0.06) {
          data[i] = Math.random() * 2 - 1;
        } else {
          data[i] = 0;
        }
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1200, time);
      noiseFilter.Q.setValueAtTime(3.5, time);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.02 * gainVal, time);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(time);
    }
  };

  // Schedule to align perfectly with bulbFlicker CSS timelines:
  // - 1st Flash: 0.3s (duration 0.08s)
  playFlickerSegment(now + 0.3, 0.08, 0.08, 65);
  
  // - 2nd Flash: 0.48s (duration 0.1s)
  playFlickerSegment(now + 0.48, 0.1, 0.1, 58);
  
  // - Dim Hum: 0.57s (duration 0.21s)
  playFlickerSegment(now + 0.57, 0.21, 0.03, 60);
  
  // - 3rd Flash: 0.78s (duration 0.08s)
  playFlickerSegment(now + 0.78, 0.08, 0.12, 62);
  
  // - Final stabilizing hum: 0.99s (duration 0.15s)
  playFlickerSegment(now + 0.99, 0.15, 0.15, 60);
}

// 5. Crisp mechanical key switch typewriter tick
export function playTypewriterKey() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;

  // Mechanical leaf-spring click
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'triangle';
  const centerPitch = 1900 + Math.random() * 250;
  osc.frequency.setValueAtTime(centerPitch, now);
  osc.frequency.exponentialRampToValueAtTime(550, now + 0.01);
  
  oscGain.gain.setValueAtTime(0.03, now); // crisp low volume
  oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.01);
  
  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.012);

  // Keycap thock noise
  const bufferSize = Math.floor(ctx.sampleRate * 0.035);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(420 + Math.random() * 80, now);
  filter.Q.setValueAtTime(5, now);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.015, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  
  noise.start(now);
}

// 6. Ambient whoosh sound for quote appearance
export function playQuoteWhoosh() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const duration = 1.8;

  // Noise whoosh sweep
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.Q.setValueAtTime(1.8, now);
  filter.frequency.setValueAtTime(160, now);
  filter.frequency.exponentialRampToValueAtTime(480, now + duration * 0.45);
  filter.frequency.exponentialRampToValueAtTime(120, now + duration);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.018, now + duration * 0.3); // low volume
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  noise.start(now);
}
