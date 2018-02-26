
// ------------------- BEGINNING OF ACTION CREATORS

const NEW_CATEGORY = 'NEW_CATEGORY';
const NEW_BOARD = 'NEW_BOARD';
const NEW_LIST = 'NEW_LIST';

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
    type: NEW_BOARD,
    payload: { listName, boardName },
  };
};


// ------------------- END OF ACTION CREATORS

module.exports = {
  createNewCategory,
  NEW_CATEGORY,
  createNewBoard,
  NEW_BOARD,
  NEW_LIST,
  createNewList,
};
