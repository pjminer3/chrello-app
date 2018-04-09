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

  return { type: FETCH_BOARD_REQUEST, };
};

// on successful fetch
const fetchBoardSuccess = (jsonData) => {
  console.log('Inside fetchBoardSuccess');
  console.log('DATA: ', jsonData); 

};

// on failed fetch
const fetchBoardFailure = (err) => {

}

// actual fetching function
export const fetchBoards = () => {
  
}