export const NEW_CARD = 'NEW_CARD';
export const DELETE_CARD = 'DELETE_CARD';

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
  