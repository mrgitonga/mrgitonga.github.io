import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LearningJourney from './components/LearningJourney';
import './App.css';

// A simple ThemeProvider to set the default theme
const ThemeProvider = ({ children, defaultTheme = 'light' }) => {
  React.useEffect(() => {
    // On mount, set the theme attribute on the body
    document.body.setAttribute('data-theme', defaultTheme);
    // Optional: save to local storage if you build out a theme toggle
    localStorage.setItem('theme', defaultTheme);
  }, [defaultTheme]);

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider defaultTheme='dark'>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <LearningJourney />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;