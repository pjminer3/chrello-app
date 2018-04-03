import { List } from '../database';

const list = {
    get: function(request, response) {
        console.log('list.get was called');
        console.log(request.params); 
        const { boardId } = request.params;

        List.findAll({
            where: { boardId },
            attributes: ['listName', 'id']
        })
          .then((lists) => {
              response.json(lists);
          })
          .catch((err) => {
              console.log('There was an error in getting lists: ', err);
          });
    }, 
    post: function(request, response) {
        console.log('list.post was called')
    },
};

export default list;