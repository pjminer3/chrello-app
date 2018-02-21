// this reducer will control board state and will have mulitple cases to catch different types of actions

export default function (state = { byId: {}, allIds: [] }, action) {
  console.log('Inside Lists Reducer')
  switch (action.type) {
    case 'EXAMPLE CASE':
      return [...state, action.payload];
    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 