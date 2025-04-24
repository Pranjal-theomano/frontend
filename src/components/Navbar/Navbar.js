import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/theomanologo2.png'; // You'll need to add your logo

function Navbar() {

  const handleCareerClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const footerCta = document.querySelector('.footer-cta');
    if (footerCta) {
      footerCta.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    const heroSection = document.querySelector('.home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTechnologiesClick = (e) => {
    e.preventDefault();
    const technologiesSection = document.querySelector('.technologies-section');
    if (technologiesSection) {
      technologiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>

        <div className="nav-links">
          <div className="dropdown">
            <button className="nav-link" onClick={handleAboutClick}>
              About
            </button>
          </div>
          
          <div className="dropdown">
            <button className="nav-link" onClick={handleServicesClick}>Services</button>
          </div>

          <div className="dropdown">
            <button className="nav-link" onClick={handleTechnologiesClick}>Tech</button>
          </div>

          <Link to="/" onClick={handleCareerClick} className="nav-link">Career</Link>
          <Link to="/" onClick={handleContactClick} className="nav-link">Contact Us</Link>
        </div>

        <div className="contact-section">
          <div className="email-container">
            <span>Email Us</span>
            <a href="mailto:sales@theomano.com">sales@theomano.com</a>
          </div>
          <button className="get-in-touch">Get in Touch</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 