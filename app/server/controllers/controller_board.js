import { Board } from '../database';

const board = {
    get: function(request, response) {
        console.log('board.get was called')
    }, 
    post: function(request, response) {
        console.log('board.post was called')
    },
};

export default board;