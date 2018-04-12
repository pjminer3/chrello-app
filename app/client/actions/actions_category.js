export const NEW_CATEGORY = 'NEW_CATEGORY';
export const FETCH_CATEGORIES_REQUEST = 'FETCHING_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCHING_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCHING_CATEGORIES_FAILURE';

let categoryId = 2;
export const createNewCategory = (categoryName) => {
  categoryId++;
  return {
    type: NEW_CATEGORY,
    payload: {categoryName, categoryId },
  };
};

// to show activity indicator
export const fetchCategoriesRequest = () => {  
  return {
    type: FETCH_CATEGORIES_REQUEST
  }};

// on successful fetch
export const fetchCategoriesSuccess = (jsonData) => {
  // jsonData = [{'categoryName': 'Personal Boards', 'id': 1}, {'categoryName': 'TMs', 'id': 2}]

  // create initial category state provided by DB
  const dbState = { byId: {}, allIds: [] };

  // populate initial category state
  jsonData.forEach(obj => {
    let { id, categoryName } = obj;

    dbState.byId[id] = {
      id,
      categoryName,
      boards: [],
    };

    dbState.allIds.push([categoryName, id]);
  });

  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories: dbState,
}};

// on failed fetch
export const fetchCategoriesFailure = (err) => {
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
      // response = [{'categoryName': 'Personal Boards', 'id': 1}, {'categoryName': 'TMs', 'id': 2}]
      let data = await response.json();

      dispatch(fetchCategoriesSuccess(data));
    } catch(err) {
      // on failure
      dispatch(fetchCategoriesFailure(err));
    }
  }
}
