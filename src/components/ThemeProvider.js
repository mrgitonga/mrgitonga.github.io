import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Create a context to hold the theme state and setter
const ThemeContext = createContext(null);

// The provider component that will wrap your app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default portfolio theme is dark
  const location = useLocation();

  useEffect(() => {
    // Check if the current page is part of the 'Data ya Ground' project
    const isDataYaGround = location.pathname.startsWith('/projects/data-ya-ground');

    if (isDataYaGround) {
      // For 'Data ya Ground' pages, remove the theme attribute to use default CSS
      document.body.removeAttribute('data-theme');
    } else {
      // For all other portfolio pages, apply the current theme ('light' or 'dark')
      document.body.setAttribute('data-theme', theme);
    }
    
    // This effect runs every time the theme state or the URL path changes
  }, [theme, location.pathname]);

  // The value provided to children components (like the ThemeToggle)
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// A custom hook to easily access the theme context from other components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};