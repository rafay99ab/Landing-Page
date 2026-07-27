import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const projectItems = [
    {
      id: 'pf-1',
      projectTag: 'Social Media Marketing',
      projectTitle: 'A Social Campaign for Real Estate Agency',
      projectImg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=350&fit=crop',
      projectLink: '#project-1'
    },
    {
      id: 'pf-2',
      projectTag: 'SEO, PPC',
      projectTitle: 'Search to Schedule: SEO & PPC for Dental Clinic',
      projectImg: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=350&fit=crop',
      projectLink: '#project-2'
    },
    {
      id: 'pf-3',
      projectTag: 'Social Media Marketing',
      projectTitle: 'Healthy Clicks: Google Ads for Yoga Studio',
      projectImg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
      projectLink: '#project-3'
    },
    {
      id: 'pf-4',
      projectTag: 'Paid Advertising',
      projectTitle: 'Runway to Revenue: Instagram Ad Campaign for Fashion Brand',
      projectImg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=350&fit=crop',
      projectLink: '#project-4'
    }
  ];

  return (
    <section className="portfolio-outer">
      <div className="portfolio-inner">
        {/* Section Header */}
        <div className="portfolio-top">
          <div className="portfolio-emblem">
            <div className="portfolio-emblem-shape">
              <div className="portfolio-emblem-bar"></div>
              <div className="portfolio-emblem-bar"></div>
            </div>
            <span className="portfolio-emblem-txt">Our Work</span>
          </div>
          <h2 className="portfolio-headline">Work That Drives Results</h2>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {projectItems.map((item) => (
            <a 
              key={item.id} 
              href={item.projectLink} 
              className="portfolio-card"
            >
              <div className="portfolio-card-visual">
                <img 
                  src={item.projectImg} 
                  alt={item.projectTitle}
                  className="portfolio-card-img"
                />
                <span className="portfolio-card-tag">{item.projectTag}</span>
              </div>
              <div className="portfolio-card-info">
                <h3 className="portfolio-card-title">{item.projectTitle}</h3>
                <div className="portfolio-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="portfolio-cta">
          <a href="#all-work" className="portfolio-viewbtn">
            View All Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;