import React, { useState } from 'react';
import './FaqSection.css';

const FaqSection = () => {
  const faqItems = [
    {
      id: 'fq-1',
      faqQuestion: 'What digital marketing services do you offer?',
      faqAnswer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'fq-2',
      faqQuestion: 'What industries do you specialize in?',
      faqAnswer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore...'
    },
    {
      id: 'fq-3',
      faqQuestion: 'What digital marketing services do you offer?',
      faqAnswer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'fq-4',
      faqQuestion: 'How much do your digital marketing services cost?',
      faqAnswer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'fq-5',
      faqQuestion: 'Can I review content before it\'s published?',
      faqAnswer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'fq-6',
      faqQuestion: 'Is there a minimum contract period?',
      faqAnswer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const [expandedId, setExpandedId] = useState('fq-2');

  const handleToggle = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section className="faq-outer">
      <div className="faq-inner">
        {/* Section Header */}
        <div className="faq-top">
          <div className="faq-emblem">
            <div className="faq-emblem-shape">
              <div className="faq-emblem-bar"></div>
              <div className="faq-emblem-bar"></div>
            </div>
            <span className="faq-emblem-txt">FAQs</span>
          </div>
          <h2 className="faq-headline">Question? Look here.</h2>
        </div>

        {/* Main Layout */}
        <div className="faq-layout">
          {/* Left - Accordion */}
          <div className="faq-accordion">
            {faqItems.map((item) => {
              const isOpen = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{item.faqQuestion}</span>
                    <span className="faq-icon">
                      {isOpen ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      )}
                    </span>
                  </button>
                  <div className={`faq-answerwrap ${isOpen ? 'faq-answerwrap-open' : ''}`}>
                    <p className="faq-answer">{item.faqAnswer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Cards */}
          <div className="faq-sidecol">
            {/* Contact Card */}
            <div className="faq-contactcard">
              {/* Diagonal lines */}
              <div className="faq-diag faq-diag-top"></div>
              <div className="faq-diag faq-diag-bottom"></div>

              <div className="faq-contactbody">
                <div className="faq-chaticon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span className="faq-chatdots">...</span>
                </div>
                <h3 className="faq-contacttitle">You have different questions?</h3>
                <p className="faq-contacttext">
                  Our team will answer all your questions.<br />
                  We ensure a quick response.
                </p>
                <a href="#contact" className="faq-contactbtn">Contact Us</a>
              </div>
            </div>

            {/* Service Card */}
            <div className="faq-servicecard">
              <div className="faq-serviceicon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="faq-servicetext">
                <span className="faq-servicetag">Your Growth, Our Mission</span>
                <h4 className="faq-servicetitle">24/7 Service</h4>
                <span className="faq-servicephone">(000) 000-0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;