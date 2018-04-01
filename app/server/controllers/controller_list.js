import { List } from '../database';

const list = {
    get: function(request, response) {
        console.log('list.get was called')
    }, 
    post: function(request, response) {
        console.log('list.post was called')
    },
};

export default list;