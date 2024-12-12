import React from 'react';
import './styles.css';

const WelcomePage = ({ currentUser }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Hello, {currentUser?.name || 'User'}!</h1>
    </div>
  );
};

export default WelcomePage;