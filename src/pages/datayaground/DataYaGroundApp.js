import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DataYaGroundLayout from './DataYaGroundLayout';
import Home from './Home';
import Survey from './Survey';     // <-- Ensure this is correctly imported
import Dashboard from './Dashboard';
import About from './About';
import Privacy from './Privacy'

const DataYaGroundApp = () => {
  return (
    <Routes>
      <Route element={<DataYaGroundLayout />}>
        <Route index element={<Home />} />
        <Route path="survey" element={<Survey />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<Privacy />} />         
      </Route>
    </Routes>
  );
};

export default DataYaGroundApp;