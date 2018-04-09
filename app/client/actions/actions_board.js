export const NEW_BOARD = 'NEW_BOARD';
export const FETCH_BOARDS_REQUEST = 'FETCH_BOARDS_REQUEST';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE';

export const createNewBoard = (boardName, categoryName) => {
    return {
      type: NEW_BOARD,
      payload: { boardName, categoryName },
    };
  };

// to show activity indicator
const fetchBoardRequest = () => {
  console.log('inside fetchBoardRequest');

  return { type: FETCH_BOARDS_REQUEST, };
};

// on successful fetch
const fetchBoardSuccess = (jsonData) => {
  console.log('Inside fetchBoardSuccess');
  console.log('DATA: ', jsonData); 

  return { type: FETCH_BOARDS_SUCCES, };
};

// on failed fetch
const fetchBoardFailure = (err) => {

  return { type: FETCH_BOARDS_FAILURE, };
}

// actual fetching function
export const fetchBoards = (categoryId) => {
  return async (dispatch) => {
    dispatch(fetchBoardRequest());
    try {
      let response = await fetch(`http://127.0.0.1:8080/api/board/${categoryId}`);
      let data = await response.json();
      console.log('BOARD DATA: ', data);
      dispatch(fetchBoardSuccess(data));
    } catch(err) {
      dispatch(fetchBoardFailure(err));
    }
  }
};
