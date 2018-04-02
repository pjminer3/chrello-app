// Category model
import { db } from '../database';

const categories = {
    get: function(callback) {
        console.log('we are inside models.categories');
        const queryString = 'db.'
        callback();
    },
    post: function(callback) {},
}

export default categories;