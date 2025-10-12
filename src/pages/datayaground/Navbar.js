import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Removed the "Back to Portfolio" link from this array
  const links = [
    { name: "Home", path: "/projects/data-ya-ground" },
    { name: "Survey Portal", path: "/projects/data-ya-ground/survey" },
    { name: "Dashboard", path: "/projects/data-ya-ground/dashboard" },
    { name: "About", path: "/projects/data-ya-ground/about" },
  ];

  return (
    <nav className="dyg-navbar">
      <div className="dyg-container">
        <div className="dyg-navbar-content">
          <Link to="/projects/data-ya-ground" className="dyg-navbar-brand">
            <div className="dyg-logo"></div>
            <span className="dyg-brand-text">Data ya Ground</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="dyg-desktop-nav">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/projects/data-ya-ground"}
                className={({ isActive }) => "dyg-nav-link" + (isActive ? " active" : "")}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="dyg-mobile-menu-btn">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="dyg-mobile-nav">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/projects/data-ya-ground"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => "dyg-mobile-nav-link" + (isActive ? " active" : "")}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;