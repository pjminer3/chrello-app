
// ------------------- BEGINNING OF ACTION CREATORS

const createNewCategory = (categoryName) => {
  console.log('This is New Category name: ', categoryName);
  return {
    type: 'NEW_CATEGORY',
    payload: categoryName,
  };
};


// ------------------- END OF ACTION CREATORS

module.exports = {
  createNewCategory,
};
