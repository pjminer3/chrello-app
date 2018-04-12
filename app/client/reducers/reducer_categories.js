// this reducer will control board state and will have mulitple cases to catch different types of actions
import {
  NEW_CATEGORY,
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
    case NEW_CATEGORY:
      // payload = { categoryName, categoryId }

      // add new Category to total categories
      return {
        byId: Object.assign({}, state.byId, { [payload.categoryId]: { id: payload.categoryId, categoryName: payload.categoryName, boards: [] } }),
        allIds: [...state.allIds, [payload.categoryName, payload.categoryId]],
      };
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

    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 