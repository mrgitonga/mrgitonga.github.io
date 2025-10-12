import React from 'react';
import { Flag, Clock, CheckCircle } from 'lucide-react';
import './SurveyTimeline.css';

// A helper to format dates (e.g., "Oct 12, 2025, 5:24 PM")
const formatDateTime = (date) => {
  if (!date || isNaN(date.getTime())) return 'Calculating...';
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: '2-digit', 
    year: 'numeric', 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  }).replace(' at', ', ');
};

const TimelineItem = ({ icon, color, title, date }) => (
    <div className="dyg-v-timeline-item">
        <div className={`dyg-v-timeline-icon ${color}`}>
            {icon}
        </div>
        <div className="dyg-v-timeline-line"></div>
        <div className="dyg-v-timeline-text">
            <strong>{title}</strong>
            <span>{formatDateTime(date)}</span>
        </div>
    </div>
)
const SurveyTimeline = ({ surveyStart, surveyEnd, zapDurationMinutes = 10 }) => {
  
  if (!surveyStart || !surveyEnd) {
    return (
      <div className="dyg-timeline-container placeholder">
        <p>A new survey cycle will be scheduled soon. Please check back later!</p>
      </div>
    );
  }

  const zapStart = surveyEnd;
  // --- BUG FIX: Correctly calculate zapEnd date ---
  const zapEnd = new Date(zapStart.getTime() + zapDurationMinutes * 60 * 1000);
  
  const events = [
      { icon: <Flag />, color: 'survey', title: 'Survey Week Starts', date: surveyStart },
      { icon: <CheckCircle />, color: 'survey', title: 'Survey Week Ends', date: surveyEnd },
      { icon: <Clock />, color: 'zap', title: 'ZAP Event Starts', date: zapStart },
      { icon: <CheckCircle />, color: 'zap', title: 'ZAP Event Ends', date: zapEnd },
  ];

  return (
    <div className="dyg-timeline-container-v2">
      <div className="dyg-v-timeline-wrapper">
        {events.map((event, index) => (
            <TimelineItem key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default SurveyTimeline;