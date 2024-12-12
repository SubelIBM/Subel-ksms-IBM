import React, { useState, useEffect } from 'react';

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmSet, setAlarmSet] = useState([]);
  const [alarmTriggered, setAlarmTriggered] = useState(null); // Track which alarm is triggered
  const [snoozeTime, setSnoozeTime] = useState(5); // Default snooze time: 5 minutes
  const [selectedDays, setSelectedDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  // Function to handle alarm setting
  const handleAddAlarm = () => {
    if (alarmTime) {
      setAlarmSet((prevState) => [
        ...prevState,
        { time: alarmTime, days: { ...selectedDays }, triggered: false },
      ]);
      setAlarmTime('');
    }
  };

  // Function to remove an alarm
  const handleRemoveAlarm = (index) => {
    setAlarmSet((prevState) => prevState.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const alarmInterval = setInterval(() => {
      // Check if any alarm matches the current time and is scheduled for the current day
      alarmSet.forEach((alarm, index) => {
        const currentTime = new Date().toLocaleTimeString().slice(0, 5);
        const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });

        // If no days are selected, we treat it as a daily alarm
        const shouldTriggerAlarm =
          alarm.days[currentDay] ||
          Object.values(alarm.days).every((value) => !value); // No days selected, trigger daily

        if (alarm.time === currentTime && shouldTriggerAlarm && !alarm.triggered) {
          alert(`Alarm ringing for ${alarm.time}`);
          setAlarmSet((prevState) =>
            prevState.map((alarmItem, idx) =>
              idx === index ? { ...alarmItem, triggered: true } : alarmItem
            )
          );
          setAlarmTriggered(index); // Set which alarm triggered
        }
      });
    }, 1000);

    return () => clearInterval(alarmInterval);
  }, [alarmSet]);

  const handleSnooze = () => {
    const snoozeAlarm = alarmSet[alarmTriggered];
    const alarmDate = new Date();
    alarmDate.setMinutes(alarmDate.getMinutes() + snoozeTime); // Add 5 minutes for snooze
    const newAlarmTime = alarmDate.toLocaleTimeString().slice(0, 5);

    setAlarmSet((prevState) =>
      prevState.map((alarmItem, idx) =>
        idx === alarmTriggered
          ? { ...alarmItem, time: newAlarmTime, triggered: false }
          : alarmItem
      )
    );
    setAlarmTriggered(null); // Reset triggered state after snooze
  };

  const handleStopAlarm = () => {
    setAlarmSet((prevState) =>
      prevState.map((alarmItem, idx) =>
        idx === alarmTriggered ? { ...alarmItem, triggered: false } : alarmItem
      )
    );
    setAlarmTriggered(null); // Reset triggered state after stop
  };

  const handleDaySelect = (day) => {
    setSelectedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day], // Toggle the selected state
    }));
  };

  return (
    <div className="alarm">
      <h2>Set Alarm</h2>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
      />
      <button onClick={handleAddAlarm}>Add Alarm</button>
      <div>
        <h3>Select Days:</h3>
        <div className="days-container">
          {Object.keys(selectedDays).map((day) => (
            <button
              key={day}
              className={`day-button ${selectedDays[day] ? 'selected' : ''}`}
              onClick={() => handleDaySelect(day)} // Toggle the day selection
            >
              {day.charAt(0)} {/* Display only the first letter */}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3>Set Alarms:</h3>
        {alarmSet.map((alarm, index) => (
          <div key={index}>
            <span>
              Alarm set for {alarm.time} on{' '}
              {Object.keys(alarm.days)
                .filter((day) => alarm.days[day])
                .join(', ') || 'Every day'}
            </span>
            <button onClick={() => handleRemoveAlarm(index)}>Remove</button>
          </div>
        ))}
      </div>

      {alarmTriggered !== null && ( // Only show snooze and stop buttons after the alarm rings
        <div>
          <button className="snooze" onClick={handleSnooze}>Snooze</button>
          <button className="stop" onClick={handleStopAlarm}>Stop Alarm</button>
        </div>
      )}

      {alarmSet.length > 0 && alarmTriggered === null && (
        <div>
          <p>{alarmSet.length} alarm(s) set.</p>
        </div>
      )}
    </div>
  );
};

export default Alarm;
