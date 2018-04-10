// this reducer controls board state and has mulitple cases to catch different types of actions

import { NEW_BOARD, NEW_LIST, FETCH_BOARDS_FAILURE, FETCH_BOARDS_SUCCESS } from '../actions';

export default function (state = { byId: {}, allIds: [] }, action) {
  const { payload } = action;
  let newState;
  let lists;

  switch (action.type) {
    case NEW_BOARD:
      // payload = { boadName, categoryId }

      // edge case: duplicate boardName
      if (state.byId[payload.boardName]) {
        return state;
      }

      // add board to boards application state
      return {
        byId: Object.assign({}, state.byId, {
          [payload.boardName]: {
            id: payload.boardName,
            categoryId: payload.categoryId,
            lists: [],
          },
        }),
        allIds: [payload.boardName, ...state.allIds],
      };

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
        newState = {byId: {}, allIds: []}

        payload.forEach( board => {
          newState.byId[board.boardName] = {
            id: board.boardName,
            category: board.categoryName,
            lists: [],
          }
          newState.allIds.push(board.boardName);
        })
        return newState;
        // TODO: FIGURE OUT WHY THESE AREN'T RENDERING

    default:
      return state;
  }
}
