import { combineReducers } from 'redux';

import IncrementTicket from './reducer_incrementTicket';

const rootReducer = combineReducers({
  IncrementTicket,
});

export default rootReducer;
