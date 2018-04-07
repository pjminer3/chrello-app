import { Card } from '../database';

const card = {
    get: function(request, response) {
        console.log('card.get was called');
        const { params: { listId } } = request;

        Card.findAll({
            where: { listId },
            attributes: ['cardContent', 'id']
        })
          .then(cards => {
              response.json(cards);
          })
          .catch(err => {
              console.log('There was an error in retreiving cards: ', err);
              response.sendStatus(500);
          });
    }, 

    post: function(request, response) {
        console.log('card.post was called');
        const { params: { listId, cardContent} } = request;

        Card.create({ listId, cardContent })
          .then(() => {
              response.sendStatus(201);
          })
          .catch(err => {
              console.log('There was an error in creating the card: ', card);
              response.sendStatus(500);
          });
    },

    delete: function(request, response) {
        console.log('card.delete was called');
        const { params: { cardId } } = request;

        Card.destroy({
            where: { id: cardId },
        })
          .then(() => {
              response.sendStatus(200);
          })
          .catch(err => {
              response.sendStatus(500);
          });
    }
};

export default card;