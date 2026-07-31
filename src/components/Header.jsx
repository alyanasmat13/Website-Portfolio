import React, { useState, useEffect } from 'react';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "Hi, I'm Muhammad 👋";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <header>
      <h1>{displayText}<span className="header-end-bar">|</span></h1>
      <p>I graduated from the University of Houston in May 2026 with a Bachelor of Science in Computer Science. I'm an aspiring Software Engineer looking for a full-time positions.</p>
    </header>
  );
};

export default Header;