import { combineReducers } from 'redux';

import Categories from './reducer_categories';
import Boards from './reducer_boards';
import Lists from './reducer_lists';
import Cards from './reducer_cards';

const rootReducer = combineReducers({
  Categories,
  Boards,
  Lists,
  Cards,
});

export default rootReducer;
