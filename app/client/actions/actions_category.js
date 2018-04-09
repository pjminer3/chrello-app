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
export const fetchCategoriesRequest = () => {
  console.log('inside fetchCategoriesRequest');
  
  return {
    type: FETCH_CATEGORIES_REQUEST
  }};

// on successful fetch
export const fetchCategoriesSuccess = (jsonData) => {
  console.log('Inside fetchCategoriesSuccess');
  console.log('DATA: ', jsonData); 

  // create initial category state provided by DB
  const dbState = { byId: {}, allIds: [] };
  jsonData.forEach(obj => {
    let { categoryName } = obj;
    dbState.byId[categoryName] = {
      id: categoryName,
      boards: [],
    };
    dbState.allIds.push(categoryName);
  });

  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories: dbState,
}};

// on failed fetch
export const fetchCategoriesFailure = (err) => {
  console.log('Inside fetchCategoriesFailure');
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error: err,
  };
}

// actual fetching function
export const fetchCategories = () => {
  // FINISH UP THE REDUCERS FOR THE BELOW ACTIONS
  return async (dispatch) => {
    // trigger the spinner to tell UI we're fetching data
    dispatch(fetchCategoriesRequest());
    try {
      // on success
      let response = await fetch('http://127.0.0.1:8080/api/category');
      let data = await response.json();

      dispatch(fetchCategoriesSuccess(data));
    } catch(err) {
      // on failure
      dispatch(fetchCategoriesFailure(err));
    }
  }
}
