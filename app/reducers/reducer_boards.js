// this reducer will control board state and will have mulitple cases to catch different types of actions

export default function (state = { byId: {}, allIds: [] }, action) {
  const { payload } = action;

  switch (action.type) {
    case 'NEW_BOARD':
      // PAYLOAD = { boadName, categoryName }
      console.log('We are inside NEW_BOARD reducer');
      // edge case if its a duplicate board name
      if (state.byId[payload.boardName]) {
        return state;
      }

      // add board to boards application state
      return {
        byId: Object.assign({}, state.byId, { [payload.boardName]: { id: payload.boardName, category: payload.categoryName, cards: [] } }),
        allIds: [...state.allIds, payload.boardName],
      };
    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 