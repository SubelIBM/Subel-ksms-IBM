import React, { useState, useEffect } from 'react';
import './styles.css';

const timeZones = [
  { label: 'New York', tz: 'America/New_York' },
  { label: 'London', tz: 'Europe/London' },
  { label: 'Tokyo', tz: 'Asia/Tokyo' },
  { label: 'Sydney', tz: 'Australia/Sydney' },
];

const WorldClock = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      timeZones.forEach(({ label, tz }) => {
        newTimes[label] = new Date().toLocaleTimeString('en-US', { timeZone: tz });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="widget-container">
      <h2>World Clock</h2>
      <ul>
        {timeZones.map(({ label }) => (
          <li key={label} className="world-clock-item">
            <strong>{label}:</strong> {times[label]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldClock;
