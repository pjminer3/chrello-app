// this reducer will control list state and will have mulitple cases to catch different types of actions
import { NEW_LIST, NEW_CARD, DELETE_CARD, FETCH_LISTS_SUCCESS } from '../actions';

export default function (state = [], action) {
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

    case DELETE_CARD:
      // payload: { listName, index}
      newState = JSON.parse(JSON.stringify(state));
      // splice out the index of the list
      newState.byId[payload.listName].cards.splice(payload.index, 1);
      return newState;

    case FETCH_LISTS_SUCCESS:
    // action.lists = [{'listName': 'Chrello Board-', 'id': 1}, {'listName': 'Toy Problems-', 'id': 2}]
    console.log('inside fetch list success reducer: ', action.lists);
      return action.lists;

    default:
      return state;
  }
}
