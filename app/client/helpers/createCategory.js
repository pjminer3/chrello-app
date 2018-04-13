import axios from 'axios';
import { store } from '../../index';
import { FETCH_CATEGORIES_SUCCESS, fetchCategoriesSuccess } from '../actions';

export default (categoryName) => {
    axios.post(`/api/category/${categoryName}`)
      .then((response) => {
          console.log(response.data) // an array of all category objects: { categoryName, id }
          store.dispatch(fetchCategoriesSuccess(response.data));
      })
      .catch(err => {
          console.log(err);
      });
};

