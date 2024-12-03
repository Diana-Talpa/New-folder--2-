import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-container">
        <a href="/contact" className="link">
          Contact Us
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaTwitter className="icon" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <FaYoutube className="icon" />
        </a>
      </div>
      <p className="copyright-text">
        © 2024 Diana Talpa Code Academy
      </p>
    </footer>
  );
}

export default Footer;
