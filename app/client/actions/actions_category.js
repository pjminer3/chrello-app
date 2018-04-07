export const NEW_CATEGORY = 'NEW_CATEGORY';

export const createNewCategory = (categoryName) => {
    return {
      type: NEW_CATEGORY,
      payload: categoryName,
    };
  };

  