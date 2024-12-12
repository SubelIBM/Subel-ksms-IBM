// Alarm.js
import React, { useState } from 'react';
import './styles.css';

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [isTriggered, setIsTriggered] = useState(false);
  const [snoozeTime, setSnoozeTime] = useState(5);

  const toggleDay = (day) => {
    setSelectedDays((prev) => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const setAlarm = () => {
    if (!alarmTime) {
      alert('Please select a time for the alarm!');
      return;
    }

    const now = new Date();
    const [hours, minutes] = alarmTime.split(':').map(Number);

    let alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

    // If the alarm time is earlier than the current time, set it for the next day.
    if (alarmDate <= now) {
      alarmDate.setDate(alarmDate.getDate() + 1);
    }

    const timeToAlarm = alarmDate - now;

    setTimeout(() => {
      triggerAlarm();
    }, timeToAlarm);

    alert(`Alarm set for ${alarmDate.toLocaleString()}${selectedDays.length === 0 ? ' (Daily)' : ''}`);
  };

  const triggerAlarm = () => {
    setIsTriggered(true);
    alert('Alarm Triggered!');

    if (selectedDays.length === 0 || selectedDays.includes(daysOfWeek[new Date().getDay()])) {
      setTimeout(() => {
        setIsTriggered(false);
      }, 60000); // Auto-dismiss alarm after 1 minute.
    }
  };

  const snooze = () => {
    setIsTriggered(false);
    setTimeout(() => {
      triggerAlarm();
    }, snoozeTime * 60000);
  };

  const stopAlarm = () => {
    setIsTriggered(false);
  };

  return (
    <div className="widget-container">
      <h2>Alarm</h2>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
        className="widget-input"
      />
      <div className="days-selector">
        {daysOfWeek.map(day => (
          <label key={day}>
            <input
              type="checkbox"
              checked={selectedDays.includes(day)}
              onChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
      <button onClick={setAlarm} className="widget-button">Set Alarm</button>
      {isTriggered && (
        <div>
          <p className="alarm-text">Alarm is ringing!</p>
          <button onClick={snooze} className="widget-button">Snooze ({snoozeTime} min)</button>
          <button onClick={stopAlarm} className="widget-button stop-button">Stop</button>
        </div>
      )}
    </div>
  );
};

export default Alarm;