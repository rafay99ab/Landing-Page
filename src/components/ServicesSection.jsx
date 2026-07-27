import React, { useState, useRef, useEffect } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Social Media Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      highlighted: false
    },
    {
      id: 2,
      title: 'Content Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop',
      highlighted: true
    },
    {
      id: 3,
      title: 'Email Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop',
      highlighted: false
    },
    {
      id: 4,
      title: 'SEO Optimization',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      highlighted: false
    },
    {
      id: 5,
      title: 'PPC Advertising',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=250&fit=crop',
      highlighted: false
    },
    {
      id: 6,
      title: 'Brand Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
      highlighted: false
    }
  ];

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Auto-scroll
  useEffect(() => {
    const slider = sliderRef.current;
    let animationId;
    let scrollPos = 0;
    
    const autoScroll = () => {
      if (!isDragging && slider) {
        scrollPos += 0.5;
        if (scrollPos >= slider.scrollWidth - slider.clientWidth) {
          scrollPos = 0;
        }
        slider.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    
    animationId = requestAnimationFrame(autoScroll);
    
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  return (
    <section className="services-section">
      {/* Top diagonal lines decoration */}
      <div className="diagonal-lines top-lines"></div>
      
      {/* Bottom diagonal lines decoration */}
      <div className="diagonal-lines bottom-lines"></div>

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="header-left">
            <div className="section-badge">
              <div className="badge-icon">
                <div className="badge-bar"></div>
                <div className="badge-bar"></div>
              </div>
              <span className="badge-text">Our Services</span>
            </div>
            <h2 className="sectio-title">
              Boost Your Brand<br />
              with Our Expertise
            </h2>
          </div>
          <a href="#services" className="view-all-btn">
            View All Services
            <span className="arrow">→</span>
          </a>
        </div>

        {/* Slider */}
        <div 
          className="services-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${service.highlighted ? 'highlighted' : ''}`}
            >
              {service.highlighted ? (
                // Highlighted card layout (text top, image bottom)
                <>
                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                    <a href="#learn" className="learn-more">
                      Learn more
                      <span className="arrow">→</span>
                    </a>
                  </div>
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                </>
              ) : (
                // Normal card layout (image top, text bottom)
                <>
                  <div className="card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                    <a href="#learn" className="learn-more">
                      Learn more
                      <span className="arrow">→</span>
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;