import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
  position: fixed;
  width: 100vw; height: 4px;
  @media (man-width: 920px) {
    height: 2px;
  }
  left: 0; bottom: 0;
  .progress {
    transition: all ${props => props.timeStep/1000}s;
    transition-timing-function: linear;
    height: 100%;
    width: ${props => props.percentage}%;
    background: #cc0000;
  }
`;

let interval = null, time = 0, lastAction = 'idle', unmounted = false;

const Timer = (props) => {
  const [percentage, setPercentage] = useState(0);

  const startTimer = () => {
    time = 0;
    setPercentage(0);
    interval = setInterval(() => {
      time += props.timeStep;
      const perc = Math.floor((time * 100) / props.totalTime);
      if (perc >= 100) {
        clearInterval(interval);
        if (!unmounted) {setPercentage(100);}
      } else {
        if (!unmounted) {setPercentage(perc);}
      }
    }, props.timeStep);
  };

  const resetTimer = () => {
    clearInterval(interval);
    startTimer();
  };

  if (lastAction !== props.action) {
    if (props.action === 'start') {
      startTimer();
    } else if (props.action === 'reset') {
      resetTimer();
    }
    lastAction = props.action;
  }

  useEffect(() => {
    unmounted = false;
    return () => {
      unmounted = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledTimer percentage={percentage} timeStep={props.timeStep}>
      <div className={'progress'} />
    </StyledTimer>
  );
};

Timer.defaultProps = {
  timeStep: 500,
  totalTime: 3000
};

export default Timer;


