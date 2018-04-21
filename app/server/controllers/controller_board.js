import { Board } from '../database';

const board = {
    get: function(request, response) {
        console.log('board.get was called')
        const categoryId = request.params.categoryId;

        console.log('INSIDE BOARD CONTROLLER: ', categoryId);

        // find all the boards for the specified category
        Board.findAll({
            attributes: ['boardName', 'id'],
            where: {
                categoryId
            }
        })
          .then((boards) => {
            response.json(boards);
          })
          .catch((err) => {
              console.log('There was an error getting boards: ', err);
              response.sendStatus(500);
          });
    },

    post: function(request, response) {
        console.log('board.post was called')
        const { params: { categoryId } } = request;
        let { params: { boardName } } = request;

        Board.create({ boardName, categoryId })
          .then(() => {
              console.log('Board successfully created');
              response.sendStatus(201);
          })
          .catch((err) => {
              console.log('There was an error in creating the new board: ', err);
              response.sendStatus(500);
          });
    },
};

export default board;