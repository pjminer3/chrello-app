import { combineReducers } from 'redux';

import Categories from './reducer_categories';
import Boards from './reducer_boards';
import Lists from './reducer_lists';
import Cards from './reducer_cards';
import ActiveBoard from './reducer_activeBoard';

const rootReducer = combineReducers({
  Categories,
  Boards,
  Lists,
  Cards,
  ActiveBoard,
});

export default rootReducer;
