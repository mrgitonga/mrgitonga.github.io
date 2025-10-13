import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Users } from "lucide-react";
import QRCodeCard from './QRCodeCard';
import './About.css';

const About = () => {
  const ministers = [
    { region: "North East", role: "Data Analyst & Community Liaison", color: "hsl(var(--secondary))" },
    { region: "North West", role: "Data Analyst & Community Liaison", color: "hsl(var(--accent))" },
    { region: "South East", role: "Data Analyst & Community Liaison", color: "hsl(var(--secondary))" },
    { region: "South West", role: "Data Analyst & Community Liaison", color: "hsl(var(--accent))" },
  ];

  return (
    <div className="dyg-page-container">
      <Helmet>
        <script 
          type="text/javascript" 
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" 
          data-name="bmc-button" 
          data-slug="datayaground" 
          data-color="#ffa21f" 
          data-emoji=""  
          data-font="Cookie" 
          data-text="Buy us a coffee" 
          data-outline-color="#000000" 
          data-font-color="#000000" 
          data-coffee-color="#FFDD00"
          async
        ></script>
      </Helmet>
      <div className="dyg-about-section">
        <div className="dyg-page-header">
          <h1>About Data ya Ground</h1>
          <p>A citizen-led movement to power democracy with data.</p>
        </div>
        <div className="dyg-prose">
          <div className="dyg-story-card">
            <h2>Our Story</h2>
            <p>
              Data ya Ground was born from a powerful question: What if policy was not just made for the people, but shaped *by* the people? We envisioned a Kenya where the priorities of ordinary citizens—from the smallest village to the largest city—formed the foundation of our national conversation.
            </p>
            <p>
              We are a movement dedicated to transforming grassroots opinions into a powerful, unified, and undeniable voice. Through a cycle of accessible surveying and community-led validation, we are building the People's Manifesto: a true and living reflection of the nation's priorities.
            </p>
            <p><strong>Our principle is simple:</strong> We don't guess the future. We listen to the ground.</p>
          </div>
        </div>
      </div>

      {/* === REVERTED "HOW IT WORKS" SECTION DESIGN === */}
      <div className="dyg-about-section">
        <h2 className="dyg-section-title">How It Works</h2>
        <div className="dyg-how-it-works-grid">
            <div className="dyg-how-it-works-item">
              <div className="dyg-how-it-works-icon" style={{ backgroundColor: 'hsl(var(--secondary))' }}>1</div>
              <div>
                <h3 className="dyg-how-it-works-title">Survey Week – From Sunday 7 PM</h3>
                <p className="dyg-how-it-works-text">
                  A national survey opens every scheduled Sunday at 7 PM. For one week, Kenyans across all counties can share their views and contribute to the data collection effort.
                </p>
              </div>
            </div>
            <div className="dyg-how-it-works-item">
              <div className="dyg-how-it-works-icon" style={{ backgroundColor: 'hsl(var(--accent))' }}>2</div>
              <div>
                <h3 className="dyg-how-it-works-title">Following Sunday 7 PM – ZAP Day Event Begins</h3>
                <p className="dyg-how-it-works-text">
                  Exactly one week later, on Sunday at 7 PM, the ZAP verification event kicks off. For 10 minutes only, participants can enter their unique 5-character ZAP code to validate their survey submission.
                </p>
              </div>
            </div>
            <div className="dyg-how-it-works-item">
              <div className="dyg-how-it-works-icon" style={{ backgroundColor: 'hsl(var(--secondary))' }}>3</div>
              <div>
                <h3 className="dyg-how-it-works-title">After ZAP – Validation and Data Update</h3>
                <p className="dyg-how-it-works-text">
                  Once ZAP closes, all entries are verified automatically. Validated responses are analyzed and used to update the national dashboards — reflecting the most accurate and up-to-date insights from the ground.
                </p>
              </div>
            </div>
        </div>
      </div>

      <div className="dyg-about-section">
        <h2 className="dyg-section-title">The Five Minister Model</h2>
        <p className="dyg-section-subtitle">
          Our data custodians are not politicians—they are civic data analysts committed to the accurate and ethical representation of the people's voice.
        </p>
        <div className="dyg-minister-national-card">
          <div className="dyg-minister-icon-wrapper">
            <div className="dyg-minister-icon"><Users /></div>
            <div>
              <h3>National Minister</h3>
              <p>Chief Data Analyst</p>
            </div>
          </div>
          <p>Oversees the integrity of all regional data, synthesizes national trends, and is responsible for publishing the comprehensive People's Manifesto.</p>
        </div>
        <div className="dyg-minister-regional-grid">
          {ministers.map((minister, index) => (
            <div key={index} className="dyg-minister-regional-card">
              <div className="dyg-minister-icon-wrapper small">
                 <div className="dyg-minister-icon small" style={{backgroundColor: minister.color}}><BarChart3 /></div>
                 <div>
                    <h3>{minister.region}</h3>
                    <p>{minister.role}</p>
                 </div>
              </div>
              <p>Manages their regional dashboard, conducts localized analysis, and communicates key findings directly back to their community through social media and public forums.</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dyg-about-section">
        <QRCodeCard />
      </div>

      <div className="dyg-about-section">
        <div className="dyg-follow-box">
          <h2>Follow Your Regional Data</h2>
          <p>
            Stay connected with your region's data minister on social media to get regular updates, analysis, and insights from your community.
          </p>
          <div className="dyg-follow-buttons">
            <Link to="/projects/data-ya-ground/dashboard" state={{ initialTab: 'northeast' }} style={{backgroundColor: 'hsl(var(--secondary))'}}>
              North East
            </Link>
            <Link to="/projects/data-ya-ground/dashboard" state={{ initialTab: 'northwest' }} style={{backgroundColor: 'hsl(var(--accent))'}}>
              North West
            </Link>
            <Link to="/projects/data-ya-ground/dashboard" state={{ initialTab: 'southeast' }} style={{backgroundColor: 'hsl(var(--secondary))'}}>
              South East
            </Link>
            <Link to="/projects/data-ya-ground/dashboard" state={{ initialTab: 'southwest' }} style={{backgroundColor: 'hsl(var(--accent))'}}>
              South West
            </Link>
          </div>
        </div>
      </div>
      <div className="dyg-about-section">
        <div className="dyg-support-box">
          <h2>Support Our Mission</h2>
          <p>
            Thank you for visiting us. To support this project, please consider buying us a coffee. Your contribution helps us maintain the platform and continue our work of amplifying the voices of Kenyans.
          </p>
          {/* The script injected by Helmet will automatically find and replace this link */}
          <a href="https://www.buymeacoffee.com/datayaground" target="_blank" rel="noopener noreferrer">
            {/* This is a fallback link that will show if the script fails to load */}
            <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Us A Coffee" style={{ height: '60px', width: '217px' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;