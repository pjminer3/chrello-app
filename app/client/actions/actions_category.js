export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

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

export const updateCategories = (jsonData) => {
  return {type: UPDATE_CATEGORIES, payload: jsonData};
}

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

export const postCategory = (categoryName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://127.0.0.1:8080/api/category/${categoryName}`, {
        method: 'POST',
      });
      let allCategoriesData = await response.json();
      dispatch(updateCategories(allCategoriesData));
    } catch(err) {
      console.log('err creating post request');
    }
  }
}
