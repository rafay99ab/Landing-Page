import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    emailAddr: '',
    phoneNum: '',
    serviceOpt: '',
    userMsg: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const marqueeTags = [
    'Content Marketing',
    'Social Media Marketing',
    'Search Engine Optimization',
    'Email Marketing',
    'Pay Per Click',
    'Brand Strategy'
  ];

  return (
    <section className="contact-outer">
      <div className="contact-inner">
        {/* Section Header */}
        <div className="contact-top">
          <div className="contact-emblem">
            <div className="contact-emblem-shape">
              <div className="contact-emblem-bar"></div>
              <div className="contact-emblem-bar"></div>
            </div>
            <span className="contact-emblem-txt">Contact Us</span>
          </div>
          <h2 className="contact-headline">Get Your Free Quote Today!</h2>
        </div>

        {/* Main Layout */}
        <div className="contact-layout">
          {/* Left - Form */}
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="fullName">
                  Your Name <span className="contact-required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="contact-form-input"
                  placeholder="Ex. John Doe"
                  value={formState.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="emailAddr">
                  Email <span className="contact-required">*</span>
                </label>
                <input
                  type="email"
                  id="emailAddr"
                  name="emailAddr"
                  className="contact-form-input"
                  placeholder="example@gmail.com"
                  value={formState.emailAddr}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="phoneNum">
                  Phone <span className="contact-required">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNum"
                  name="phoneNum"
                  className="contact-form-input"
                  placeholder="Enter Phone Number"
                  value={formState.phoneNum}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="serviceOpt">
                  Service Interested In <span className="contact-required">*</span>
                </label>
                <div className="contact-select-wrap">
                  <select
                    id="serviceOpt"
                    name="serviceOpt"
                    className="contact-form-select"
                    value={formState.serviceOpt}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="seo">Search Engine Optimization</option>
                    <option value="ppc">Pay Per Click</option>
                    <option value="content">Content Marketing</option>
                    <option value="email">Email Marketing</option>
                    <option value="branding">Brand Strategy</option>
                  </select>
                  <svg className="contact-select-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="contact-form-group contact-form-group-full">
              <label className="contact-form-label" htmlFor="userMsg">
                Your Message <span className="contact-required">*</span>
              </label>
              <textarea
                id="userMsg"
                name="userMsg"
                className="contact-form-textarea"
                placeholder="Enter here.."
                rows="6"
                value={formState.userMsg}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>

          {/* Right - Image */}
          <div className="contact-visual">
            <div className="contact-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=550&fit=crop"
                alt="Team working"
                className="contact-img"
              />
            </div>
            {/* Sparkle decorations */}
            <div className="contact-sparkle contact-sparkle-a">✦</div>
            <div className="contact-sparkle contact-sparkle-b">✦</div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="contact-marquee">
        <div className="contact-marquee-track">
          {[...marqueeTags, ...marqueeTags].map((tag, idx) => (
            <React.Fragment key={`cm-${idx}`}>
              <span className="contact-marquee-word">{tag}</span>
              <span className="contact-marquee-star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;