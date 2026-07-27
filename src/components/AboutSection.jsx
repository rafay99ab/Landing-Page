import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const stats = [
    { number: '3k+', label: 'Successful Projects' },
    { number: '200+', label: 'Expert Team' },
    { number: '350+', label: 'Happy Customers' },
    { number: '16+', label: 'Years of Experience' }
  ];

  const skills = [
    { name: 'Marketing & Business Growth', percent: 85 },
    { name: 'Creativity & Innovation', percent: 80 },
    { name: 'Business & Financial Management', percent: 95 }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <div className="badge-icon">
              <div className="badge-bar"></div>
              <div className="badge-bar"></div>
            </div>
            <span className="badge-text">About Us</span>
          </div>
          <h2 className="section-title">
            Empowering Your Success<br />
            with Digital Expertise
          </h2>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left - Images */}
          <div className="about-images">
            <div className="img-row img-row-top">
              <div className="about-img about-img-1">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=280&fit=crop" 
                  alt="Team collaboration" 
                />
              </div>
              <div className="about-img about-img-2">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=280&fit=crop" 
                  alt="Team meeting" 
                />
              </div>
            </div>
            <div className="img-row img-row-bottom">
              <div className="about-img about-img-3">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop" 
                  alt="Business discussion" 
                />
              </div>
            </div>

            {/* Hire Us Badge */}
            <div className="hire-badge-about">
              <div className="hire-badge-inner">
                <div className="hire-icon">+</div>
              </div>
            </div>

            {/* Decorative Arcs */}
            <div className="decorative-arcs">
              <div className="arc arc-1"></div>
              <div className="arc arc-2"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-info">
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Progress Bars */}
            <div className="skills">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill" 
                      style={{ width: `${skill.percent}%` }}
                    >
                      <div className="skill-dot"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a href="#about" className="about-btn">
              About Us
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-item">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
              {index < stats.length - 1 && (
                <div className="stat-divider">
                  <div className="divider-line"></div>
                  <div className="divider-icon">
                    <div className="d-bar"></div>
                    <div className="d-bar"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;