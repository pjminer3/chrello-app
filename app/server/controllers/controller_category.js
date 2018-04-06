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
          })
          .catch(err => {
              console.log('There was an error in getting category names: ', err);
              response.sendStatus(500);
          });
    }, 

    post: function(request, response) {
        console.log('category.post was called')
        console.log(request.params);
        const { params: {categoryName } } = request;

        Category.create( { categoryName } )
          .then((category) => {
              console.log('Successfully added category');
              response.sendStatus(201);
          })
          .catch((err) => {
              console.log('Error in creating new Category: ', err);
              response.sendStatus(500);
          });
    },
};

export default category;