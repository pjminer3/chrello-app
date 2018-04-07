import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
} from '../actions';

export default (state = false, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return true;
        case FETCH_CATEGORIES_SUCCESS:
            return false;
        case FETCH_CATEGORIES_FAILURE:
            return false;
        default: 
            return state;
    }
}