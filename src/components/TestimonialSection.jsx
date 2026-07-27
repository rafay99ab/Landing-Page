import React, { useState } from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const reviewData = [
    {
      id: 'tm-1',
      reviewerName: 'Dianne Russell',
      reviewerRole: 'Owner, Architecture Studio',
      reviewerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      reviewScore: 5.0
    },
    {
      id: 'tm-2',
      reviewerName: 'Robert Fox',
      reviewerRole: 'CEO, TechStart Inc',
      reviewerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      reviewText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      reviewScore: 5.0
    },
    {
      id: 'tm-3',
      reviewerName: 'Jenny Wilson',
      reviewerRole: 'Marketing Head, BrandCo',
      reviewerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      reviewText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      reviewScore: 4.8
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx(prev => (prev === 0 ? reviewData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx(prev => (prev === reviewData.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviewData[activeIdx];

  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={`star-${i}`} className={`testimonial-star ${i < fullStars ? 'testimonial-star-filled' : 'testimonial-star-empty'}`}>
          ★
        </span>
      );
    }
    return stars;
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
    <section className="testimonial-outer">
      <div className="testimonial-inner">
        {/* Header Row */}
        <div className="testimonial-headerrow">
          <div className="testimonial-headerleft">
            <div className="testimonial-emblem">
              <div className="testimonial-emblem-shape">
                <div className="testimonial-emblem-bar"></div>
                <div className="testimonial-emblem-bar"></div>
              </div>
              <span className="testimonial-emblem-txt">Testimonials</span>
            </div>
            <h2 className="testimonial-headline">
              Testimonials: Trusted<br />
              by Our Clients
            </h2>
          </div>
          <div className="testimonial-headerright">
            <p className="testimonial-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <a href="#testimonials" className="testimonial-viewall">
              All Testimonials
              <span className="testimonial-viewall-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Cards Row */}
        <div className="testimonial-cardsrow">
          {/* Left - Rating Card */}
          <div className="testimonial-ratingcard">
            {/* Diagonal lines top */}
            <div className="testimonial-diag test-diag-top"></div>

            <div className="testimonial-ratingbody">
              <div className="testimonial-bigscore">4.9</div>
              <div className="testimonial-starsrow">
                {renderStars(5)}
              </div>
              <span className="testimonial-reviewcount">(40+ Reviews)</span>
              <p className="testimonial-ratingtag">
                Customer experiences<br />
                that speak for them selves
              </p>

              {/* Avatar Stack */}
              <div className="testimonial-avatarstack">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face"
                  alt="Client 1"
                  className="testimonial-avatarimg"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt="Client 2"
                  className="testimonial-avatarimg"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
                  alt="Client 3"
                  className="testimonial-avatarimg"
                />
                <div className="testimonial-avatarmore">+</div>
              </div>
            </div>

            {/* Diagonal lines bottom */}
            <div className="testimonial-diag test-diag-bottom"></div>
          </div>

          {/* Right - Review Card */}
          <div className="testimonial-reviewcard">
            <div className="testimonial-reviewtop">
              <div className="testimonial-reviewstars">
                {renderStars(currentReview.reviewScore)}
              </div>
              <span className="testimonial-reviewscore">{currentReview.reviewScore}</span>
            </div>

            <p className="testimonial-reviewtext">{currentReview.reviewText}</p>

            <div className="testimonial-reviewfooter">
              <div className="testimonial-reviewerinfo">
                <span className="testimonial-reviewername">{currentReview.reviewerName}</span>
                <span className="testimonial-reviewerrole">{currentReview.reviewerRole}</span>
              </div>

              <div className="testimonial-navbtns">
                <button
                  className="testimonial-navbtn testimonial-navbtn-prev"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/>
                    <polyline points="12 19 5 12 12 5"/>
                  </svg>
                </button>
                <button
                  className="testimonial-navbtn testimonial-navbtn-next"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="testimonial-marquee">
        <div className="testimonial-marquee-track">
          {[...marqueeTags, ...marqueeTags].map((tag, idx) => (
            <React.Fragment key={`tmq-${idx}`}>
              <span className="testimonial-marquee-word">{tag}</span>
              <span className="testimonial-marquee-star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;