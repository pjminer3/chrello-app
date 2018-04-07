export const SET_ACTIVE_BOARD = 'SET_ACTIVE_BOARD';

export const setActiveBoard = (boardName) => {
    return {
      type: SET_ACTIVE_BOARD,
      payload: boardName,
    };
  };