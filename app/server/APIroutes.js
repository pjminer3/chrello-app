import controller from './controllers';
const router = require('express').Router();

// connect controller methods to their corresponding routes
// remember each will have a preface of '/api' in their route
router.get('/category', controller.category.get);
router.post('/category/:categoryName', controller.category.post);

router.get('/board/:categoryId', controller.board.get);
router.post('/board/:categoryId/:boardName', controller.board.post);

router.get('/list/:boardId', controller.list.get);
router.post('/list/:boardId/:listName', controller.list.post);

router.get('/card/:listId', controller.card.get);
router.post('/card/:listId/:cardContent', controller.card.post);
router.delete('/card/:cardId', controller.card.delete);

export default router;
