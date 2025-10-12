import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider'; // <-- Import the custom hook
import './ThemeToggle.css';

const ThemeToggle = () => {
  // Get theme state and the setter function from the context
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;