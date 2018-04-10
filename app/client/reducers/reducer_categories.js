// this reducer will control board state and will have mulitple cases to catch different types of actions
import {
  NEW_CATEGORY,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  NEW_BOARD,
  FETCH_BOARDS_SUCCESS,
 } from '../actions';

// initiate application state with 'Personal Boards' category and no boards
export default function (state = { byId: {}, allIds: [] }, action) {
  const { payload } = action;

  switch (action.type) {
    case NEW_CATEGORY:
      // payload = categoryName  

      // edge case if its a duplicate category name
      if (state.byId[payload]) {
        return state;
      }

      // add new Category to total categories
      return {
        byId: Object.assign({}, state.byId, { [payload]: { id: payload, boards: [] } }),
        allIds: [...state.allIds, action.payload],
      };
    case NEW_BOARD:
      // payload = {boardName, categoryName}

      state.byId[payload.categoryName].boards.push(payload.boardName);

      return Object.assign({}, state);

    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    
    case FETCH_BOARDS_SUCCESS:
      console.log('****** INSIDE REDUCER: ', payload);

      for (let i = 0; i < payload.length; i++) {
        let board = payload[i];
        state.byId[board.categoryName].boards.push(board.boardName);
        console.log('********** ', board);
      } 
      return Object.assign({}, state);

    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 