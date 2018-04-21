import { Card } from '../database';

const card = {
    get: function(request, response) {
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
              return Card.findAll({
                  where: { listId },
                  attributes: ['cardContent', 'id'],
              });
          })
          .then( cards => {
              response.json(cards);
          })
          .catch(err => {
              console.log('There was an error in creating the card: ', err);
              response.sendStatus(500);
          });
    },

    delete: function(request, response) {
        console.log('card.delete was called');
        const { params: { cardId, listId } } = request;

        Card.destroy({
            where: { id: cardId },
        })
            .then(() => {
                return Card.findAll({
                    where: { listId },
                    attributes: ['cardContent', 'id'],
                });
            })
            .then( cards => {
                response.json(cards);
            })
            .catch(err => {
                console.log('There was an error in deleting the card: ', err);
                response.sendStatus(500);
            });
    }
};

export default card;