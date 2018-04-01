import controller from './controllers';
const router = require('express').Router();

// connect controller methods to their corresponding routes
router.get('/category', controller.category.get);
router.post('/category', controller.category.post);

router.get('/board', controller.category.get);
router.post('/board', controller.category.post);

router.get('/list', controller.category.get);
router.post('/list', controller.category.post);

router.get('/card', controller.category.get);
router.post('/card', controller.category.post);

export default router;
