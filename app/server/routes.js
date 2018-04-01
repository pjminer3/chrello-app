import controller from './controllers';
const router = require('express').Router();

// connect controller methods to their corresponding routes
router.get('/category', controller.category.get);
router.get('/category', controller.category.post);

router.get('/board', controller.category.get);
router.get('/board', controller.category.post);

router.get('/list', controller.category.get);
router.get('/list', controller.category.post);

router.get('/card', controller.category.get);
router.get('/card', controller.category.post);

export default router;
