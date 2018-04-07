import axios from 'axios';

export default (listId, cardContent) => {
    axios.post(`/api/card/${listId}/${cardContent}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
};