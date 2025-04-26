import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = String(time % 60).padStart(2, '0');
    if (minutes < 10) {
      return `${minutes}:${seconds}`;
    }
    return `${String(minutes).padStart(2, '0')}:${seconds}`;
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>Time: {formatTime(time)}</div>
      <div>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;