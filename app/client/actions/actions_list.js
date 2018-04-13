export const NEW_LIST = 'NEW_LIST';
export const FETCH_LISTS_REQUEST = 'FETCH_LISTS_REQUEST';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const FETCH_LISTS_FAILURE = 'FETCH_LISTS_FAILURE';

export const createNewList = (listName, boardName) => {
  return {
    type: NEW_LIST,
    payload: { listName, boardName },
  };
};
  
// to show activity indicator
export const fetchListsRequest = () => { 
  return {
    type: FETCH_LISTS_REQUEST
  }};

// on successful fetch
export const fetchListsSuccess = (jsonData) => {
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
    type: FETCH_LISTS_SUCCESS,
    categories: dbState,
}};

// on failed fetch
export const fetchListsFailure = (err) => {
  return {
    type: FETCH_LISTS_FAILURE,
    error: err,
  };
}

// actual fetching function
export const fetchLists = (boardId) => {
  // FINISH UP THE REDUCERS FOR THE BELOW ACTIONS
  console.log('INSIDE FETCH LISTS');
  return async (dispatch) => {
    // trigger the spinner to tell UI we're fetching data
    dispatch(fetchListsRequest());
    try {
      // on success
      console.log(boardId);
      let response = await fetch('http://127.0.0.1:8080/api/list/${boardId}');
      // response = [{'categoryName': 'Personal Boards', 'id': 1}, {'categoryName': 'TMs', 'id': 2}]
      let data = await response.json();
      console.log('List Data: ', data);

      // dispatch(fetchListsSuccess(data));
    } catch(err) {
      // on failure
      dispatch(fetchListsFailure(err));
    }
  }
}