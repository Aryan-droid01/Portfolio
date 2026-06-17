import React from 'react';
import './Projects.css';
import chayanKaroImg from '../../assets/chayan_karo.png';
import loveCupidImg from '../../assets/love_cupid.png';
import agritechMarketplaceImg from '../../assets/agritech_marketplace.png';
import pairfectImg from '../../assets/pairfect.png';
import CautionTape from '../../components/caution-tape/CautionTape';
import bulletSvg from '../../assets/bullet.svg';


export default function Projects({ onViewCaseStudy }) {
  const primaryProjects = [
    {
      id: 'chayan-karo',
      title: 'Chayan Karo',
      category: 'UX Research, Branding + UX/UI Designing',
      description: 'A home services app that puts the choice of who enters your home back in your hands, backed by a companion app that turns gig workers into a trusted, growing workforce.',
      image: chayanKaroImg,
      link: '#/case-study/chayan-karo'
    },
    {
      id: 'pairfect',
      title: 'Pairfect',
      category: 'UX Research, Branding + UX/UI Designing + Frontend Development',
      description: 'A styling app that builds outfit combinations from clothes you already own, and shows you what to add next if you want more options.',
      image: pairfectImg,
      link: '#/case-study/pairfect'
    },
    {
      id: 'agritech-marketplace',
      title: 'Agritech Marketplace',
      category: 'UX Research, Branding + UX/UI Designing',
      description: 'Two apps built for the same farming communities, helping beekeepers and fruit growers track what they produce, grow it smarter, and finally sell it themselves.',
      image: agritechMarketplaceImg,
      link: '#/case-study/agritech-marketplace'
    },
    {
      id: 'love-cupid',
      title: 'Love Cupid',
      category: 'UX Research, Branding + UX/UI Designing',
      description: 'A dating app for people too busy to waste time on shallow swiping, built around personality first profiles and conversations that actually go somewhere.',
      image: loveCupidImg,
      link: '#/case-study/love-cupid'
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
