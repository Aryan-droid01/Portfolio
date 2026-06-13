import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';



const COLORS = ['#FFD400', '#FF3366', '#00D1FF', '#31D158', '#FFFFFF'];

const createParticleSvgHtml = (type, color) => {
  switch (type) {
    case 'star':
      return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0 L13 7 L20 8 L15 13 L16 20 L10 16 L4 20 L5 13 L0 8 L7 7 Z" fill="${color}" />
              </svg>`;
    case 'dot':
      return `<svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="3" fill="${color}" />
              </svg>`;
    case 'circle':
      return `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="4" stroke="${color}" stroke-width="2" />
              </svg>`;
    case 'squiggle':
      return `<svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q7.5 0 15 10 T30 10" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" />
              </svg>`;
    case 'stick':
      return `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="2" x2="10" y2="10" stroke="${color}" stroke-width="2.5" stroke-linecap="round" />
              </svg>`;
    case 'rect':
    default:
      return `<svg width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                <rect width="10" height="6" fill="${color}" rx="1" />
              </svg>`;
  }
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | transmitting | success | error

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isPlayingRef.current) {
              isPlayingRef.current = true;
              startConfettiShower(entry.boundingClientRect.height);
            }
          } else {
            isPlayingRef.current = false;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startConfettiShower = (sectionHeight) => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';
    container.style.setProperty('--fall-height', `${sectionHeight}px`);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const SHAPES = ['star', 'dot', 'circle', 'squiggle', 'stick', 'rect'];
    const emissionDuration = 1200;
    const spawnInterval = 15;
    const startTime = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= emissionDuration) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        return;
      }

      const type = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      const particle = document.createElement('div');
      particle.className = 'confetti-particle';

      const left = Math.random() * 100;
      const duration = 3.5 + Math.random() * 2.0; // 3.5s to 5.5s total fall time
      const delay = Math.random() * 0.3; // 0s to 0.3s

      // Explosion/Burst and Gravity parameters
      const burstX = (Math.random() * 160 - 80) + 'px'; // -80px to 80px outward
      const burstY = (Math.random() * -50 - 30) + 'px'; // -30px to -80px upward climb
      const driftX = (Math.random() * 240 - 120) + 'px'; // -120px to 120px drift wind
      const opacityMax = 0.85 + Math.random() * 0.15;

      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.setProperty('--opacity-max', opacityMax);
      particle.style.setProperty('--burst-x', burstX);
      particle.style.setProperty('--burst-y', burstY);
      particle.style.setProperty('--drift-x', driftX);

      // Sway parameters
      const swayAmp = (20 + Math.random() * 30) + 'px'; // 20px to 50px amplitude
      const swayDuration = (1.2 + Math.random() * 1.2) + 's'; // 1.2s to 2.4s oscillation frequency

      const swayWrapper = document.createElement('div');
      swayWrapper.className = 'confetti-sway-wrapper';
      swayWrapper.style.animationDuration = swayDuration;
      swayWrapper.style.animationDelay = `${delay}s`;
      swayWrapper.style.setProperty('--sway-amp', swayAmp);

      // Spin and flutter parameters (3D rotations + wobble)
      const rotAxisX = Math.random().toFixed(2);
      const rotAxisY = Math.random().toFixed(2);
      const rotAxisZ = (Math.random() * 0.5).toFixed(2);
      const rotStart = (Math.random() * 360) + 'deg';
      const rotDirection = Math.random() > 0.5 ? 1 : -1;
      const rotMid = (rotDirection * (180 + Math.random() * 540)) + 'deg';
      const rotEnd = (rotDirection * (360 + Math.random() * 1440)) + 'deg'; // 1 to 5 full turns
      const rotDuration = (2.0 + Math.random() * 1.5) + 's'; // 2s to 3.5s spin period
      const flutterY = (Math.random() * 10 - 5) + 'px';
      const flutterZ = (Math.random() * 14 - 7) + 'px';

      const spinWrapper = document.createElement('div');
      spinWrapper.className = 'confetti-spin-wrapper';
      spinWrapper.style.animationDuration = rotDuration;
      spinWrapper.style.animationDelay = `${delay}s`;
      spinWrapper.style.setProperty('--rot-axis-x', rotAxisX);
      spinWrapper.style.setProperty('--rot-axis-y', rotAxisY);
      spinWrapper.style.setProperty('--rot-axis-z', rotAxisZ);
      spinWrapper.style.setProperty('--rot-start', rotStart);
      spinWrapper.style.setProperty('--rot-mid', rotMid);
      spinWrapper.style.setProperty('--rot-end', rotEnd);
      spinWrapper.style.setProperty('--flutter-y', flutterY);
      spinWrapper.style.setProperty('--flutter-z', flutterZ);

      // Scale pulse parameters (avoiding robotic rigid shapes)
      const scaleBase = (0.4 + Math.random() * 0.6).toFixed(2);
      const scaleVar = (0.80 + Math.random() * 0.15).toFixed(2);
      const scaleDuration = (1.0 + Math.random() * 1.0) + 's';

      const scaleWrapper = document.createElement('div');
      scaleWrapper.className = 'confetti-scale-wrapper';
      scaleWrapper.style.animationDuration = scaleDuration;
      scaleWrapper.style.animationDelay = `${delay}s`;
      scaleWrapper.style.setProperty('--scale-base', scaleBase);
      scaleWrapper.style.setProperty('--scale-var', scaleVar);
      scaleWrapper.innerHTML = createParticleSvgHtml(type, color);

      // Nest the DOM hierarchy
      spinWrapper.appendChild(scaleWrapper);
      swayWrapper.appendChild(spinWrapper);
      particle.appendChild(swayWrapper);

      particle.addEventListener('animationend', () => {
        particle.remove();
      });

      container.appendChild(particle);
    }, spawnInterval);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleTransmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('transmitting');

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "9b094f12-e977-4b64-888b-eb0aeb3d8e1d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error("Web3Forms transmission failed", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };



  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div ref={containerRef} className="confetti-system"></div>
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-section-header">
          <div className="contact-title-wrapper">
            <h2 className="contact-section-title">CONNECT WITH ME</h2>
          </div>
        </div>

        {/* Central Uplink Gateway Form inside a single large panel */}
        <div className="contact-form-box">
          <div className="contact-form-wrapper">
            <h3 className="form-panel-title">Contact Gateway</h3>

            <form onSubmit={handleTransmit} className="uplink-form">
              <div className="form-row">
                <div className="form-group half-width">
                  <label className="form-label" htmlFor="name">IDENTITY(NAME)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="ENTER FULL NAME"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group half-width">
                  <label className="form-label" htmlFor="email">RETRIEVAL NODE(EMAIL)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="ENTER EMAIL ADDRESS"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label className="form-label" htmlFor="message">TRANSMISSION DATA (MESSAGE)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="WRITE TRANSMISSION CODE"
                  className="form-textarea"
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className={`transmit-btn ${status}`}
                disabled={status === 'transmitting'}
              >
                {status === 'idle' && 'TRANSMIT CODE'}
                {status === 'transmitting' && 'TRANSMITTING...'}
                {status === 'success' && 'TRANSMISSION RECEIVED'}
                {status === 'error' && 'TRANSMISSION FAILED'}
              </button>

              {status === 'success' && (
                <div className="uplink-status-banner success">
                  <span>● SECURE LINK CREATED. TRANSMISSION ARCHIVED. RESPONDING SHORTLY.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Horizontal Row of Social Links */}
        <div className="contact-social-row">
          <a href="https://github.com/Aryan-droid01" target="_blank" rel="noopener noreferrer" className="contact-social-item">
            <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.29304 6.12354C5.92846 5.19313 5.94304 4.13 6.10492 3.15729C7.21902 3.49206 8.26553 4.02026 9.19658 4.71771C9.60492 5.02979 10.1401 5.13042 10.6389 4.98021C11.9185 4.59641 13.2478 4.40378 14.5837 4.40854C15.9851 4.40854 17.3166 4.61271 18.5255 4.97875C19.0243 5.13042 19.5595 5.02833 19.9664 4.71625C20.897 4.01895 21.943 3.49076 23.0566 3.15583C23.2185 4.12854 23.2316 5.19167 22.8699 6.12063C22.6512 6.68063 22.7605 7.32521 23.1732 7.78313C24.2291 8.95417 24.792 10.3002 24.792 11.7002C24.792 14.7831 21.9191 17.8062 17.3049 18.7265C16.1499 18.9569 15.6993 20.4108 16.583 21.2435C17.1503 21.7773 17.5003 22.5298 17.5003 23.3669V27.7419C17.5003 28.1286 17.654 28.4996 17.9275 28.7731C18.201 29.0466 18.5719 29.2002 18.9587 29.2002C19.3454 29.2002 19.7164 29.0466 19.9899 28.7731C20.2634 28.4996 20.417 28.1286 20.417 27.7419V23.3669C20.417 22.5356 20.242 21.7452 19.9299 21.0292C24.3297 19.5023 27.7087 16.065 27.7087 11.7002C27.7087 9.73583 27.0028 7.93042 25.8318 6.41813C26.138 5.22229 26.1103 4.01771 25.9937 3.09313C25.8901 2.26479 25.7457 1.17979 25.1624 0.532292C24.2947 -0.428749 22.8583 0.137084 21.8374 0.485626C20.7418 0.854904 19.6998 1.36732 18.7385 2.00958C17.3809 1.66261 15.9849 1.48866 14.5837 1.49188C13.1341 1.49188 11.7355 1.67417 10.426 2.01104C9.4646 1.36878 8.4226 0.856362 7.327 0.487084C6.30617 0.137084 4.86825 -0.428749 4.00054 0.532292C3.40554 1.19146 3.28158 2.19042 3.17513 3.03917L3.16783 3.09458C3.05117 4.02063 3.02492 5.22667 3.33117 6.42396C2.1645 7.93479 1.45867 9.73729 1.45867 11.7002C1.45867 16.0635 4.83763 19.5023 9.23742 21.0292C8.91951 21.7575 8.75376 22.543 8.75033 23.3377L8.50533 23.3873C7.45971 23.5317 6.79033 23.4019 6.33533 23.2094C5.227 22.7398 4.65533 21.5571 3.95825 20.6529C3.52367 20.0915 2.89075 19.39 1.9195 19.0662C1.73776 19.0057 1.54587 18.9816 1.3548 18.9952C1.16374 19.0089 0.977224 19.06 0.805919 19.1457C0.459954 19.3189 0.19693 19.6223 0.0747095 19.9894C-0.0475111 20.3564 -0.0189164 20.757 0.154203 21.103C0.327323 21.4489 0.630786 21.7119 0.997834 21.8342C1.81158 22.1054 2.3745 23.4996 2.89075 24.1179C3.43471 24.7712 4.15804 25.4537 5.19492 25.8942C6.1895 26.3171 7.35763 26.4673 8.75033 26.2967V27.7419C8.75033 28.1286 8.90398 28.4996 9.17747 28.7731C9.45096 29.0466 9.82189 29.2002 10.2087 29.2002C10.5954 29.2002 10.9664 29.0466 11.2399 28.7731C11.5134 28.4996 11.667 28.1286 11.667 27.7419V23.3669C11.667 22.5298 12.017 21.7773 12.5843 21.2435C13.4695 20.4094 13.0174 18.9569 11.8624 18.7265C7.24679 17.8062 4.37533 14.7831 4.37533 11.7002C4.37533 10.3031 4.93679 8.95708 5.99117 7.78604C6.40388 7.32813 6.51179 6.68354 6.29304 6.12354Z" fill="currentColor" />
            </svg>
            <span className="contact-social-label">GITHUB</span>
          </a>

          <a href="https://www.linkedin.com/in/aryan-verma-480080281/" target="_blank" rel="noopener noreferrer" className="contact-social-item">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.375 0C3.21468 0 2.10188 0.460936 1.28141 1.28141C0.460936 2.10188 0 3.21468 0 4.375V26.25C0 27.4103 0.460936 28.5231 1.28141 29.3436C2.10188 30.1641 3.21468 30.625 4.375 30.625H26.25C27.4103 30.625 28.5231 30.1641 29.3436 29.3436C30.1641 28.5231 30.625 27.4103 30.625 26.25V4.375C30.625 3.21468 30.1641 2.10188 29.3436 1.28141C28.5231 0.460936 27.4103 0 26.25 0H4.375ZM6.78563 9.39969C7.47892 9.39969 8.14381 9.12428 8.63405 8.63405C9.12428 8.14381 9.39969 7.47892 9.39969 6.78563C9.39969 6.09233 9.12428 5.42744 8.63405 4.9372C8.14381 4.44697 7.47892 4.17156 6.78563 4.17156C6.09233 4.17156 5.42744 4.44697 4.9372 4.9372C4.44697 5.42744 4.17156 6.09233 4.17156 6.78563C4.17156 7.47892 4.44697 8.14381 4.9372 8.63405C5.42744 9.12428 6.09233 9.39969 6.78563 9.39969ZM8.97313 25.8409V11.4494H4.59812V25.8409H8.97313ZM11.8781 11.4494H16.2531V13.3766C16.8984 12.3659 18.3159 11.0053 20.9519 11.0053C24.0975 11.0053 25.8059 13.09 25.8059 17.0559C25.8059 17.2462 25.8234 18.1147 25.8234 18.1147V25.8388H21.4484V18.1169C21.4484 17.0559 21.2253 14.9712 18.8672 14.9712C16.5069 14.9712 16.3078 17.5919 16.2531 19.3069V25.8388H11.8781V11.4494Z" fill="currentColor" />
            </svg>
            <span className="contact-social-label">LINKEDIN</span>
          </a>

          <a href="mailto:aryanv555@gmail.com" className="contact-social-item">
            <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2396 0H6.92708C5.08991 0 3.32798 0.729816 2.0289 2.0289C0.729815 3.32798 0 5.08991 0 6.92708V20.0521C0 20.9618 0.179174 21.8625 0.527293 22.703C0.875411 23.5434 1.38566 24.307 2.0289 24.9503C3.32798 26.2494 5.08991 26.9792 6.92708 26.9792H22.2396C24.0756 26.9753 25.8353 26.2443 27.1335 24.946C28.4318 23.6478 29.1628 21.8881 29.1667 20.0521V6.92708C29.1628 5.09109 28.4318 3.3314 27.1335 2.03315C25.8353 0.734906 24.0756 0.00385309 22.2396 0ZM16.9167 12.1333C16.1992 12.5425 15.3874 12.7577 14.5615 12.7577C13.7355 12.7577 12.9238 12.5425 12.2063 12.1333L2.21667 6.40208C2.34584 5.24315 2.89772 4.17251 3.76675 3.39495C4.63579 2.61739 5.76097 2.1875 6.92708 2.1875H22.2396C23.4048 2.19069 24.5282 2.62169 25.3966 3.39865C26.265 4.1756 26.8178 5.2444 26.95 6.40208L16.9167 12.1333Z" fill="currentColor" />
            </svg>
            <span className="contact-social-label">EMAIL</span>
          </a>

          <a href="tel:+918957987327" className="contact-social-item">
            <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.542 20.5591C22.0915 21.0946 23.4871 21.8408 24.729 22.7979C25.9709 23.7549 27.0304 24.8714 27.9077 26.1475C28.785 27.4235 29.4572 28.8078 29.9243 30.3003C30.3914 31.7928 30.625 33.3594 30.625 35H28.4375C28.4375 33.1315 28.1071 31.3997 27.4463 29.8047C26.7855 28.2096 25.8626 26.8197 24.6777 25.6348C23.4928 24.4499 22.1086 23.5327 20.5249 22.8833C18.9412 22.2339 17.2038 21.8978 15.3125 21.875C14.0934 21.875 12.9199 22.0288 11.792 22.3364C10.6641 22.644 9.61589 23.077 8.64746 23.6353C7.67904 24.1935 6.79606 24.8714 5.99854 25.6689C5.20101 26.4665 4.52311 27.3494 3.96484 28.3179C3.40658 29.2863 2.96794 30.3402 2.64893 31.4795C2.32992 32.6188 2.17611 33.7923 2.1875 35H0C0 33.3594 0.239258 31.7928 0.717773 30.3003C1.19629 28.8078 1.87419 27.4292 2.75146 26.1646C3.62874 24.8999 4.68831 23.7948 5.93018 22.8491C7.17204 21.9035 8.56771 21.1458 10.1172 20.5762C9.22852 20.0977 8.43099 19.5166 7.72461 18.833C7.01823 18.1494 6.42008 17.3918 5.93018 16.5601C5.44027 15.7284 5.05859 14.834 4.78516 13.877C4.51172 12.9199 4.375 11.9401 4.375 10.9375C4.375 9.4222 4.65983 8.00374 5.22949 6.68213C5.79915 5.36051 6.57959 4.1984 7.5708 3.1958C8.56201 2.1932 9.71842 1.41276 11.04 0.854492C12.3617 0.296224 13.7858 0.0113932 15.3125 0C16.8278 0 18.2463 0.284831 19.5679 0.854492C20.8895 1.42415 22.0516 2.20459 23.0542 3.1958C24.0568 4.18701 24.8372 5.34342 25.3955 6.66504C25.9538 7.98665 26.2386 9.41081 26.25 10.9375C26.25 11.9401 26.119 12.9142 25.8569 13.8599C25.5949 14.8055 25.2132 15.6942 24.7119 16.5259C24.2106 17.3576 23.6125 18.1152 22.9175 18.7988C22.2225 19.4824 21.4307 20.0692 20.542 20.5591ZM6.5625 10.9375C6.5625 12.1452 6.79036 13.2788 7.24609 14.3384C7.70182 15.3979 8.32845 16.3208 9.12598 17.1069C9.9235 17.8931 10.8521 18.5197 11.9116 18.9868C12.9712 19.4539 14.1048 19.6875 15.3125 19.6875C16.5202 19.6875 17.6538 19.4596 18.7134 19.0039C19.7729 18.5482 20.6958 17.9215 21.4819 17.124C22.2681 16.3265 22.8947 15.3979 23.3618 14.3384C23.8289 13.2788 24.0625 12.1452 24.0625 10.9375C24.0625 9.72982 23.8346 8.59619 23.3789 7.53662C22.9232 6.47705 22.2965 5.5542 21.499 4.76807C20.7015 3.98193 19.7729 3.35531 18.7134 2.88818C17.6538 2.42106 16.5202 2.1875 15.3125 2.1875C14.1048 2.1875 12.9712 2.41536 11.9116 2.87109C10.8521 3.32682 9.9292 3.95345 9.14307 4.75098C8.35693 5.5485 7.73031 6.47705 7.26318 7.53662C6.79606 8.59619 6.5625 9.72982 6.5625 10.9375Z" fill="currentColor" />
            </svg>
            <span className="contact-social-label">LET'S TALK</span>
          </a>
        </div>

        {/* Footer Paragraph Description */}
        <div className="contact-footer-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these
        </div>
      </div>
    </section>
  );
}
