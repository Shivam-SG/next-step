import React from "react";

const Wave = () => {
  // Generate an array of random dots with random properties
  const dots = Array.from({ length: 15 }).map((_, index) => ({
    top: `${Math.random() * 100}%`,            // Random vertical position
    opacity: 0.2 + Math.random() * 0.6,         // Random opacity between 0.2 and 0.8
    delay: `${-Math.random() * 5}s`,            // Random delay for starting position
    duration: `${(15 + Math.random() * 10) / 3}s`, // Random animation duration between 5s to 15s (3x speed)
    fadeInDelay: `${index * 0.15}s`             // Staggered fade-in effect with longer delay
  }));

  return (
    <section>
      {/* Existing Waves */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      {/* Random Moving Dots */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className="random-dot"
          style={{
            top: dot.top,
            opacity: dot.opacity,
            animationDelay: `${dot.delay}, ${dot.fadeInDelay}`, // Add fadeIn delay
            animationDuration: dot.duration,
          }}
        ></div>
      ))}
    </section>
  );
};

export default Wave;
