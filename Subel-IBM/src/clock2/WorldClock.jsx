import React, { useState, useEffect } from 'react';

const WorldClock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  const cities = [
    { name: 'New York', offset: -5 },
    { name: 'London', offset: 0 },
    { name: 'Tokyo', offset: 9 },
    { name: 'Sydney', offset: 11 },
    { name: 'Paris', offset: 1 }
  ];

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleString()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getCityTime = (offset) => {
    const date = new Date();
    date.setHours(date.getHours() + offset);
    return date.toLocaleString();
  };

  return (
    <div className="world-clock">
      <h2>World Clock</h2>
      <div className="time">{time}</div>
      <div>
        {cities.map((city, index) => (
          <div key={index}>
            <h3>{city.name}</h3>
            <div>{getCityTime(city.offset)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;
