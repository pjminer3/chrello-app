// this reducer will control board state and will have mulitple cases to catch different types of actions
import { NEW_CATEGORY } from '../actions';

export default function (state = { byId: { id: 'Personal Boards', boards: [] }, allIds: ['Personal Boards'] }, action) {
  const { payload } = action;

  switch (action.type) {
    case NEW_CATEGORY:
      console.log('We are inside NEW_CATEOGRY');
      // edge case if its a duplicate category name
      if (state.byId[payload]) {
        return state;
      }

      // add new Category to total categories
      return {
        byId: Object.assign({}, state.byId, { payload: { id: payload, boards: [] } }),
        allIds: [...state.allIds, action.payload],
      };

    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 