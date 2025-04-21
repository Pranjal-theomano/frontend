import React from 'react';
import './Contactus.css';

const Contactus = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-form-container card">
          <span className="contact-label">CONTACT</span>
          <h2 className="contact-title">Let's get in touch</h2>
          <p className="contact-description">
            You can reach us anytime via <a href="mailto:sales@theomano.com">sales@theomano.com</a>
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Company" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Your Number" />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="Your Country" />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Leave us a message..."></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="contact-stats">
          <div className="stat-item">
            <h3>300+</h3>
            <p>IT Professionals</p>
          </div>
          <div className="stat-item">
            <h3>40+</h3>
            <p>Tech Domains</p>
          </div>
          <div className="stat-item">
            <h3>1100+</h3>
            <p>Delivered Projects</p>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-icon">
            <span>🎧</span>
          </div>
          <h3>Contact Info</h3>
          <div className="contact-details">
            <div className="contact-region">
              <strong>India:</strong> +91 9773385304
              <p>sales@theomano.com</p>
            </div>
            <div className="contact-region">
              <strong>UK:</strong> +44 020 7458 4831
              <p>sales@theomano.uk</p>
            </div>
            <div className="contact-region">
              <strong>Sweden:</strong> +46 73 810 30 44
              <p>paul.heveus@theomano.io</p>
            </div>
            <div className="contact-region">
              <strong>UAE:</strong> +971 58 539 1665
              <p>abhishek@theomano.io</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
