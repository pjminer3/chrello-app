// this reducer will control board state and will have mulitple cases to catch different types of actions
import {
  UPDATE_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  NEW_BOARD,
  FETCH_BOARDS_SUCCESS,
 } from '../actions';

let boardId = 4;

// initiate application state with 'Personal Boards' category and no boards
export default function (state = { byId: {}, allIds: [] }, action) {
  const { payload } = action;
  let newState;

  switch (action.type) {
    case NEW_BOARD:
      // payload = {boardName, categoryName}
      newState = Object.assign({}, state)

      newState.byId[payload.categoryId].boards.push([payload.boardName, boardId]);
      boardId++;

      return newState;

    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    
    case FETCH_BOARDS_SUCCESS:
      // add boards to proper category arrays
      newState = Object.assign({}, state);
      
      for (let i = 0; i < payload.length; i++) {
        let board = payload[i];
        newState.byId[board.categoryId].boards.push([board.boardName, board.boardId]);
      } 
      return newState;

    case UPDATE_CATEGORIES:
      // payload = [{ categoryName, id}];
      newState = Object.assign({}, state);

      payload.forEach(category => {
        console.log(category);
        if (!newState.byId[category.id]) {
          console.log('adding new category: ', category.categoryName);
          newState.byId[category.id] = {
            id: category.id,
            categoryName: category.categoryName,
            boards: [],
          };
          newState.allIds.push([category.categoryName, category.id]);
        }
      });

      return newState;

    default:
      return state;
  }
}