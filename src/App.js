import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider'; // <-- Import the new provider
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import CyberShujaaJourney from './pages/CyberShujaaJourney';
import DataYaGroundApp from './pages/datayaground/DataYaGroundApp';
import './App.css';

// Main page layout component for the homepage
const MainLayout = () => (
  <>
    <Hero />
    <ProjectShowcase />
  </>
);

function App() {
  return (
    // The ThemeProvider now intelligently handles everything
    <ThemeProvider>
      <div className="App">
        <Header /> {/* This header will now hide itself on the correct pages */}
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/cybershujaa-portfolio" element={<MainLayout />} /> 
            <Route path="/projects/cyber-shujaa" element={<CyberShujaaJourney />} />
            <Route path="/projects/data-ya-ground/*" element={<DataYaGroundApp />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;