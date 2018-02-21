// this reducer will control board state and will have mulitple cases to catch different types of actions

export default function (state = [], action) {
  switch (action.type) {
    case 'EXAMPLE CASE':
      return [...state, action.payload];
    default:
      return state;
  }
}

// TODO: CREATE THIS REDUCER 