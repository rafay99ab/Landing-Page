import React, { useState } from 'react';
import './FooterSection.css';

const FooterSection = () => {
  const [ftEmail, setFtEmail] = useState('');

  const ftNavLinks = [
    { ftLabel: 'Our Team', ftHref: '#team' },
    { ftLabel: 'Career', ftHref: '#career' },
    { ftLabel: 'About Us', ftHref: '#about' },
    { ftLabel: 'Testimonial', ftHref: '#testimonial' },
    { ftLabel: 'FAQs', ftHref: '#faqs' }
  ];

  const ftSocials = [
    { ftIcon: 'fb', ftHref: '#' },
    { ftIcon: 'tw', ftHref: '#' },
    { ftIcon: 'pi', ftHref: '#' },
    { ftIcon: 'ig', ftHref: '#' },
    { ftIcon: 'yt', ftHref: '#' }
  ];

  const ftIcons = {
    fb: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    tw: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>,
    pi: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm8.5-6.5a9.5 9.5 0 1 0-3.5 18.3c-.3-1.3-.6-3.3.1-4.7.5-1 2-4.3 2-4.3s-.5-1-.5-2.5c0-2.3 1.3-4 3-4 1.4 0 2.1 1.1 2.1 2.4 0 1.5-.9 3.7-1.4 5.8-.4 1.7.9 3.1 2.5 3.1 3 0 5.3-3.2 5.3-7.7 0-4-2.9-6.8-7-6.8-4.8 0-7.6 3.6-7.6 7.3 0 1.5.6 3.1 1.3 3.9.1.2.2.3.1.5l-.5 1.9c-.1.3-.2.4-.5.2-1.9-.9-3.1-3.6-3.1-5.8 0-4.7 3.4-9.1 9.9-9.1 5.2 0 9.2 3.7 9.2 8.6 0 5.2-3.3 9.3-7.8 9.3-1.5 0-3-.8-3.5-1.7l-1 3.6c-.3 1.3-1.3 2.9-1.9 3.9a9.5 9.5 0 0 0 14.8-7.9z"/></svg>,
    ig: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    yt: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
  };

  const handleFtSubmit = (e) => {
    e.preventDefault();
    console.log('Footer email:', ftEmail);
    setFtEmail('');
  };

  return (
    <footer className="ft-wrap">
      <div className="ft-inner">
        {/* Top Bar */}
        <div className="ft-top">
          <h2 className="ft-top-head">Let's Connect there</h2>
          <a href="#contact" className="ft-top-btn">Contact Us</a>
        </div>

        {/* Divider */}
        <div className="ft-line"></div>

        {/* Main Grid */}
        <div className="ft-grid">
          {/* Col 1 - Brand */}
          <div className="ft-brand">
            <div className="ft-logo">
              <div className="ft-logo-icon">
                <div className="ft-logo-bar"></div>
                <div className="ft-logo-bar"></div>
              </div>
              <span className="ft-logo-txt">Digital Marketing<span className="ft-logo-dot">.</span></span>
            </div>
            <p className="ft-brand-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="ft-socials">
              {ftSocials.map((s, i) => (
                <a key={i} href={s.ftHref} className="ft-social-link" aria-label={s.ftIcon}>
                  {ftIcons[s.ftIcon]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Navigation */}
          <div className="ft-col">
            <h4 className="ft-col-head">Navigation</h4>
            <ul className="ft-col-list">
              {ftNavLinks.map((l, i) => (
                <li key={i}><a href={l.ftHref} className="ft-col-link">{l.ftLabel}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div className="ft-col">
            <h4 className="ft-col-head">Contact</h4>
            <ul className="ft-col-list">
              <li><span className="ft-col-text">(000) 000-0000</span></li>
              <li><span className="ft-col-text">example@gmail.com</span></li>
              <li><span className="ft-col-text">2464 Royal Ln. Mesa,<br/>New Jersey 45463</span></li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div className="ft-col ft-col-wide">
            <h4 className="ft-col-head">Get the latest information</h4>
            <form className="ft-subform" onSubmit={handleFtSubmit}>
              <input
                type="email"
                className="ft-subinput"
                placeholder="Email address"
                value={ftEmail}
                onChange={(e) => setFtEmail(e.target.value)}
                required
              />
              <button type="submit" className="ft-subbtn" aria-label="Subscribe">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="ft-bot">
        <div className="ft-bot-inner">
          <p className="ft-bot-copy">Copyright © 2025 Digital Marketing Companyo. All Rights Reserved.</p>
          <div className="ft-bot-links">
            <a href="#terms" className="ft-bot-link">User Terms & Conditions</a>
            <span className="ft-bot-sep">|</span>
            <a href="#privacy" className="ft-bot-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;