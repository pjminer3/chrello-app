// this reducer will control list state and will have mulitple cases to catch different types of actions
import { NEW_LIST, NEW_CARD, DELETE_CARD, FETCH_LISTS_SUCCESS, FETCH_CARDS_SUCCESS, CLEAR_LISTS, UPDATE_LISTS } from '../actions';

export default function (state = {}, action) {
  const { type, payload } = action;
  let newState;
  let cards;

  switch (type) {
    case UPDATE_LISTS: 
    // action.lists: {'1': {'listName': 'Chrello Board-', 'id': 1}, '2': {'listName': 'Toy Problems-', 'id': 2}}  
      console.log('action.lists: ', action.lists);
      console.log('state (before adding new list): ', state);

      newState = Object.assign({}, state);
      console.log('newState: ', newState);

      
      for (let i = 0; i < action.lists.length; i++) {
        let listId = action.lists[i].id;
        if (!newState[listId]) {
          newState[listId] = {
            listName: action.lists[i].listName,
            id: listId,
            cards: [],
          }
        }
      }
      console.log('newState after list added: ', newState);
      return newState;

    // case NEW_LIST:
    //   // payload: { listName: listName, boardName: boardName }
    //   // edge case if it's a duplicate list name
    //   if (state.byId[payload.listName]) {
    //     return state;
    //   }
    //   // add list to lists application state
    //   return {
    //     byId: Object.assign(
    //       {}, // new empty object
    //       state.byId, // old state.byID
    //       { // add the new list
    //         [payload.listName]: {
    //           id: payload.listName,
    //           board: payload.boardName,
    //           cards: [],
    //         },
    //       },
    //     ),
    //     allIds: [payload.listName, ...state.allIds],
    //   };

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
      return action.lists;

    case FETCH_CARDS_SUCCESS:
      newState = Object.assign({}, state);

      newState[action.listId].cards = action.cards;

      return newState;

    case CLEAR_LISTS:
      return [];

    default:
      return state;
  }
}
