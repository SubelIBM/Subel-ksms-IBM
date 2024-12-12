import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
    setLaps([]);
  };

  const lap = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="timer">{formatTime(time)}</div>
      <div>
        <button onClick={startStop}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={lap}>Lap</button>
      </div>
      <div>
        <h3>Laps</h3>
        <ul>
          {laps.map((lapTime, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lapTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
