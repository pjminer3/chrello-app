import controller from './controllers';
const router = require('express').Router();

// connect controller methods to their corresponding routes
// remember each will have a preface of '/api' in their route
router.get('/category', controller.category.get);
router.post('/category/:categoryName', controller.category.post);

router.get('/board/:categoryId', controller.board.get);
router.post('/board/:categoryName/:boardName', controller.board.post);

router.get('/list/:boardName', controller.list.get);
router.post('/list/:boardName/:listName', controller.list.post);

router.get('/card/:listName', controller.card.get);
router.post('/card/:listName/:cardContent', controller.card.post);

export default router;
