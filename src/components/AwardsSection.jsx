import React from 'react';
import './AwardsSection.css';

const AwardsSection = () => {
  const awardEntries = [
    {
      id: 'aw-1',
      awardCategory: 'Digital Marketing',
      awardName: 'Digital Impact Award',
      awardYear: '2022'
    },
    {
      id: 'aw-2',
      awardCategory: 'PPC',
      awardName: 'PPC Power Performer',
      awardYear: '2023'
    },
    {
      id: 'aw-3',
      awardCategory: 'Digital Branding & Identity',
      awardName: 'Brand Brilliance Award',
      awardYear: '2024'
    },
    {
      id: 'aw-4',
      awardCategory: 'Content Marketing Strategy',
      awardName: 'Content Genius Award',
      awardYear: '2025'
    }
  ];

  return (
    <section className="awards-outer">
      {/* Top diagonal decoration */}
      <div className="awards-diag-top"></div>

      <div className="awards-inner">
        <div className="awards-layout">
          {/* Left Column */}
          <div className="awards-leftcol">
            <div className="awards-badge">
              <div className="awards-badge-shape">
                <div className="awards-badge-bar"></div>
                <div className="awards-badge-bar"></div>
              </div>
              <span className="awards-badge-txt">Our Award</span>
            </div>
            <h2 className="awards-headline">
              Our Journey to Award-<br />
              Winning Success
            </h2>

            {/* Laurel Wreath with Star */}
            <div className="awards-wreath">
              <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="awards-wreath-svg">
                {/* Left Branch */}
                <g className="awards-branch-left">
                  <path d="M110 40 Q90 50 85 70" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M105 55 Q85 65 80 85" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M100 70 Q80 80 75 100" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M95 85 Q75 95 70 115" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M90 100 Q70 110 65 130" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M85 115 Q65 125 60 145" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M80 130 Q60 140 55 160" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M75 145 Q55 155 50 175" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M70 160 Q50 170 45 190" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M65 175 Q45 185 40 205" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  {/* Leaves left */}
                  <ellipse cx="82" cy="60" rx="10" ry="5" fill="#5a7a65" transform="rotate(-30 82 60)"/>
                  <ellipse cx="77" cy="75" rx="10" ry="5" fill="#5a7a65" transform="rotate(-25 77 75)"/>
                  <ellipse cx="72" cy="90" rx="10" ry="5" fill="#5a7a65" transform="rotate(-20 72 90)"/>
                  <ellipse cx="67" cy="105" rx="10" ry="5" fill="#5a7a65" transform="rotate(-15 67 105)"/>
                  <ellipse cx="62" cy="120" rx="10" ry="5" fill="#5a7a65" transform="rotate(-10 62 120)"/>
                  <ellipse cx="57" cy="135" rx="10" ry="5" fill="#5a7a65" transform="rotate(-5 57 135)"/>
                  <ellipse cx="52" cy="150" rx="10" ry="5" fill="#5a7a65"/>
                  <ellipse cx="47" cy="165" rx="10" ry="5" fill="#5a7a65" transform="rotate(5 47 165)"/>
                  <ellipse cx="42" cy="180" rx="10" ry="5" fill="#5a7a65" transform="rotate(10 42 180)"/>
                  <ellipse cx="37" cy="195" rx="10" ry="5" fill="#5a7a65" transform="rotate(15 37 195)"/>
                </g>
                {/* Right Branch */}
                <g className="awards-branch-right">
                  <path d="M170 40 Q190 50 195 70" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M175 55 Q195 65 200 85" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M180 70 Q200 80 205 100" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M185 85 Q205 95 210 115" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M190 100 Q210 110 215 130" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M195 115 Q215 125 220 145" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M200 130 Q220 140 225 160" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M205 145 Q225 155 230 175" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M210 160 Q230 170 235 190" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M215 175 Q235 185 240 205" stroke="#5a7a65" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  {/* Leaves right */}
                  <ellipse cx="198" cy="60" rx="10" ry="5" fill="#5a7a65" transform="rotate(30 198 60)"/>
                  <ellipse cx="203" cy="75" rx="10" ry="5" fill="#5a7a65" transform="rotate(25 203 75)"/>
                  <ellipse cx="208" cy="90" rx="10" ry="5" fill="#5a7a65" transform="rotate(20 208 90)"/>
                  <ellipse cx="213" cy="105" rx="10" ry="5" fill="#5a7a65" transform="rotate(15 213 105)"/>
                  <ellipse cx="218" cy="120" rx="10" ry="5" fill="#5a7a65" transform="rotate(10 218 120)"/>
                  <ellipse cx="223" cy="135" rx="10" ry="5" fill="#5a7a65" transform="rotate(5 223 135)"/>
                  <ellipse cx="228" cy="150" rx="10" ry="5" fill="#5a7a65"/>
                  <ellipse cx="233" cy="165" rx="10" ry="5" fill="#5a7a65" transform="rotate(-5 233 165)"/>
                  <ellipse cx="238" cy="180" rx="10" ry="5" fill="#5a7a65" transform="rotate(-10 238 180)"/>
                  <ellipse cx="243" cy="195" rx="10" ry="5" fill="#5a7a65" transform="rotate(-15 243 195)"/>
                </g>
                {/* Star */}
                <polygon points="140,75 148,105 180,105 154,125 164,155 140,138 116,155 126,125 100,105 132,105" fill="#5a7a65"/>
                {/* Bottom ribbon */}
                <path d="M125 220 L140 235 L155 220" stroke="#5a7a65" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="140" cy="238" r="4" fill="#5a7a65"/>
              </svg>
            </div>
          </div>

          {/* Right Column - Awards List */}
          <div className="awards-rightcol">
            {awardEntries.map((entry) => (
              <div key={entry.id} className="awards-row">
                <div className="awards-row-info">
                  <span className="awards-row-cat">{entry.awardCategory}</span>
                  <div className="awards-row-main">
                    <h3 className="awards-row-name">{entry.awardName}</h3>
                    <span className="awards-row-year">/ {entry.awardYear}</span>
                  </div>
                </div>
                <div className="awards-row-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diagonal decoration */}
      <div className="awards-diag-bottom"></div>
    </section>
  );
};

export default AwardsSection;