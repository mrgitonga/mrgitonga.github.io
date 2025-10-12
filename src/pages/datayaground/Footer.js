import React from 'react';
import { Youtube, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dyg-footer">
      <div className="dyg-container">
        <div className="dyg-footer-grid">
          <div>
            <h3 className="dyg-footer-heading">Data ya Ground</h3>
            <p className="dyg-footer-text">Built by Kenyans, for Kenyans.</p>
          </div>
          <div>
            <h3 className="dyg-footer-heading">Connect With Us</h3>
            <div className="dyg-social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="dyg-social-link">
                <Twitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="dyg-social-link">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="dyg-footer-bottom">
          <p>Powered by Google Forms, Tableau Public, and GitHub Pages</p>
          <p>© {new Date().getFullYear()} Data ya Ground. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;