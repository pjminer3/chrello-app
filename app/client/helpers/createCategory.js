import axios from 'axios';

export default (categoryName) => {
    axios.post(`/api/category/${categoryName}`)
      .then((response) => {
          console.log(response)
      })
      .catch(err => {
          console.log(err);
      });
};