// this reducer will control board state and will have mulitple cases to catch different types of actions

import { NEW_BOARD } from '../actions';

export default function (state = { byId: {}, allIds: [] }, action) {
  const { payload } = action;

  switch (action.type) {
    case NEW_BOARD:
      // PAYLOAD = { boadName, categoryName }

      // edge case if its a duplicate board name
      if (state.byId[payload.boardName]) {
        return state;
      }

      // add board to boards application state
      return {
        byId: Object.assign({}, state.byId, { [payload.boardName]: { id: payload.boardName, category: payload.categoryName, lists: [] } }),
        allIds: [payload.boardName, ...state.allIds],
      };
    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 