import { useState, useEffect } from 'react';

// This custom hook returns `true` if the window width is less than the given breakpoint.
export const useBreakpoint = (breakpoint) => {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    // This function will be called whenever the window is resized.
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoint);
    };

    // Add the event listener when the component mounts.
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts to prevent memory leaks.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]); // Re-run the effect if the breakpoint value ever changes.

  return isBelowBreakpoint;
};