// this reducer will control list state and will have mulitple cases to catch different types of actions
import { NEW_LIST } from '../actions';

export default function (state = { byId: {}, allIds: [] }, action) {
  const { type, payload } = action;

  switch (type) {
    case NEW_LIST:
      // payload: { listName: listName, boardName: boardName }

      // edge case if it's a duplicate list name
      if (state.byId[payload.listName]) {
        return state;
      }

      // add list to lists application state
      return {
        byId: Object.assign({}, state.byId, { [payload.listName]: { id: payload.listName, board: payload.boardName, cards: [] } }),
        allIds: [payload.listName, ...state.allIds],
      };
    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 