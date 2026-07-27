import React from 'react';
import './WorkProcessSection.css';

const WorkProcessSection = () => {
  const processStages = [
    {
      id: 'wp-1',
      stepNum: '01',
      stepLabel: 'Discover & Strategize',
      stepDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...'
    },
    {
      id: 'wp-2',
      stepNum: '02',
      stepLabel: 'Execute & Optimize',
      stepDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...'
    },
    {
      id: 'wp-3',
      stepNum: '03',
      stepLabel: 'Analyze & Grow',
      stepDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...'
    }
  ];

  const marqueeTags = [
    'Content Marketing',
    'Social Media Marketing',
    'Search Engine Optimization',
    'Email Marketing',
    'Pay Per Click',
    'Brand Strategy'
  ];

  return (
    <section className="workprocess-outer">
      {/* Top Marquee Strip */}
      <div className="workprocess-marquee-top">
        <div className="workprocess-marquee-track">
          {[...marqueeTags, ...marqueeTags].map((tag, idx) => (
            <React.Fragment key={`top-${idx}`}>
              <span className="workprocess-marquee-word">{tag}</span>
              <span className="workprocess-marquee-asterisk">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="workprocess-main">
        <div className="workprocess-inner">
          {/* Header Row */}
          <div className="workprocess-headerrow">
            <div className="workprocess-headerleft">
              <div className="workprocess-badge">
                <div className="workprocess-badge-shape">
                  <div className="workprocess-badge-bar"></div>
                  <div className="workprocess-badge-bar"></div>
                </div>
                <span className="workprocess-badge-txt">Our Work Process</span>
              </div>
              <h2 className="workprocess-headline">
                Step-by-Step to<br />
                Your Growth
              </h2>
            </div>
            <p className="workprocess-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Process Cards */}
          <div className="workprocess-cards">
            {processStages.map((stage) => (
              <div key={stage.id} className="workprocess-card">
                <div className="workprocess-card-body">
                  <h3 className="workprocess-card-title">{stage.stepLabel}</h3>
                  <p className="workprocess-card-text">{stage.stepDetail}</p>
                  <span className="workprocess-card-watermark">{stage.stepNum}</span>
                </div>
                <div className="workprocess-card-footer">
                  <span className="workprocess-footer-label">STEP</span>
                  <span className="workprocess-footer-num">{stage.stepNum}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="workprocess-marquee-bottom">
        <div className="workprocess-marquee-track">
          {[...marqueeTags, ...marqueeTags].map((tag, idx) => (
            <React.Fragment key={`bot-${idx}`}>
              <span className="workprocess-marquee-word">{tag}</span>
              <span className="workprocess-marquee-asterisk">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;