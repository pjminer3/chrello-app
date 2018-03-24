// this reducer will control list state and will have mulitple cases to catch different types of actions
import { NEW_LIST, NEW_CARD } from '../actions';

export default function (state = { byId: {}, allIds: [] }, action) {
  const { type, payload } = action;
  let newState;
  let cards;

  switch (type) {
    case NEW_LIST:
      // payload: { listName: listName, boardName: boardName }

      // edge case if it's a duplicate list name
      if (state.byId[payload.listName]) {
        return state;
      }

      // add list to lists application state
      return {
        byId: Object.assign(
          {}, // new empty object
          state.byId, // old state.byID
          { // add the new list
            [payload.listName]: {
              id: payload.listName,
              board: payload.boardName,
              cards: [],
            },
          },
        ),
        allIds: [payload.listName, ...state.allIds],
      };

    case NEW_CARD:
      // payload = { cardContent, listName }

      // assign newState
      newState = JSON.parse(JSON.stringify(state));

      // add card to end of newState.byId[listName].cards
      cards = newState.byId[payload.listName].cards;
      newState.byId[payload.listName].cards = [...cards, payload.cardContent];

      return newState;

    default:
      return state;
  }
}
