import React, { useState } from 'react';
import { FileText, Clock, ArrowLeft } from 'lucide-react';
import { useSurveyStatus } from '../../hooks/useSurveyStatus';
import SurveyForm from './SurveyForm';
import SurveyTimeline from './SurveyTimeline';
import { scheduleConfig } from './schedule';
import './Survey.css';

// The Survey component now acts as the master controller for all views.

const Survey = () => {
  const [view, setView] = useState('info'); // 'info', 'form', or 'zap'
  const { status, activeCycleDates, zapDurationMinutes } = useSurveyStatus();

  // --- VIEW RENDERING LOGIC ---

  // RENDER THE ZAP VIEW
  if (view === 'zap') {
    return (
      <div className="dyg-page-container dyg-zap-container animate-fade-in">
        <button onClick={() => setView('info')} className="dyg-back-to-info-btn">
            <ArrowLeft size={16} /> Back to Survey Portal
        </button>
        <div className="dyg-page-header">
            <h1>ZAP Day Verification</h1>
            <p>Enter the 5-character code you received after submitting your survey.</p>
        </div>
        <div className="dyg-form-embed-container">
          <iframe 
            src={scheduleConfig.zapFormEmbedUrl} 
            width="640" 
            height="500"  /* A more reasonable height for this form */
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            title="Data ya Ground ZAP Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
  }

  // RENDER THE SURVEY FORM VIEW
  if (view === 'form') {
    return (
      <div className="dyg-page-container dyg-survey-container">
        {/* --- BUG FIX: The back button is ONLY here in the parent --- */}
        <button onClick={() => setView('info')} className="dyg-back-to-info-btn">
          <ArrowLeft size={16} /> Back to Survey Portal
        </button>
        <SurveyForm />
      </div>
    );
  }

  // --- DEFAULT 'INFO' VIEW ---
  
  let config;
  switch (status) {
    case 'ZAP_ACTIVE':
      config = {
        title: "ZAP Window is Active!",
        description: "The verification window is now open. Click the button below to enter your ZAP code and validate your survey entry.",
        buttonText: "Complete ZAP Validation",
        color: "hsl(var(--accent))",
        action: () => setView('zap'), // On click, set view to 'zap'
      };
      break;
    case 'OPEN':
      config = {
        title: "Survey is Open – Submit Your Views",
        description: "Share your hopes, priorities, and vision for Kenya. Your voice matters in building the People's Manifesto.",
        buttonText: "Take the Survey",
        color: "hsl(var(--secondary))",
        action: () => setView('form'), // On click, set view to 'form'
      };
      break;
    case 'CLOSED':
    default:
      config = {
        title: "Survey is Currently Closed",
        description: activeCycleDates.surveyStart ? "The current survey cycle has ended. The next one is scheduled to begin soon." : "Please check back later for future surveys.",
        buttonText: null,
      };
      break;
  }

  return (
    <div className="dyg-page-container">
      <div className="dyg-page-header">
        <h1>Join the Movement – Share Your Data ya Ground</h1>
        <p>Every voice counts. Every truth matters.</p>
      </div>
      <div className="dyg-survey-main-card animate-fade-in">
        <div className="dyg-survey-status-banner" style={{ backgroundColor: config.color }}>
          {status === 'ZAP_ACTIVE' ? <Clock /> : <FileText />}
          <h2>{config.title}</h2>
        </div>
        <div className="dyg-survey-card-content">
          <p>{config.description}</p>
          {config.buttonText && (
            <button onClick={config.action} className="dyg-survey-button" style={{ backgroundColor: config.color }}>
                {config.buttonText}
            </button>
          )}
        </div>
      </div>
      <div className="dyg-timeline-section animate-fade-in">
        <h3 className="dyg-timeline-heading">Current Survey Schedule</h3>
          <SurveyTimeline 
            surveyStart={activeCycleDates.surveyStart} 
            surveyEnd={activeCycleDates.surveyEnd}
            zapDurationMinutes={zapDurationMinutes} 
          />
      </div>
      <div className="dyg-info-box animate-fade-in">
        <h3>The Process</h3>
        <p><strong>1. Take the Survey:</strong> During an active survey week, submit your responses through our custom form. You'll receive a unique 5-character ZAP code upon completion.</p>
        <p><strong>2. Save Your Code:</strong> Keep your ZAP code safe! It is your personal key to ensuring your voice is counted.</p>
        <p><strong>3. Verify on ZAP Day:</strong> On the scheduled ZAP Day, a 10-minute verification window will open. Use the "Complete ZAP Validation" button that will appear on this page to submit your code.</p>
      </div>
    </div>
  );
};

export default Survey;