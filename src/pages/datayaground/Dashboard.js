import React, { useState, useEffect } from 'react'; // <-- Import useEffect
import { useLocation } from 'react-router-dom'; // <-- Import useLocation
import { BarChart3, TrendingUp, Users, MapPin, Tablet } from "lucide-react";
import { useBreakpoint } from '../../hooks/useBreakpoint';
import './Dashboard.css';

const MobileWarning = () => (
  <div className="dyg-mobile-warning-container">
    <Tablet size={48} className="dyg-mobile-warning-icon" />
    <h2 className="dyg-mobile-warning-title">Dashboard is Best Viewed on a Larger Screen</h2>
    <p className="dyg-mobile-warning-text">
      For the best experience, please use a tablet or computer to interact with the dashboard.
    </p>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("national");
  const isMobile = useBreakpoint(768);
  const location = useLocation(); // <-- Get location object

  // --- THE FIX: Check for incoming state on component load ---
  useEffect(() => {
    // If the location object has state and that state has an initialTab property...
    if (location.state && location.state.initialTab) {
      // ...set the active tab to that value.
      setActiveTab(location.state.initialTab);
    }
  }, [location.state]); // This effect runs whenever the location state changes

  const stats = [
    { label: "Total Valid Responses", value: "--", icon: Users, color: "hsl(var(--secondary))" },
    { label: "Counties Represented", value: "--", icon: MapPin, color: "hsl(var(--accent))" },
    { label: "Top Priority", value: "--", icon: TrendingUp, color: "hsl(var(--secondary))" },
    { label: "Avg. Age of Respondent", value: "--", icon: Users, color: "hsl(var(--accent))" }, 
  ];

  const tabs = [
    { id: "national", label: "National Overview" },
    { id: "northeast", label: "North East" },
    { id: "northwest", label: "North West" },
    { id: "southeast", label: "South East" },
    { id: "southwest", label: "South West" },
  ];

  return (
    <div className="dyg-page-container dyg-dashboard-container">
      {isMobile ? (
        <MobileWarning />
      ) : (
        <div className="animate-fade-in">
          <div className="dyg-page-header">
            <h1>The Data ya Ground Dashboard</h1>
            <p>Real Voices. Real Data.</p>
          </div>

          <div className="dyg-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="dyg-stat-card">
                <div className="dyg-stat-icon" style={{ backgroundColor: stat.color }}>
                  <stat.icon />
                </div>
                <div className="dyg-stat-value">{stat.value}</div>
                <div className="dyg-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="dyg-info-box">
            <h3>About This Data</h3>
            <p>
              These dashboards are built from verified survey data after every ZAP Day. They reflect 
              the real hopes, challenges, and aspirations of Kenyans from all 47 counties.
            </p>
          </div>

          <div className="dyg-tabs-container">
            <div className="dyg-tabs-list">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`dyg-tab-trigger ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="dyg-tabs-content">
              {tabs.map((tab) => (
                activeTab === tab.id && (
                  <div key={tab.id} className="dyg-dashboard-panel">
                    <div className="dyg-panel-header" style={{ backgroundColor: tab.id === 'national' ? 'hsl(var(--secondary))' : 'hsl(var(--accent))' }}>
                      <h3>{tab.label} Dashboard</h3>
                    </div>
                    <div className="dyg-tableau-placeholder">
                      <div className="dyg-placeholder-content">
                        <BarChart3 />
                        <p>Tableau Dashboard Coming Soon</p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;