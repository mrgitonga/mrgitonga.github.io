import React from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const location = useLocation();

  // Check if we are on a 'Data ya Ground' page
  const isDataYaGround = location.pathname.startsWith('/projects/data-ya-ground');

  // If we are on a 'Data ya Ground' page, render nothing (it has its own Navbar)
  if (isDataYaGround) {
    return null;
  }

  // Otherwise, render the main portfolio header
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="header-logo">
          Anderson G. Nyaga
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;