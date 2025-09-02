import React from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="header-logo">Anderson G. Nyaga</div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;