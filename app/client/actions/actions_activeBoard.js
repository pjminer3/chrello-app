export const SET_ACTIVE_BOARD = 'SET_ACTIVE_BOARD';

export const setActiveBoard = (board) => {
  // board = [boardName, boardId]
    return {
      type: SET_ACTIVE_BOARD,
      payload: board,
    };
  };