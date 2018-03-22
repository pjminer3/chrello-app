
// ------------------- BEGINNING OF ACTION CREATORS

const NEW_CATEGORY = 'NEW_CATEGORY';
const NEW_BOARD = 'NEW_BOARD';
const NEW_LIST = 'NEW_LIST';
const SET_ACTIVE_BOARD = 'SET_ACTIVE_BOARD';

const createNewCategory = (categoryName) => {
  return {
    type: NEW_CATEGORY,
    payload: categoryName,
  };
};

const createNewBoard = (boardName, categoryName) => {
  return {
    type: NEW_BOARD,
    payload: { boardName, categoryName },
  };
};

const createNewList = (listName, boardName) => {
  return {
    type: NEW_LIST,
    payload: { listName, boardName },
  };
};

const setActiveBoard = (boardName) => {
  console.log('SetActiveBoard called');
  return {
    type: SET_ACTIVE_BOARD,
    payload: boardName,
  };
};


// ------------------- END OF ACTION CREATORS

module.exports = {
  createNewCategory,
  NEW_CATEGORY,
  createNewBoard,
  NEW_BOARD,
  createNewList,
  NEW_LIST,
  setActiveBoard,
  SET_ACTIVE_BOARD,
};
