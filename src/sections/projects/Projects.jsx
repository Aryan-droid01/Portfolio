import React from 'react';
import './Projects.css';
import chayanKaroImg from '../../assets/chayan_karo.png';
import agritechMarketplaceImg from '../../assets/agritech_marketplace.png';
import pairfectImg from '../../assets/pairfect.png';
import CautionTape from '../../components/caution-tape/CautionTape';
import bulletSvg from '../../assets/bullet.svg';


export default function Projects({ onViewCaseStudy }) {
  const primaryProjects = [
    {
      id: 'chayan-karo',
      title: 'Chayan Karo',
      category: 'Product Design · Marketplace Systems',
      description: 'Building trust between customers and service providers through a two-sided marketplace ecosystem designed from the ground up.',
      image: chayanKaroImg,
      link: '#/case-study/chayan-karo'
    },
    {
      id: 'pairfect',
      title: 'Pairfect',
      category: 'Product Design + Android Development',
      description: 'A personal exploration in outfit discovery that became an exercise in complete design-to-code ownership.',
      image: pairfectImg,
      link: '#/case-study/pairfect'
    },
    {
      id: 'agritech-marketplace',
      title: 'Krishi Ecosystem',
      category: 'Accessibility · Ecosystem Design',
      description: 'Designing digital infrastructure for underserved farming communities through two products built around accessibility, trust, and practical field usage.',
      image: agritechMarketplaceImg,
      link: '#/case-study/agritech-marketplace'
    },


  ];

  const secondaryProjects = [
    {
      id: 'posts-brand',
      title: 'Posts And Brand Identity',
      category: 'Social Media Design, Branding',
      description: 'Recurring social media creatives for Chayan Karo and its service partners, from seasonal offers and festival posts to hiring drives and brand awareness campaigns.',
      link: '#/case-study/posts-brand'
    },
    {
      id: 'illustrations',
      title: 'Illustrations',
      category: 'Illustration, Visual Design',
      description: 'A collection of personal illustration work, exploring style, mood, and storytelling outside the constraints of any single product or client.',
      link: '#/case-study/illustrations'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-section-header">
          <h2 className="projects-section-title">MY WORK</h2>
        </div>

        {/* MY WORK: Large Horizontal stacked panels */}
        <div className="projects-stack">
          {primaryProjects.map((project, idx) => (
            <div key={idx} className="project-card-wrapper">
              <div className="project-card-bg-caution">
                <CautionTape />
              </div>
              <div className="project-panel-card">
                {/* Left Column: Details */}
                <div className="project-panel-left">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <button
                    onClick={() => onViewCaseStudy(project.id)}
                    className="project-link-btn"
                  >
                    VIEW CASE STUDY <img src={bulletSvg} className="bullet-icon" alt="pointer" />
                  </button>
                </div>

                {/* Right Column: Visual Preview (Project Image) */}
                <div className="project-panel-right">
                  <div className="project-visual-wrapper">
                    <img src={project.image} alt={project.title} className="project-mockup-img" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SOME MORE OF MY WORK: Two columns of large cards */}
        <div className="secondary-work-header">
          <h3 className="secondary-section-title">SOME MORE OF MY WORK</h3>
        </div>

        <div className="projects-grid">
          {secondaryProjects.map((project, idx) => (
            <div key={idx} className="project-card-secondary">
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <button
                  onClick={() => onViewCaseStudy(project.id)}
                  className="project-link-btn"
                >
                  VIEW <img src={bulletSvg} className="bullet-icon" alt="pointer" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CautionTape />
    </section>
  );
}
