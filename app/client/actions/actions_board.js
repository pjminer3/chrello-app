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
const fetchBoardSuccess = (obj) => {
  const { data } = obj;
  const { categoryName } = obj;
  console.log('Inside fetchBoardSuccess');
  console.log('DATA: ', data); 

  const payload = [];
  let boardObj = {};

  data.forEach(obj => {
    boardObj.boardName = obj.boardName,
    boardObj.categoryName = categoryName;
    payload.push(boardObj);
    boardObj = {};
  });

  // payload is an array of { boardName, categoryName } objects for category
  return { type: FETCH_BOARDS_SUCCESS, payload };
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
      dispatch(fetchBoardSuccess({ data, categoryName: categoryId }));
    } catch(err) {
      dispatch(fetchBoardFailure(err));
    }
  }
};
