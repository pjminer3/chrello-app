// this reducer will add another ticket to the global state

export default function (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_TICKET':
      return [...state, action.payload];
    default:
      return state;
  }
}
