import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import CautionTape from '../../components/caution-tape/CautionTape';
import GlareHover from '../../components/ui/GlareHover';

// Import tool icons from assets
import photoshopIcon from '../../assets/photoshop.svg';
import figmaIcon from '../../assets/figma.svg';
import illustratorIcon from '../../assets/illustrator.svg';
import antigravityIcon from '../../assets/antigravity.svg';
import chatgptIcon from '../../assets/chatgpt.svg';
import androidStudioIcon from '../../assets/android studio.svg';
import githubIcon from '../../assets/github.svg';
import vsCodeIcon from '../../assets/logos_visual-studio-code.svg';

export default function About() {
  const skills = [
    { name: 'Photoshop', category: 'Visual Design', icon: photoshopIcon, mastery: 89, workflow: 92, creativity: 96 },
    { name: 'Figma', category: 'Product Design', icon: figmaIcon, mastery: 96, workflow: 98, creativity: 95 },
    { name: 'Illustrator', category: 'Vector Art', icon: illustratorIcon, mastery: 84, workflow: 88, creativity: 94 },
    { name: 'Antigravity', category: 'Web Development', icon: antigravityIcon, mastery: 91, workflow: 94, creativity: 87 },
    { name: 'ChatGPT', category: 'AI Workflow', icon: chatgptIcon, mastery: 95, workflow: 97, creativity: 91 },
    { name: 'Android Studio', category: 'Android Apps', icon: androidStudioIcon, mastery: 76, workflow: 82, creativity: 79 },
    { name: 'GitHub', category: 'Version Control', icon: githubIcon, mastery: 84, workflow: 92, creativity: 74 },
    { name: 'VS Code', category: 'Code Editor', icon: vsCodeIcon, mastery: 93, workflow: 96, creativity: 86 }
  ];

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-container">
        {/* ABOUT ME Section */}
        <div className="about-text-content">
          <h2 className="about-title">ABOUT ME</h2>

          <h3 className="about-tagline">
            Always learning new things and growing, sticking to one thing is not my niche
          </h3>

          <div className="about-description">
            <p>
              I'm Aryan Verma, a <strong>UI/UX Designer</strong> who cares more about how a product feels to use than how it looks in a single screenshot. My process starts with the actual problem a user is facing, not the visual style, and works backward from there into layouts, flows, and interactions that feel obvious in hindsight even when they took several rounds to get right. I spend most of my time thinking about hierarchy, spacing, motion, and the small interaction details that decide whether an interface feels effortless or just looks good in isolation. Across the projects I've worked on, from dual sided marketplaces to dating apps to agritech platforms, the common thread has always been designing for real constraints, low digital literacy, trust gaps, cluttered information, rather than designing in a vacuum. I also know my way around frontend development, with React for web and Kotlin for native Android, which means I can prototype an idea quickly or take a design all the way to a working build when a project needs that, instead of stopping at the handoff.
            </p>
          </div>
        </div>

        {/* MY ARSENAL Section */}
        <div className="arsenal-header">
          <h3 className="arsenal-title">MY ARSENAL</h3>
        </div>

        <div className="skills-grid-4x2">
          {skills.map((skill, idx) => (
            <GlareHover
              key={idx}
              className="skill-card-compact"
              width="100%"
              height="auto"
              background="rgba(255, 255, 255, 0.01)"
              borderColor="rgba(255, 255, 255, 0.08)"
              borderRadius="0px"
              glareColor="#ffffff"
              glareOpacity={0.12}
              glareAngle={-45}
              glareSize={200}
              transitionDuration={800}
            >
              <div className="skill-card-header">
                <div className="skill-card-titles">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} className="skill-icon-img" alt={`${skill.name} icon`} />
                </div>
              </div>

              <div className="skill-card-details">
                <div className="skill-progress-item">
                  <div className="progress-label">
                    <span>Mastery</span>
                    <span>{skill.mastery}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: animate ? `${skill.mastery}%` : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-progress-item">
                  <div className="progress-label">
                    <span>Workflow</span>
                    <span>{skill.workflow}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: animate ? `${skill.workflow}%` : '0%' }}></div>
                  </div>
                </div>
                <div className="skill-progress-item">
                  <div className="progress-label">
                    <span>Creativity</span>
                    <span>{skill.creativity}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: animate ? `${skill.creativity}%` : '0%' }}></div>
                  </div>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
      <CautionTape />
    </section>
  );
}
