export const NEW_BOARD = 'NEW_BOARD';
export const FETCH_BOARDS_REQUEST = 'FETCH_BOARDS_REQUEST';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE';

export const createNewBoard = (boardName, categoryId) => {
    return {
      type: NEW_BOARD,
      payload: { boardName, categoryId },
    };
  };

// to show activity indicator
const fetchBoardRequest = () => {
  return { type: FETCH_BOARDS_REQUEST, };
};

// on successful fetch
const fetchBoardSuccess = (obj) => {
  const { data } = obj;
  const { categoryName, categoryId } = obj;

  const payload = [];

  data.forEach(obj => {
    const boardObj = {};
    boardObj.boardName = obj.boardName,
    boardObj.boardId = obj.id;
    boardObj.categoryName = categoryName;
    boardObj.categoryId = categoryId;
    payload.push(boardObj);
  });

  // payload is an array of { boardName, boardId, categoryName, categoryId } objects for category
  return { type: FETCH_BOARDS_SUCCESS, payload };
};

// on failed fetch
const fetchBoardFailure = (err) => {

  return { type: FETCH_BOARDS_FAILURE, };
}

// actual fetching function
export const fetchBoards = ({categoryId, categoryName}) => {
  return async (dispatch) => {
    dispatch(fetchBoardRequest());
    try {
      let response = await fetch(`http://127.0.0.1:8080/api/board/${categoryId}`);
      let data = await response.json();
      // [{'boardName':'_____', 'id':_}] array of objects
      dispatch(fetchBoardSuccess({ data, categoryName, categoryId }));
    } catch(err) {
      dispatch(fetchBoardFailure(err));
    }
  }
};
