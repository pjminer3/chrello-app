
// ------------------- BEGINNING OF ACTION CREATORS

const NEW_CATEGORY = 'NEW_CATEGORY';
const NEW_BOARD = 'NEW_BOARD';

const createNewCategory = (categoryName) => {
  console.log('This is New Category name: ', categoryName);
  return {
    type: NEW_CATEGORY,
    payload: categoryName,
  };
};

const createNewBoard = (boardName) => {
  console.log('This is New Board Name: ', boardName);
  return {
    type: NEW_BOARD,
    payload: boardName,
  };
};


// ------------------- END OF ACTION CREATORS

module.exports = {
  createNewCategory,
  NEW_CATEGORY,
  createNewBoard,
  NEW_BOARD,
};
