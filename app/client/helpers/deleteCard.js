import axios from 'axios';

export default (cardId) => {
    axios.delete(`/api/card/${cardId}`)
      .then(() => {
          console.log('Card successfully deleted');
      })
      .catch(err => {
          console.log('Error in deleting card: ', err);
      })
}