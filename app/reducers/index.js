import { combineReducers } from 'redux';

import Projects from './reducer_projects';
import Boards from './reducer_boards';
import Lists from './reducer_lists';
import Cards from './reducer_cards';

const rootReducer = combineReducers({
  Projects,
  Boards,
  Lists,
  Cards,
});

export default rootReducer;
