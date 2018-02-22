// this reducer will control board state and will have mulitple cases to catch different types of actions
import { NEW_CATEGORY } from '../actions';

export default function (state = { byId: {}, allIds: [] }, action) {
  // clone state
  // const newState = { ...state };

  switch (action.type) {
    case NEW_CATEGORY: // <-- Change to variable
      console.log('We are inside NEW_CATEOGRY');
      // edge case if its a duplicate category name
      if (state.byId[action.payload]) {
        return state;
      }

      // add new Category byId
      state.byId[action.payload] = {
        id: action.payload,
        boards: [],
      };

      // add new Category to total categories
      state.allIds = [action.payload, ...state.allIds];

      return state;
    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 