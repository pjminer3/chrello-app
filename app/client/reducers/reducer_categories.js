// this reducer will control board state and will have mulitple cases to catch different types of actions
import {
  UPDATE_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  NEW_BOARD,
  FETCH_BOARDS_SUCCESS,
 } from '../actions';

let boardId = 4;
let categoryId = 3; 

// initiate application state with 'Personal Boards' category and no boards
export default function (state = { byId: {}, allIds: [] }, action) {
  const { payload } = action;

  switch (action.type) {
    case NEW_BOARD:
      // payload = {boardName, categoryName}

      state.byId[payload.categoryId].boards.push([payload.boardName, boardId]);
      boardId++;

      return Object.assign({}, state);

    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    
    case FETCH_BOARDS_SUCCESS:
      // add boards to proper category arrays
      for (let i = 0; i < payload.length; i++) {
        let board = payload[i];
        state.byId[board.categoryId].boards.push([board.boardName, board.boardId]);
      } 
      return Object.assign({}, state);

    case UPDATE_CATEGORIES:
      // payload = [{ categoryName, id}];
      console.log('inside UPDATE CATEGORIES reducer');

      payload.forEach(category => {
        console.log(category);
        if (!state.byId[category.id]) {
          console.log('adding new category: ', category.categoryName);
          state.byId[category.id] = {
            id: category.id,
            categoryName: category.categoryName,
            boards: [],
          };
          state.allIds.push([category.categoryName, category.id]);
        }
      });

      return Object.assign({}, state);

    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 