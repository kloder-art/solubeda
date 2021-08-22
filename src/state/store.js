import { createStore } from 'redux';
import { TYPES } from './actions';

const initState = {
  sidebar: true,
};

const reducer = (state = initState, action) => {
  if (action.type === TYPES.SET_SIDEBAR_VISIBILITY) {
    return { ...state, sidebar: action.payload };
  }
  return state;
};

export default createStore(reducer);
