import db from '../database';

// Controller functions to handle get/post requests for Categories, Boards, Lists, and Cards

const category = {
    get: function(request, response) {
        console.log('category.get was called')
    }, 
    post: function(request, response) {
        console.log('category.post was called')
    },
};

const board = {
    get: function(request, response) {
        console.log('board.get was called')
    }, 
    post: function(request, response) {
        console.log('board.post was called')
    },
};

const list = {
    get: function(request, response) {
        console.log('list.get was called')
    }, 
    post: function(request, response) {
        console.log('list.post was called')
    },
};

const card = {
    get: function(request, response) {
        console.log('card.get was called');
    }, 
    post: function(request, response) {
        console.log('card.post was called');
    },
};

export default { category, board, list, card }
