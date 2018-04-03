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
        console.log(request.params);

        Category.create({
            categoryName: request.params.categoryName,
        })
          .then((category) => {
              console.log('Successfully added category');
              response.sendStatus(201);
          })
          .catch((err) => {
              console.log('Error in creating new Category: ', err);
          });
    },
};

export default category;