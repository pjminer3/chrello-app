import { Category } from '../database';

const category = {
    get: function(request, response) {
        console.log('category.get was called');
        
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
        const { params: {categoryName } } = request;

        Category.create( { categoryName } )
          .then((category) => {
              console.log('Successfully added category');
              // Get request to DB to send back all Categories
            Category.findAll({
                attributes: ['categoryName', 'id']
            })
              .then(function(categories) {
                  response.json(categories);
              })
              .catch(err => {
                  console.log('There was an error in getting category names after creating a new one: ', err);
                  response.sendStatus(500);
              });
          })
          .catch((err) => {
              console.log('Error in creating new Category: ', err);
              response.sendStatus(500);
          });
    },
};

export default category;