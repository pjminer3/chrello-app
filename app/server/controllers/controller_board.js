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
    },
};

export default board;