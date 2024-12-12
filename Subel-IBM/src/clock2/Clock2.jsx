import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Stopwatch from './Stopwatch';
import Alarm from './Alarm';
import WorldClock from './WorldClock';
import './styles.css';

const Clock2 = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app-container dark-mode' : 'app-container'}>
      <Router>
        <nav className="navbar">
          <NavLink to="/stopwatch" className="nav-link">Stopwatch</NavLink>
          <NavLink to="/alarm" className="nav-link">Alarm</NavLink>
          <NavLink to="/world-clock" className="nav-link">World Clock</NavLink>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
        <Routes>
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/world-clock" element={<WorldClock />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Clock2;
