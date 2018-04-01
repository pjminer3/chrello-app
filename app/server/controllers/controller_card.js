import { Card } from '../database';

const card = {
    get: function(request, response) {
        console.log('card.get was called');
    }, 
    post: function(request, response) {
        console.log('card.post was called');
    },
};

export default card;