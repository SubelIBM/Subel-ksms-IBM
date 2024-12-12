import React, { useState, useRef } from 'react';
import './styles.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="widget-container">
      <h2>Stopwatch</h2>
      <p className="time-display">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <button onClick={start} className="widget-button">Start</button>
      <button onClick={stop} className="widget-button">Stop</button>
      <button onClick={reset} className="widget-button">Reset</button>
    </div>
  );
};

export default Stopwatch;