import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, TrendingUp } from 'lucide-react';
import SurveyTimeline from './SurveyTimeline';
import './Home.css';
import { useSurveyStatus } from '../../hooks/useSurveyStatus';

const Home = () => {
  const { activeCycleDates, zapDurationMinutes } = useSurveyStatus();

  return (
    <div className="dyg-home-page">
      {/* Hero Section */}
      <section className="dyg-hero">
        <div className="dyg-hero-overlay"></div>
        <div className="dyg-container dyg-hero-content">
          {/* === ICON UPDATE IS HERE === */}
          <div className="dyg-hero-badge">
            <img 
              src={process.env.PUBLIC_URL + "/kenya-pin.png"} 
              alt="Kenya pin icon" 
              className="dyg-hero-badge-icon" 
            />
            <span>A Kenyan Citizen Data Movement</span>
          </div>
          <h1 className="dyg-hero-title">
            Data ya Ground – The People's Voice. The Nation's Truth.
          </h1>
          <p className="dyg-hero-subtitle">
            Where every Kenyan shares their hopes, their truths, and their vision for a better tomorrow.
          </p>
          <div className="dyg-hero-buttons">
            <Link to="/projects/data-ya-ground/survey" className="dyg-btn dyg-btn-secondary">
              Take the Survey
            </Link>
            <Link to="/projects/data-ya-ground/dashboard" className="dyg-btn dyg-btn-outline">
              View the Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="dyg-mission">
        <div className="dyg-container">
          <h2 className="dyg-section-title">Our Mission</h2>
          <div className="dyg-mission-grid">
            <div className="dyg-mission-card">
              <div className="dyg-mission-icon" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                <Users />
              </div>
              <h3 className="dyg-mission-title">Collecting Voices</h3>
              <p className="dyg-mission-text">
                Monthly open survey for all Kenyans to share their priorities, dreams, and challenges.
              </p>
            </div>
            <div className="dyg-mission-card">
              <div className="dyg-mission-icon" style={{ backgroundColor: 'hsl(var(--accent))' }}>
                <CheckCircle />
              </div>
              <h3 className="dyg-mission-title">Verifying Truth</h3>
              <p className="dyg-mission-text">
                ZAP Day event ensures every response is genuine, building trust in the data.
              </p>
            </div>
            <div className="dyg-mission-card">
              <div className="dyg-mission-icon" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
                <TrendingUp />
              </div>
              <h3 className="dyg-mission-title">Building Action</h3>
              <p className="dyg-mission-text">
                Transforming voices into data that shapes leadership and the People's Manifesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "How It Works" Section */}
      <section className="dyg-how-it-works">
        <div className="dyg-container">
          <h2 className="dyg-section-title">How It Works</h2>
          <div className="dyg-timeline">
            <div className="dyg-timeline-item">
              <div className="dyg-timeline-icon" style={{ backgroundColor: 'hsl(var(--secondary))' }}>1</div>
              <div>
                <h3 className="dyg-timeline-title">Survey Week – From Sunday 7 PM</h3>
                <p className="dyg-timeline-text">
                  A national survey opens every scheduled Sunday at 7 PM. For one week, Kenyans across all counties can share their views and contribute to the data collection effort.
                </p>
              </div>
            </div>
            <div className="dyg-timeline-item">
              <div className="dyg-timeline-icon" style={{ backgroundColor: 'hsl(var(--accent))' }}>2</div>
              <div>
                <h3 className="dyg-timeline-title">Following Sunday 7 PM – ZAP Day Event Begins</h3>
                <p className="dyg-timeline-text">
                  Exactly one week later, on Sunday at 7 PM, the ZAP verification event kicks off. For 10 minutes only, participants can enter their unique 5-character ZAP code to validate their survey submission.
                </p>
              </div>
            </div>
            <div className="dyg-timeline-item">
              <div className="dyg-timeline-icon" style={{ backgroundColor: 'hsl(var(--secondary))' }}>3</div>
              <div>
                <h3 className="dyg-timeline-title">After ZAP – Validation and Data Update</h3>
                <p className="dyg-timeline-text">
                  Once ZAP closes, all entries are verified automatically. Validated responses are analyzed and used to update the national dashboards — reflecting the most accurate and up-to-date insights from the ground.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="dyg-timeline-section-home">
        <div className="dyg-container">
          <SurveyTimeline
            surveyStart={activeCycleDates.surveyStart}
            surveyEnd={activeCycleDates.surveyEnd}
            zapDurationMinutes={zapDurationMinutes}
          />
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="dyg-quote-section">
        <div className="dyg-container">
          <blockquote className="dyg-quote">
            "True leadership begins with listening to the data ya ground."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;