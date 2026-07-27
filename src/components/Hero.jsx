import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Dots Decoration */}
      <div className="dots dots-top-right"></div>
      <div className="dots dots-bottom-left"></div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="brand-badge">
            <div className="badge-icon">
              <div className="badge-bar badge-bar-1"></div>
              <div className="badge-bar badge-bar-2"></div>
            </div>
            <span className="badge-text">Elevate Your Brand With Us</span>
          </div>

          <h1 className="hero-title">
            Empowering Your<br />
            Success with<br />
            Digital Expertise
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="hero-buttons">
            <a href="#explore" className="btn-primary">
              Explore More
              <span className="arrow">→</span>
            </a>
            <a href="#services" className="btn-link">View All Services</a>
          </div>
        </div>

        {/* Right Content - Image Collage */}
        <div className="hero-images">
          {/* Image 1 - Top Right (Tall) */}
          <div className="img-wrapper img-1">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&crop=face" 
              alt="Professional woman" 
            />
          </div>

          {/* Image 2 - Middle Left */}
          <div className="img-wrapper img-2">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=250&h=300&fit=crop&crop=face" 
              alt="Professional man" 
            />
          </div>

          {/* Image 3 - Middle Right */}
          <div className="img-wrapper img-3">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=250&h=200&fit=crop&crop=face" 
              alt="Team member" 
            />
          </div>

          {/* Image 4 - Bottom Right */}
          <div className="img-wrapper img-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=200&fit=crop&crop=face" 
              alt="Team member" 
            />
          </div>

          {/* Hire Us Badge */}
          <div className="hire-badge">
            <div className="hire-badge-inner">
              <div className="hire-icon">+</div>
              <span className="hire-text">HIRE US</span>
            </div>
          </div>

          {/* Sparkle Decoration */}
          <div className="sparkle sparkle-1">✦</div>
          <div className="sparkle sparkle-2">✦</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;