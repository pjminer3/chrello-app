import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_BOARDS_REQUEST,
    FETCH_BOARDS_SUCCESS,
    FETCH_BOARDS_FAILURE,
} from '../actions';

export default (state = false, action) => {
    

    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
        case FETCH_BOARDS_REQUEST:
            return true;
        case FETCH_CATEGORIES_SUCCESS:
        case FETCH_BOARDS_SUCCESS:
        case FETCH_CATEGORIES_FAILURE:
        case FETCH_BOARDS_FAILURE:
            return false;
        default: 
            return state;
    }
}