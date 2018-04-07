export const NEW_BOARD = 'NEW_BOARD';

export const createNewBoard = (boardName, categoryName) => {
    return {
      type: NEW_BOARD,
      payload: { boardName, categoryName },
    };
  };

