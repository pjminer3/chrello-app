
import { NEW_CATEGORY, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, createNewCategory, fetchCategories } from './actions_category';
import { NEW_BOARD, createNewBoard } from './actions_board';
import { NEW_LIST, createNewList } from './actions_list';
import { NEW_CARD, DELETE_CARD, createNewCard, deleteCard } from './actions_card';
import { SET_ACTIVE_BOARD, setActiveBoard } from './actions_activeBoard';


export default {
  createNewCategory,
  fetchCategories, 
  NEW_CATEGORY,
  FETCH_CATEGORIES_FAILURE, 
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  createNewBoard,
  NEW_BOARD,
  createNewList,
  NEW_LIST,
  createNewCard,
  NEW_CARD,
  setActiveBoard,
  SET_ACTIVE_BOARD,
  deleteCard,
  DELETE_CARD,
};
