import React from 'react';
import {
    TransitionGroup,
    Transition as ReactTransition,
} from 'react-transition-group';

const timeout = 150;
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0
  },
};

const Transition = ({ children, animationKey }) => (
  <TransitionGroup>
    <ReactTransition
      key={animationKey}
      timeout={{ enter: timeout, exit: timeout }}
    >
      {status => (
        <div style={{ ...getTransitionStyles[status] }}>
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
);

export default Transition;
