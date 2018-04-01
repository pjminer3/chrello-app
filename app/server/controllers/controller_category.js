import { Category } from '../database';

const category = {
    get: function(request, response) {
        console.log('category.get was called');
        console.log(request.body);

        
        Category.findAll({
            attributes: ['categoryName', 'id']
        })
          .then(function(categories) {
              response.json(categories);
          });
    }, 
    post: function(request, response) {
        console.log('category.post was called')
    },
};

export default category;