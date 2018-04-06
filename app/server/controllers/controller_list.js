import { List } from '../database';

const list = {
    get: function(request, response) {
        console.log('list.get was called');
        console.log(request.params); 
        const { params: {boardId } } = request;

        List.findAll({
            where: { boardId },
            attributes: ['listName', 'id']
        })
          .then(lists => {
              response.json(lists);
          })
          .catch(err => {
              console.log('There was an error in getting lists: ', err);
              response.sendStatus(500);
          });
    }, 
    post: function(request, response) {
        console.log('list.post was called');
        console.log(request.params); // { boardId, listName };
        const { params: {boardId, listName } } = request;

        List.create({ boardId, listName })
          .then(() => {
              response.sendStatus(201);
          })
          .catch(err => {
            console.log('There was an error in creating the new list: ', err);
            response.sendStatus(500);
          });
    },
};

export default list;