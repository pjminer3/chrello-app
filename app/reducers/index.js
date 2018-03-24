import { combineReducers } from 'redux';

import Categories from './reducer_categories';
import Boards from './reducer_boards';
import Lists from './reducer_lists';
import ActiveBoard from './reducer_activeBoard';

const rootReducer = combineReducers({
  Categories,
  Boards,
  Lists,
  ActiveBoard,
});

export default rootReducer;
