import React from 'react';
import './About.css';
import CautionTape from '../../components/caution-tape/CautionTape';
import GlareHover from '../../components/ui/GlareHover';

export default function About() {
  const skills = [
    { name: 'UI/UX', category: 'Design', badge: 'Fg', mastery: 95, workflow: 90, creativity: 90 },
    { name: 'Three.js', category: 'WebGL', badge: '3j', mastery: 88, workflow: 85, creativity: 95 },
    { name: 'React.js', category: 'Core', badge: 'Re', mastery: 94, workflow: 90, creativity: 85 },
    { name: 'TypeScript', category: 'Modules', badge: 'Ts', mastery: 90, workflow: 80, creativity: 75 },
    { name: 'Git', category: 'Versioning', badge: 'Gt', mastery: 96, workflow: 85, creativity: 75 },
    { name: 'Vite', category: 'Bundler', badge: 'Vt', mastery: 92, workflow: 90, creativity: 90 },
    { name: 'GLSL', category: 'Shaders', badge: 'Sh', mastery: 85, workflow: 80, creativity: 90 },
    { name: 'Next.js', category: 'Systems', badge: 'Nx', mastery: 91, workflow: 85, creativity: 85 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* ABOUT ME Section */}
        <div className="about-text-content">
          <h2 className="about-title">ABOUT ME</h2>
          
          <h3 className="about-tagline">
            Always Learning new things and growing ,Sticking To one thing is not my niche
          </h3>
          
          <div className="about-description">
            <p>
              I’m Aryan Verma — a <strong>UI/UX Designer and Creative Developer</strong> passionate about building immersive digital experiences that combine modern aesthetics, smooth interactions, and strong visual storytelling. I enjoy creating interfaces that not only look visually premium but also feel intuitive, engaging, and emotionally connected with users. My design approach focuses on blending creativity with functionality through clean layouts, cinematic motion, interactive elements, and thoughtful user experiences. I love transforming ideas into visually striking digital products that deliver both beauty and usability across every screen and device. From modern websites and brand experiences to interactive interfaces and creative web applications, I constantly explore new ways to push design beyond static visuals. I believe great design is not just about appearance — it’s about creating experiences that leave a lasting impression through detail, storytelling, movement, and seamless interaction.
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
              borderColor="var(--grey)"
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
                <div className="skill-badge">{skill.badge}</div>
              </div>
              
              <div className="skill-card-details">
                <div className="skill-progress-item">
                  <span className="progress-label">Mastery</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${skill.mastery}%` }}></div>
                  </div>
                </div>
                <div className="skill-progress-item">
                  <span className="progress-label">Workflow</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${skill.workflow}%` }}></div>
                  </div>
                </div>
                <div className="skill-progress-item">
                  <span className="progress-label">Creativity</span>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${skill.creativity}%` }}></div>
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
