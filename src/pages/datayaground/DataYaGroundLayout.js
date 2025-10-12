import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const DataYaGroundLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This is where the nested page content will be rendered */}
      <Footer />
    </div>
  );
};

export default DataYaGroundLayout;