import React, { useEffect, useState } from 'react';

const Article = () => {
  const [isRunning, setIsRunning] = useState(false); 
  const [seconds, setSeconds] = useState(0); 
  const [minutes, setMinutes] = useState(0); 
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(prevMinutes => prevMinutes + 1);
        } else {
          setSeconds(prevSeconds => prevSeconds + 1);
        }
      }, 250);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleClear = () => {
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Chronomètre</h1>
      <h2>
        {minutes < 10 ? `0${minutes}` : minutes} : {" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <button onClick={handleStart}className="btn-success">Start</button>
      <button onClick={handleClear}className="btn-primary">Clear</button>
      <button onClick={handleStop}className="btn-danger">Stop</button>
    </div>
  );
}

export default Article;
