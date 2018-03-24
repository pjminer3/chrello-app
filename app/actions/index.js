
// ------------------- BEGINNING OF ACTION CREATORS

const NEW_CATEGORY = 'NEW_CATEGORY';
const NEW_BOARD = 'NEW_BOARD';
const NEW_LIST = 'NEW_LIST';
const NEW_CARD = 'NEW_CARD';
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

const createNewCard = (cardName, listName) => {
  console.log('Card created');
  return {
    type: NEW_CARD,
    payload: { cardName, listName },
  };
};

const setActiveBoard = (boardName) => {
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
  createNewCard,
  NEW_CARD,
  setActiveBoard,
  SET_ACTIVE_BOARD,
};
