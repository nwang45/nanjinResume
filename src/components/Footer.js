import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles.css'; // Assuming this file will contain your updated CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Resume</h2>
        </div>
        <div className="contact-info">
  <p><FontAwesomeIcon icon={faEnvelope} /><span>claudiawang062@gmail.com</span></p>
  <p><FontAwesomeIcon icon={faPhone} /><span>647-833-9057</span></p>
  <p>©2024 Nanjin Wang's Portfolio</p>
</div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="footer-legal">
          <a href="/terms">Terms and Conditions</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
