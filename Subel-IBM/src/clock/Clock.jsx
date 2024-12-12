import React from 'react';
import Stopwatch from './Stopwatch';
import Alarm from './Alarm';
import WorldClock from './WorldClock';
import './styles.css';

const Clock = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Clock Application</h1>
      <div className="widgets">
        <Stopwatch />
        <Alarm />
        <WorldClock />
      </div>
    </div>
  );
};

export default Clock;