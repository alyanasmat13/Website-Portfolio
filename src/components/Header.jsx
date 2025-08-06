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
      <p>I'm a Senior majoring in Computer Science @ the University of Houston. I'm an aspiring Software Engineer looking for internship opportunities.</p>
    </header>
  );
};

export default Header;