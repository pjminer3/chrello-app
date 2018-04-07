import axios from 'axios';

export default (boardId, listName) => {
    axios.post(`/api/list/${boardId}/${listName}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
};