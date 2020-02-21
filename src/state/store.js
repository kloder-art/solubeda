import { createStore } from 'redux';
import { TYPES } from './actions';

const initState = {
  theme: 'light',
  sidebar: true
};

const reducer = (state=initState, action) => {
  if (action.type === TYPES.SET_THEME) {
    return { ...state, theme: action.payload };
  } else if (action.type === TYPES.SET_SIDEBAR_VISIBILITY) {
    return { ...state, sidebar: action.payload };
  }
  return state;
};

export default createStore(reducer);
