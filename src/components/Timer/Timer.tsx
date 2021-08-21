import React, { useState, useEffect } from 'react';

import { StyledTimer } from './StyledTimer';

let interval = null, lastAction = 'idle', unmounted = false;

export const Timer = ({ timeStep = 500, totalTime = 3000, action }) => {
  const [percentage, setPercentage] = useState(0);

  const startTimer = () => {
    let time = 0;
    setPercentage(0);
    interval = setInterval(() => {
      time += timeStep;
      const perc = Math.floor((time * 100) / totalTime);
      if (perc >= 100) {
        clearInterval(interval);
        if (!unmounted) {
          setPercentage(100);
        }
      } else {
        if (!unmounted) {
          setPercentage(perc);
        }
      }
    }, timeStep);
  };

  const resetTimer = () => {
    clearInterval(interval);
    startTimer();
  };

  if (lastAction !== action) {
    if (action === 'start') {
      startTimer();
    } else if (action === 'reset') {
      resetTimer();
    }
    lastAction = action;
  }

  useEffect(() => {
    unmounted = false;
    return () => {
      unmounted = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledTimer percentage={percentage} timeStep={timeStep}>
      <div className={'progress'} />
    </StyledTimer>
  );
};
