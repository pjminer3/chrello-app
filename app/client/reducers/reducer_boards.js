// this reducer controls board state and has mulitple cases to catch different types of actions

import { NEW_BOARD, NEW_LIST, FETCH_BOARDS_FAILURE, FETCH_BOARDS_SUCCESS, CLEAR_BOARDS } from '../actions';

let boardId = 4;

export default function (state = { byId: {}, allIds: [] }, action) {
  const { payload } = action;
  let newState;
  let lists;

  switch (action.type) {
    case NEW_BOARD:
      // payload = { boardName, categoryId }

      // edge case: duplicate boardName
      if (state.byId[payload.boardName]) {
        return state;
      }

      newState = Object.assign({}, state);
      newState.byId[boardId] = {
        id: boardId,
        boardName: payload.boardName,
        categoryId: payload.categoryId,
        lists: [],
      };
      newState.allIds = [payload.boardName, ...newState.allIds];

      boardId++;

      return newState;

    case NEW_LIST:
      // payload = { listName, boardName }

      // edge case: duplicate listName
      if (state.byId[payload.boardName].lists.indexOf(payload.listName) >= 0) {
        return state;
      }

      // define new state and lists
      newState = JSON.parse(JSON.stringify(state));
      lists = newState.byId[payload.boardName].lists;

      // add list to proper board
      newState.byId[payload.boardName].lists = [payload.listName, ...lists];

      return newState;

    case FETCH_BOARDS_SUCCESS:
      // newState = {byId: {}, allIds: []}

      newState = Object.assign({}, state);

      payload.forEach( board => {
        newState.byId[board.boardId] = {
          id: board.boardId,
          boardName: board.boardName,
          categoryId: board.categoryId,
          lists: [],
        }
        newState.allIds.push([board.boardName, board.boardId]);
      });
      return newState;    

    default:
      return state;
  }
}
