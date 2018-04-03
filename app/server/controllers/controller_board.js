import { Board } from '../database';

const board = {
    get: function(request, response) {
        console.log('board.get was called')
        console.log(request.params); // {categoryId: *id*};
        const { categoryId } = request.params;

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
          });
    }, 
    post: function(request, response) {
        console.log('board.post was called')
        console.log(request.params); // {categoryId: *id*, boardName: *name*}
        const { categoryId } = request.params;
        let { boardName } = request.params;

        Board.create({ boardName, categoryId })
          .then(() => {
              console.log('Board successfully created');
              response.sendStatus(201);
          })
          .catch((err) => {
              console.log('There was an error in creating the new board: ', err);
          });
    },
};

export default board;