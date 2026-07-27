import React, { useState } from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  const [nlEmail, setNlEmail] = useState('');

  const nlTags = ['Content Marketing','Social Media Marketing','Search Engine Optimization','Email Marketing','Pay Per Click','Brand Strategy'];

  const handleNlSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed:', nlEmail);
    setNlEmail('');
  };

  return (
    <section className="nl-wrap">
      {/* Top Marquee */}
      <div className="nl-marq nl-marq-top">
        <div className="nl-marq-track">
          {[...nlTags, ...nlTags].map((t, i) => (
            <React.Fragment key={`nt-${i}`}>
              <span className="nl-marq-txt">{t}</span>
              <span className="nl-marq-star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="nl-main">
        <div className="nl-emblem">
          <div className="nl-emblem-shape">
            <div className="nl-emblem-bar"></div>
            <div className="nl-emblem-bar"></div>
          </div>
          <span className="nl-emblem-lbl">Our Newsletter</span>
        </div>
        <h2 className="nl-head">
          Subscribe for Digital<br />
          Growth Tips & Updates
        </h2>
        <form className="nl-form" onSubmit={handleNlSubmit}>
          <div className="nl-inputbox">
            <div className="nl-mailicon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <input
              type="email"
              className="nl-input"
              placeholder="Enter Email Address"
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="nl-btn">Subscribe</button>
        </form>
      </div>

      {/* Bottom Marquee */}
      <div className="nl-marq nl-marq-bot">
        <div className="nl-marq-track">
          {[...nlTags, ...nlTags].map((t, i) => (
            <React.Fragment key={`nb-${i}`}>
              <span className="nl-marq-txt">{t}</span>
              <span className="nl-marq-star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;