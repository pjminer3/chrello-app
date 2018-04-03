import { Card } from '../database';

const card = {
    get: function(request, response) {
        console.log('card.get was called');
        const { listId } = request.params;

        Card.findAll({
            where: { listId },
            attributes: ['cardContent', 'id']
        })
          .then(cards => {
              response.json(cards);
          })
          .catch(err => {
              console.log('There was an error in retreiving cards: ', err);
          });
    }, 
    post: function(request, response) {
        console.log('card.post was called');
    },
};

export default card;