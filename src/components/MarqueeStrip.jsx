import React from 'react';
import './MarqueeStrip.css';

const MarqueeStrip = () => {
  const items = [
    'Digital Marketing',
    'Content Marketing',
    'Social Media Marketing',
    'Search Engine Optimization',
    'Email Marketing',
    'Pay Per Click',
    'Brand Strategy',
    'Web Analytics'
  ];

  return (
    <section className="marquee-section">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First set */}
          {items.map((item, index) => (
            <React.Fragment key={`a-${index}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-star">✦</span>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <React.Fragment key={`b-${index}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeStrip;