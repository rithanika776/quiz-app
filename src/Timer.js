import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime = 60, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsTimeUp(true);
      onTimeUp(); // Call the callback to notify the quiz that time's up
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup timer
    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div>
      <h3>Time Left: {timeLeft} seconds</h3>
      {isTimeUp && <h3>Time's Up!</h3>}
    </div>
  );
};

export default Timer;
