import db from '../database';

// Controller functions to handle get/post requests for Categories, Boards, Lists, and Cards
import category from './controller_category';
import board from './controller_board';
import list from './controller_list';
import card from './controller_card';

export default { category, board, list, card }
