import axios from 'axios';

export const NEW_CATEGORY = 'NEW_CATEGORY';
export const FETCH_CATEGORIES_REQUEST = 'FETCHING_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCHING_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCHING_CATEGORIES_FAILURE';

export const createNewCategory = (categoryName) => {
  return {
    type: NEW_CATEGORY,
    payload: categoryName,
  };
};

// to show activity indicator
export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST
});

// on successful fetch
export const fetchCategoriesSuccess = (jsonData) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories: jsonData,
});

// on failed fetch
export const fetchCategoriesFailure = (err) => ({
  type: FETCH_CATEGORIES_FAILURE,
  error: err,
});

// actual fetching function
export const fetchCategories = () => {
  return async (dispatch) => {
    // trigger the spinner to tell UI we're fetching data
    dispatch(fetchCategoriesRequest());
    try {
      // on success
      let response = await fetch('localhost:8080/api/category');
      dispatch(fetchCategoriesSuccess(response));
    } catch(err) {
      // on failure
      dispatch(fetchCategoriesFailure(err));
    }
  }
}


  