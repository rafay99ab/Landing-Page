import React from 'react';
import './WhyChooseSection.css';

const WhyChooseSection = () => {
  const featureItems = [
    {
      id: 'wc-1',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      heading: 'Certified Experts',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      id: 'wc-2',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      heading: 'Proven Results',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      id: 'wc-3',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      heading: 'Award Winning',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
      id: 'wc-4',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      heading: 'Transparent Reporting',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    }
  ];

  return (
    <section className="whychoose-wrapper">
      <div className="whychoose-inner">
        {/* Top Header Area */}
        <div className="whychoose-top">
          <div className="whychoose-emblem">
            <div className="whychoose-emblem-shape">
              <div className="whychoose-emblem-bar"></div>
              <div className="whychoose-emblem-bar"></div>
            </div>
            <span className="whychoose-emblem-txt">Why Choose Us</span>
          </div>
          <h2 className="whychoose-headline">
            Why Our Clients Believe<br />
            We're Different
          </h2>
        </div>

        {/* Main Grid */}
        <div className="whychoose-grid">
          {/* Left Visual Column */}
          <div className="whychoose-visual">
            <div className="whychoose-photo-stack">
              <div className="whychoose-photo whychoose-photo-primary">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop" 
                  alt="Team collaboration" 
                />
              </div>
              <div className="whychoose-photo whychoose-photo-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" 
                  alt="Team meeting" 
                />
              </div>
            </div>

            {/* Decorative Squiggle */}
            <div className="whychoose-squiggle">
              <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M60 10 C60 10, 30 30, 60 50 C90 70, 30 90, 60 110 C90 130, 30 130, 60 130" 
                  stroke="#1a1a1a" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  fill="none"
                />
                <circle cx="60" cy="10" r="4" fill="#1a1a1a"/>
                <circle cx="60" cy="130" r="4" fill="#1a1a1a"/>
              </svg>
            </div>

            {/* Sparkle decorations */}
            <div className="whychoose-sparkle whychoose-sparkle-a">✦</div>
            <div className="whychoose-sparkle whychoose-sparkle-b">✦</div>
          </div>

          {/* Right Features Grid */}
          <div className="whychoose-features">
            {featureItems.map((item) => (
              <div key={item.id} className="whychoose-feature-box">
                <div className="whychoose-feature-icon">
                  {item.icon}
                </div>
                <h3 className="whychoose-feature-title">{item.heading}</h3>
                <p className="whychoose-feature-desc">{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;