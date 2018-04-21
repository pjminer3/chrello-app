export const NEW_CARD = 'NEW_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE';
export const UPDATE_CARDS = 'UPDATE_CARDS';

const updateCards = (arrayOfCards, listId) => {
  return {
    type: UPDATE_CARDS,
    cards: arrayOfCards,
    listId,
  }
}

export const createNewCard = (cardContent, listName) => {
    return {
      type: NEW_CARD,
      payload: { cardContent, listName },
    };
  };

  export const deleteCard = (listName, index) => {
    return {
      type: DELETE_CARD,
      payload: { listName, index },
    };
  };
  
  // to show activity indicator
export const fetchCardsRequest = () => { 
  return {
    type: FETCH_CARDS_REQUEST
  }};

// on successful fetch
export const fetchCardsSuccess = (jsonData, listId) => {
  // jsonData = [{'cardContent': 'card1-', 'id': 1}, {'cardContent': 'card2-', 'id': 2}]

  console.log('inside fetchCardsSuccess action creator: ', jsonData);
  return {
    type: FETCH_CARDS_SUCCESS,
    cards: jsonData,
    listId,
  }
};

// on failed fetch
export const fetchCardsFailure = (err) => {
  return {
    type: FETCH_CARDS_FAILURE,
    error: err,
  };
}

// actual fetching function
export const fetchCards = (listId) => {
  return async (dispatch) => {
    // trigger the spinner to tell UI we're fetching data
    dispatch(fetchCardsRequest());
    try {
      // on success
      let response = await fetch(`http://127.0.0.1:8080/api/card/${listId}`);
      // jsonData = [{'cardContent': 'card1-', 'id': 1}, {'cardContent': 'card2-', 'id': 2}]
      let data = await response.json();
      console.log('Card Data: ', data);

      dispatch(fetchCardsSuccess(data, listId));
    } catch(err) {
      // on failure
      dispatch(fetchCardsFailure(err));
    }
  }
}

export const addCardToList = (listId, cardContent) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://127.0.0.1:8080/api/card/${listId}/${cardContent}`, {
        method: 'POST',
      });
      let arrayOfCards = await response.json();
      dispatch(updateCards(arrayOfCards, listId));
    } catch (err) {
      console.log('There was an error in creating the new card and/or retreiving cards from the database: ', err);
    }
  }
};

export const deleteCardFromList = (listId, cardId) => {
  console.log('Inside Delete Card (it\'s been called');
  return async (dispatch) => {
    try {
      let response = await fetch(`http://127.0.0.1:8080/api/card/${listId}/${cardId}`, {
        method: 'DELETE',
      });
      let arrayOfRemainingCards = await response.json();
      dispatch(updateCards(arrayOfRemainingCards, listId));
    } catch (err) {

    }
  }
}
