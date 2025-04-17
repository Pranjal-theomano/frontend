import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/theomanologo2.png'; // You'll need to add your logo

function Navbar() {
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>

        <div className="nav-links">
          <div className="dropdown">
            <button className="nav-link" onClick={() => setAboutDropdown(!aboutDropdown)}>
              About
            </button>
            {aboutDropdown && (
              <div className="dropdown-content">
                <Link to="/about-us">About Us</Link>
                <Link to="/team">Our Team</Link>
              </div>
            )}
          </div>
          
          <div className="dropdown">
            <button className="nav-link">Hire a developer</button>
          </div>

          <div className="dropdown">
            <button className="nav-link">Services</button>
          </div>

          <Link to="/case-studies" className="nav-link">Case Studies</Link>
          <Link to="/career" className="nav-link">Career</Link>
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