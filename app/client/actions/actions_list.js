export const NEW_LIST = 'NEW_LIST';
export const FETCH_LISTS_REQUEST = 'FETCH_LISTS_REQUEST';
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS';
export const FETCH_LISTS_FAILURE = 'FETCH_LISTS_FAILURE';
export const CLEAR_LISTS = 'CLEAR_LISTS';
export const UPDATE_LISTS = 'UPDATE_LISTS';

export const updateLists = (lists) => { 
  // lists: {'1': {'listName': 'Chrello Board-', 'id': 1}, '2': {'listName': 'Toy Problems-', 'id': 2}}
  return { type: UPDATE_LISTS, lists, }
};
  
// to show activity indicator
export const fetchListsRequest = () => { 
  return {
    type: FETCH_LISTS_REQUEST
  }};

// on successful fetch
export const fetchListsSuccess = (lists) => {
  // lists = {'1': {'listName': 'Chrello Board-', 'id': 1}, '2': {'listName': 'Toy Problems-', 'id': 2}}

  console.log('inside fetchListsSuccess action creator: ', lists);
  return {
    type: FETCH_LISTS_SUCCESS,
    lists,
  }
};

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
  return async (dispatch) => {
    // trigger the spinner to tell UI we're fetching data
    dispatch(fetchListsRequest());
    try {
      // on success
      let response = await fetch(`http://127.0.0.1:8080/api/list/${boardId}`);
      // response = [{'listName': 'Chrello Board-', 'id': 1}, {'listName': 'Toy Problems-', 'id': 2}]
      let data = await response.json();
      console.log('List Data: ', data);
      const listObj = {};

      data.forEach(list => {
        listObj[list.id] = list;
      });

      dispatch(fetchListsSuccess(listObj));
    } catch(err) {
      // on failure
      dispatch(fetchListsFailure(err));
    }
  }
}

export const createListInDatabase = (boardId, listName) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://127.0.0.1:8080/api/list/${boardId}/${listName}`, {
        method: 'POST',
      });
      let lists = await response.json();
      dispatch(updateLists(lists));
    } catch (err) {
      console.log('There was an error in adding and/or updating lists');
    }
  }
}

export const clearLists = () => {
  return {
    type: CLEAR_LISTS,
  }
}