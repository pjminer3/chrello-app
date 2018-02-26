// the reducer that sets the active board property of state

import { SET_ACTIVE_BOARD } from '../actions';

export default function (state = '', action) {
  switch (action.type) {
    case SET_ACTIVE_BOARD:
      console.log('Setting Active Board: ', action.payload);
      return action.payload;
    default:
      return state;
  }
}
