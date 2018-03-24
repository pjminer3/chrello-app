// this reducer will control card state
import { NEW_CARD } from '../actions';

export default function (state = { byId: {}, allIds: [] }, action) {
  const { type, payload } = action;

  switch (type) {
    case NEW_CARD:
      // add new card by ID to 
      return [...state, payload];
    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 