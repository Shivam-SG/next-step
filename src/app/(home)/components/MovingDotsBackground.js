'use client'
import React, { useEffect } from 'react';

const MovingDotsBackground = () => {
  useEffect(() => {
    const createDot = () => {
      const dot = document.createElement('div');
      dot.className = 'dot absolute bg-black rounded-full w-2 h-2';
      
      // Set random position for each dot along the y-axis
      dot.style.top = `${Math.random() * 100}vh`;
      dot.style.left = '0px';
      
      // Add Tailwind animation classes
      dot.classList.add('animate-moveRight', 'animate-fadeTrail');
      
      // Append the dot to the body
      document.body.appendChild(dot);
      
      // Remove the dot from the DOM after animation completes
      setTimeout(() => dot.remove(), 5000);  // Adjust time based on animation duration
    };

    // Generate dots every 300ms
    const interval = setInterval(createDot, 300);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default MovingDotsBackground;
