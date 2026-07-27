import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-bar"></div>
            <div className="logo-bar"></div>
          </div>
          <span className="logo-text">Digital Marketing<span className="logo-dot">.</span></span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#blogs" className="nav-link">Blogs</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <a href="#quote" className="cta-button">Get A Quote</a>
      </div>
    </header>
  );
};

export default Header;