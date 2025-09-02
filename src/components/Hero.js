import React from 'react';
import { Linkedin, Download, Award } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="profile-card">
          <img
            src={process.env.PUBLIC_URL + "/professional-headshot.jpg"}
            alt="Professional headshot of Anderson G. Nyaga"
            className="profile-headshot"
          />
          <h1 className="profile-name">Anderson G. Nyaga</h1>
          <p className="profile-title">Cyber Shujaa - Data & AI Track</p>
          <div className="profile-buttons">
            <a
              href="https://www.linkedin.com/in/anderson-nyaga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/resume.pdf"}
              download="Anderson_G_Nyaga_Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
            <a
              href={process.env.PUBLIC_URL + "/Cyber_Shujaa_Certificate_AndersonNyaga.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Award size={18} />
              <span>Certificate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;