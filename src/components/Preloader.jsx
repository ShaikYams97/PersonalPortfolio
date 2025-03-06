import React, { useState, useEffect } from 'react';


const Preloader = ({ onFinish }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setQuote(data.slip.advice);
      } catch (error) {
        setQuote('Success is not the key to happiness. Happiness is the key to success.');
      }
    };

    fetchQuote();

    setTimeout(() => {
      onFinish();
    }, 3000);
  }, [onFinish]);

  return (
    <div className="preloader-container">
      <div className="loading-screen">
        <h1 className="welcome-text">Welcome to My Portfolio</h1>
        <p className="quote-container fade-in">{quote}</p>
      </div>
    </div>
  );
};

export default Preloader;