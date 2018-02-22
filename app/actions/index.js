
// ------------------- BEGINNING OF ACTION CREATORS

const NEW_CATEGORY = 'NEW_CATEGORY';

const createNewCategory = (categoryName) => {
  console.log('This is New Category name: ', categoryName);
  return {
    type: NEW_CATEGORY,
    payload: categoryName,
  };
};


// ------------------- END OF ACTION CREATORS

module.exports = {
  createNewCategory,
  NEW_CATEGORY,
};
