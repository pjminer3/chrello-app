
// ------------------- BEGINNING OF ACTION CREATORS

const createNewCategory = (categoryName) => {
  return {
    type: 'NEW_CATEGORY',
    payload: categoryName,
  };
};


// ------------------- END OF ACTION CREATORS

module.exports = {
  createNewCategory,
};
