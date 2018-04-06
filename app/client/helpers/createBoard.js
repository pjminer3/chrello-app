import axios from 'axios';

export default (categoryId, boardName) => {
    axios.post(`/api/board/${categoryId}/${boardName}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
};